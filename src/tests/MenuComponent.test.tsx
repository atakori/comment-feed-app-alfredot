import {
    cleanup,
    render,
    screen,
    waitFor,
    within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MenuComponent from '../Components/MenuComponent';

describe('MenuComponent', function () {
    afterEach(cleanup);

    it('should show menu if button is clicked', function () {
        render(<MenuComponent />);

        const menuButton = screen.getByTestId('menuButton');
        expect(screen.queryByTestId('menu')).toBeNull();

        // Act
        userEvent.click(menuButton);

        // Expect
        const menu = screen.getByTestId('menu');
        expect(menu).toBeDefined();
        expect(within(menu).getAllByTestId('menuButton')).toHaveLength(2);
        expect(within(menu).getByText(/Edit Post/)).toBeInTheDocument();
        expect(within(menu).getByText(/Delete Post/)).toBeInTheDocument();
    });

    describe('should not show menu', function () {
        it('if Edit Post button is clicked', async function () {
            render(<MenuComponent />);

            const menuButton = screen.getByTestId('menuButton');
            expect(screen.queryByTestId('menu')).toBeNull();

            // Act
            userEvent.click(menuButton);
            const menu = screen.getByTestId('menu');
            expect(menu).toBeDefined();

            userEvent.click(within(menu).getByText(/Edit Post/));

            await waitFor(() => {
                expect(screen.queryByTestId('menu')).toBeNull();
            });
        });

        it('if Delete Post button is clicked', async function () {
            render(<MenuComponent />);

            const menuButton = screen.getByTestId('menuButton');
            expect(screen.queryByTestId('menu')).toBeNull();

            // Act
            userEvent.click(menuButton);
            const menu = screen.getByTestId('menu');
            expect(menu).toBeDefined();

            userEvent.click(within(menu).getByText(/Delete Post/));

            await waitFor(() => {
                expect(screen.queryByTestId('menu')).toBeNull();
            });
        });
    });
});

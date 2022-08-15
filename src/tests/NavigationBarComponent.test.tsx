import {
    cleanup,
    render,
    screen,
    waitFor,
    within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavigationBarComponent from '../Components/NavigationBarComponent';
import '@testing-library/jest-dom';
import * as profileHooks from '../context/profileContext';
import {mockProfileContext} from './mock';


describe('NavigationBarComponent', function () {
    afterEach(cleanup);
    
    beforeEach(()=> {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );
    })

    it('should show profile menu if button is clicked', function () {
        render(<NavigationBarComponent />);

        const profileMenuButton = screen.getByTestId('profileMenuButton');
        expect(screen.queryByTestId("settingsMenu")).toBeNull();

        // Act
        userEvent.click(profileMenuButton);

        // Expect
        const settingsMenu = screen.getByTestId("settingsMenu");
        expect(settingsMenu).toBeDefined();
        expect(within(settingsMenu).getAllByTestId('settingsButton')).toHaveLength(4);
    });
    
    it('should show all nav links on menu bar by default', function () {
        render(<NavigationBarComponent />);

        // Expect
        expect(screen.getAllByTestId('webMenuPagesLinks')).toHaveLength(4);
        expect(screen.queryByTestId("mobileMenuPagesContainer")).toBeNull();
        expect(screen.queryByTestId("mobileMenuPagesLinks")).toBeNull();
    });

    describe('should not show menu', function () {
        it('if any button is clicked under menu', async function () {
            render(<NavigationBarComponent />);

            const profileMenuButton = screen.getByTestId('profileMenuButton');
            expect(screen.queryByTestId("settingsMenu")).toBeNull();

            // Act
            userEvent.click(profileMenuButton);
            const settingsMenu = screen.getByTestId('settingsMenu');
            expect(settingsMenu).toBeDefined();

            userEvent.click(within(settingsMenu).getAllByTestId('settingsButton')[0]);

            await waitFor(() => {
                expect(screen.queryByTestId('settingsMenu')).toBeNull();
            });
        });
    });
});

import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as profileHooks from '../context/profileContext';
import * as postsHooks from '../context/postsContext';
import ProfileFeedComponent from '../Components/ProfileFeedComponent';
import { mockProfileContext, mockUsePostsContext, mockUsePostsContextSeveralPosts } from './mock';

describe('ProfileFeedComponent', function () {
    afterEach(cleanup);

    it("should not render ProfileFeedComponent if there are no posts", function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );
    
        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );

        //Act
        render(<ProfileFeedComponent />);

        //Expect
        expect(screen.queryByTestId("profileFeedContainer")).toBeNull();
        expect(screen.getByText(/No Posts Yet/)).toBeInTheDocument();
    });

    it("should render profile feed with all comments", async function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );
    
        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContextSeveralPosts,
        );

        render(<ProfileFeedComponent />);
        //Act
        const parentContainer = screen.getByTestId("profileFeedContainer")
        //Expect
        expect(screen.queryByTestId("noPostsFoundComponent")).toBeNull();
        expect(within(parentContainer).getAllByTestId("postContainer")).toHaveLength(2)

        await waitFor(() => {
            expect(within(parentContainer).getAllByTestId("commentsContainer")).toHaveLength(2);

        });
    });
});

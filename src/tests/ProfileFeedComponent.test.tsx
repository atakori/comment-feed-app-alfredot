import { cleanup, render, screen, within } from '@testing-library/react';
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
        expect(screen.getByText(/Looks like there are no Posts found/)).toBeInTheDocument();
    });

    it("should render profile feed with all comments", function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );
    
        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContextSeveralPosts,
        );

        //Act
        render(<ProfileFeedComponent />);
        const parentContainer = screen.getByTestId("profileFeedContainer")

        //Expect
        expect(screen.queryByTestId("noPostsFoundComponent")).toBeNull();
        expect(within(parentContainer).getAllByTestId("postContainer")).toHaveLength(2)
        expect(within(parentContainer).getAllByTestId("comments")).toHaveLength(3);
    });
});

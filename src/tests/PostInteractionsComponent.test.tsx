import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as profileHooks from '../context/profileContext';
import * as postsHooks from '../context/postsContext';
import userEvent from '@testing-library/user-event';
import PostInteractionsComponent from '../Components/PostInteractionsComponent';
import { mockProfileContext, mockUsePostsContext } from './mock';

describe('PostInteractionsComponent', function () {
    afterEach(cleanup);

    it('should show Views and other proper text if isComment is false', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );

        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );
        render(<PostInteractionsComponent commentId={"1"} isComment={false} isLiked={false} amountOfLikes={20} amountOfComments={2}  />);
        
        // Act
        const viewsContainer = screen.getByTestId('viewsContainer');

        //Expect
        expect(viewsContainer).toBeDefined();
        expect(screen.getByText(/Comment/)).toBeInTheDocument();
    });

    it('should not show views and other proper text if isComment is true', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );

        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );
        render(<PostInteractionsComponent commentId={"1"} isComment={true} isLiked={false} amountOfLikes={20} amountOfComments={2}  />);
        
        //Expect
        expect(screen.queryByTestId('viewsContainer')).toBeNull()
        expect(screen.getByText(/Replies/)).toBeInTheDocument();
    });

    it('should show active like button and text if comment is liked by user', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );

        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );
        render(<PostInteractionsComponent commentId={"1"} isComment={false} isLiked={true} amountOfLikes={20} amountOfComments={2}  />);
        
        //Act
        const likeButton = screen.getByTestId('likeButton');
        expect(likeButton).toHaveStyle(`color: #F44900`)
    });

    it('should call the updateLikes API call when button is clicked', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );

        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );
        render(<PostInteractionsComponent commentId={"1"} isComment={false} isLiked={false} amountOfLikes={20} amountOfComments={2}  />);
        
        // Act
        const likeButton = screen.getByTestId('likeButton');
        userEvent.click(likeButton);

        //Expect
        expect(mockUsePostsContext.updateLikes).toBeCalled();
    });
});

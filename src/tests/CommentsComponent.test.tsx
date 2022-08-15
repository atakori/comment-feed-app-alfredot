import { cleanup, render, screen, within } from '@testing-library/react';
import CommentsComponent from '../Components/CommentsComponent';
import '@testing-library/jest-dom';
import { IUserProfile, IComment, PostsContextType } from '../types';
import * as profileHooks from '../context/profileContext';
import * as postsHooks from '../context/postsContext';

const mockComments: IComment[] = [
    {
        id: '1',
        parentId: null,
        message: '1st message',
        username: 'testUsername',
        dateCreated: new Date(),
        likes: [''],
    },
    {
        id: '2',
        parentId: null,
        message: '2nd message',
        username: 'testUsername',
        dateCreated: new Date(),
        likes: [],
    },
];

const mockProfileContext: IUserProfile = {
    profileUsername: 'testProfile',
    photoUrl: 'wwww.testurl.com',
};

const mockUsePostsContext: PostsContextType = {
    posts: [],
    savePost: jest.fn(),
    updateLikes: jest.fn()
};

describe('NoPostsFoundComponent', function () {
    afterEach(cleanup);

    it('should display all comments if comments are available', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );
    
        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );

        //Act
        render(<CommentsComponent comments={mockComments} />);
        const parentContainer = screen.getByTestId("commentsContainer")

        //Expect
        expect(screen.getByText(/1st message/)).toBeInTheDocument();
        expect(screen.getByText(/2nd message/)).toBeInTheDocument();
        expect(within(parentContainer).getAllByTestId('comment')).toHaveLength(2)
    });
});

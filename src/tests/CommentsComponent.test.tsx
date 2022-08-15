import { cleanup, render, screen, within } from '@testing-library/react';
import CommentsComponent from '../Components/CommentsComponent';
import '@testing-library/jest-dom';
import { IComment} from '../types';
import * as profileHooks from '../context/profileContext';
import * as postsHooks from '../context/postsContext';
import { mockProfileContext, mockUsePostsContext } from './mock';

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

describe('CreateCommentComponent', function () {
    afterEach(cleanup);

    it("should create a new comment when 'Enter' is pressed", function () {
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

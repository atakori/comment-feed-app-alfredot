import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as profileHooks from '../context/profileContext';
import * as postsHooks from '../context/postsContext';
import CreateCommentComponent from '../Components/CreateCommentComponent';
import userEvent from '@testing-library/user-event';
import { mockProfileContext, mockUsePostsContext } from './mock';

describe('CreateCommentComponent', function () {
    afterEach(cleanup);

    it('should clear out comments text field if submitted', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );

        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );

        // Act
        render(<CreateCommentComponent parentId={'1'} />);

        // Inserting Text in the InputField
        const input = screen.getByTestId('commentInputField');
        userEvent.click(input);
        userEvent.keyboard('This is a comment!!!');

        expect(input.textContent).toBe('This is a comment!!!');

        // Fires Enter Event
        fireEvent.keyDown(screen.getByTestId('commentInputField'), {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            charCode: 13,
        });

        //Expect
        expect(input).toBeEmptyDOMElement();
    });

    it('should fire the savePost API call once enter is hit', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );

        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );

        // Act
        render(<CreateCommentComponent parentId={'1'} />);

        // Inserting Text in the InputField
        const input = screen.getByTestId('commentInputField');
        userEvent.click(input);
        userEvent.keyboard('Comment Entered Here');

        fireEvent.keyDown(screen.getByTestId('commentInputField'), {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            charCode: 13,
        });

        //Expect
        expect(mockUsePostsContext.savePost).toBeCalled();
    });
});

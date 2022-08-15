import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as profileHooks from '../context/profileContext';
import * as postsHooks from '../context/postsContext';
import userEvent from '@testing-library/user-event';
import { mockProfileContext, mockUsePostsContext } from './mock';
import PostTweetComponent from '../Components/PostTweetComponent';

describe('PostTweetComponent', function () {
    afterEach(cleanup);

    it('should fire the savePost API call when button is clicked', function () {
        jest.spyOn(profileHooks, 'useUserProfileContext').mockImplementation(
            () => mockProfileContext,
        );

        jest.spyOn(postsHooks, 'usePostsContext').mockImplementation(
            () => mockUsePostsContext,
        );

        render(<PostTweetComponent />);
        // Act
        const textInput = screen.getByTestId('textInput');
        const postButton = screen.getByTestId('postButton');

        userEvent.click(textInput);
        userEvent.keyboard('This is the post information');

        expect(textInput.textContent).toBe('This is the post information');

        // Fires Enter Event
        fireEvent.click(postButton)

        // //Expect
        expect(textInput.textContent).toBe("")
        expect(mockUsePostsContext.savePost).toBeCalled();
    });
});

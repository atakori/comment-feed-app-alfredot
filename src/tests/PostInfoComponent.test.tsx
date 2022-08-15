import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostInfoComponent from '../Components/PostInfoComponent';

describe('PostInfoComponent', function () {
    afterEach(cleanup);

    it('should have larger formatting if post is not a comment', function () {
        // Act
        render(
            <PostInfoComponent
                username={'testUser'}
                dateCreated={new Date()}
                message='This is a Post Message'
                isComment={false}
            />,
        );

        const infoContainer = screen.getByTestId('postInfoContainer');
        const avatar = screen.getByTestId('avatar');
        const informationHeader = screen.getByTestId('informationHeader');

        //Expect
        expect(infoContainer).toHaveStyle(`border-top: none; padding: none;`);
        expect(avatar).toHaveStyle(`width: 60px; height: 60px`);
        expect(informationHeader).toHaveStyle(`font-size: 18px; line-height: 24px`,);
    });

    it('should have smaller formatting if post is a comment', function () {
        // Act
        render(
            <PostInfoComponent
                username={'testUser'}
                dateCreated={new Date()}
                message='This is a Post Message'
                isComment={true}
            />
        );

        const infoContainer = screen.getByTestId('postInfoContainer');
        const avatar = screen.getByTestId('avatar');
        const informationHeader = screen.getByTestId('informationHeader');

        //Expect
        expect(infoContainer).toHaveStyle(`border-top: 1px solid #CED7E7; padding: 16px 0px;`,);
        expect(avatar).toHaveStyle(`width: 40px; height: 40px`);
        expect(informationHeader).toHaveStyle(`font-size: 16px; line-height: 22px`,);
    });
});

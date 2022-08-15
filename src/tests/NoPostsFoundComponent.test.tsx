import {cleanup,  render, screen} from '@testing-library/react';
import NoPostsFoundComponent from "../Components/NoPostsFoundComponent";
import '@testing-library/jest-dom'

describe('NoPostsFoundComponent', function () {
    afterEach(cleanup);

   it('should display Post Not Found Message', function () {
       render(<NoPostsFoundComponent/>)
       expect(screen.getByText(/Looks like there are no Posts found/)).toBeInTheDocument();
   });
});
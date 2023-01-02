import { getByTestId, render, screen } from '@testing-library/react';
import LoginSlice from './loginSlice';

test('renders learn react link', () => {
  render(<LoginSlice />);
  const linkElement = screen.getByText(/login/);
  expect(linkElement).toBeInTheDocument();
});

describe('unit test', () => {
    it("test", () => {
        const (getByTestId) = reder(<LoginSlice/>);
        const buttonClick = getByTestId("test-button");
        expect (buttonClick) = toHaveTextContent("CLICK ME");
    });
});

// const { loginSlice } = require("./loginSlice");

// describe('loginSlice',() => {
//     const context = {
//         formValues: () => null,
//     };

//     it('should throw an error if the user is missing an email', () => {
//             // eslint-disable-next-line jest/valid-expect
//             expect(loginSlice(context, {
//                 password: "123456",
//             })
//         ).rejects.toThrow('"email" is required');
//     });

//     it('should throw an error if the user is missing an password', () => {
//         // eslint-disable-next-line jest/valid-expect
//         expect(loginSlice(context, {
//             email: 'testing@gmail.com',
//         })
//     ).rejects.toThrow('zzz');
// });
// });
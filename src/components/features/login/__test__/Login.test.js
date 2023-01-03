import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LoginPages from '../../../../pages/LoginPages';
import { store } from '../../../../app/store';
const MockLogin = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LoginPages />
            </BrowserRouter>
        </Provider>
    );
};

    describe('Login Testing', () => {
    it('should render input email element', () => {
        render(<MockLogin />);
        const inputElement = screen.getByPlaceholderText(/Email/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should render input password element', () => {
        render(<MockLogin />);
        const inputElement = screen.getByPlaceholderText(/Password/i);
        expect(inputElement).toBeInTheDocument();
    });
});
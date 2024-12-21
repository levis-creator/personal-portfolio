import { render, screen } from '@testing-library/react';
import Test from '../../components/Test';

describe('Test', () => {
    it('should render hello with the name when the name is provided', () => {
        render(<Test name='John' />)
        const heading = screen.getByRole('heading', { name: /hello john/i });
        expect(heading).toBeInTheDocument();
    })
    it('should render button when name not present', () => {
        render(<Test/>)
        const buttonElement= screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument();
    })
})
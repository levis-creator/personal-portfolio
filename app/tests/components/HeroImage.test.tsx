import { render, screen } from '@testing-library/react';
import HeroImage from '~/components/HeroImage';

describe('HeroImage Component - Image', () => {
  const mockImage = 'path/to/mock-image.jpg';
  const mockExperience = 5;

  it('renders the image with the correct src and alt attributes', () => {
    render(<HeroImage image={mockImage} experience={mockExperience} />);

    // Check if the image is rendered with the correct src
    const image = screen.getByTestId('hero-image');
    expect(image).toHaveAttribute('src', mockImage);

    // Check if the alt attribute is correctly set (in this case, it is empty)
    expect(image).toHaveAttribute('alt', '');
  });

  it('applies the correct CSS classes to the image', () => {
    render(<HeroImage image={mockImage} experience={mockExperience} />);

    // Check the image container has the correct class
    const image = screen.getByTestId('hero-image');
    expect(image).toHaveClass('object-cover w-full min-h-full');
  });
});

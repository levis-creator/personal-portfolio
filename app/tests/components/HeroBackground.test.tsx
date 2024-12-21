import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HeroBackground from '~/components/HeroBackground';
import * as useScreenWidthModule from '~/hooks/useScreenWidth'; // Import the custom hook

describe('HeroBackground Component', () => {
  // Test for small screens
  it('renders the mobile background image for screen widths less than 640px', () => {
    const useScreenWidthSpy = vi.spyOn(useScreenWidthModule, 'default').mockReturnValue(500); // Mock small screen width

    render(<HeroBackground />);

    const image = screen.getByTestId('background'); // Use data-testId
    expect(image).toHaveAttribute('src', expect.stringContaining('bg-mobile.svg'));

    useScreenWidthSpy.mockRestore();
  });

  // Test for medium screens
  it('renders the medium background image for screen widths between 640px and 768px', () => {
    const useScreenWidthSpy = vi.spyOn(useScreenWidthModule, 'default').mockReturnValue(750); // Mock medium screen width

    render(<HeroBackground />);

    const image = screen.getByTestId('background');
    expect(image).toHaveAttribute('src', expect.stringContaining('bg-laptops.svg'));

    useScreenWidthSpy.mockRestore();
  });

  // Test for large screens
  it('renders the large background image for screen widths greater than 768px', () => {
    const useScreenWidthSpy = vi.spyOn(useScreenWidthModule, 'default').mockReturnValue(1200); // Mock large screen width

    render(<HeroBackground />);

    const image = screen.getByTestId('background');
    expect(image).toHaveAttribute('src', expect.stringContaining('bg-large.svg'));

    useScreenWidthSpy.mockRestore();
  });

  // Test for default large background (SSR scenario)
  it('renders the large background image by default when screen width is undefined', () => {
    const useScreenWidthSpy = vi.spyOn(useScreenWidthModule, 'default').mockReturnValue(undefined); // Mock undefined screen width

    render(<HeroBackground />);

    const image = screen.getByTestId('background');
    expect(image).toHaveAttribute('src', expect.stringContaining('bg-large.svg'));

    useScreenWidthSpy.mockRestore();
  });
});

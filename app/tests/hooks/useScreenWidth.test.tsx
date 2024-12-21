import { act, renderHook } from "@testing-library/react";
import useScreenWidth from "~/hooks/useScreenWidth";

describe('useScreenWidth Hook', () => {
  it('returns the initial window width on mount', () => {
    // Mock the window.innerWidth property
    const mockInnerWidth = 1024;
    global.innerWidth = mockInnerWidth;

    // Render the hook
    const { result } = renderHook(() => useScreenWidth());

    // Assert the initial screen width
    expect(result.current).toBe(mockInnerWidth);
  });

  it('updates the screen width on window resize', () => {
    // Mock the window.innerWidth property
    const initialWidth = 1024;
    const updatedWidth = 768;
    global.innerWidth = initialWidth;

    // Render the hook
    const { result } = renderHook(() => useScreenWidth());

    // Assert the initial screen width
    expect(result.current).toBe(initialWidth);

    // Trigger a resize event
    act(() => {
      global.innerWidth = updatedWidth;
      window.dispatchEvent(new Event('resize'));
    });

    // Assert the updated screen width
    expect(result.current).toBe(updatedWidth);
  });

  it('returns undefined if window is not defined', () => {
    // Simulate a non-browser environment by deleting window.innerWidth
    const originalInnerWidth = global.innerWidth;
    // @ts-ignore
    delete global.innerWidth;

    // Render the hook
    const { result } = renderHook(() => useScreenWidth());

    // Assert that the hook returns undefined
    expect(result.current).toBeUndefined();

    // Restore the original window.innerWidth
    global.innerWidth = originalInnerWidth;
  });
});

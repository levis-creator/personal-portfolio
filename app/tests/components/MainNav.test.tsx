import { fireEvent, render, screen } from "@testing-library/react"
import MainNav from './../../components/MainNav';
import { MemoryRouter } from "react-router";

describe('NavBar', () => {
    vi.mock('react-feather', () => ({
        Menu: () => <div>Menu Icon</div>,
        X: () => <div>Close Icon</div>,
      }));
      
    // Mock navlist
    vi.mock('~/lib/navlist', () => ({
        navlist: [
            { path: '/home', nav_item: 'Home' },
            { path: '/about', nav_item: 'About' },
            { path: '/contact', nav_item: 'Contact' },
        ],
    }));


    it('Should render navigation items on large screen', () => {
        render(
            <MemoryRouter>
                <MainNav />
            </MemoryRouter>
        )
        const listEl = screen.getByRole("list")
        const linkItem = screen.getAllByRole('link')

        expect(listEl).toBeInTheDocument()
        expect(linkItem).toHaveLength(3)
        expect(linkItem[0]).toHaveTextContent('Home')
        expect(linkItem[1]).toHaveTextContent('About')
        expect(linkItem[2]).toHaveTextContent('Contact')
    })
    it('should toggle the button for dropdown on click', () => {
        render(
            <MemoryRouter>
                <MainNav />
            </MemoryRouter>
        )
        const menuButton = screen.getByRole('button')
        expect(menuButton).toBeInTheDocument()
        expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument()
        // when button clicked
        fireEvent.click(menuButton)
        expect(screen.getAllByText("Close Icon")).not.toHaveLength(0)
        expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument()
    })
})
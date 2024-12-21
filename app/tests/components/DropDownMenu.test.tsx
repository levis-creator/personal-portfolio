import { fireEvent, render, screen } from "@testing-library/react";
import DropDownMenu from "~/components/DropDownMenu";
import { NavItem } from "~/lib/types";

describe('Dropdown Menu', () => {
    const navitems: NavItem[] = [
        { nav_item: 'Home', path: '/' },
        { nav_item: 'About', path: '/about' },
        { nav_item: 'Contact', path: '/contact' },
      ];

      vi.mock('react-feather', () => ({
        X: () => <div>Close Icon</div>,
      }));

      it('Should render items correctly', () => {
        render(<DropDownMenu handleClose={vi.fn()} navitems={navitems}/>)
        // checking if each item has been rendered
        navitems.forEach(item => {
            expect(screen.getByText(item.nav_item)).toBeInTheDocument();
          });
      })
      it('Should close when close button is clicked', () => {
        const handleClose=vi.fn()
        render(<DropDownMenu handleClose={handleClose} navitems={navitems}/>)
        const closeBtn= screen.getByRole("button")
        fireEvent.click(closeBtn)
        expect(handleClose).toHaveBeenCalledOnce()
      })


})
import { motion } from "motion/react";
import { FC } from "react";
import { X } from "react-feather";
import { NavItem } from "~/lib/types";
interface DropDownMenuProps {
  handleClose: () => void;
  navitems: NavItem[];
}
const DropDownMenu: FC<DropDownMenuProps> = ({ handleClose, navitems = [] }) => {
  const list = {
    hidden: {
      x: 0,
      opacity: 1,
      scale: 0,
      transform: "translate(100px, -100px)",
      transition: {
        when: "afterChildren",
      },
    },
    visible: { x: -100, opacity: 1, scale: 1, transform: "translate(0px, 0px)", transition: {
      when: "beforeChildren",
      staggerChildren: 0.3, // Stagger children by .3 seconds
    },},
    exit: { opacity: 0, scales: 0, transform: "translate(100px, -100px)" }
  }
  const items = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  return (
    <motion.div variants={list} initial="hidden" exit="exit" whileInView="visible" className="fixed top-0 right-0 left-0 bottom-0 bg-blue-800 text-white z-50">
      <div className="flex py-8 px-4 justify-end">
        <motion.button
          onClick={handleClose}
          initial={{
            opacity: 0,
            scale: 0
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileTap={{
            scale: 0,
            opacity: 0
          }}
          className="rounded-full bg-white text-gray-800 p-2">
          <X height={30} width={30} />
        </motion.button>
      </div>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="flex flex-col mx-20 items-end gap-4 ">
        {
          navitems.map((item, i) => (
            <motion.li variants={items} className="block w-full text-right py-3 px-4 rounded-md cursor-pointer" key={i}>
              {item.nav_item}
            </motion.li>
          ))
        }
      </motion.ul>

    </motion.div>
  )
}

export default DropDownMenu
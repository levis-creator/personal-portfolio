import { motion } from "motion/react"

const HeroImage = ({ image, experience}: {
  image: string
  experience:number;
}) => {
  return (
    <div className="group relative w-fit mx-auto z-0">
      <div className="w-72 h-72 rounded-xl -rotate-3 bg-pink-400 absolute top-0 right-0 left-0 bottom-0"></div>
      <motion.div
        whileInView={{ rotate: [0, -10, 0] }}
        transition={{ duration: 2,  repeat: Infinity }}
        className="bg-black absolute bottom-0 -left-6 shadow-md w-fit text-white z-10  rounded-xl px-4 py-5 ">{experience}+ Years</motion.div>
      <motion.div whileInView={{
        y: [-10, 0, 10]
      }}
        className="w-72 h-72 rounded-xl mx-auto overflow-hidden rotate-3 shadow-lg">
        <img src={image} className="object-cover w-full min-h-full" alt="" />
      </motion.div>
    </div>
  )
}

export default HeroImage
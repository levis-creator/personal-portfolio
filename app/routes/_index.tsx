import type { MetaFunction } from "@remix-run/node";
import HeroBackground from "~/components/HeroBackground";
import HeroImage from "~/components/HeroImage";
import { motion } from 'motion/react';
import { profile } from '../lib/static_data';

export const meta: MetaFunction = () => {
  return [
    { title: "Levis Nyingi" },
    { name: "description", content: profile.description },

  ];
};

export default function Index() {
  const sectionStyles = "container px-5 md:px-10 lg:px-20` mx-auto"

  return (
    <>
    <main
    >
      
      <section id="home" className={`min-h-screen relative `}>
        <HeroBackground />
        <div className={` ${sectionStyles} pt-24 lg:pt-36 md:flex md:flex-row-reverse items-center `} >
          <div className="flex-1">
            <HeroImage experience={profile.experience} image={profile.image} />
          </div>
          <div className="mt-20 text-center md:text-left flex-1">
            <h1 className="font-bold text-3xl lg:text-5xl leading-loose">
              Hello I&apos;m  <span className="font-extrabold text-pink-500">
                {profile.name}
              </span> a <span className="text-blue-600">

                {profile.career}
              </span>.
            </h1>
            <p className="mt-4">
              {profile.description}
            </p>
            <div className="mt-5">
              <motion.button 
               whileHover={{ scale:1.1}} 
               transition={{
                type: "spring",
                stiffness:400,
                damping:10
               }}
               whileTap={{ scale: 0.9 }}
              className="shadow-lg text-xl hover:bg-pink-500 bg-blue-500 text-white px-6 py-3 rounded-full">
                About Me
              </motion.button>
            </div>
          </div>
        </div>
        </section>
      </main>
    </>
  );
}


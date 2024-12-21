import mobile from '~/assets/bg-mobile.svg'
import large from '~/assets/bg-large.svg'
import medium from '~/assets/bg-laptops.svg'
import useScreenWidth from '~/hooks/useScreenWidth'
import { useEffect, useState } from 'react'

const HeroBackground = () => {
    const screenWidth = useScreenWidth();
    const [bgImage, setBgImage] = useState<string>(large); // Default to `large` for SSR
  
    useEffect(() => {
      if (screenWidth !== undefined) {
        // Dynamically update the background image based on screen width
        if (screenWidth < 640) {
          setBgImage(mobile);
        } else if (screenWidth < 768) {
          setBgImage(medium);
        } else {
          setBgImage(large);
        }
      }
    }, [screenWidth]);
    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10">
            <img data-testId='background' src={bgImage} alt="" className="w-full h-full object-cover" />
        </div>
    )
}

export default HeroBackground
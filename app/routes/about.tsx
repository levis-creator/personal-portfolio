import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link, useLoaderData } from "@remix-run/react"
import { getabout } from "~/data/data_handler"
export async function  loader() {
    return await getabout();
}
 interface AboutData {
    about: string;
    description: any;
    cv: string;
  }
const AboutPage = () => {
    const about:AboutData=useLoaderData();
    console.log(about)
  return (
    <main id="resume" className="px-8 mt-40 md:px-8 lg:px-28 ">
      <div className="flex flex-col-reverse gap-5 lg:flex-row-reverse">
        <div className="flex-1 leading-relaxed">
            <div className="text-base">

          {documentToReactComponents(about?.description)}
            </div>
          <div className="mt-8">
            <Link to={about.cv || ""}>
              <button>Download Cv</button>
            </Link>
          </div>
        </div>
        <div className="lg:relative lg:flex-1">
          <div className="mx-auto overflow-hidden shadow-2xl lg:-rotate-90 lg:h-[22em] lg:w-[25em] rounded-2xl sm:w-3/5 ">
            <img
              src="/image_of_levis.jpg"
              alt="levis nyingi"
              className="object-cover w-full h-full"
        
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
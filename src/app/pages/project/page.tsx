import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi";

const listProject = [
  {
    name: "Snap *On Progress*",
    image: "/drawable/lenovo.png",
    image2: "/drawable/xiaomig24i.png",
    description: "A social photo sharing mobile application. Basically a BeReal duplicate",
    domain: "https://github.com/jowoenn/Snap"
  },
  {
    name: "BlueJack Pharmacy",
    image: "/drawable/lenovo.png",
    image2: "/drawable/xiaomig24i.png",
    description: "Mandatory college project. A simple list view mobile application with local database",
    domain: "https://github.com/jowoenn/Bluejack-Pharmacy"
  },
  {
    name: "Foot Lockre",
    image: "/project/footlockre_1.png",
    image2: "/project/footlockre_2.png",
    description: "Another mandatory college project. A combination of multiple online shopping websites into one",
    domain: "https://github.com/jowoenn/Foot-Lockre"
  },
  {
    name: "Manchester City Mobile Fan App",
    image: "/drawable/lenovo.png",
    image2: "/drawable/xiaomig24i.png",
    description: "Just a big fan of the club. Application used to show available bookings and tickets, latest news and squad information (not official and all local)",
    domain: "https://github.com/jowoenn/Manchester-City"
  },
  {
    name: "Anpro",
    image: "/drawable/lenovo.png",
    image2: "/drawable/xiaomig24i.png",
    description: "Simple landing page for my parents company",
    domain: "https://github.com/jowoenn/Anpro"
  },
  {
    name: "Liberio",
    image: "/drawable/lenovo.png",
    image2: "/drawable/xiaomig24i.png",
    description: "An online library, capable of searching most books",
    domain: "https://github.com/jowoenn/Liberio"
  }
]


export default function Page() {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-2">
      <div className="w-full">
        <h1 className="text-2xl md:text-2xl font-bold text-left w-full">Project</h1>
        <h2 className="">some of my works</h2>
      </div>

      <div className="mt-6">
        <div className="gap-6 md:gap-8 mt-4 w-full">
          {listProject.map((item, index) => (
            <div key={index} className="mt-10 w-full flex flex-col items-start space-y-4">
              <div className="flex space-x-4">
                <Image src={item.image} alt={item.name} width={300} height={400} className="rounded-lg" />
                <Image src={item.image2} alt={item.name} width={300} height={400} className="rounded-lg" />
              </div>
              <div>
                <h3 className="font-bold text-m">{item.name}</h3>
                <p className="text-m text-gray-400">{item.description}</p>
                <div className="mt-4 flex flex-row">
                  <a href={item.domain} target="_blank" rel="noopener noreferrer" className="text-m text-white">{item.domain}</a>           
                  <FiArrowUpRight />
                </div>
              </div>    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

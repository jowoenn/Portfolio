import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi";

const listProject = [
  {
    name: "Snap *On Progress*",
    daterange: "2024 - Present",
    description: "A social photo sharing mobile application. Basically a BeReal duplicate",
    domain: "https://github.com/jowoenn/Snap"
  },
  {
    name: "Foot Lockre",
    daterange: "2023",
    image: "/project/footlockre_1.png",
    image2: "/project/footlockre_2.png",
    description: "Another mandatory college project. A combination of multiple online shopping websites into one",
    domain: "https://github.com/jowoenn/Foot-Lockre"
  },
  {
    name: "Manchester City Mobile Fan App",
    daterange: "2023",
    description: "Just a big fan of the club. Application used to show available bookings and tickets, latest news and squad information (not official and all local)",
    domain: "https://github.com/jowoenn/Manchester-City"
  },
  {
    name: "Anpro",
    daterange: "2023",
    description: "Simple landing page for my parents company",
    domain: "https://github.com/jowoenn/Anpro"
  },  
  {
    name: "Liberio",
    daterange: "2023",
    description: "An online library, capable of searching most books",
    domain: "https://github.com/jowoenn/Liberio"
  },
  {
    name: "BlueJack Pharmacy",
    daterange: "2022",
    description: "Mandatory college project. A simple list view mobile application with local database",
    domain: "https://github.com/jowoenn/Bluejack-Pharmacy"
  },
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
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={250}
                  height={350}
                  className="rounded-lg"
                />
              )}
              {item.image2 && (
                <Image
                  src={item.image2}
                  alt={item.name}
                  width={250}
                  height={350}
                  className="rounded-lg"
                />
              )}
              </div>
              <div className="w-full">
                <div className="flex justify-between items-start w-full">
                  <h3 className="font-bold text-m">{item.name}</h3>
                  {item.daterange && (
                    <span className="text-sm text-gray-500 text-right ml-4 whitespace-nowrap">
                      {item.daterange}
                    </span>
                  )}
                </div>
                <p className="text-m text-gray-400">{item.description}</p>
                <div className="mt-4 flex flex-row">
                  <a href={item.domain} target="_blank" rel="noopener noreferrer" className="text-m">{item.domain}</a>           
                  <FiArrowUpRight />
                </div>
              </div>
              <hr className="w-full border-gray-700"/>    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

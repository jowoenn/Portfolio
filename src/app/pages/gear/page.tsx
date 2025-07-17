import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const deskSetup = [
  {
    name: "Lenovo Ideapad Gaming 3",
    description: "M3 Max, 48GB RAM, 1TB SSD",
    image: "/drawable/lenovo.png",
    link: "https://tk.tokopedia.com/ZSB9YQ4UM/",
  },
  {
    name: "Xiaomi Mi Monitor 24\" G24i",
    description: "M3 Max, 48GB RAM, 1TB SSD",
    image: "/drawable/xiaomig24i.png",
    link: "https://tk.tokopedia.com/ZSB9YTGD1/",
  },
  {
    name: "Logitech G Pro Superlight",
    description: "27\" 240Hz Gaming Monitor",
    image: "/drawable/gprosuperlight.png",
    link: "https://tk.tokopedia.com/ZSB92FsWw/",
  },
  {
    name: "IKEA SIGFINN Monitor Stand",
    description: "IKEA",
    image: "/drawable/sigfinn.png",
    link: "https://www.ikea.co.id/en/products/complementary-work-items/desk-accessories/sigfinn-art-90487902?srsltid=AfmBOoqCHTAxPhmPygB87t9dtW8BUBVWAoglsowVzQ4SnDHmAh0cFrf0",
  },
  {
    name: "Oxihome FM7217",
    description: "Ergonomic Office Chair",
    image: "/drawable/oxihom.png",
    link: "https://tk.tokopedia.com/ZSB92FsWw/",
  },
  {
    name: "RK 68 Blue Switch Keyboard",
    description: "Royal Kludge",
    image: "/drawable/rk68.png",
    link: "https://tk.tokopedia.com/ZSB9YA2Ky/",
  },
  {
    name: "Sennheiser CX 80S Headset",
    description: "Sennheiser",
    image: "/drawable/sennheiser.png",
    link: "https://tk.tokopedia.com/ZSB9Yq2xq/",
  },
];

const guitarSetup = [
  {
    name: "SQOE SEST600",
    description: "Electric Guitar",
    image: "/drawable/sqoe.png",
    link: "https://nafiriguitar.com/products/sqoe-sest600-hss-roasted-maple-series-in-surf-green?srsltid=AfmBOoqiMGpntpZaRhOMaI5D7PJT5SjpVZRHw5SWM0DQKXSbUN9U4Urk",
  },
  {
    name: "Yamaha APX 600",
    description: "Acoustic Electric Guitar",
    image: "/drawable/yamaha.png",
    link: "https://nuansamusik.com/products/yamaha-gitar-akustik-elektrik-apx600?srsltid=AfmBOopLVo_97BR1HKli8bwE3DHMUVzSN9TCbKmE9TYG79fVR46zjg7N",
  },
  {
    name: "Behringer UMC 22 Soundcard",
    description: "Audio Interface",
    image: "/drawable/behringer.png",
    link: "https://tk.tokopedia.com/ZSB9Y3J1G/",
  },
  {
    name: "Fender Guitar Strap",
    description: "-",
    image: "/drawable/fender.png",
    link: "https://www.sweelee.co.id/collections/strap-gitar",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-2">
      <div>
        <h1 className="text-2xl font-bold">Gear</h1>
        <h2>what i use.</h2>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Desk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 w-full">
          {deskSetup.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 w-full">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
              <FiArrowUpRight />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Guitar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 w-full">
          {guitarSetup.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 w-full">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
              <FiArrowUpRight />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

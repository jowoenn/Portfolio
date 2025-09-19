import ImageCarousel from "../../components/ImageCarousel";

export default function Page() {
  const timelineData = [
    {
      title: "PT Adicipta Teknologi Inovasi",
      subtitle: "Mobile Developer",
      date: "2025 - Now",
      description: "full time worker",
      color: "bg-blue-500",
    },
    {
      title: "PT Adicipta Teknologi Inovasi",
      subtitle: "Support Developer Intern",
      date: "2024 - 2025",
      description: "first internship",
      color: "bg-green-500",
    },
    {
      title: "Universitas Bina Nusantara",
      subtitle: "Mobile App and Technology",
      date: "2021 - 2025",
      description: "graduated and free",
      color: "bg-yellow-500",
    },
    {
      title: "SMA Sedes Sapientiae Bedono",
      subtitle: "Science Major",
      date: "2018 - 2021",
      description: "perantauan era",
      color: "bg-red-500",
    },
  ];

  const hobbiesData = [
    {
      title: "Guitar",
      description: "a rock and metal guitarist",
      stats: "3 guitars owned",
      color: "text-blue-500",
    },
    {
      title: "Crypto Enthusiast",
      description: "doing whatever chatgpt says",
      stats: "-$10,000 profit",
      color: "text-green-500",
    },
    {
      title: "Games",
      description: "hardstuck diamond on valorant",
      stats: "1000 hours",
      color: "text-yellow-500",
    },
    {
      title: "Running",
      description: "just started yesterday",
      stats: "5km",
      color: "text-red-500",
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-2">
      <div>
        <h1 className="text-2xl font-bold">About</h1>
        <h2>get to know me</h2>
      </div>

      <div className="mb-5 w-full flex justify-center">
        <ImageCarousel
          images={[
            { src: "/drawable/jowoen.jpg", alt: "Yogyakarta -2023" },
            { src: "/drawable/lari.jpeg", alt: "Tangerang -2025" },
            { src: "/drawable/andong.jpg", alt: "Magelang -2020" },
            { src: "/drawable/olisykes.jpeg", alt: "Jakarta -2024" },
            { src: "/drawable/botak.jpeg", alt: "Bedono -2020" },
          ]}
          width={300}
          height={400}
          visibleCount={3}
        />
      </div>

      <section className="space-y-1 rounded-xl overflow-hidden cursor-default py-6 mt-5 w-full">
        <div className="flex flex-col md:flex-row md:space-x-10 w-full">
          <h1 className="text-l font-bold mb-4 md:mb-0">Timeline</h1>
          <div className="relative border-l border-gray-700 flex-1">
            {timelineData.map((item, index) => (
              <div key={index} className="mb-10 ml-6">
                <span className={`absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full ${item.color}`}></span>
                <div className="flex w-full justify-between">
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="italic text-gray-400">{item.subtitle}</p>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      <li>{item.description}</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 w-full">
        <div className="flex flex-col md:flex-row md:space-x-10 w-full">
          <h1 className="text-l font-bold mb-4 md:mb-0">Hobbies</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 w-full">
            {hobbiesData.map((hobby, index) => (
              <div key={index}>
                <h3 className="font-bold">{hobby.title}</h3>
                <p className="text-gray-400">{hobby.description}</p>
                <p className={hobby.color}>{hobby.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

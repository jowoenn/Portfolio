import { FiMail, FiInstagram, FiLinkedin, FiFileText } from 'react-icons/fi';
import { FaDiscord, FaFileAlt } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-2">
      <div className="w-full">
        <h1 className="text-2xl md:text-2xl font-bold text-left w-full">Contact</h1>
        <h2 className="">let's connect</h2>
        <p className="text-gray-400 text-left mt-6 mb-6">Connect with me through any of these platforms.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <a href="mailto:jowoen@gmail.com" className="flex items-start gap-3 border border-gray-700 rounded-xl p-4 bg-[#181818] hover:bg-[#232323] transition shadow group">
          <FiMail className="w-6 h-6 mt-1 text-gray-400 group-hover:text-white" />
          <div>
            <div className="font-bold text-white">Email</div>
            <div className="text-gray-400 text-sm">jonathanwoen@gmail.com</div>
          </div>
        </a>
        <a href="https://instagram.com/jowoen" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 border border-gray-700 rounded-xl p-4 bg-[#181818] hover:bg-[#232323] transition shadow group">
          <FiInstagram className="w-6 h-6 mt-1 text-gray-400 group-hover:text-white" />
          <div>
            <div className="font-bold text-white">Instagram</div>
            <div className="text-gray-400 text-sm">@jowoen</div>
          </div>
        </a>
        <a href="https://linkedin.com/in/jowoen" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 border border-gray-700 rounded-xl p-4 bg-[#181818] hover:bg-[#232323] transition shadow group">
          <FiLinkedin className="w-6 h-6 mt-1 text-gray-400 group-hover:text-white" />
          <div>
            <div className="font-bold text-white">LinkedIn</div>
            <div className="text-gray-400 text-sm">in/jowoen</div>
          </div>
        </a>
        <a href="https://discord.com/users/jowoen" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 border border-gray-700 rounded-xl p-4 bg-[#181818] hover:bg-[#232323] transition shadow group">
          <FaDiscord className="w-6 h-6 mt-1 text-gray-400 group-hover:text-white" />
          <div>
            <div className="font-bold text-white">Discord</div>
            <div className="text-gray-400 text-sm">jowoen</div>
          </div>
        </a>
      </div>
      <div className="w-full mt-10">
        <p className="text-gray-400 text-left mt-6 mb-6">Or look through my CV and portfolio.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <a href="/files/CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 border border-gray-700 rounded-xl p-4 bg-[#181818] hover:bg-[#232323] transition shadow group">
          <FiFileText className="w-6 h-6 mt-1 text-gray-400 group-hover:text-white" />
          <div>
            <div className="font-bold text-white">CV</div>
            <div className="text-gray-400 text-sm">Download</div>
          </div>
        </a>
        <a href="/files/PORTFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 border border-gray-700 rounded-xl p-4 bg-[#181818] hover:bg-[#232323] transition shadow group">
          <FaFileAlt className="w-6 h-6 mt-1 text-gray-400 group-hover:text-white" />
          <div>
            <div className="font-bold text-white">Portfolio</div>
            <div className="text-gray-400 text-sm">Download</div>
          </div>
        </a>
      </div>
    </div>
  );
}
  
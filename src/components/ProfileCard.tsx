import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="w-full max-w-xs bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
      {/* Avatar Section */}
      
      <div className="w-24 h-24 rounded-full mb-4 overflow-hidden border-2 border-blue-400 shadow-lg flex items-center justify-center bg-gray-800">
      
        {/* The 'src' attribute now points to your new image */}
        <img 
          src="/images/Hema.jpeg" 
          alt="Hema"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      {/* Profile Info */}
      <h2 className="text-2xl font-bold text-white">Hema</h2>
      <p className="text-sm text-gray-400 mb-4">Digital Artist & Creator</p>

      <hr className="w-full border-gray-700 mb-4" />
      
      {/* Social Links */}
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Twitter size={20} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Facebook size={20} />
        </a>
      </div>
    </div>
  );
}

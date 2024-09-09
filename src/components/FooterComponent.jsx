import React from 'react';
import { FaYoutubeSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 w-full"> {/* Changed bg-white to bg-black and text-black to text-white */}
      <div className="max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3 gap-8 min-h-[200px]">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#0362fc]">Legisiv</h1> {/* Kept the blue color for the logo */}
          <p className="py-4">
            Dedicated to making policy information accessible.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaInstagram size={30} className="text-white" /> {/* Added text-white class */}
            <FaYoutubeSquare size={30} className="text-white" /> {/* Added text-white class */}
            <FaLinkedin size={30} className="text-white" /> {/* Added text-white class */}
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-white">Support</h6> {/* Changed text-black to text-white */}
            <ul>
              <li className="py-2 text-sm">Pricing</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-white">Company</h6> {/* Changed text-black to text-white */}
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Contact</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-white">Legal</h6> {/* Changed text-black to text-white */}
            <ul>
              <li className="py-2 text-sm">Privacy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
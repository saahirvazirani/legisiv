import React from 'react';
import { FaYoutubeSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white text-black py-16 w-full"> {/* Ensure full width with w-full */}
      <div className="max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3 gap-8 min-h-[200px]"> {/* Add min-h-[200px] for minimum height */}
        <div>
          <h1 className="w-full text-3xl font-bold text-[#0362fc]">Legisiv</h1>
          <p className="py-4">
            Dedicated to making policy information accessible.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaInstagram size={30} />
            <FaYoutubeSquare size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-black">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Contact</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Legal</h6>
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

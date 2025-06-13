import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#F6F9FC] text-gray-500/80 pt-4 px-4 md:px-10 lg:px-16 xl:px-20">
      <div className="flex flex-wrap justify-between gap-4 md:gap-3">
        {/* Logo & Description */}
        <div className="max-w-72">
          <div className="flex items-center gap-2 mb-1">
            <img
              src={assets.hotelico}
              alt="logo"
              className="h-6 invert opacity-80"
            />
            <span className="text-xl font-semibold text-black">
              Rest & Live
            </span>
          </div>

          <p className="text-xs leading-tight">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex items-center gap-2 mt-1.5">
            <img
              src={assets.instagramIcon}
              alt="instagram-icon"
              className="w-4"
            />
            <img
              src={assets.facebookIcon}
              alt="facebook-icon"
              className="w-4"
            />
            <img src={assets.twitterIcon} alt="twitter-icon" className="w-4" />
            <img
              src={assets.linkedinIcon}
              alt="linkedin-icon"
              className="w-4"
            />
          </div>
        </div>

        {/* Company Section */}
        <div>
          <p className="font-playfair text-sm text-gray-800">COMPANY</p>
          <ul className="mt-1 flex flex-col gap-1 text-xs">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <p className="font-playfair text-sm text-gray-800">SUPPORT</p>
          <ul className="mt-1 flex flex-col gap-1 text-xs">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Information</a>
            </li>
            <li>
              <a href="#">Cancellation Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-72">
          <p className="font-playfair text-sm text-gray-800">STAY UPDATED</p>
          <p className="mt-1 text-xs">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="flex items-center mt-2">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-7 px-2 text-xs outline-none"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-black h-7 w-7 rounded-r">
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="w-3 invert"
              />
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-4" />

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-2 text-xs">
        <p>© {new Date().getFullYear()} Stay & Live. All rights reserved.</p>
        <ul className="flex items-center gap-3">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

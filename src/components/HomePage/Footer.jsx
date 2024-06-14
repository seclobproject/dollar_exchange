import React from "react";
import logo from "../../assets/images/logo.png";

const footerData = {
  Support: ["Community", "Guideline", "Chat with Us"],
  Company: ["About", "FAQ", "Marketplace", "Blog"],
  Explore: ["Updates", "Collection", "Buy/Sell", "Contact Us"],
  Socials: ["Facebook", "Instagram", "YouTube", "Twitter"],
};

function Footer() {
  return (
    <div className="lg:px-20 md:px-10 px-4 mt-6 pb-10">
        <div className="flex md:flex-row justify-between items-center flex-col gap-y-6">
            <p className="bg-clip-text text-transparent bg-custom-gradient  font-bold text-xl">Join Our Community</p>
            <p className="text-gray-400 text-sm  sm:text-xs">Stay in the Loop: Get the Latest News and Updates</p>
            <div className="relative w-full md:w-auto">
          <input
            type="text"
            className="w-full md:w-80 p-2 pr-20 focus:outline-none text-white bg-custom-blue border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
          <button className="bg-custom-gradient absolute right-0 top-0 bottom-0 rounded-lg p-[2px] ease-in hover:scale-90">
            <span className="flex text-xs sm:text-sm md:text-base w-full h-full bg-custom-blue text-white rounded-md px-4 py-1 sm:px-6 sm:py-2 md:px-8 md:py-1 lg:py-2 justify-center items-center">
              Subscribe
            </span>
          </button>
        </div>
        </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
        <span className="flex mt-6 sm:mt-0 flex-col justify-center items-center sm:items-start">
          <img src={logo} className="w-[200px]" alt="Logo" />
          <p className=" max-w-sm mt-2 sm:max-w-xs  text-sm pl-11 sm:pl-2 px-4 sm:px-0 text-gray-400">
            Maximize Your Value With Fast, Secure, And Accurate, Maximize Your
            Value With Fast, Secure, And Accurate.
          </p>
        </span>

        <div className="mt-8 grid grid-cols-2  gap-x-16 lg:gap-x-10 xl:gap-x-32 sm:grid-cols-4 gap-12 sm:gap-8 lg:gap-32">
          {Object.entries(footerData).map(([heading, links], index) => (
            <div key={index}>
              <p className="font-medium text-white">{heading}</p>
              <ul className="mt-6 space-y-2 text-white text-sm">
                {links.map((link, linkIndex) => (
                  <li className="font-thin " key={linkIndex}>
                    <a href="#" className="transition hover:opacity-75">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-0.5 mt-8">
        <div className="absolute inset-0 w-full h-full  bg-custom-gradient"></div>
      </div>
      <div className="text-center text-gray-400 mt-4">
        <p>Copyright Vaultizo. Designed By Seclobtechnologies.in</p>
      </div>
    </div>
  );
}

export default Footer;

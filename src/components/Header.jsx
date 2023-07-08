import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import logo from "@/../public/logo.png";

const navigation = [
  { name: "About" },
  { name: "Features" },
  { name: "Clients" },
  { name: "Plans" },
  { name: "JOIN US" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Image className="" src={logo} alt="Logo" />
              </div>

              <div className="hidden sm:block my-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <p
                      key={item.name}
                      className="text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 
                             focus:ring-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <p
                  key={item.name}
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;

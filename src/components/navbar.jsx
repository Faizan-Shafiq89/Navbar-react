import React, { useState } from "react";
import NavBody from "./NavBody";
import * as GoIcon from "react-icons/go";
import * as RiIcons from "react-icons/ri";
import SubMenu from "./SubMenu";
import SubMenuChild from "./SubMenuChild";


// export const images = [
//   {
//     img: "/whatsapp.png",
//   },
//   {
//     img: "/whatsapp.png",
//   },
//   {
//     img: "/whatsapp.png",
//   },
//   {
//     img2: "/whatsapp.png",
   
//   },
// ]
export const navbarData = [
  {
    title: "Home",
    path: "./Home",
  },
  {
    title: "About",
    path: "./AboutUs",
    icon: <GoIcon.GoPlus />,
    iconOpened: <GoIcon.GoDash />,
    subNav: [
      {
        title: "Our Aim",
        path: "/about-us/aim",
      },
      {
        title: "Our Vision",
        path: "/about-us/vision",
      },
    ],
  },
  {
    title: "Service",
    path: "./Service",
    icon: <GoIcon.GoPlus />,
    iconOpened: <GoIcon.GoDash />,

    subNav: [
      {
        title: "Web Development",
        path: "/services/services1",
      },
      {
        title: "Mobile Application Development",
        path: "/services/services2",
      },
      {
        title: "Digital Marketing",
        path: "/services/services3",
      },
      {
        title: "UI/UX Design",
        path: "/services/services3",
      },
      {
        title: "E-Commerce Web Development",
        path: "/services/services3",
        icon: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,

        subNavChild: [
          {
            title: "Woo Commerce Development",
          },
          {
            title: "Mirakl Development",
          },
          {
            title: "Magento Ecommerce Development",
          },
          {
            title: "Big Commerce Development",
          },
        ],
      },
      {
        title: "Digital Branding & Communication",
        path: "/services/services3",
      },
      {
        title: "Video Animation",
        path: "/services/services3",
      },
      {
        title: "IT Resource",
        path: "/services/services3",
      },
    ],
  },
  {
    title: "CaseStudies",
    path: "./CaseStudies",
    icon: <GoIcon.GoPlus />,
    iconOpened: <GoIcon.GoDash />,

    subNav: [
      {
        title: "CaseStudy 1",
        path: "/events/CaseStudy1",
        icon: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
        subNavChild: [
          {
            title: "Woo Commerce Development",
          },
          {
            title: "Mirakl Development",
          },
        ]
      },
      {
        title: "CaseStudy 2",
        path: "/events/CaseStudy2",
      },
    ],
  },

  {
    title: "Careers",
    path: "/Career",
  },
  {
    title: "Blog",
    path: "./Blog",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [subnav, setSubnav] = useState(false);
  const [mappedIndex, setMappedIndex] = useState(null);
  const showSubnav = (index) => {
    setMappedIndex(index);
    setSubnav((prev) => !prev);
  };

  const [subnavChild, setSubnavChild] = useState(false);
  const [mappedChildIndex, setMappedChildIndex] = useState(null);
  const showSubnavChild = (childIndex) => {
    setMappedChildIndex(childIndex);
    setSubnavChild((prev) => !prev);
  };

  return (
    <nav className="bg-white">
      <div className="flex md:justify-center justify-end px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <div className="flex-shrink-0 text-white">Logo</div> */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 bg-transparent">
                {navbarData?.map((items, index) => (
                  <div key={index} onClick={() => showSubnav(index)}>
                    <NavBody
                      key={index}
                      title={items?.title}
                      icon={
                        subnav && mappedIndex === index
                          ? items.iconOpened
                          : items.icon
                      }
                    />
                    {subnav &&
                      mappedIndex === index &&
                      items?.subNav?.map((child, childIndex) => (
                        <SubMenu
                          key={childIndex}
                          title={child.title}
                          icon={child.icon}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-white hover:text-red-500"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="	#c33737"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#c33737"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} 
        pb-[292px] bg-white md:hidden transition ease-in-out duration-300 `}
      >
        <div className="px-2 ">
          {navbarData?.map((items, index) => (
            <div key={index} onClick={() => showSubnav(index)}>
              <NavBody
                key={index}
                title={items?.title}
                icon={
                  subnav && mappedIndex === index
                    ? items.iconOpened
                    : items.icon
                }
              />
              {subnav &&
                mappedIndex === index &&
                items?.subNav?.map((child, childIndex) => (
                  <div
                    key={childIndex}
                    onClick={(e) => {
                      e.stopPropagation() 
                      showSubnavChild(childIndex)
                   }}
                  >
                    <SubMenu
                      key={childIndex}
                      title={child.title}
                      icon={
                        subnavChild && mappedChildIndex === childIndex
                          ? child.iconOpened
                          : child.icon
                      }
                    />
                    {subnavChild && mappedChildIndex === childIndex && 
                    child?.subNavChild?.map((navchild, navchildIndex) => (
                        <SubMenuChild
                          key={navchildIndex}
                          title={navchild.title}
                          icon={navchild.icon}
                        />
                      ))}
                          
                  </div>
                ))}
            </div>
          ))}
        </div>
          
      </div>
    </nav>
  
  );
};

export default Navbar;

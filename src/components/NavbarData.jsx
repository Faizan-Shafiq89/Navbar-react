// Filename - components/SidebarData.js

import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";

export const navbarData = [
	{
		title: "About Us",
		path: "/about-us",
		// icon: <AiIcons.AiFillHome />,
		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Our Aim",
				path: "/about-us/aim",
				// icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Our Vision",
				path: "/about-us/vision",
				// icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Services",
		path: "/services",
		// icon: <IoIcons.IoIosPaper />,
		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Service 1",
				path: "/services/services1",
				// icon: <IoIcons.IoIosPaper />,
				
			},
			{
				title: "Service 2",
				path: "/services/services2",
				// icon: <IoIcons.IoIosPaper />,
				
			},
			{
				title: "Service 3",
				path: "/services/services3",
				// icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Blog",
		path: "/Blog",
		// icon: <FaIcons.FaPhone />,
	},
	{
		title: "Home",
		path: "/Home",
		// icon: <FaIcons.FaPhone />,
	},
	{
		title: "CaseStudy",
		path: "/CaseStudies",
		// icon: <FaIcons.FaEnvelopeOpenText />,

		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "CaseStudy 1",
				path: "/events/CaseStudy1",
				// icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "CaseStudy 2",
				path: "/events/CaseStudy2",
				// icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Career",
		path: "/Career",
		// icon: <IoIcons.IoMdHelpCircle />,
	},
];

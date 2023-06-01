import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    
  },
 
  {
    title: "My Account",
    path: "/my-account",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "My Meal Plan",
        path: "/my-account/meal-plan",
        icon: <IoIcons.IoIosPaper />
      },
     
      {
        title: "My subscription",
        path: "/my-account/subscription",
        icon: <IoIcons.IoIosPaper />,
      },
     
    ],
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
 
  {
    title: "About Us",
    path: "/about",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },

  {
    title: "Contact Us",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Terms & Policies",
    path: "/policy",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Refund policy",
        path: "/policy/refund-policy",
        icon: <IoIcons.IoIosPaper />
      },
     
      {
        title: "Privacy Policy",
        path: "/policy/privacy",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Terms of service",
        path: "/policy/service",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cookie policy",
        path: "/policy/cookies",
        icon: <IoIcons.IoIosPaper />,
      },
     
    ],
  },
 
  
];





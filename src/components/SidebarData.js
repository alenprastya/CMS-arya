import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Management User",
    path: "/user",
    icon: <FaIcons.FaUserCog />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "List Daftar User",
        path: "/user/listdaftaruser",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "List Form Approve",
        path: "/user/listformapprofe",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "List User Lulus",
        path: "/user/listuserlulus",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Prodi/Fakultas",
    path: "/prodi",
    icon: <FaIcons.FaUniversity />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "List Fakultas dan prodi",
        path: "/Prodi/listfakultas",
        icon: <IoIcons.IoIosPaper />,
      },
      // {
      //   title: "Tambah Fakultas",
      //   path: "/fakultas/tambahfakultas",
      //   icon: <AiIcons.AiFillFileAdd />,
      // },
      // {
      //   title: "Tambah Prodi",
      //   path: "/prodi/tambahprodi",
      //   icon: <AiIcons.AiFillFileAdd />,
      // },
      {
        title: "List Lulus by Fakultas",
        path: "prodi/fakultas/listlulusbyfakultas",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];

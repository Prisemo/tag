import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices} from "react-icons/md";
import {MdContacts} from "react-icons/md";
import {BsFileEarmarkBreakFill} from "react-icons/bs";
export const MenuItems = [
    {
        title: " Home",
         url: "/",
         cName: "nav-links",
         icon: <FaHome />,
    },
    {
        title: "Service",
         url: "/service",
         cName: "nav-links",
         icon: <MdMiscellaneousServices className="h-5 w-5 "/>,
    },
    {
        title: " Contact",
         url: "/contact",
         cName: "nav-links",
         icon: <MdContacts />,
    },
    {
        title: " About",
         url: "/about",
         cName: "nav-links",
         icon: <BsFileEarmarkBreakFill />,
    }
]
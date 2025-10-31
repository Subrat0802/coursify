import { LayoutDashboard, SquareUser, Settings, LogOut } from "lucide-react";
import { FaBookAtlas } from "react-icons/fa6";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export const sideBarItem = [
    {
        id: 1,
        title:"Dashboard",
        // Use the Component Reference
        Icon: MdOutlineSpaceDashboard, 
        account:"Instructor",
        path:"/dashboard",
    },
    {
        id: 3,
        title:"My Courses",
        // Using FaBookAtlas for this
        Icon: IoMdBook,
        account:"Instructor",
        path:"/dashboard/mycourses",
    },
    {
        id: 2,
        title:"My Profile",
        // Using the imported User icon from lucide-react
        Icon: FiUser, 
        account:"Instructor",
        path:"/dashboard/profile",
    },
    
    {
        id: 4,
        title:"Settings",
        // Using the imported Settings icon from lucide-react
        Icon: MdOutlineSettings, 
        account:"Instructor",
        path:"/dashboard/settings",
    },
    {
        id: 6,
        title:"Log Out",
        // Using the imported LogOut icon from lucide-react
        Icon: MdLogout,
        account:"Instructor",
        path: "#" // Added a placeholder path for log out
    }
]
import Link from "next/link";
import {
    FiHome, FiPhone, FiPieChart, FiDownload, FiFolder, FiBarChart2, FiUser,
    FiShield, FiFileText, FiCalendar, FiGlobe, FiDatabase, FiServer,
    FiUserPlus, FiPackage, FiSettings, FiHelpCircle,
    FiUsers,
    FiBriefcase,
    FiLock,
    FiClipboard
} from "react-icons/fi";
import { BiCalculator, BiCreditCard, BiNotification } from "react-icons/bi";
import { BsBank, BsFillBuildingFill, BsPersonBadge } from "react-icons/bs";
import CheckMail from "@/components/CheckMail";

const sidebarItems = [
    {
        section: "Main Links",
        items: [
            { name: "Compliance Notices", icon: BiNotification, href: "/" },
            { name: "Internal Phone No", icon: FiPhone, href: "/management" },
            { name: "Branches", icon: FiHome, href: "/branches" },
            { name: "Departments", icon: BsFillBuildingFill, href: "/explore" },
            { name: "Interest Rates", icon: FiPieChart, href: "/messages" },
            { name: "Downloads", icon: FiDownload, href: "/messages" },
            { name: "RBB FTP Site", icon: FiFolder, href: "/saved" },
            { name: "MIS Reports", icon: FiBarChart2, href: "/saved" },
            { name: "EMI Calculator", icon: BiCalculator, href: "/saved" }
        ]
    },
    {
        section: "Internal Applications",
        items: [
            { name: "File Mgmt (Treasury)", icon: FiFolder, href: "#" },
            { name: "HR Resolution", icon: FiUser, href: "#" },
            { name: "Bank Guarantee Info", icon: FiShield, href: "#" },
            { name: "Note Kosh Mgmt", icon: FiFileText, href: "#" },
            { name: "RBB Calendar", icon: FiCalendar, href: "#" },
            { name: "What is my IP?", icon: FiGlobe, href: "#" }
        ]
    },
    {
        section: "Third Party Applications",
        items: [
            { name: "New RMIS", icon: FiDatabase, href: "#" },
            { name: "RMIS V2", icon: FiServer, href: "#" },
            { name: "Pension Mgmt (Gov)", icon: FiUserPlus, href: "#" },
            { name: "Sutra", icon: FiPackage, href: "#" },
            { name: "NRB NCTSS", icon: FiBarChart2, href: "#" }
        ]
    },
    {
        section: "Applications",
        items: [
            { name: "HRIS", icon: FiUsers, href: "#" },
            { name: "Loan Automation System", icon: FiServer, href: "#" },
            { name: "Inventory Mgmt System", icon: FiPackage, href: "#" },
            { name: "Fixed Assets System", icon: FiBriefcase, href: "#" },
            { name: "Trust AML", icon: FiLock, href: "#" },
            { name: "ORMS", icon: FiClipboard, href: "#" },
            { name: "Credit Score Search", icon: BiCreditCard, href: "#" },
            { name: "Budget Mgmt System", icon: FiBarChart2, href: "#" },
            { name: "C-ASBA", icon: FiFileText, href: "#" },
            { name: "RBB Pension", icon: BsPersonBadge, href: "#" },
            { name: "RBBRF Pension", icon: BsBank, href: "#" },
            { name: "Online Account Opening", icon: FiUserPlus, href: "#" },
            { name: "Abakash Kosh Portal", icon: FiGlobe, href: "#" },
            { name: "Document Mgmt System", icon: FiFolder, href: "#" },
            { name: "Audit File Sharing Portal", icon: FiDatabase, href: "#" }
        ]
    },
    {
        section: "Footer",
        items: [
            { name: "Settings", icon: FiSettings, href: "#" },
            { name: "Help & Support", icon: FiHelpCircle, href: "#" }
        ]
    }
];

export default function Sidebar() {
    return (
        <div className="md:w-64 shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700 mb-3">
                <div className="space-y-1">
                    {sidebarItems[0].items.map((link, idx) => (
                        <Link key={idx} href={link.href} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                            <link.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mail Check Form */}
            <CheckMail></CheckMail>

            {/* Remaining Sections */}
            <div className="md:w-64 bg-white dark:bg-gray-800 border rounded-xl border-gray-200 dark:border-gray-700 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {sidebarItems.slice(1, 10).map((section, index) => (
                        <div key={index} className="space-y-1">
                            <h3 className="mb-4 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                {section.section}
                            </h3>
                            {section.items.map((link, idx) => (
                                <Link key={idx} href={link.href} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                                    <link.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                            <hr className="my-4 border-gray-200 dark:border-gray-700" />
                        </div>

                    ))}
                </div>

                {/* Footer */}
                {/* <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-1">
                    {sidebarItems[3].items.map((link, idx) => (
                        <Link key={idx} href={link.href} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                            <link.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

import Link from "next/link";
import { FiHome, FiPhone, FiPieChart, FiDownload, FiFolder, FiBarChart2, FiUser, FiShield, FiFileText, FiCalendar, FiGlobe, FiDatabase, FiServer, FiUserPlus, FiPackage, FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiCalculator, BiNotification } from "react-icons/bi";
import { BsFillBuildingFill } from "react-icons/bs";


export default function Sidebar() {
    return (
        < div className="md:w-64 shrink-0" >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700 mb-3">
                <div className="space-y-1">
                    <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <BiNotification className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Compliance Notices</span>
                    </Link>

                    <Link href="/explore" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiPhone className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Internal Phone No</span>
                    </Link>
                    <Link href="/explore" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiHome className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Branches</span>
                    </Link>
                    <Link href="/explore" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <BsFillBuildingFill className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Departments</span>
                    </Link>
                    <Link href="/messages" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiPieChart className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Interest Rates</span>
                    </Link>
                    <Link href="/messages" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiDownload className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Downloads</span>
                    </Link>
                    <Link href="/saved" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiFolder className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>RBB FTP Site</span>
                    </Link>

                    <Link href="/saved" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiBarChart2 className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>MIS Reports</span>
                    </Link>
                    <Link href="/saved" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <BiCalculator className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>EMI Calculator</span>
                    </Link>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700 mb-4">

                {/* Check Mail Feature */}
                <form className="space-y-3" action="#" method="POST">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Check Mail</h3>
                    <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-500 dark:text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="username"
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="you@rbb.com.np"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-xs font-medium text-gray-500 dark:text-gray-400">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login In
                    </button>
                </form>
            </div>
            <div className="w-64 bg-white dark:bg-gray-800 border rounded-xl border-gray-200 dark:border-gray-700 flex flex-col">

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {/* Internal Applications Section */}
                    <div className="space-y-1">
                        <h3 className="mb-4 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Internal Applications
                        </h3>
                        {[
                            { name: "File Mgmt (Treasury)", icon: <FiFolder className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "HR Resolution", icon: <FiUser className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "Bank Guarantee Info", icon: <FiShield className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "Note Kosh Mgmt", icon: <FiFileText className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "RBB Calendar", icon: <FiCalendar className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "What is my IP?", icon: <FiGlobe className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> }
                        ].map((app, index) => (
                            <Link
                                href="#"
                                key={index}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group"
                            >
                                {app.icon}
                                <span>{app.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

                    {/* Third Party Applications Section */}
                    <div className="space-y-1">
                        <h3 className="mb-4 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Third Party Applications
                        </h3>
                        {[
                            { name: "New RMIS", icon: <FiDatabase className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "RMIS V2", icon: <FiServer className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "Pension Mgmt (Gov)", icon: <FiUserPlus className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "Sutra", icon: <FiPackage className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> },
                            { name: "NRB NCTSS", icon: <FiBarChart2 className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> }
                        ].map((app, index) => (
                            <Link
                                href="#"
                                key={index}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group"
                            >
                                {app.icon}
                                <span>{app.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer with quick links */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-1">
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiSettings className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Settings</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group">
                        <FiHelpCircle className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        <span>Help & Support</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

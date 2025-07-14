import Link from "next/link";
import { FiHome, FiCompass, FiBookmark, FiSettings, FiUser, FiMessageSquare, FiCalendar, FiPenTool, FiBarChart, FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiPhone, FiPhoneCall, FiPhoneOff, FiCloudRain, FiPhoneForwarded, FiPieChart, FiDownload, FiFastForward, FiFileMinus, FiFolder, FiBarChart2, FiGitBranch } from "react-icons/fi";
import { BiCalculator, BiNotification } from "react-icons/bi";
import { AiFillCalculator } from "react-icons/ai";
import { Figtree } from "next/font/google";
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700 mb-4">
                <div className="space-y-1">
                    <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Internal Applications
                    </h3>
                    <Link href="/community/react" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        React Developers
                    </Link>
                    <Link href="/community/design" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        Design Systems
                    </Link>
                    <Link href="/community/nextjs" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        Next.js Enthusiasts
                    </Link>
                    <Link href="/community/react" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        React Developers
                    </Link>
                    <Link href="/community/design" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        Design Systems
                    </Link>
                    <Link href="/community/nextjs" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        Next.js Enthusiasts
                    </Link>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

                <div className="space-y-1">
                    <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        External Applications
                    </h3>
                    <Link href="/community/react" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        React Developers
                    </Link>
                    <Link href="/community/design" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        Design Systems
                    </Link>
                    <Link href="/community/nextjs" className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        Next.js Enthusiasts
                    </Link>
                </div>
            </div>

            {/* Optional: Additional card below sidebar */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700 mt-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Recent Activity</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    You have 3 new notifications
                </p>
            </div>
        </div >
    )
}

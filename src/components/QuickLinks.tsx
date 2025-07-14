// components/QuickAccessLinks.js
import Link from 'next/link';
import {
    FiFileText, FiDatabase, FiLayers, FiBarChart2,
    FiUsers, FiSettings, FiCalendar, FiDownload,
    FiArrowRight
} from 'react-icons/fi';

export default function QuickAccessLinks() {
    const links = [
        { name: 'Documents', href: '/docs', icon: <FiFileText />, color: 'bg-blue-100 text-blue-600' },
        { name: 'Data', href: '/data', icon: <FiDatabase />, color: 'bg-purple-100 text-purple-600' },
        { name: 'Templates', href: '/templates', icon: <FiLayers />, color: 'bg-emerald-100 text-emerald-600' },
        { name: 'Analytics', href: '/analytics', icon: <FiBarChart2 />, color: 'bg-amber-100 text-amber-600' },
        { name: 'Team', href: '/team', icon: <FiUsers />, color: 'bg-rose-100 text-rose-600' },
        { name: 'Settings', href: '/settings', icon: <FiSettings />, color: 'bg-gray-100 text-gray-600' },
        { name: 'Events', href: '/events', icon: <FiCalendar />, color: 'bg-indigo-100 text-indigo-600' },
        { name: 'Resources', href: '/resources', icon: <FiDownload />, color: 'bg-teal-100 text-teal-600' },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Enhanced Heading */}
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
                    <span className="relative z-10">
                        Quick Access
                        <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 opacity-60 -z-10 transform -skew-y-1"></span>
                    </span>
                </h2>
                <p className="mt-4 max-w-lg mx-auto text-lg text-gray-600 font-light">
                    Shortcuts to your most important destinations
                    <span className="block mt-2 text-blue-500">✦ ✦ ✦</span>
                </p>
            </div>

            {/* Compact Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="group relative bg-white p-4 rounded-lg shadow-xs border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200 flex flex-col items-center text-center"
                    >
                        <div className={`mb-3 p-3 rounded-full ${link.color} transition-all duration-300 group-hover:scale-110`}>
                            {link.icon}
                        </div>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">{link.name}</h3>
                        <div className="flex items-center text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span>Access</span>
                            <FiArrowRight className="ml-1" size={12} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
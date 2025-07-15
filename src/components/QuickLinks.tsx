// components/GroupedQuickAccess.js
import Link from 'next/link';
import { FcIphone } from 'react-icons/fc';
import {
    FiFileText, FiLayers,
    FiUsers, FiSettings, FiCalendar, FiDownload,
    FiArrowRight, FiExternalLink, FiGrid, FiLock,
    FiHelpCircle, FiBriefcase,
    FiUserCheck,
    FiCreditCard,
    FiBookmark,
    FiPieChart
} from 'react-icons/fi';
import { TbFileCertificate } from 'react-icons/tb';

export default function GroupedQuickAccess() {
    const linkGroups = [
        {
            title: 'HR Department',
            description: 'Related resources',
            icon: <FiUsers className="text-blue-500" />,
            links: [
                { name: 'HRIS', href: '/analytics', icon: <FiUserCheck />, color: 'bg-amber-100 text-amber-600' },
                { name: 'CMRS', href: '/data', icon: <FiCreditCard />, color: 'bg-purple-100 text-purple-600' },
                { name: 'HR Resolution', href: '/templates', icon: <FiLayers />, color: 'bg-emerald-100 text-emerald-600' },
                { name: 'HR Notices', href: '/docs', icon: <FiFileText />, color: 'bg-blue-100 text-blue-600' },
            ]
        },
        {
            title: 'RBBML Links',
            description: 'related resources',
            icon: <FiExternalLink className="text-green-500" />,
            links: [
                { name: 'DP System', href: '/clients', icon: <FiUsers />, color: 'bg-rose-100 text-rose-600' },
                { name: 'Mero Share', href: '/resources', icon: <FiDownload />, color: 'bg-teal-100 text-teal-600' },
            ]
        },
        {
            title: 'Remittance Links',
            description: 'Related resources',
            icon: <FiLock className="text-orange-500" />,
            links: [
                { name: 'RBB Remit', href: '/crm', icon: <FiBriefcase />, color: 'bg-red-100 text-red-600' },
                { name: 'Remit Certificates', href: '/calendar', icon: <TbFileCertificate />, color: 'bg-yellow-100 text-yellow-600' },
            ]
        },
        {
            title: 'Alternative Channels',
            description: 'Essential work tools',
            icon: <FiGrid className="text-blue-500" />,
            links: [
                { name: 'Mobile Banking', href: '/docs', icon: <FcIphone />, color: 'bg-blue-100 text-blue-600' },
                { name: 'Internet Banking', href: '/data', icon: <FiBookmark />, color: 'bg-purple-100 text-purple-600' },
                { name: 'Digital Banking Reporting', href: '/templates', icon: <FiPieChart />, color: 'bg-emerald-100 text-emerald-600' },
                { name: 'Card Mgmt System', href: '/analytics', icon: <FiCreditCard />, color: 'bg-amber-100 text-amber-600' },
                // { name: 'BLB Mgmt System', href: '/analytics', icon: <FiBarChart2 />, color: 'bg-amber-100 text-amber-600' },
                // { name: 'QR Payment', href: '/analytics', icon: <FiBarChart2 />, color: 'bg-amber-100 text-amber-600' },
                // { name: 'Connect IPS', href: '/analytics', icon: <FiBarChart2 />, color: 'bg-amber-100 text-amber-600' },
                // { name: 'USSD Banking', href: '/analytics', icon: <FiBarChart2 />, color: 'bg-amber-100 text-amber-600' },
            ]
        },
        {
            title: 'External Links',
            description: 'Partner sites',
            icon: <FiExternalLink className="text-green-500" />,
            links: [
                { name: 'Client Portal', href: '/clients', icon: <FiUsers />, color: 'bg-rose-100 text-rose-600' },
                { name: 'Resources', href: '/resources', icon: <FiDownload />, color: 'bg-teal-100 text-teal-600' },
                { name: 'Help Center', href: '/help', icon: <FiHelpCircle />, color: 'bg-indigo-100 text-indigo-600' },
            ]
        },
        {
            title: 'Third Party',
            description: 'Integrated services',
            icon: <FiLock className="text-orange-500" />,
            links: [
                { name: 'CRM', href: '/crm', icon: <FiBriefcase />, color: 'bg-red-100 text-red-600' },
                { name: 'Calendar', href: '/calendar', icon: <FiCalendar />, color: 'bg-yellow-100 text-yellow-600' },
                { name: 'Settings', href: '/settings', icon: <FiSettings />, color: 'bg-gray-100 text-gray-600' },
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Main Heading */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Quick Access
                </h2>
                <p className="mt-2 max-w-lg mx-auto text-gray-600">
                    Organized shortcuts to all your destinations
                </p>
            </div>

            {/* Grouped Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {linkGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className=" rounded-lg shadow-xs border border-gray-100 p-5 hover:shadow-sm transition-shadow">
                        <div className="flex items-center mb-3">
                            <div className="p-2 rounded-md mr-3">
                                {group.icon}
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">{group.title}</h3>
                                <p className="text-xs text-gray-500">{group.description}</p>
                            </div>
                        </div>
                        <hr className="my-3 border-gray-200" />
                        <div className="space-y-2">
                            {group.links.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    href={link.href}
                                    className="group flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <div className={`p-2 rounded-full ${link.color} mr-2 group-hover:scale-105 transition-transform`}>
                                        {link.icon}
                                    </div>
                                    <span className="text-sm text-gray-700 flex-grow">{link.name}</span>
                                    <FiArrowRight className="text-gray-300 group-hover:text-blue-500 transition-colors text-sm" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
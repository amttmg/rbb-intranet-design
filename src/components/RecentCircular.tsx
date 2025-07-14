// components/CompactCirculars.js
import Link from 'next/link';
import { FiFileText, FiCalendar, FiChevronRight, FiLogOut } from 'react-icons/fi';

export default function CompactCirculars() {
    type Urgency = 'high' | 'medium' | 'low';

    interface Circular {
        id: number;
        title: string;
        date: string;
        category: string;
        pdfUrl: string;
        urgency: Urgency;
    }

    const circulars: Circular[] = [
        {
            id: 1,
            title: 'Annual Budget Allocation 2023',
            date: '2023-05-15',
            category: 'Finance Department',
            pdfUrl: '/circulars/budget-2023.pdf',
            urgency: 'high'
        },
        {
            id: 2,
            title: 'Updated Workplace Policy',
            date: '2023-04-28',
            category: 'HR Department',
            pdfUrl: '/circulars/workplace-policy.pdf',
            urgency: 'medium'
        },
        {
            id: 3,
            title: 'IT Security Guidelines',
            date: '2023-04-10',
            category: 'IT Department',
            pdfUrl: '/circulars/it-security.pdf',
            urgency: 'high'
        },
        {
            id: 4,
            title: 'Health and Safety Protocol',
            date: '2023-03-22',
            category: 'Legal Department',
            pdfUrl: '/circulars/health-safety.pdf',
            urgency: 'low'
        }
    ];

    const urgencyColors: Record<Urgency, string> = {
        high: 'bg-red-100 text-red-800',
        medium: 'bg-amber-100 text-amber-800',
        low: 'bg-emerald-100 text-emerald-800'
    };

    return (
        <div className='bg-gray-50 dark:bg-gray-800'>
            <div className="max-w-4xl mx-auto px-1 sm:px-1 py-12">
                {/* Compact Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Recent Circulars
                    </h2>
                    <p className="mt-4 max-w-lg mx-auto text-lg text-gray-600 font-light">
                        Update yourself with the latest circulars
                    </p>
                </div>

                {/* Compact Circulars List */}
                <div className="space-y-3">
                    {circulars.map((circular) => (
                        <Link
                            key={circular.id}
                            href={circular.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="bg-white rounded-lg shadow-xs border border-gray-100 p-4 hover:shadow-sm hover:border-blue-200 transition-all">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-3">
                                        <div className={`p-2 rounded-lg ${urgencyColors[circular.urgency]} mt-1`}>
                                            <FiFileText className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h3 className="text-base font-medium text-gray-800 group-hover:text-blue-600">
                                                    {circular.title}
                                                </h3>
                                                <span className={`px-2 py-0.5 rounded-full text-xs ${urgencyColors[circular.urgency]}`}>
                                                    {circular.urgency === 'high' ? 'New' : circular.urgency === 'medium' ? 'New' : 'Notice'}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-4 text-xs text-gray-500">
                                                <span className="flex items-center">
                                                    <FiCalendar className="mr-1 w-3 h-3" />
                                                    {new Date(circular.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                                                    {circular.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FiLogOut className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Compact View All Button */}
                <div className="mt-8 text-center">
                    <Link
                        href="/circulars"
                        className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        View All Circulars
                        <FiChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
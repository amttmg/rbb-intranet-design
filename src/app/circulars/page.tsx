export default function CircularsPage() {
    // Sample circular data - replace with your actual data source
    const circulars = [
        {
            id: 1,
            title: "Annual Financial Report 2023",
            category: "Financial",
            date: "2023-12-15",
            description: "Official annual financial report for fiscal year 2022-2023",
            fileUrl: "#",
            isNew: true
        },
        {
            id: 2,
            title: "Employee Policy Update",
            category: "HR",
            date: "2023-11-28",
            description: "Updated policies regarding employee benefits and leave",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 3,
            title: "Branch Operations Guidelines",
            category: "Operations",
            date: "2023-10-15",
            description: "Revised guidelines for branch operations and customer service",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 4,
            title: "Cybersecurity Awareness Program",
            category: "IT",
            date: "2023-09-05",
            description: "Mandatory cybersecurity training for all employees",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 5,
            title: "Holiday Schedule 2024",
            category: "Administration",
            date: "2023-08-20",
            description: "Official holiday schedule for the upcoming year",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 1,
            title: "Annual Financial Report 2023",
            category: "Financial",
            date: "2023-12-15",
            description: "Official annual financial report for fiscal year 2022-2023",
            fileUrl: "#",
            isNew: true
        },
        {
            id: 2,
            title: "Employee Policy Update",
            category: "HR",
            date: "2023-11-28",
            description: "Updated policies regarding employee benefits and leave",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 3,
            title: "Branch Operations Guidelines",
            category: "Operations",
            date: "2023-10-15",
            description: "Revised guidelines for branch operations and customer service",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 4,
            title: "Cybersecurity Awareness Program",
            category: "IT",
            date: "2023-09-05",
            description: "Mandatory cybersecurity training for all employees",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 5,
            title: "Holiday Schedule 2024",
            category: "Administration",
            date: "2023-08-20",
            description: "Official holiday schedule for the upcoming year",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 3,
            title: "Branch Operations Guidelines",
            category: "Operations",
            date: "2023-10-15",
            description: "Revised guidelines for branch operations and customer service",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 4,
            title: "Cybersecurity Awareness Program",
            category: "IT",
            date: "2023-09-05",
            description: "Mandatory cybersecurity training for all employees",
            fileUrl: "#",
            isNew: false
        },
        {
            id: 5,
            title: "Holiday Schedule 2024",
            category: "Administration",
            date: "2023-08-20",
            description: "Official holiday schedule for the upcoming year",
            fileUrl: "#",
            isNew: false
        },
    ];

    const categories = ["All", "Financial", "HR", "Operations", "IT", "Administration"];

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Circulars</h1>
                    <p className="text-gray-600 dark:text-gray-300">Official communications and announcements</p>
                </div>

                <div className="mt-4 md:mt-0">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search circulars..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${category === "All"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Circulars List */}
            <div className="space-y-4">
                {circulars.map((circular) => (
                    <div
                        key={circular.id}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="p-5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            {circular.title}
                                        </h2>
                                        {circular.isNew && (
                                            <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                New
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        {circular.description}
                                    </p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                    {circular.category}
                                </span>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {new Date(circular.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </div>

                                <div className="flex space-x-2">
                                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <svg className="-ml-0.5 mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Preview
                                    </button>
                                    <a
                                        href={circular.fileUrl}
                                        download
                                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <svg className="-ml-0.5 mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-between">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
                </div>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        Previous
                    </button>
                    <button className="px-3 py-1 rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        1
                    </button>
                    <button className="px-3 py-1 rounded-md border border-indigo-500 bg-indigo-50 dark:bg-indigo-900 text-sm font-medium text-indigo-600 dark:text-indigo-200">
                        2
                    </button>
                    <button className="px-3 py-1 rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        3
                    </button>
                    <button className="px-3 py-1 rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
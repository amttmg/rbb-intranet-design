export default function PoliciesPage() {
    // Sample policy data - replace with your actual data source
    const policies = [
        {
            id: 1,
            title: "Information Security Policy",
            category: "Security",
            effectiveDate: "2023-01-15",
            lastUpdated: "2023-11-20",
            description: "Guidelines for protecting sensitive customer and bank information",
            fileUrl: "#",
            complianceLevel: "High",
            appliesTo: "All Employees"
        },
        {
            id: 2,
            title: "Employee Code of Conduct",
            category: "HR",
            effectiveDate: "2022-05-10",
            lastUpdated: "2023-09-15",
            description: "Standards of professional behavior for all RBB staff members",
            fileUrl: "#",
            complianceLevel: "Mandatory",
            appliesTo: "All Employees"
        },
        {
            id: 3,
            title: "Anti-Money Laundering Policy",
            category: "Compliance",
            effectiveDate: "2023-03-01",
            lastUpdated: "2023-10-05",
            description: "Procedures to prevent money laundering activities",
            fileUrl: "#",
            complianceLevel: "High",
            appliesTo: "Customer-facing Staff"
        },
        {
            id: 4,
            title: "Remote Work Policy",
            category: "HR",
            effectiveDate: "2021-08-20",
            lastUpdated: "2023-07-12",
            description: "Guidelines for employees working outside bank premises",
            fileUrl: "#",
            complianceLevel: "Medium",
            appliesTo: "Eligible Employees"
        },
        {
            id: 5,
            title: "Customer Data Privacy Policy",
            category: "Privacy",
            effectiveDate: "2023-02-15",
            lastUpdated: "2023-12-01",
            description: "Protection and handling of customer personal information",
            fileUrl: "#",
            complianceLevel: "Critical",
            appliesTo: "All Employees"
        },
    ];

    const categories = ["All", "Security", "HR", "Compliance", "Privacy", "Operations"];
    const complianceLevels = ["All", "Critical", "High", "Medium", "Mandatory"];

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Bank Policies</h1>
                    <p className="text-gray-600 dark:text-gray-300">Official policies governing Rastriya Banijya Bank operations</p>
                </div>

                <div className="mt-4 md:mt-0">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search policies..."
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

            {/* Filters Section */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Category
                        </label>
                        <select
                            id="category-filter"
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-600"
                        >
                            {categories.map((category) => (
                                <option key={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="compliance-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Compliance Level
                        </label>
                        <select
                            id="compliance-filter"
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-600"
                        >
                            {complianceLevels.map((level) => (
                                <option key={level}>{level}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Last Updated
                        </label>
                        <select
                            id="date-filter"
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-600"
                        >
                            <option>All Time</option>
                            <option>Last 3 Months</option>
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Policies List */}
            <div className="space-y-4">
                {policies.map((policy) => (
                    <div
                        key={policy.id}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="p-5">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            {policy.title}
                                        </h2>
                                        {policy.complianceLevel === "Critical" && (
                                            <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                                Critical
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        {policy.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                            {policy.category}
                                        </span>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                            Applies to: {policy.appliesTo}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-3 md:mt-0 md:ml-4 flex flex-col items-end">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Effective</p>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                            {new Date(policy.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <div className="text-right mt-2">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Last Updated</p>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                            {new Date(policy.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    PDF Document • {Math.floor(Math.random() * 5) + 1} pages
                                </div>

                                <div className="flex space-x-2 w-full sm:w-auto">
                                    <button className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-1/2 sm:w-auto">
                                        <svg className="-ml-0.5 mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Preview
                                    </button>
                                    <a
                                        href={policy.fileUrl}
                                        download
                                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-1/2 sm:w-auto"
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
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">17</span> policies
                </div>
                <div className="flex space-x-1">
                    <button className="px-3 py-1 rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50" disabled>
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
                        4
                    </button>
                    <button className="px-3 py-1 rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
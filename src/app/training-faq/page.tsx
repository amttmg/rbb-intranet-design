export default function TrainingFAQPage() {
    // Sample training data
    const trainingMaterials = [
        {
            id: 1,
            title: "Core Banking System Training",
            type: "Video Course",
            duration: "2h 45m",
            category: "Technical",
            date: "2023-11-15",
            description: "Comprehensive training on using the new core banking system",
            fileUrl: "#",
            isNew: true,
            progress: 0
        },
        {
            id: 2,
            title: "Customer Service Excellence",
            type: "Interactive Module",
            duration: "1h 30m",
            category: "Soft Skills",
            date: "2023-10-20",
            description: "Enhancing customer interactions and service quality",
            fileUrl: "#",
            isNew: false,
            progress: 65
        },
        {
            id: 3,
            title: "Anti-Money Laundering Compliance",
            type: "PDF Guide",
            duration: "45m",
            category: "Compliance",
            date: "2023-09-05",
            description: "Understanding AML regulations and reporting requirements",
            fileUrl: "#",
            isNew: false,
            progress: 100
        },
        {
            id: 4,
            title: "Digital Banking Platform",
            type: "Video Course",
            duration: "3h 15m",
            category: "Technical",
            date: "2023-08-12",
            description: "Mastering our digital banking services and features",
            fileUrl: "#",
            isNew: false,
            progress: 25
        },
    ];

    // Sample FAQ data
    const faqs = [
        {
            id: 1,
            question: "How do I reset my banking system password?",
            answer: "To reset your password, go to the login page and click 'Forgot Password'. Follow the instructions sent to your registered email. Contact IT support if you don't receive the email within 5 minutes.",
            category: "Technical"
        },
        {
            id: 2,
            question: "What's the process for reporting suspicious transactions?",
            answer: "Immediately notify your supervisor and file a Suspicious Activity Report (SAR) through the compliance portal. Refer to the AML training materials for detailed instructions.",
            category: "Compliance"
        },
        {
            id: 3,
            question: "How often are training materials updated?",
            answer: "Training materials are reviewed quarterly, with major updates announced via email and the training portal. Always check the 'Last Updated' date on each material.",
            category: "General"
        },
        {
            id: 4,
            question: "Where can I find branch operation manuals?",
            answer: "All operational manuals are available in the Document Repository section of the intranet. They're organized by department and function for easy access.",
            category: "Operations"
        },
    ];

    const categories = ["All", "Technical", "Compliance", "Soft Skills", "Operations"];
    const faqCategories = ["All", "Technical", "Compliance", "General", "Operations"];

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Training & FAQs</h1>
                <p className="text-gray-600 dark:text-gray-300">Access learning materials and find answers to common questions</p>
            </div>

            {/* Training Materials Section */}
            <section className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:mb-0">Training Materials</h2>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search trainings..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        <select
                            className="block w-full sm:w-40 pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-600"
                        >
                            {categories.map((category) => (
                                <option key={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Training Materials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trainingMaterials.map((training) => (
                        <div
                            key={training.id}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                {training.title}
                                            </h3>
                                            {training.isNew && (
                                                <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                    New
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                            {training.description}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                        {training.category}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                                        <span>{training.type} • {training.duration}</span>
                                        <span>{new Date(training.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>

                                    {training.progress > 0 ? (
                                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-2">
                                            <div
                                                className={`h-2.5 rounded-full ${training.progress === 100 ? 'bg-green-500' : 'bg-indigo-500'
                                                    }`}
                                                style={{ width: `${training.progress}%` }}
                                            ></div>
                                        </div>
                                    ) : (
                                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-2"></div>
                                    )}

                                    <div className="mt-3 flex justify-between items-center">
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                            {training.progress > 0 ? `${training.progress}% completed` : 'Not started'}
                                        </span>

                                        <div className="flex space-x-2">
                                            {training.progress === 100 ? (
                                                <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                    <svg className="-ml-0.5 mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Completed
                                                </button>
                                            ) : (
                                                <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    {training.progress > 0 ? 'Continue' : 'Start'}
                                                </button>
                                            )}

                                            <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <svg className="-ml-0.5 mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Trainings */}
                <div className="mt-6 text-center">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        View All Training Materials
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* FAQs Section */}
            <section>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:mb-0">Frequently Asked Questions</h2>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        <select
                            className="block w-full sm:w-40 pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-600"
                        >
                            {faqCategories.map((category) => (
                                <option key={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden">
                            <div className="p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                            {faq.answer}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                        {faq.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Support */}
                <div className="mt-8 bg-indigo-50 dark:bg-indigo-900 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-medium text-indigo-800 dark:text-indigo-100">Need more help?</h3>
                            <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
                                Can t find what you re looking for? Our support team is here to assist you.
                            </p>
                        </div>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Contact Support
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
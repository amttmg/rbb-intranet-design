export default function CheckMail() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700 mb-4">
            <form className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Check Mail</h3>
                <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 dark:text-gray-400">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@rbb.com.np" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-xs font-medium text-gray-500 dark:text-gray-400">Password</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login In
                </button>
            </form>
        </div>
    );
}
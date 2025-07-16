export default function BranchesPage() {
    // Sample branch data grouped by province
    const branchesByProvince = [
        {
            province: "Province 1",
            offices: [
                {
                    id: 1,
                    name: "Biratnagar Main Branch",
                    code: "BRT001",
                    phone: "021-520001",
                    email: "bratnagar.main@rbb.com.np",
                    manager: "Rajesh Shrestha",
                    managerMobile: "9841123456",
                    type: "Branch",
                    address: "Biratnagar-1, Morang"
                },
                {
                    id: 2,
                    name: "Itahari Branch",
                    code: "ITR002",
                    phone: "025-580002",
                    email: "itahari@rbb.com.np",
                    manager: "Sunita Gurung",
                    managerMobile: "9841234567",
                    type: "Branch",
                    address: "Itahari-4, Sunsari"
                },
                {
                    id: 3,
                    name: "Province 1 Regional Office",
                    code: "PROV001",
                    phone: "021-520100",
                    email: "province1.office@rbb.com.np",
                    manager: "Bikram Adhikari",
                    managerMobile: "9841345678",
                    type: "Regional Office",
                    address: "Biratnagar-2, Morang"
                }
            ]
        },
        {
            province: "Madhesh Province",
            offices: [
                {
                    id: 10,
                    name: "Janakpur Main Branch",
                    code: "JNK001",
                    phone: "041-520001",
                    email: "janakpur.main@rbb.com.np",
                    manager: "Hari Prasad Yadav",
                    managerMobile: "9842012345",
                    type: "Branch",
                    address: "Janakpur-2, Dhanusha"
                },
                {
                    id: 11,
                    name: "Rajbiraj Branch",
                    code: "RJB002",
                    phone: "031-550002",
                    email: "rajbiraj@rbb.com.np",
                    manager: "Sita Kumari Sah",
                    managerMobile: "9842123456",
                    type: "Branch",
                    address: "Rajbiraj-5, Saptari"
                },
                {
                    id: 12,
                    name: "Madhesh Regional Office",
                    code: "MDH001",
                    phone: "041-520100",
                    email: "madhesh.office@rbb.com.np",
                    manager: "Ram Chandra Jha",
                    managerMobile: "9842234567",
                    type: "Regional Office",
                    address: "Janakpur-3, Dhanusha"
                }
            ]
        },
        {
            province: "Bagmati Province",
            offices: [
                {
                    id: 4,
                    name: "Kathmandu Main Branch",
                    code: "KTM001",
                    phone: "01-422001",
                    email: "kathmandu.main@rbb.com.np",
                    manager: "Anil Kumar Sharma",
                    managerMobile: "9841456789",
                    type: "Branch",
                    address: "New Road, Kathmandu"
                },
                {
                    id: 5,
                    name: "Lalitpur Branch",
                    code: "LTP002",
                    phone: "01-552002",
                    email: "lalitpur@rbb.com.np",
                    manager: "Priya Bajracharya",
                    managerMobile: "9841567890",
                    type: "Branch",
                    address: "Pulchowk, Lalitpur"
                },
                {
                    id: 6,
                    name: "Bhaktapur Branch",
                    code: "BKP003",
                    phone: "01-662003",
                    email: "bhaktapur@rbb.com.np",
                    manager: "Ramesh Maharjan",
                    managerMobile: "9841678901",
                    type: "Branch",
                    address: "Durbar Square, Bhaktapur"
                },
                {
                    id: 7,
                    name: "Central Office",
                    code: "CTR001",
                    phone: "01-400100",
                    email: "central.office@rbb.com.np",
                    manager: "Narayan Prasad Dahal",
                    managerMobile: "9841789012",
                    type: "Head Office",
                    address: "Naya Baneshwor, Kathmandu"
                },
                {
                    id: 13,
                    name: "Hetauda Branch",
                    code: "HTD004",
                    phone: "057-520004",
                    email: "hetauda@rbb.com.np",
                    manager: "Shyam Kumar Shrestha",
                    managerMobile: "9842345678",
                    type: "Branch",
                    address: "Hetauda-4, Makwanpur"
                }
            ]
        },
        {
            province: "Gandaki Province",
            offices: [
                {
                    id: 8,
                    name: "Pokhara Main Branch",
                    code: "PKR001",
                    phone: "061-520001",
                    email: "pokhara.main@rbb.com.np",
                    manager: "Gopal Gurung",
                    managerMobile: "9841890123",
                    type: "Branch",
                    address: "Lakeside, Pokhara"
                },
                {
                    id: 9,
                    name: "Gandaki Regional Office",
                    code: "GND001",
                    phone: "061-520100",
                    email: "gandaki.office@rbb.com.np",
                    manager: "Mina Thapa",
                    managerMobile: "9841901234",
                    type: "Regional Office",
                    address: "Prithvi Chowk, Pokhara"
                },
                {
                    id: 14,
                    name: "Syangja Branch",
                    code: "SYG002",
                    phone: "063-420002",
                    email: "syangja@rbb.com.np",
                    manager: "Krishna Bahadur Pun",
                    managerMobile: "9842456789",
                    type: "Branch",
                    address: "Putalibazar, Syangja"
                }
            ]
        },
        {
            province: "Lumbini Province",
            offices: [
                {
                    id: 15,
                    name: "Butwal Main Branch",
                    code: "BTL001",
                    phone: "071-540001",
                    email: "butwal.main@rbb.com.np",
                    manager: "Bishnu Prasad Aryal",
                    managerMobile: "9842567890",
                    type: "Branch",
                    address: "Butwal-5, Rupandehi"
                },
                {
                    id: 16,
                    name: "Nepalgunj Branch",
                    code: "NPG002",
                    phone: "081-520002",
                    email: "nepalgunj@rbb.com.np",
                    manager: "Radha Krishna Gupta",
                    managerMobile: "9842678901",
                    type: "Branch",
                    address: "Nepalgunj-1, Banke"
                },
                {
                    id: 17,
                    name: "Lumbini Regional Office",
                    code: "LMB001",
                    phone: "071-540100",
                    email: "lumbini.office@rbb.com.np",
                    manager: "Gita Sharma",
                    managerMobile: "9842789012",
                    type: "Regional Office",
                    address: "Butwal-8, Rupandehi"
                }
            ]
        },
        {
            province: "Karnali Province",
            offices: [
                {
                    id: 18,
                    name: "Birendranagar Main Branch",
                    code: "BRN001",
                    phone: "083-520001",
                    email: "birendranagar.main@rbb.com.np",
                    manager: "Dil Bahadur Shahi",
                    managerMobile: "9842890123",
                    type: "Branch",
                    address: "Birendranagar-1, Surkhet"
                },
                {
                    id: 19,
                    name: "Jumla Branch",
                    code: "JML002",
                    phone: "087-420002",
                    email: "jumla@rbb.com.np",
                    manager: "Harka Singh Budha",
                    managerMobile: "9842901234",
                    type: "Branch",
                    address: "Khalanga, Jumla"
                },
                {
                    id: 20,
                    name: "Karnali Regional Office",
                    code: "KRL001",
                    phone: "083-520100",
                    email: "karnali.office@rbb.com.np",
                    manager: "Mohan Chand",
                    managerMobile: "9843012345",
                    type: "Regional Office",
                    address: "Birendranagar-3, Surkhet"
                }
            ]
        },
        {
            province: "Sudurpashchim Province",
            offices: [
                {
                    id: 21,
                    name: "Dhangadhi Main Branch",
                    code: "DHG001",
                    phone: "091-520001",
                    email: "dhangadhi.main@rbb.com.np",
                    manager: "Keshav Datta Joshi",
                    managerMobile: "9843123456",
                    type: "Branch",
                    address: "Dhangadhi-1, Kailali"
                },
                {
                    id: 22,
                    name: "Mahendranagar Branch",
                    code: "MNR002",
                    phone: "099-520002",
                    email: "mahendranagar@rbb.com.np",
                    manager: "Shantiram Bista",
                    managerMobile: "9843234567",
                    type: "Branch",
                    address: "Mahendranagar-3, Kanchanpur"
                },
                {
                    id: 23,
                    name: "Sudurpashchim Regional Office",
                    code: "SDP001",
                    phone: "091-520100",
                    email: "sudurpashchim.office@rbb.com.np",
                    manager: "Hari Om Bhatta",
                    managerMobile: "9843345678",
                    type: "Regional Office",
                    address: "Dhangadhi-5, Kailali"
                }
            ]
        }
    ];

    const provinces = branchesByProvince.map(p => p.province);
    const branchTypes = ["All", "Branch", "Regional Office", "Head Office"];

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Branch Network</h1>
                    <p className="text-gray-600 dark:text-gray-300">List of all RBB branches and offices across Nepal</p>
                </div>

                <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search branches..."
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
                        <option>All Provinces</option>
                        {provinces.map((province) => (
                            <option key={province}>{province}</option>
                        ))}
                    </select>

                    <select
                        className="block w-full sm:w-40 pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-600"
                    >
                        {branchTypes.map((type) => (
                            <option key={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Branches List */}
            <div className="space-y-8">
                {branchesByProvince.map((provinceData) => (
                    <div key={provinceData.province} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        {/* Province Header */}
                        <div className="bg-indigo-50 dark:bg-indigo-900 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-indigo-800 dark:text-indigo-100">
                                {provinceData.province}
                            </h2>
                        </div>

                        {/* Branches Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Branch Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Code
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Contact
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Branch Manager
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Address
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    {provinceData.offices.map((branch) => (
                                        <tr key={branch.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-gray-900 dark:text-white">{branch.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                {branch.code}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-gray-200">{branch.phone}</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">{branch.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-gray-200">{branch.manager}</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">{branch.managerMobile}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                {branch.address}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${branch.type === "Head Office"
                                                    ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                                                    : branch.type === "Regional Office"
                                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                    }`}>
                                                    {branch.type}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
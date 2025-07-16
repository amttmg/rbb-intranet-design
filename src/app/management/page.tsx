// app/management-committee/page.tsx
import Image from "next/image";
import img from "../../images/download.jpeg"

const ManagementCommittee = () => {
    // Sample data - replace with your actual data
    const departments = [
        {
            id: 1,
            name: "Finance Department",
            head: "Arun Sharma",
            email: "finance@rbb.com.np"
        },
        {
            id: 2,
            name: "Human Resources",
            head: "Priya Gurung",
            email: "hr@rbb.com.np"
        },
        {
            id: 3,
            name: "Information Technology",
            head: "Rajesh Thapa",
            email: "it@rbb.com.np"
        },
        {
            id: 4,
            name: "Customer Service",
            head: "Sunita Rai",
            email: "customerservice@rbb.com.np"
        },
        {
            id: 5,
            name: "Marketing",
            head: "Bikram Basnet",
            email: "marketing@rbb.com.np"
        },
        {
            id: 6,
            name: "Operations",
            head: "Niraj Shrestha",
            email: "operations@rbb.com.np"
        },
        {
            id: 7,
            name: "Risk Management",
            head: "Anita Poudel",
            email: "risk@rbb.com.np"
        },
        {
            id: 8,
            name: "Compliance",
            head: "Ramesh Khadka",
            email: "compliance@rbb.com.np"
        },
        {
            id: 9,
            name: "Internal Audit",
            head: "Sita Adhikari",
            email: "audit@rbb.com.np"
        },
        {
            id: 10,
            name: "Credit Department",
            head: "Hari Bahadur",
            email: "credit@rbb.com.np"
        },
        {
            id: 11,
            name: "Treasury",
            head: "Gopal Pandey",
            email: "treasury@rbb.com.np"
        },
        {
            id: 12,
            name: "International Banking",
            head: "Sabina Karki",
            email: "international@rbb.com.np"
        },
        {
            id: 13,
            name: "Branch Operations",
            head: "Bishnu Prasad",
            email: "branchops@rbb.com.np"
        },
        {
            id: 14,
            name: "Digital Banking",
            head: "Prakash Neupane",
            email: "digital@rbb.com.np"
        },
        {
            id: 15,
            name: "Legal Department",
            head: "Advocate Shyam Kumar",
            email: "legal@rbb.com.np"
        },
        {
            id: 16,
            name: "Corporate Banking",
            head: "Anil Shah",
            email: "corporate@rbb.com.np"
        },
        {
            id: 17,
            name: "Retail Banking",
            head: "Rina Magar",
            email: "retail@rbb.com.np"
        },
        {
            id: 18,
            name: "Recovery Department",
            head: "Deepak Bhandari",
            email: "recovery@rbb.com.np"
        },
        {
            id: 19,
            name: "Training & Development",
            head: "Dr. Meena Sharma",
            email: "training@rbb.com.np"
        },
        {
            id: 20,
            name: "Public Relations",
            head: "Suresh Pokharel",
            email: "pr@rbb.com.np"
        },
        {
            id: 21,
            name: "Research & Development",
            head: "Dr. Binod Yadav",
            email: "rnd@rbb.com.np"
        },
        {
            id: 22,
            name: "Security Department",
            head: "Col. Ranjit Thapa (Retd.)",
            email: "security@rbb.com.np"
        },
        {
            id: 23,
            name: "Administration",
            head: "Umesh Regmi",
            email: "admin@rbb.com.np"
        }
    ];
    const committeeMembers = {
        ceo: {
            id: 1,
            name: "John Doe",
            position: "Chief Executive Officer (CEO)",
            image: img, // Replace with actual image path
            phone: "+977-1-1234567",
            email: "ceo@rbb.com.np",
        },
        dceos: [
            {
                id: 2,
                name: "Jane Smith",
                position: "Deputy Chief Executive Officer (DCEO)",
                image: img, // Replace with actual image path
                phone: "+977-1-2345678",
                email: "dceo1@rbb.com.np",
            },
            {
                id: 3,
                name: "Robert Johnson",
                position: "Deputy Chief Executive Officer (DCEO)",
                image: img, // Replace with actual image path
                phone: "+977-1-3456789",
                email: "dceo2@rbb.com.np",
            },
        ],
        deos: [
            {
                id: 4,
                name: "Sarah Williams",
                position: "Department Executive Officer (DEO)",
                image: img, // Replace with actual image path
                phone: "+977-1-4567890",
                email: "deo1@rbb.com.np",
                reportsTo: 2, // ID of DCEO they report to
            },
            {
                id: 5,
                name: "Michael Brown",
                position: "Department Executive Officer (DEO)",
                image: img, // Replace with actual image path
                phone: "+977-1-5678901",
                email: "deo2@rbb.com.np",
                reportsTo: 2,
            },
            {
                id: 6,
                name: "Emily Davis",
                position: "Department Executive Officer (DEO)",
                image: img, // Replace with actual image path
                phone: "+977-1-6789012",
                email: "deo3@rbb.com.np",
                reportsTo: 3,
            },
            {
                id: 7,
                name: "David Wilson",
                position: "Department Executive Officer (DEO)",
                image: img, // Replace with actual image path
                phone: "+977-1-7890123",
                email: "deo4@rbb.com.np",
                reportsTo: 3,
            },
            {
                id: 8,
                name: "Lisa Miller",
                position: "Department Executive Officer (DEO)",
                image: img, // Replace with actual image path
                phone: "+977-1-8901234",
                email: "deo5@rbb.com.np",
                reportsTo: 3,
            },
        ],
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Management Committee Structure
            </h1>

            {/* Tree Structure */}
            <div className="flex flex-col items-center">
                {/* CEO - Top Level */}
                <div className="mb-8 text-center">
                    <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                        <Image
                            src={committeeMembers.ceo.image}
                            alt={committeeMembers.ceo.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 max-w-xs mx-auto">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {committeeMembers.ceo.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {committeeMembers.ceo.position}
                        </p>
                        <p className="text-gray-700 dark:text-gray-200 text-sm">
                            <span className="font-medium">Phone:</span> {committeeMembers.ceo.phone}
                        </p>
                        <p className="text-gray-700 dark:text-gray-200 text-sm">
                            <span className="font-medium">Email:</span>{" "}
                            <a
                                href={`mailto:${committeeMembers.ceo.email}`}
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                {committeeMembers.ceo.email}
                            </a>
                        </p>
                    </div>

                    {/* Connector line from CEO to DCEOs */}
                    <div className="h-8 w-0.5 bg-gray-300 mx-auto"></div>
                </div>

                {/* DCEOs - Second Level */}
                <div className="flex justify-center gap-8 md:gap-16 mb-8">
                    {committeeMembers.dceos.map((dceo) => (
                        <div key={dceo.id} className="text-center">
                            {/* DCEO Card */}
                            <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                                <Image
                                    src={dceo.image}
                                    alt={dceo.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 max-w-xs mx-auto">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    {dceo.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                                    {dceo.position}
                                </p>
                                <p className="text-gray-700 dark:text-gray-200 text-xs">
                                    <span className="font-medium">Phone:</span> {dceo.phone}
                                </p>
                                <p className="text-gray-700 dark:text-gray-200 text-xs">
                                    <span className="font-medium">Email:</span>{" "}
                                    <a
                                        href={`mailto:${dceo.email}`}
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        {dceo.email}
                                    </a>
                                </p>
                            </div>

                            {/* Connector line from DCEO to DEOs */}
                            <div className="h-8 w-0.5 bg-gray-300 mx-auto"></div>

                            {/* DEOs - Third Level */}
                            <div className="flex justify-center gap-4 mt-4">
                                {committeeMembers.deos
                                    .filter((deo) => deo.reportsTo === dceo.id)
                                    .map((deo) => (
                                        <div key={deo.id} className="text-center">
                                            <div className="relative h-24 w-24 mx-auto mb-2 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
                                                <Image
                                                    src={deo.image}
                                                    alt={deo.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 text-xs max-w-xs mx-auto">
                                                <h4 className="font-bold text-gray-800 dark:text-white">
                                                    {deo.name}
                                                </h4>
                                                <p className="text-gray-600 dark:text-gray-300 text-xs">
                                                    {deo.position}
                                                </p>
                                                <p className="text-gray-700 dark:text-gray-200 text-xs">
                                                    <span className="font-medium">P:</span> {deo.phone}
                                                </p>
                                                <p className="text-gray-700 dark:text-gray-200 text-xs truncate">
                                                    <span className="font-medium">E:</span>{" "}
                                                    <a
                                                        href={`mailto:${deo.email}`}
                                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                                    >
                                                        {deo.email}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alternative List View for Mobile */}
            <div className="md:hidden mt-12">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                    Committee Members List
                </h2>

                <div className="space-y-6">
                    {/* CEO */}
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden">
                                <Image
                                    src={committeeMembers.ceo.image}
                                    alt={committeeMembers.ceo.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-white">
                                    {committeeMembers.ceo.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {committeeMembers.ceo.position}
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 text-sm">
                            <p className="text-gray-700 dark:text-gray-200">
                                <span className="font-medium">Phone:</span> {committeeMembers.ceo.phone}
                            </p>
                            <p className="text-gray-700 dark:text-gray-200">
                                <span className="font-medium">Email:</span>{" "}
                                <a
                                    href={`mailto:${committeeMembers.ceo.email}`}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    {committeeMembers.ceo.email}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* DCEOs */}
                    {committeeMembers.dceos.map((dceo) => (
                        <div key={dceo.id} className="ml-6 pl-4 border-l-2 border-gray-300 dark:border-gray-500">
                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                                        <Image
                                            src={dceo.image}
                                            alt={dceo.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-white">
                                            {dceo.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {dceo.position}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <p className="text-gray-700 dark:text-gray-200">
                                        <span className="font-medium">Phone:</span> {dceo.phone}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        <span className="font-medium">Email:</span>{" "}
                                        <a
                                            href={`mailto:${dceo.email}`}
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            {dceo.email}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* DEOs reporting to this DCEO */}
                            <div className="mt-4 space-y-4">
                                {committeeMembers.deos
                                    .filter((deo) => deo.reportsTo === dceo.id)
                                    .map((deo) => (
                                        <div key={deo.id} className="ml-6 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                                            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                                        <Image
                                                            src={deo.image}
                                                            alt={deo.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                                                            {deo.name}
                                                        </h4>
                                                        <p className="text-gray-600 dark:text-gray-300 text-xs">
                                                            {deo.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-1 text-xs">
                                                    <p className="text-gray-700 dark:text-gray-200">
                                                        <span className="font-medium">P:</span> {deo.phone}
                                                    </p>
                                                    <p className="text-gray-700 dark:text-gray-200 truncate">
                                                        <span className="font-medium">E:</span>{" "}
                                                        <a
                                                            href={`mailto:${deo.email}`}
                                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                                        >
                                                            {deo.email}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                    Departments
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((department) => (
                        <div
                            key={department.id}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 p-4 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                {department.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-1">
                                <span className="font-medium">Head:</span> {department.head}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                <span className="font-medium">Email:</span>{" "}
                                <a
                                    href={`mailto:${department.email}`}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    {department.email}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementCommittee;
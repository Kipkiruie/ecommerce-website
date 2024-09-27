import { Link, Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const featuresList = [
    "Real-time Collaboration",
    "Task Prioritization",
    "Time Tracking",
    "Customizable Dashboards",
    "Automated Reminders",
    "Resource Allocation",
    "Reporting and Analytics",
    "Mobile-Friendly Interface",
    "Seamless Integration with Tools",
    "User-Friendly Interface"
];

export default function Welcome({ auth }) {
    const [currentFeature, setCurrentFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % featuresList.length);
        }, 5000); // Change feature every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="flex flex-col items-center justify-center text-center mt-20 p-6">
                    <h1 className="text-5xl font-bold text-white mb-4">Welcome to Lesha-Schedules!</h1>
                    <p className="text-lg text-gray-200 mb-8">
                        Your journey begins here. Discover powerful features, connect with others, and unleash your potential!
                    </p>

                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-3xl font-semibold mb-2">What We Do</h2>
                        <p className="text-gray-700">
                            {featuresList[currentFeature]}
                        </p>
                    </div>

                    <Link
                        href={route('register')}
                        className="mt-8 bg-red-500 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-red-600 transition duration-200"
                    >
                        Get Started
                    </Link>
                </div>

                <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-300">
                    <p>© 2024 Lesha-Schedules</p>
                    <div className="mt-2">
                        <p>Contact us: 
                            <a href="mailto:elisha@gmail.com" className="text-red-500"> elishak551 @gmail.com</a>, 
                            <a href="mailto:lesuudaljamani@gmail.com" className="text-red-500"> lesuudaljamani@gmail.com</a>
                        </p>
                    </div>
                </footer>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}

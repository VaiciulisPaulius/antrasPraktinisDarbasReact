import React from 'react';

function Dashboard() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg p-6 rounded shadow-md bg-white">
                <header>
                    <h2 className="text-3xl font-bold mb-4 text-blue-800">Dashboard</h2>
                    <p className="text-gray-700">Welcome to your personalized dashboard!</p>
                </header>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                    <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">Statistics</span>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg shadow-sm text-center flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">Recent Activities</span>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg shadow-sm text-center flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">Notifications</span>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg shadow-sm text-center flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">Settings</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

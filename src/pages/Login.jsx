import React from 'react';
import { useAuth } from '/src/components/AuthContext.jsx'; // Adjust import path as necessary
import { useState } from 'react';

function Login() {
    const {user, login, logout} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ username, password });
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;

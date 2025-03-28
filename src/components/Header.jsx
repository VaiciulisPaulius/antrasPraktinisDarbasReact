// ```jsx src/components/Header.jsx
import React from 'react';
import { useAuth } from '/src/contexts/AuthContext.jsx'; // Assuming custom hook is defined here
import { Link } from "react-router";

function Header() {
    const auth = useAuth();
    const user = auth.user;


    return (
        <div className="bg-gray-100 p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Antras React praktinis darbas</h2>
            <nav className="flex space-x-4">
                {user && (
                    <>
                        <Link to={"/"}>
                            <span className="hover:underline text-blue-500">Home</span>
                        </Link>
                        <Link to={"/recipes/1"}>
                            <span className="hover:underline text-blue-500">Recipes</span>
                        </Link>
                        <Link to={"/favourites/1"}>
                            <span className="hover:underline text-blue-500">Favourites</span>
                        </Link>
                        <a onClick={() => auth.logout()} href="#" className="hover:underline text-gray-700">Logout</a>
                    </>
                )}
                {!user && (
                    <>
                        <Link to={"/register"}>
                            <span className="hover:underline text-blue-500">register</span>
                        </Link>
                        <Link to={"/login"}>
                            <span className="hover:underline text-blue-500">login</span>
                        </Link>
                    </>
                )}
            </nav>
        </div>
    );
}

export default Header;
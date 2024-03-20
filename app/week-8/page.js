"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    // Function to handle login
    const handleLogin = async () => {
        // Sign in with GitHub authentication
        await gitHubSignIn();
    };

    // Function to handle logout
    const handleLogout = async () => {
        // Sign out of Firebase
        await firebaseSignOut();
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* If user is not logged in, display login button */}
            {!user && (
                <button onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >Login with GitHub</button>
            )}

            {/* If user is logged in, display welcome message, logout button, and link to shopping list page */}
            {user && (
                <div>
                    <p className="text-xl font-semibold mb-4">Welcome, {user.displayName}</p>
                    <p className="text-gray-600">{user.email}</p>
                    <button onClick={handleLogout} className="bg-red-400 hover:bg-red-600 hover:underline text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        Logout</button>
                    {/* Link to shopping list page */}
                    <a href="week-7" className="mt-4 border border-black-900 bg-zinc-600 rounded p-2 block mt-4 text-white font-bold hover:underline hover:bg-blue-400">Go to Shopping List : </a>
                </div>
            )}
        </div>
    );
};


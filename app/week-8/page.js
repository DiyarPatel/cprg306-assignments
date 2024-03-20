"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <div>
            <h1>Week 8</h1>
            <p>{user ? "   Hi there:" : "Please sign in"}</p>
            {user && <p>{user.displayName}</p>}
            <p>
                {user ? (
                    <button onClick={firebaseSignOut}>Sign out</button>
                ) : (
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                )}
            </p>
        </div>
    );
}


import { useSession, signOut } from "next-auth/react"

export default function AdminDashboard() {

    function logoutHandler() {
        signOut();
    }

    const { data: session, status } = useSession()

    if (status === "authenticated") {
        return (
            <div>
                <p>Signed in as {session.user.email}</p>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        )
    }
    if (status === "unauthenticated") {
        window.location.href = '/admin';
    }

} 
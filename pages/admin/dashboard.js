
import { useSession, signOut, getSession } from "next-auth/react"

export default function AdminDashboard(props) {

    function logoutHandler() {
        signOut();
    }

    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <div>
                <p>Signed in as {session.user.email}</p>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        )
    }
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })

    if (!session) {
        return {
            redirect: {
                destination: '/admin',
                permant: false
            }
        };
    }
    return {
        props: { session }
    }
}
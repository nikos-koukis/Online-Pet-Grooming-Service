
import { useSession, signOut, getSession } from "next-auth/react"
import AdminDashboardLayout from "../../components/layout/adminDashboardLayout";

export default function AdminDashboard(props) {

    function logoutHandler() {
        signOut();
    }

    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <div className="flex">
                <AdminDashboardLayout />
                <div className="p-7 bg-gray-100 w-screen">
                    <h1 className="text-2xl font-semibold">Home Page</h1>
                </div>
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
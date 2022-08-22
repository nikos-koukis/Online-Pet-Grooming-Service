import { useSession, signOut, getSession } from "next-auth/react"
import AdminNavBarLayout from "../../components/layout/adminNavBarLayout";
import AdminNavigationHeaderLayout from "../../components/layout/adminNavigationHeaderLayout";
import { Fragment } from "react";

export default function AdminDashboard(props) {

    function logoutHandler() {
        signOut();
    }

    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <Fragment>
                <AdminNavigationHeaderLayout />
                <AdminNavBarLayout />
            </Fragment>
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
import { getSession } from "next-auth/react"
import AdminLayout from "../../components/layout/adminLayout";
import AdminLoginForm from "../../components/admin/adminLoginForm.js";
import AdminRegisterForm from "../../components/admin/adminRegisterForm.js";
import { GeneralNotifCtxProvider } from "../../contextStore/generalNotifCtx";
import { useState } from "react";

export default function AdminIntroPage() {

    const [adminLoginForm, setadminLoginForm] = useState(true);

    function checkboxLoginHandler() {
        setadminLoginForm(false);
    }
    function checkboxRegisterHandler() {
        setadminLoginForm(true);
    }

    if (adminLoginForm) {
        return (
            <GeneralNotifCtxProvider>
                <AdminLayout>
                    <AdminLoginForm />
                    <div className='flex items-center justify-center'>
                        <label htmlFor="adminLoginToggleForm" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" id="adminLoginToggleForm" className="sr-only peer" onChange={checkboxLoginHandler} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-black">Register</span>
                        </label>
                    </div>
                </AdminLayout>
            </GeneralNotifCtxProvider>
        );
    }
    return (
        <GeneralNotifCtxProvider>
            <AdminLayout>
                <AdminRegisterForm />
                <div className='flex items-center justify-center'>
                    <label htmlFor="adminRegisterToggleForm" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" id="adminRegisterToggleForm" className="sr-only peer" onChange={checkboxRegisterHandler} checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-black">Login</span>
                    </label>
                </div>
            </AdminLayout>
        </GeneralNotifCtxProvider>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })

    if (session) {
        return {
            redirect: {
                destination: '/admin/dashboard',
                permant: false
            }
        };
    }
    return {
        props: { session }
    }
}
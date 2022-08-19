import { LoginIcon } from '@heroicons/react/solid'
import { signIn } from 'next-auth/react'
import { useRef, useContext } from 'react';
import { useRouter } from 'next/router'
import AdminRegisterNotificationContext from '../../contextStore/adminRegisterNotifCtx';
import AdminRegisterNotif from '../ui/adminContext/adminRegiNotific';

export default function AdminLoginForm() {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const notificationCtx = useContext(AdminRegisterNotificationContext);
    const activeNotification = notificationCtx.notification;

    const router = useRouter();

    async function adminLoginSubmitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        notificationCtx.showNotification({
            message: 'Login for admin in process...',
            status: 'pending',
        });

        await fetch('/api/auth/checkUserVerify', {
            method: 'POST',
            body: JSON.stringify({ email: enteredEmail, password: enteredPassword }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        .then((response) => {
            if (response.ok) {
                return response.json();
            }

            return response.json().then((data) => {
                throw new Error(data.message || 'Something went wrong!');
            });
        })
        .then((data) => {
            const result = signIn('credentials', {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword,
            })
            .then((result) => {
                if (result.error) {
                    setTimeout(function () {
                        notificationCtx.showNotification({
                            message: 'Invalid Credentials!',
                            status: 'error',
                        });
                    }, 1000);
                }
                if (!result.error) {
                    event.target.reset();
                    router.replace('/admin/dashboard');
                }
            })
            .catch((error) => {
                notificationCtx.showNotification({
                    message: error.message || 'Something went wrong!',
                    status: 'error',
                });
            });
        })
        .catch((error) => {
            notificationCtx.showNotification({
                message: error.message || 'Something went wrong!',
                status: 'error',
            });
            
        });
    }

    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={adminLoginSubmitHandler}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="space-y-8">
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                ref={emailInputRef}
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                ref={passwordInputRef}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LoginIcon className="h-5 w-5 text-indigo-500 group-hover:text-white" aria-hidden="true" />
                            </span>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
            {activeNotification && (
                <AdminRegisterNotif
                    message={activeNotification.message}
                    status={activeNotification.status}
                />
            )}
        </div>
    );
}
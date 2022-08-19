import { PencilAltIcon } from '@heroicons/react/solid'
import { useRef, useContext } from 'react';
import GeneralNotifCtx from '../../contextStore/generalNotifCtx';
import GeneralCtxUI from '../ui/ctxStyle/generalCtxUI';

export default function AdminRegisterForm() {

    const fullNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

    const notificationCtx = useContext(GeneralNotifCtx);
    const activeNotification = notificationCtx.notification;

    async function adminRegisterSubmitHandler(event) {
        event.preventDefault();
        const enteredFullName = fullNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfPassword = confirmPasswordInputRef.current.value;

        if (enteredPassword == enteredConfPassword) {
            notificationCtx.showNotification({
                message: 'Registering for admin in process.',
                status: 'pending',
            });

            fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({ fullname: enteredFullName, email: enteredEmail, password: enteredPassword }),
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
                    notificationCtx.showNotification({
                        message: 'Successfully registered for admin!',
                        status: 'success',
                    });
                    event.target.reset();
                })
                .catch((error) => {
                    notificationCtx.showNotification({
                        message: error.message || 'Something went wrong!',
                        status: 'error',
                    });
                });
        } else {
            notificationCtx.showNotification({
                message: 'Passwords dont match.',
                status: 'error',
            });
        }



    }

    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
                        Sign up to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={adminRegisterSubmitHandler}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="space-y-8">
                        <div>
                            <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                                ref={fullNameInputRef}
                            />
                        </div>
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
                        <div>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                ref={confirmPasswordInputRef}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <PencilAltIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            {activeNotification && (
                <GeneralCtxUI
                    message={activeNotification.message}
                    status={activeNotification.status}
                />
            )}
        </div>
    );
}
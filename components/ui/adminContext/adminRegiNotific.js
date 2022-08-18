import { useContext } from 'react';
import AdminRegisterNotificationContext from '../../../contextStore/adminRegisterNotifCtx';

function AdminRegisterNotif(props) {

  useContext(AdminRegisterNotificationContext);
  const { message, status } = props;

  if (status === 'success') {
    return (
      <div id="toast-bottom-left" className="flex absolute bottom-5 left-5 items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-white space-x bg-green-600" role="alert">
        <svg aria-hidden="true" className="w-5 h-5 text-white" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
        <div className="pl-4 text-sm text-white">{message}</div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div id="toast-bottom-left" className="flex absolute bottom-5 left-5 items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-white space-x bg-red-600" role="alert">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.227 4.227a.774.774 0 0 1 1.095 0L12 10.905l6.678-6.678a.774.774 0 1 1 1.095 1.095L13.095 12l6.678 6.678a.774.774 0 1 1-1.095 1.095L12 13.095l-6.678 6.678a.774.774 0 1 1-1.095-1.095L10.905 12 4.227 5.322a.774.774 0 0 1 0-1.095Z" fill="white" /></svg>
        <div className="pl-4 text-sm text-white">{message}</div>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div id="toast-bottom-left" className="flex absolute bottom-5 left-5 items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-white space-x bg-blue-500" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 3.538a8.462 8.462 0 1 0 0 16.924 8.462 8.462 0 0 0 0-16.924ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M12 16.359a.77.77 0 0 0 .77-.77v-4.102a.77.77 0 1 0-1.54 0v4.103a.77.77 0 0 0 .77.769Z" fill="white" /><path d="M13.026 8.41a1.026 1.026 0 1 0-2.052 0 1.026 1.026 0 0 0 2.052 0Z" fill="white" /></svg>
        <div className="pl-4 text-sm text-white">{message}</div>
      </div>
    );
  }

}

export default AdminRegisterNotif;
import { createContext, useState, useEffect } from 'react';

const AdminRegisterNotificationContext = createContext({
  notification: null, // { message, status }
  showNotification: function (notificationData) { },
  hideNotification: function () { },
});

export function AdminRegisterNotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <AdminRegisterNotificationContext.Provider value={context}>
      {props.children}
    </AdminRegisterNotificationContext.Provider>
  );
}

export default AdminRegisterNotificationContext;
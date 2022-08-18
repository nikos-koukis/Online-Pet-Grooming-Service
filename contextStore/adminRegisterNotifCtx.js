import { createContext, useState } from 'react';

const AdminRegisterNotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function AdminRegisterNotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

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
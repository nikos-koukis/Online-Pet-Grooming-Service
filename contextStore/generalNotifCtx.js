import { createContext, useState, useEffect } from 'react';

const GeneralNotifCtx = createContext({
  notification: null, // { message, status }
  showNotification: function (notificationData) { },
  hideNotification: function () { },
});

export function GeneralNotifCtxProvider(props) {
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
    <GeneralNotifCtx.Provider value={context}>
      {props.children}
    </GeneralNotifCtx.Provider>
  );
}

export default GeneralNotifCtx;
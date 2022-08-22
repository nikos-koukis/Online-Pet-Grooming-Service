const MenusItems = [
    {
        title: "Dashboard",
        icon: <svg className="w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>,
        path: '/admin/dashboard'
    },
    {
        title: "Inbox",
        icon: <svg className="w-6 h-6 flex-shrink-0 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>

    },
    {
        title: "Users",
        spacing: false,
        icon: <svg className="w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
    },
    {
        title: "Projects",
        submenu: true,
        icon: <svg className="w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>,
        submenuItems: [
            { title: "Submenu 1" },
            { title: "Submenu 2" },
            { title: "Submenu 3" },
        ],
    },
    {
        title: "Profile",
        spacing: false,
        icon: <svg className="w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z" /></svg>,
        path: '/admin/profile'
    },
    {
        title: "Setting",
        icon: <svg className="w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg"><path d="M20.33 9.78h-.03a1.207 1.207 0 0 1-1.11-.75.01.01 0 0 0-.01-.01 1.218 1.218 0 0 1 .26-1.31l.03-.03a1.672 1.672 0 0 0 0-2.36l-.79-.78a1.672 1.672 0 0 0-2.36 0l-.01.02a1.233 1.233 0 0 1-1.33.25 1.192 1.192 0 0 1-.76-1.11v-.03A1.664 1.664 0 0 0 12.56 2h-1.12a1.664 1.664 0 0 0-1.66 1.67v.03a1.2 1.2 0 0 1-.75 1.11 1.149 1.149 0 0 1-.48.1 1.2 1.2 0 0 1-.85-.35l-.02-.02a1.672 1.672 0 0 0-2.36 0l-.79.78a1.672 1.672 0 0 0 0 2.36l.03.03a1.217 1.217 0 0 1-.86 2.07h-.03A1.673 1.673 0 0 0 2 11.45v1.11a1.673 1.673 0 0 0 1.67 1.67h.03a1.182 1.182 0 0 1 1.11.75 1.248 1.248 0 0 1-.25 1.33l-.02.01a1.684 1.684 0 0 0 0 2.37l.78.78a1.672 1.672 0 0 0 2.36 0l.02-.02a1.186 1.186 0 0 1 1.31-.26 1.214 1.214 0 0 1 .77 1.12v.03A1.656 1.656 0 0 0 11.44 22h1.12a1.656 1.656 0 0 0 1.66-1.66v-.03a1.214 1.214 0 0 1 .77-1.12 1.186 1.186 0 0 1 1.31.26l.02.02a1.672 1.672 0 0 0 2.36 0l.78-.78a1.684 1.684 0 0 0 0-2.37l-.02-.01a1.248 1.248 0 0 1-.25-1.33 1.182 1.182 0 0 1 1.11-.75h.03A1.673 1.673 0 0 0 22 12.56v-1.11a1.673 1.673 0 0 0-1.67-1.67ZM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" /></svg>
    },
    {
        title: "Logout",
        icon: <svg className="w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5c0-1.1.9-2 2-2h8v2H5v14h8v2H5c-1.1 0-2-.9-2-2V5Zm14.176 6L14.64 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L17.176 13H10.59v-2h6.586Z" /></svg>
    },
];

export function getMenusItems() {
    return MenusItems;
}
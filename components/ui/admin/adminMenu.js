import { RiDashboardFill, RiPagesLine } from "react-icons/ri";
import { MdPermMedia } from "react-icons/md";
import { AiFillProject, AiFillSetting } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { HiInboxIn } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";

const MenusItems = [
    {
        title: "Dashboard",
        //icon: <RiDashboardFill />
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C5.373 2 0 7.373 0 14c0 2.583.816 5.042 2.205 7h19.59C23.184 19.042 24 16.583 24 14c0-6.627-5.373-12-12-12zm-.758 2.14a9.75 9.75 0 0 1 1.516 0v3.115a6.877 6.877 0 0 0-1.516 0V4.14zm-5.763 7.978-2.88-1.193c.157-.479.351-.948.581-1.399l2.879 1.192a6.607 6.607 0 0 0-.58 1.4zm1.216-2.351L4.492 7.564a9.936 9.936 0 0 1 1.071-1.071l2.203 2.203a6.866 6.866 0 0 0-1.071 1.071zm.793-4.569a9.792 9.792 0 0 1 1.396-.586l1.205 2.875a6.72 6.72 0 0 0-1.396.585L7.488 5.198zM8.896 19a3.105 3.105 0 0 1 1.603-2.672L12 9.287l1.502 7.041A3.109 3.109 0 0 1 15.105 19H8.896zm4.988-11.521L15.077 4.6c.479.156.948.352 1.399.581l-1.193 2.878a6.705 6.705 0 0 0-1.399-.58zm2.349 1.217 2.203-2.203c.383.329.742.688 1.071 1.071l-2.203 2.203a6.78 6.78 0 0 0-1.071-1.071zm2.259 3.32a6.713 6.713 0 0 0-.603-1.39l2.86-1.238c.235.445.438.912.602 1.39l-2.859 1.238z" /></svg>
    },
    {
        title: "Pages",
        //icon: <RiPagesLine />
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.362 2C15.518 2 14 8 14 8s6-1.65 6 2.457V22H4V2h7.362zm.827-2H2v24h20V9.614C22 7.223 15.352 0 12.189 0zM17 13H7v-1h10v1zm0 2H7v1h10v-1zm-3 3H7v1h7v-1z" /></svg>
    },
    {
        title: "Media",
        spacing: true,
        icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M22 18.318c-.003 1.186-.717 2.414-1.948 3.127-1.731 1.003-3.832.609-4.689-.881-.856-1.489-.146-3.512 1.585-4.516 1.391-.806 3.021-.709 4.052.133V5.214L9 7.786v12.475c.02 1.203-.697 2.46-1.948 3.184-1.731 1.003-3.832.609-4.689-.881-.856-1.489-.146-3.512 1.585-4.516 1.391-.806 3.021-.709 4.052.133V3l14-3v18.318zM4.444 18.9c1.259-.729 2.756-.496 3.34.52.585 1.017.038 2.434-1.221 3.164-1.26.73-2.757.497-3.341-.52-.585-1.016-.038-2.434 1.222-3.164zm13-2c1.259-.729 2.756-.496 3.34.52.585 1.017.038 2.434-1.221 3.164-1.26.73-2.757.497-3.341-.52-.585-1.016-.038-2.434 1.222-3.164zM9 3.808v2.955l12-2.571V1.237L9 3.808z"/></svg>
    },
    {
        title: "Projects",
        submenu: true,
        //icon: <AiFillProject />,
        icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M9.484 15.696 8.773 15l-2.552 2.607-1.539-1.452-.698.709L6.234 19l3.25-3.304zm0-5L8.773 10l-2.552 2.607-1.539-1.452-.698.709L6.234 14l3.25-3.304zm0-5L8.773 5 6.221 7.607 4.682 6.155l-.698.709L6.234 9l3.25-3.304zM20 17h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8V7zm4-5H0v20h24V2zm-1 19H1V3h22v18z"/></svg>,
        submenuItems: [
            { title: "Submenu 1" },
            { title: "Submenu 2" },
            { title: "Submenu 3" },
        ],
    },
    {
        title: "Inbox",
        // icon: <HiInboxIn /> 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.546 2H5.477L0 12.986V22h24v-9.014L18.546 2zM14.75 15h-5.5L7 13H2.334L6.6 4h10.82l4.249 9H17l-2.25 2z"/></svg>
    },
    {
        title: "Profile",
        spacing: true,
        // icon: <ImProfile /> 
        icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 22H0V2h24v20zM23 3H1v18h22V3zm-4 13v1h-4v-1h4zm-6.002 1H2.001L2 16.086c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078C5.452 6.496 6.386 6 7.5 6c1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zM3 16h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111C8.856 7.304 8.257 7 7.5 7c-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252C3.055 14.73 2.999 14.986 3 16zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6V7h6z"/></svg>
    },
    {
        title: "Setting",
        //icon: <AiFillSetting /> 
        icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333S13.838 8.666 12 8.666m0 7.667c-2.39 0-4.333-1.943-4.333-4.333S9.61 7.666 12 7.666 16.333 9.61 16.333 12A4.337 4.337 0 0 1 12 16.333M10.807 23h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046a2.744 2.744 0 0 1-1.077.226c-.843 0-1.539-.392-2.566-.893L3.378 5.065c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952L2.17 19.14c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126"/></svg>
    },
    {
        title: "Logout",
        //icon: <FiLogOut /> 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 14.874V13.06h-3.25c-.745 0-1.128-.26-1.451-.706l-1.709-2.302-2.791 3.024 1.509 2.149c.478.753.514 1.267.514 1.952V23h-2.699v-5.474c-.021-1.512-2.455-2.945-3.303-1.723l-1.617 2.281c-.359.51-.971.686-1.565.686H0v-2.621l3.483-.003c.544 0 1.017-.193 1.274-.806l1.549-3.782a5.407 5.407 0 0 1 1.076-1.515l3.609-3.573-1.02-.891a1.344 1.344 0 0 0-1.116-.311l-2.999.525-.471-2.201L9.5 2.808c.771-.147 1.433.103 2.009.636L15.47 7.1c.628.57 1.272 1.563 2.276 3.047.184.272.443.656 1.053.656H21v-1.85l3 2.96-3 2.961zm-3.101-8.747a2.587 2.587 0 1 0-.971-5.081 2.587 2.587 0 0 0 .971 5.081z"/></svg>
    },
];

export function getMenusItems() {
    return MenusItems;
}
import { useState } from 'react';
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { getMenusItems } from '../ui/admin/adminMenu';
import { Tooltip } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function AdminDashboardLayout() {

    const MenusItems = getMenusItems();

    const router = useRouter();

    const [open, setOpen] = useState(true);
    const [subMenuOpen, setsubMenuOpen] = useState(false);


    function NavBarHandler() {
        setOpen(!open);
        setsubMenuOpen(false);
    }
    function SubMenuHandler() {
        setsubMenuOpen(!subMenuOpen);
    }

    function routeLink(path) {
        if (path) {
            router.replace(path);
        }
    }

    return (
        <div className={`bg-blue-400 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300`}>
            <BsArrowLeftShort className={`bg-white text-2xl rounded-full absolute -right-3 top-9 border border-blue-400 cursor-pointer duration-300 
            ${!open && "rotate-180 duration-300"}`} onClick={NavBarHandler} />
            <div className='inline-flex pl-2 items-center'>
                <svg height="26" className='w-10 cursor-pointer block float-left mr-4' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.954 11c3.33 0 7.057 6.123 7.632 8.716.575 2.594-.996 4.729-3.484 4.112-1.092-.271-3.252-1.307-4.102-1.291-.925.016-2.379.836-3.587 1.252-2.657.916-4.717-1.283-4.01-4.073C5.177 16.665 8.883 11 11.954 11zm10.793-4.39c1.188.539 1.629 2.82.894 5.27-.704 2.341-2.33 3.806-4.556 2.796-1.931-.877-2.158-3.178-.894-5.27 1.274-2.107 3.367-3.336 4.556-2.796zM.779 7.316c-1.044.729-1.06 2.996.082 5.215 1.092 2.12 2.913 3.236 4.868 1.87 1.696-1.185 1.504-3.433-.082-5.215C4.051 7.393 1.823 6.587.779 7.316zM16.422.024c1.323.251 2.321 2.428 2.182 5.062-.134 2.517-1.405 4.382-3.882 3.912-2.149-.407-2.938-2.657-2.181-5.061.761-2.421 2.559-4.164 3.881-3.913zM6.127.082C4.859.533 4.207 2.838 4.75 5.419c.519 2.467 2.062 4.114 4.437 3.269 2.06-.732 2.494-3.077 1.377-5.336C9.439 1.076 7.395-.369 6.127.082z" /></svg>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"} `}>Groomer</h1>
            </div>
            <ul className='pt-2'>
                {MenusItems.map((menu, index) => (
                    <>
                        <li key={index} className={`text-sm text-white flex items-center gap-x-4 cursor-pointer p-2
                         hover:bg-white hover:text-black rounded-md transition-all ${menu.spacing ? "mt-9" : "mt-2"} `} onClick={() => routeLink(menu.path)}>
                            {!open &&
                                <span className='text-2xl block float-left'>
                                    <Tooltip
                                        color="default"
                                        content={menu.title}
                                        placement="rightStart"
                                    >
                                        {menu.icon ? menu.icon : ""}
                                    </Tooltip>
                                </span>
                            }
                            {open &&
                                <span className='text-2xl block float-left'>
                                    {menu.icon ? menu.icon : ""}
                                </span>
                            }
                            {!menu.submenu && open && (

                                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
                                    {menu.title}
                                </span>
                            )}
                            {menu.submenu && open && (
                                <>
                                    <span className={`text-base font-medium flex-1 ${!open && "hidden"}`} onClick={SubMenuHandler} >
                                        {menu.title}
                                    </span>
                                    <BsChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={SubMenuHandler} />
                                </>
                            )}
                        </li>
                        {menu.submenu && subMenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <li key={index} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 rounded-md hover:bg-white hover:text-black transition-all">
                                        {submenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
        </div>
    );
}
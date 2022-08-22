import { getMenusItems } from '../ui/admin/adminMenu';
import { BsChevronDown } from "react-icons/bs";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminNavBarLayoutTest() {

    const MenusItems = getMenusItems()

    const [subMenuOpen, setsubMenuOpen] = useState(false);

    const router = useRouter();

    function SubMenuHandler() {
        setsubMenuOpen(!subMenuOpen);
    }

    function routeLink(path) {
        if (path) {
            router.replace(path);
        }
    }

    return (
        <aside id="sidebar" className="hidden fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 pt-0">
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="flex-1 px-3 bg-gradient-to-tr from-adminbg1Nav to-adminbg2Nav pt-0 divide-y space-y-1">
                        <ul className='pt-2'>
                            {MenusItems.map((menu, index) => (
                                <>
                                    <li key={index} className={`text-sm text-white flex items-center gap-x-4 cursor-pointer 
                                    p-2 hover:bg-white hover:text-black rounded-md transition-all ${menu.spacing ? "mt-9" : "mt-2"}`}  onClick={() => routeLink(menu.path)}>
                                        {menu.icon ? menu.icon : ""}
                                        {!menu.submenu && (

                                            <span className={`text-base font-medium flex-1`}>
                                                {menu.title}
                                            </span>
                                        )}
                                        {menu.submenu && (
                                            <>
                                                <span className={`text-base font-medium flex-1 `} onClick={SubMenuHandler} >
                                                    {menu.title}
                                                </span>
                                                <BsChevronDown onClick={SubMenuHandler}/>
                                            </>
                                        )}
                                    </li>
                                    {menu.submenu && subMenuOpen &&(
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
                </div>
            </div>
        </aside>
    );
}
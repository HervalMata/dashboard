import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getNav} from "../navigation";
import {BiLogOutCircle} from "react-icons/bi";

const Sidebar = ({showSidebar, setShowSidebar}) => {
    const [allNav, setAllNav] = useState([]);
    const {pathname} = useLocation()

    useEffect(() => {
        const navs = getNav('admin')
        setAllNav(navs)
    }, [])

    return (
        <div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'}`}></div>
            <div className={`w-[260px] fixed bg-[#E6E7FB] z-50 top-0 h-screen
                            shadow-[0_0_15px_rgb(34_41_47_/_5%] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}` }>
                <div className="h-[70px] flex items-center justify-center">
                    <Link to='/' className="w-[180px] h-[120px]">
                        <img
                            src='/images/logo.png'
                            alt='Logo'
                            className='h-full w-full'
                        />
                    </Link>
                </div>
                <div className='px-[16px]'>
                    <ul>
                        {
                            allNav.map((nav, index) => <li key={index}>
                                <Link
                                    to={nav.path}
                                    className={`${pathname === nav.path ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500' : 'text-[#030811] font-bold duration-200'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}
                                >
                                    <span>{nav.icon}</span>
                                    <span>{nav.title}</span>
                                </Link>
                            </li>)
                        }
                        <li>
                            <button className='text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1'>
                                <span><BiLogOutCircle /></span>
                                <span>Sair</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

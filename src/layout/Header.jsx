import {FaList} from "react-icons/fa";

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#B1ADDF] px-5 transition-all">
                <button
                    type="button"
                    aria-label="Toggle sidebar"
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="w-[35px] flex lg:hidden h-[35px] rounded-sm
                                bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer">
                    <span><FaList /></span>
                </button>
                <div className="hidden md:block">
                    <input
                        className='px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md
                                 text-[#423D72] focus:border-indigo-300 overflow-hidden'
                        type="text" name="search" placeholder="Pesquisar..."
                    />
                </div>
                <div className="flex items-center justify-center gap-8 relative">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex items-center justify-center flex-col text-end">
                                <h2 className="text-md font-bold">Cris Laços</h2>
                                <span className="text-[14px] w-full font-normal">Admin</span>
                            </div>
                            <img
                                src='/images/admin.jpg'
                                alt='Admin'
                                className="w-[45px] h-[45px] rounded-full overflow-hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

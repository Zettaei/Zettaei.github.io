import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import navbarButton from "./types/navbar";

const Navbar = (props: PropsWithChildren) => {

    const navigate = useNavigate();

    const menuList = [
        { label: "Profile", description: "view Zettaei's profile." },
        { label: "Networks", description: "view Zettaei's related links, social networks, etc..." }
    ] as navbarButton[];

    let menuButton = {
        w: 32, h: 12
    };
    let settingButton = {
        w: 12, h: 12
    }
    let highlightLinePos = '80%'; 

    return (
        <>
            <div className={`fixed top-0 left-0 right-0`}>
                <div className={`flex h-${menuButton.h} text-white space-x-1 px-1 rounded-sm h-${menuButton.h + 2}
                bg-gradient-to-r from-zinc-800/90 from-50% via-transparent via-${highlightLinePos} to-zinc-800/70
                before:absolute before:h-screen before:top-0 before:w-screen 
                before:opacity-30 before:bg-gradient-to-r 
                before:from-transparent before:from-[75%] 
                before:via-yellow-400 before:via-${highlightLinePos} 
                before:to-transparent before:to-[85%]
                `}>
                    <div className="flex space-x-1">
                        {menuList.map((menu) => {
                            return <>
                                <div className={`w-${menuButton.w} py-1 group`}>
                                    <button
                                        onClick={() => navigate("/" + menu.label.toLowerCase())}
                                        className={`bg-gradient-to-tr from-zinc-700 via-zinc-700 to-white/40
                                    relative w-full h-full bg-black group rounded-sm`}>

                                        <div className={`absolute flex w-full top-1 left-1
                                        bg-white opacity-0 
                                        group-hover:opacity-80
                                        transition-all duration-300 ease-in-out
                                        group-hover:shadow-xl
                                        `}>
                                            <div className={`absolute flex bg-white
                                        w-full h-${menuButton.h - 1} items-center justify-center text-black`}>
                                                {menu.label}
                                            </div>
                                            <div className={`block text-start text-xs absolute bg-white
                                        w-full min-h-${menuButton.h} max-h-fit top-10 left-0 right-0 px-2 py-1
                                      text-black pointer-events-none`}>
                                                {menu.description}
                                            </div>
                                        </div>

                                        <div className="transition-colors duration-200 ease-out
                                    group-hover:text-transparent">
                                            {menu.label}
                                        </div>
                                    </button>


                                </div>
                            </>
                        })}
                    </div>
                </div>
            </div>

            {props.children}
        </>
    )
};

export default Navbar;
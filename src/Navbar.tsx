import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props: PropsWithChildren) => {

    const navigate = useNavigate();

    const menuList = [
        { label: "Profile", description: "view Zettaei's profile." },
        { label: "Networks", description: "view Zettaei's related links, social networks, etc..." }
    ] as NavbarButton[];

    let menuButton = {
        w: 32, h: 12
    };
    let settingButton = {
        w: 12, h: 12
    }
    let highlightLinePos = ["50%", "80%", "100%"];

    return (
        <>
            <div>
                <div className={`fixed top-0 left-0 right-0 z-30`}>
                    <div className={`flex w-screen h-${menuButton.h} text-white rounded-sm h-${menuButton.h + 2}
                Menubar-Highlight`}>
                        <div className="bg-[var(--primary-gold)] top-0 h-4 w-full fixed -z-10" />
                        <div className="w-8 h-full bg-neutral-700 me-2 left-0 absolute" />
                        <div className=" px-10 flex space-x-2">

                            {menuList.map((menu) => {
                                return <>
                                    <div className={`w-${menuButton.w} py-1 group`}>
                                        <button
                                            onClick={() => navigate("/" + menu.label.toLowerCase())}
                                            className={`bg-gradient-to-tr from-neutral-700 via-neutral-700 to-white/40
                                    relative w-full h-full bg-black group rounded-sm z-0`}>

                                            <div className={`absolute flex w-full top-1 left-1
                                        bg-white opacity-0 
                                        group-hover:opacity-90
                                        transition-all duration-300 ease-in-out
                                        shadow-xl z-40
                                        `}>
                                                <div className={`absolute flex bg-white
                                        w-full h-${menuButton.h - 1} items-center justify-center text-black z-40`}>
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
                        <div className="w-8 h-full bg-neutral-700 right-0 absolute" />
                    </div>
                </div>
                <div className="absolute h-screen top-0 w-screen Highlight-line z-0"></div>
                <div className="bg-transparent top-[3.8rem] h-3 w-full fixed border-t-4 border-b-4 border-neutral-700 z-20" />
            </div>

            {props.children}
        </>
    )
};

export default Navbar;
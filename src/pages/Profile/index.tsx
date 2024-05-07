import { useContext } from "react";
import globalContext from "../../context/global";
import config from "../../../config";
import ProfileCard from "./ProfileCard";
import AnimeListCard from "./AnimeListCard";

const Profile = () => {

    const global = useContext(globalContext);

    return (
        <div className="w-screen h-screen 
        bg-[radial-gradient(gold_1px,transparent_1px),radial-gradient(gold_2px,rgba(0,0,0,0.6)_2px)]  
        bg-[size:60px_60px] bg-[position:0_0,30px_30px;] -z-50">

            <div className="w-full h-full z-0 flex">
                <div className="absolute w-full pr-[15%] justify-end 
                flex flex-wrap space-y-8 py-28 px-8">

                    <ProfileCard config={config} />
                    <AnimeListCard config={config} />

                </div>
            </div>
        </div>
    )
};

export default Profile;
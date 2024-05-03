import { useContext } from "react";
import globalContext from "../../context/global";

const Profile = () => {

    const global = useContext(globalContext);

    return (
        <div className="w-screen h-screen 
        bg-[radial-gradient(gold_1px,transparent_1px),radial-gradient(gold_2px,rgba(0,0,0,0.6)_2px)]  
        bg-[size:60px_60px] bg-[position:0_0,30px_30px;]">
            
            <div className="grid">
                {[1,2,3,4,5,6,7,8,9,10,11].map((each) => <div>{each}</div>)}
            </div>
        </div>
    )
};

export default Profile;
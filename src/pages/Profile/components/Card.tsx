import { PropsWithChildren } from "react"

function Card(Props: PropsWithChildren) {

    return (
        <div className="flex right-[16%] w-[80%] max-w-[1080px]
                bg-neutral-700/80 text-xl pr-[10%] pl-[6%] py-12
                rounded-s-lg rounded-e-sm justify-end text-white">
            {Props.children}
        </div>
    )
}

export default Card
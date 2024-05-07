import Card from "./components/Card";

interface Props {
    config: Config;
}

function ProfileCard({ config }: Props) {


    return (
        <>
            <Card>
                <div className="flex flex-row space-x-8">

                    <div className="text-right space-y-10 col-span-3 basis-2/3">
                        <div>
                            <div className="italic">name:</div>
                            <div className="leading-8 text-5xl">{config.profile.name}</div>
                        </div>
                        <div>
                            <div className="italic">description:</div>
                            <div className="text-xl leading-5">{config.profile.description}</div>
                        </div>
                    </div>

                    <div className="relative basis-1/3">
                        <a href={"../../" + config.profile.picturePath} rel="noopener"
                            target="_blank" className="after:opacity-0 after:size-full
                            after:bg-black/20 after:block hover:after:opacity-95
                            after:content-['view'] after:text-center after:text-[1.2rem]
                            after:py-[45%]">
                            <img className="rounded-md absolute top-0
                            " src={config.profile.picturePath} alt="Profile Picture" />
                        </a>
                    </div>

                </div>
            </Card>
        </>
    )
}

export default ProfileCard;
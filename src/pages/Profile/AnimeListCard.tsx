import Card from "./components/Card"
import { useEffect, useState } from "react";
import getAnimeFavorite from "./utils/getAnimeFavorite";

interface Props {
    config: Config;
}



function AnimeListCard({ config }: Props) {

    const [animeList, setAnimeList] = useState<animeList>({} as any);

    useEffect(() => {
        getAnimeFavorite().then((data) => {
            setAnimeList(data);
            return data;
        });

    }, []);

    function ShowAnimeList() {
        const maxScore = 10
        const filteredScore = 9;

        return (
            <>
                <div className="grid grid-flow-row grid-cols-4 text-sm text-end">
                    {animeList.data ? animeList.data.map((anime) => {
                        if (anime.list_status?.score >= filteredScore) {
                            return (
                                <div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            {anime.node.main_picture ? (
                                                <img className="w-36"
                                                    src={(() => {
                                                        const tmp = anime.node.main_picture;
                                                        if (tmp.medium) return tmp.medium;
                                                        else if (tmp.large) return tmp.large;
                                                        else if (tmp.small) return tmp.small;
                                                        else return undefined
                                                    })()} />)
                                                : ""}
                                            <div className="absolute bottom-0 right-1">
                                                <div className="text-lg font-bold
                                                text-yellow-500">
                                                    {anime.list_status.score}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>{anime.node.title}</div>
                                </div>
                            )
                        }
                    }
                    )

                        : ""}
                </div>
            </>
        )
    }

    console.log("run ", animeList);

    return (
        <>
            <Card>
                <div className="w-full">
                    <div className="text-3xl w-full font-bold mb-6">
                        Top
                    </div>
                    <div>
                        <ShowAnimeList />
                    </div>
                </div>
            </Card>
        </>
    )
}

export default AnimeListCard
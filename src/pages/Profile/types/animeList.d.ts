

type animeNode = {
    node: {
        id: number,
        main_picture: {
            large: string?;
            medium: string?;
            small: string?;
        },
        title: string
    };
    list_status: any;
}

interface animeList {
    data: animeNode[] | undefined;
    paging: {
        next: string?;
    } | undefined;
}
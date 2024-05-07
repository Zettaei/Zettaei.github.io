
interface Config {

    profile: {
        name: string;
        description: string | undefined;
        picturePath: string;
    };
    animelist: {
        username: string;
        count: number;
    }
    theme: "dark" | "light";

}
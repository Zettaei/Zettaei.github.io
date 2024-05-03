import { createContext } from "react"
import configInterface from "../types/config"

const globalContext = createContext({
    profile: {
        name: ""
    },
    theme: "dark"
} as configInterface)

export default globalContext;
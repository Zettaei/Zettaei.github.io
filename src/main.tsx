import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import appRouters from "./routes/main"
import "./global.css"
import globalContext from './context/global'
import config from "../config.js";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <globalContext.Provider value={config}>
      <RouterProvider router={createBrowserRouter(appRouters)} />
    </globalContext.Provider>
  </>
  ,
)

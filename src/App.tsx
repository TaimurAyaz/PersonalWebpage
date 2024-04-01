import AppRoutes from "./AppRoutes";
import MainPage from "./pages/MainPage";
import { useRoutes } from 'react-router-dom'

function App() {
    const content = useRoutes(AppRoutes)
    return content
}

export default App;

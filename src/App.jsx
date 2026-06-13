import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";

function App() {
    return <Router allRoutes={publicRoutes} />
}

export default App;

import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Register from "./pages/register"
import Simple from "./pages/register"
export const Routes= () =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
)
};
export default Routes;
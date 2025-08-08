import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;
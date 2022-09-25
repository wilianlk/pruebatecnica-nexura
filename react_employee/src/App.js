import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import ShowEmpleado from "./components/ShowEmpleado";
import CreateEmpleado from "./components/CreateEmpleado";
import EditEmpleado from "./components/EditEmpleado";

function App() {
    return (
        <div className="App">
            <div className='container'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<ShowEmpleado/>}/>
                        <Route path='/create' element={<CreateEmpleado/>}/>
                        <Route path='/edit/:id' element={ <EditEmpleado/> } />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

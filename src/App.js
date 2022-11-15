import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Detail from './components/detail/Detail';
import SearchParams from './components/home/SearchParams';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SearchParams />} />
                <Route exact path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>

    );
};

render(<App />, document.getElementById("root"));

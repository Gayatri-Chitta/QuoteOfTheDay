import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Body from './Body';
import Head from './Head';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Head />} />
            <Route path="Body" element={<Body />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

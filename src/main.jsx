import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import SubPage from "./SubPage.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/numbers" element={<SubPage/>} />
          </Routes>
      </HashRouter>
  </StrictMode>,
)

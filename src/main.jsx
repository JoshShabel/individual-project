import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import SubPage from "./subpage/SubPage.jsx";
import Home from "./home/Home.jsx";
import NotFound from "./NotFound.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/notFound" element={<NotFound/>} />
              <Route path="/:page" element={<SubPage/>} />
              <Route path="/:page/:innerPage" element={<SubPage/>} />
          </Routes>
      </HashRouter>
  </StrictMode>,
)

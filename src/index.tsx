import LandingPage from 'pages/LandingPage';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './index.css';
import LoginPage from './pages/LoginPage';

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<LoginPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


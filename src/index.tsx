import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//basename={process.env.PUBLIC_URL}
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // importing the component from the App.jsx file
import Header from './Header.jsx';

createRoot(document.getElementById('root')).render( //render means insert
  <StrictMode>
    <App /> 
    <Header/>
  </StrictMode>,
)

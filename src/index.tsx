import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './custom.css';
import { usersMock } from './mocks/users-mocks';
import { sectionsMock } from './mocks/sections-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App users={usersMock} sections={sectionsMock} />
  </React.StrictMode>
);
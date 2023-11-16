import './App.css';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigator from './components/Navigator';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../src/context/UserContext';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserContextProvider>
        <Navigator />
        <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
        <Outlet />
      </UserContextProvider>
    </Suspense>
  );
}

export default App;

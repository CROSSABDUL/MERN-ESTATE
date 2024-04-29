import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import './index.css';
import 'tailwindcss/tailwind.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './Components/PrivateRoute.jsx';

const router = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-in" element={<Signin />} />
        <Route path="/Sign-up" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route element={<PrivateRoute />}>
          <Route path="/About" element={<About />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap your application in PersistGate */}
      <PersistGate loading={null} persistor={persistor}>
        {router}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);






// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     {/* //<RouterProvider router={router} /> */}
//   </React.StrictMode>,
// )

import React, { useEffect } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setIsCheckedLogin } from './features/auth/authSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(setIsCheckedLogin(true));
    }
  }, [])
  return (
    <BrowserRouter>
      <div className="bg-white">
        <Header />
        <div className="w-[90%] lg:w-[80%] m-auto mt-2 mb-[100px]">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}

            {privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Routes>
        </div>
        <Footer />
      </div >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import { HomePage, ErrorPage, Navbar, Footer, GeographyLandingPage, GeographyQuestions, GeographyFlashcards } from './Pages';
import reportWebVitals from './reportWebVitals';

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path='/geography' element={<GeographyLandingPage />} />
      <Route path="/geography/questions" element={<GeographyQuestions />} />
      <Route path='/geography/flashcards' element={<GeographyFlashcards />} />
      
      <Route path="/*" element={<ErrorPage />} /> {/* Update the wildcard route */}
    </Routes>
  </Router>
);


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    {router}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


/*

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage /> 
  },
  {
    path: "/geography/gcse",
    element: <GeographyPage />
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Navbar />
      <Footer />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


/*

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)

*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

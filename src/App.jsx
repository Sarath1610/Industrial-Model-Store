import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModelListingPage from './pages/ModelListingPage';
import ModelDetailPage from './pages/ModelDetailPage';
// import './App.css'; // You can add global styles here

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ModelListingPage />} />
                <Route path="/models/:id" element={<ModelDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
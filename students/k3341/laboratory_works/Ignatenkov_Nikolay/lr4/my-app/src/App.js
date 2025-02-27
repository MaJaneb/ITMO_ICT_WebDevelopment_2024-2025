import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Main from './components/Main';
import Agents from './components/Agents';
import InsuranceCases from "./components/InsuranceCases"; //
import Organizations from "./components/Organizations";
import CollectiveContracts from "./components/CollectiveContracts";
import Employees from "./components/Employees";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/main" element={<Main />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/insurance-cases"  element={<InsuranceCases />} />
                <Route path="/organizations"  element={<Organizations />} />
                <Route path="/collective-contracts"  element={<CollectiveContracts />} />
                <Route path="/employees"  element={<Employees />} />

            </Routes>
        </Router>
    );
}

export default App;

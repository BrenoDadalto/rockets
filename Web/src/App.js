import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login';
import CadastroUsuario from './pages/cadastro';
import ConfirmarIdade from './pages/confirmarIdade';
import Dashboard from './pages/dashboard';
import Lancar from './pages/lancar';
import Lancamentos from './pages/lancamentos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<CadastroUsuario />} />
        <Route path='/confirmar-idade' element={<ConfirmarIdade />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/programar-lancamento' element={<Lancar />} />
        <Route path='/lancamentos' element={<Lancamentos />} />

        {/* Sempre joga para essa rota */}
        <Route path='*' element={<Navigate to={'/login'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import Test from "./components/test";
import { Routes, Route } from 'react-router-dom';

import ClientPage from './clients';
import AdminLogin from './adminLogin';
import AdminPage from './adminPage';
import NotFound from './notFoundPage';

function App() {
  return (
    // <h1>Hello</h1>
    <Routes >
      <Route path="/" element={< ClientPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/authorized" element={<AdminPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;

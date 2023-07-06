// import Test from "./components/test";
import { Routes, Route } from 'react-router-dom';

import ClientPage from './clients';
import AdminPage from './admin';
import NotFound from './notFoundPage';

function App() {
  return (
    // <h1>Hello</h1>
    <Routes >
      <Route path="/" element={< ClientPage />} >
        <Route path="admin" element={<AdminPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;

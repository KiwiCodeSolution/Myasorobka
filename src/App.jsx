// import Test from "./components/test";
import { Routes, Route } from 'react-router-dom';

import ClientPage from './clients';
import AdminLogin from './adminLogin';
import AdminPage from './adminPage';
import NotFound from './notFoundPage';
import { PrivateRoute, RedirectRoute } from './redirect';

const App = () => {

  return (
    // <h1>Hello</h1>
    <Routes >
      <Route path="/" element={<ClientPage />} />
      <Route path="/admin" element={<RedirectRoute><AdminLogin /></RedirectRoute>} />
      <Route path="/admin/authorized" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default App;

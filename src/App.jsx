// import Test from "./components/test";
import { Routes, Route } from 'react-router-dom';

import ClientPage from './clientPage';
import AdminLogin from './adminLogin';
import AdminPage from './adminPage';
import NotFound from './notFoundPage';
import { PrivateRoute, RedirectRoute } from './redirect';
import Orders from './adminSections/orders';
import AdminProducts from './adminSections/adminProducts';

const App = () => {

  return (
    <Routes >
      <Route path="/" element={<ClientPage />} />
      <Route path="/admin" element={<RedirectRoute><AdminLogin /></RedirectRoute>} />
      <Route path="/admin/authorized" element={<PrivateRoute><AdminPage /></PrivateRoute>} >
        <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path="products" element={<PrivateRoute><AdminProducts /></PrivateRoute>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default App;

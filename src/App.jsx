import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  AppLayout,
  CityList,
  Home,
  Login,
  PageNotFound,
  Pricing,
  Product,
} from './pages';
import { City, CountryList, Form } from './components';
import { CitiesProvider } from './contexts/CitiesContex';

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;

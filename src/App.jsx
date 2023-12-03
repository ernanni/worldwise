/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AppLayout,
  CityList,
  Home,
  Login,
  PageNotFound,
  Pricing,
  Product,
} from './pages';
import { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:8000';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCities() {
    const res = await fetch(`${BASE_URL}/cities`);
    const data = await res.json();
    setCities(data);
  }

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchCities();
    } catch (error) {
      alert('There was an error loading data...');
      console.error(`Please verify if you're runnin the JSON Server`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

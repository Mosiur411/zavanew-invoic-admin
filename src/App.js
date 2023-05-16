import { Route, Routes, redirect, useNavigate } from 'react-router-dom';
import { AuthContext, ThemeContext } from './utils/Context';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

// import './assets/css/vendors/bootstrap.css';
// import './assets/css/vendors/bootstrap.css.map';
// import './assets/css/vendors/material-icon-round.css';
// import './assets/css/vendors/normalize.css';
// import './assets/css/vendors/select2.min.css';
import Home from './pages/Home';
import List from './pages/products/List';
import Grid from './pages/products/Grid';
import Grid2 from './pages/products/Grid2';
import Categories from './pages/products/Categories';
import OrderList1 from './pages/order/OrderList1';
import OrderList2 from './pages/order/OrderList2';
import OrderDetail from './pages/order/OrderDetail';
import SellerCard from './pages/seller/SellerCard';
import SellerList from './pages/seller/SellerList';
import SellerProfile from './pages/seller/SellerProfile';
import SettingSample1 from './pages/Setting/SettingSample1';
import SettingSample2 from './pages/Setting/SettingSample2';
import Forbidden from './pages/Forbidden';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AddProduct1 from './pages/products/AddProduct1';
import AddProduct4 from './pages/products/AddProduct4';
import AddProduct3 from './pages/products/AddProduct3';
import AddProduct2 from './pages/products/AddProduct2';
import Transaction1 from './pages/transaction/Transaction1';
import Transaction2 from './pages/transaction/Transaction2';
import Brands from './pages/Brands';
import Statistics from './pages/Statistics';
import StarterPage from './pages/StarterPage';
import Reviews from './pages/Reviews';
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './helpers/private/ProtectedRoutes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/Firebase.config';
import Verified from './pages/auth/Verified';
import Spinner from './helpers/shared/Spinner';
import PublicRoutes from './helpers/public/PublicRoutes';
import Department from './pages/products/Department';
import SubCategories from './pages/products/SubCategories';
import ChildSubCategory from './pages/products/ChildSubCategory';
function App() {
  const [user, loading, error] = useAuthState(auth);
  const [dark, setDark] = useState(false);
  const [handelClick, setSandelClick] = useState({
    zoom: {
      open: false
    },
    profile: {
      open: false
    }

  });
  useEffect(() => {
   
  }, [user])
  if (loading) {
    return (
      <Spinner />
    );
  }


  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      <ThemeContext.Provider value={{ dark, setDark, handelClick, setSandelClick }}>
        <div className={`${dark ? 'dark' : ''}`}>
          <Routes>
            {
              user ? <Route path="" element={<ProtectedRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                {/* product */}
                <Route path="product">
                  <Route path="list" element={<List />} />
                  <Route path="grid" element={<Grid />} />
                  <Route path="grid2" element={<Grid2 />} />
                  <Route path="categorie" element={<Categories />} />
                  <Route path="department" element={<Department />} />
                  <Route path="subcategorie" element={<SubCategories />} />
                  <Route path="childsubcategory" element={<ChildSubCategory />} />
                </Route>
                {/* addProduct */}
                <Route path="addproduct">
                  <Route path="1" element={<AddProduct1 />} />
                  <Route path="2" element={<AddProduct2 />} />
                  <Route path="3" element={<AddProduct3 />} />
                  <Route path="4" element={<AddProduct4 />} />
                </Route>

                {/* order  */}
                <Route path='order'>
                  <Route path='list1' element={<OrderList1 />} />
                  <Route path='list2' element={<OrderList2 />} />
                  <Route path='detail' element={<OrderDetail />} />
                </Route>
                {/* seller  */}
                <Route path='seller'>
                  <Route path='cards' element={<SellerCard />} />
                  <Route path='list' element={<SellerList />} />
                  <Route path='profile' element={<SellerProfile />} />
                </Route>
                {/* Transaction */}
                <Route path='transaction'>
                  <Route path='1' element={<Transaction1 />} />
                  <Route path='2' element={<Transaction2 />} />
                </Route>

                {/* settings  */}
                <Route path='settings'>
                  <Route path='sample1' element={<SettingSample1 />} />
                  <Route path='sample2' element={<SettingSample2 />} />
                </Route>
                {/* single */}
                <Route path='brands' element={<Brands />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='starterpage' element={<StarterPage />} />
              </Route> : <Route path="" element={<PublicRoutes />}>
                <Route path='/' element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
              </Route>
            }
            {/* auth  */}
            <Route path='verifie' element={<Verified />} />
            <Route path='*' element={<Forbidden />} />
          </Routes>
        </div>
        <ToastContainer position="top-right" newestOnTop />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

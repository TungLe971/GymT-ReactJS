import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoutes from './layouts/PrivateRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Layout from './layouts/Layout';
import UserList from './components/user/UserList';
import UserEdit from './components/user/UserEdit';
import Home from './components/Outside/Home/Home';
import Programs from './components/Outside/Programs/Programs';
import Reasons from './components/Outside/Reasons/Reasons';
import Plans from './components/Outside/Plans/Plan';
import Testimonials from './components/Outside/Testimonials/Testimonials';
import Join from './components/Outside/Join/Join';
import Footer from './components/Outside/Footer/Footer';
import MemberList from './components/Member/MemberList';
import MemberAdd from './components/Member/MemberAdd';
import MemberEdit from './components/Member/MemberEdit';
import PackagesList from './components/Packages/PackagesList';
import PackagesAdd from './components/Packages/PackagesAdd';
import PackagesEdit from './components/Packages/PackagesEdit';
import StaffList from './components/Staff/StaffList';
import StaffAdd from './components/Staff/StaffAdd';
import StaffEdit from './components/Staff/StaffEdit';
import EquipmentList from './components/Equipment/EquipmentList';
import EquipmentAdd from './components/Equipment/EquipmentAdd';
import EquipmentEdit from './components/Equipment/EquipmentEdit';
import FoodList from './components/Food/FoodList';
import FoodAdd from './components/Food/FoodAdd';
import FoodEdit from './components/Food/FoodEdit';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/user/edit/:id" element={<UserEdit />} />
              <Route path="/register" element={<Register />} />
              <Route path="/member" element={<MemberList />} />
              <Route path="/member/add" element={<MemberAdd />} />
              <Route path="/member/edit/:id_hv" element={<MemberEdit />} />
              <Route path="/staff" element={<StaffList />} />
              <Route path="/staff/add" element={<StaffAdd />} />
              <Route path="/staff/edit/:id_nv" element={<StaffEdit />} />
              <Route path="/packages" element={<PackagesList />} />
              <Route path="/packages/add" element={<PackagesAdd />} />
              <Route path="/packages/edit/:id_packages" element={<PackagesEdit />} />
              <Route path="/equipment" element={<EquipmentList />} />
              <Route path="/equipment/add" element={<EquipmentAdd />} />
              <Route path="/equipment/edit/:id_equipment" element={<EquipmentEdit />} />
              <Route path="/food" element={<FoodList />} />
              <Route path="/food/add" element={<FoodAdd />} />
              <Route path="/food/edit/:id_food" element={<FoodEdit />} />
            </Route>
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
      <div className="App">
        <Home />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </div>
    </div>
  );
}

export default App;

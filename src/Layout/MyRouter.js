import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from '../component/Home';
import { About } from '../component/About';
import { Shop } from '../component/Shop';
import { Pages } from '../component/Pages';
import { Contact } from '../component/Contact';
import { Shoppingcart } from '../component/ShoppingCart';
import { WhishList } from '../component/WhishList';
import { ViewCart } from '../component/VeiwCart';
import { CheckOut } from '../component/CheckOut';
import { Login } from '../component/Login';
import { Singup } from '../component/Singup';
import { DashboardLyout } from './DashboardLayout';
import { AuthenticationLayout } from './AuthenticationLayout';
import { Account } from '../component/Account';
import { PageNotFound } from '../component/PageNotFound';

export const MyRouter = () => {
  return (
    <Routes>
      <Route element={<DashboardLyout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        {/* <Route path='/pages' element={<Pages />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/shoppingcart' element={<Shoppingcart />} />
        <Route path='/whishtlist' element={<WhishList />} />
        <Route path='/viewcart' element={<ViewCart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/account' element={<Account/>}/>
        <Route path='/pagenotfound' element={<PageNotFound/>}/>
      </Route>
      <Route element={<AuthenticationLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
      </Route>
    </Routes>
  )
}

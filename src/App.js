import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header';
import List from './Components/List';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import DetailsItem from './Components/DetailsItem';
import Shop from './Components/Shop';
import PrivateRoute from './Components/PrivateRoute';
import { products } from './data.js'

function App() {
  const [listProducts, setListProducts] = useState(products)
  const [user, setUser] = useState({ email: '', name: '', password: '', connect: false })
  const [shop, setShop] = useState({ articles: [], total: 0 })
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      {user.connect && <Shop shop={shop} />}

      <div className="App">
        <Routes>
          <Route path='/' element={<List listProducts={listProducts} setListProducts={setListProducts} user={user} />} />
          <Route path='/SignIn' element={<SignIn setUser={setUser} user={user} />} />


          <Route path='/Profile' element={
            <PrivateRoute user={user}>
              <Profile user={user} />
            </PrivateRoute>
          } />

          <Route path='/Details/:id' element={<DetailsItem listProducts={listProducts} shop={shop} setShop={setShop} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

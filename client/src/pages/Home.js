import Announcement from '../Components/Announcement'
import React from 'react'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import ProductList from '../Components/ProductList'
import CategoryItem from '../Components/CategoryItem'
import {axiosInstance} from '../config'

const Home = () => {
  console.log("currentUser order:" + sessionStorage.getItem('currentUser') );
    if(sessionStorage.getItem('currentUser') === null){
      const DeleteOrders = () =>{
        axiosInstance.delete(`http://localhost:5000/api/orders`)
        .then( res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      }
      
      DeleteOrders();
    }
  return (
    <div>
        
        <Navbar/>
        <Announcement/>
        <Categories/>
        <ProductList/>
        
    </div>
  )
}

export default Home

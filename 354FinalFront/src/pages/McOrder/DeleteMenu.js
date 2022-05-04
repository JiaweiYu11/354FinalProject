import axios from "axios";
import { Component } from "react/cjs/react.production.min";
import NaviOrder from "../naviOrder";
//import { useState } from 'react';
import AddToCart from "./AddToCart"

const api = axios.create({
    baseURL: 'http://localhost:3000/mcD'
  })
      
//check food type
/* function FoodType(params) {
      
} */
class DeleteMenu extends Component {


    state = {
      mcD: []
    }

    constructor() {
      super();
      this.getMcD();
    }

    getMcD = async () => {
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ mcD: data })
    }
    

    //delete menu include in api
    deleteMcD = async (id) => {
        await api.delete(`/${id}`)
        this.getMcD();
    }

    addToCart = async (id) => {
      let data = await api.get('/').then(response => response.data.filter(item => item.id == id));
      this.setState({ mc: data })
      
      console.log({ mc: data })
      axios.post('http://localhost:3000/comments', 
      { mc: data },
      )
      .then(response => console.log(response.data.cartData))
      .catch(error => console.log(error))
    }


    render() {
      return (
          
        <div className="container">
           <NaviOrder />


          {this.state.mcD.map(post =>
            <div key={post.id}>
              <h3>
                  {post.dishName}
                  {/* <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>this.deleteMcD(post.id)}>Delete Product</button> */}
              </h3>

              <p>Product Type: {post.type}</p><img alt="burger" src={post.url} />
              <p>Description: {post.desc}</p>
              <p>Price: {post.price}$<button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>this.addToCart(post.id)}>Add Product</button></p>
              
              
                    <p>---------------------------------------------------</p>
            </div>
          )}
        </div>
      )
    }
  }

  export default DeleteMenu

/*   import axios from "axios";
import { Component } from "react/cjs/react.production.min";


const api = axios.create({
    baseURL: 'http://localhost:3000/mcD'
  })

class DeleteMenu extends Component {

    state = {
      mc: [],
      //cartData: [],
    }

    constructor() {
      super();
      this.getMcD();
    }

    getMcD = async () => {
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ mc: data })
    }
    

    //delete menu include in api
    deleteMcD = async (id) => {
        await api.delete(`/${id}`)
        this.getMcD();
    }
    
    addToCart = async (id) => {
      let data = await api.get('/').then(response => response.data.filter(item => item.id == id));
      this.setState({ mc: data })
      
      console.log({ mc: data })
      axios.post('http://localhost:3000/comments', 
      { mc: data },
      )
      .then(response => console.log(response.data.cartData))
      .catch(error => console.log(error))
    }


    render() {
      return (
          
        <div className="container">
          {this.state.mc.map(post =>
            <div key={post.id}>
              <h3>
                  {post.dishName}
                  <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>this.deleteMcD(post.id)}>Delete Product</button>
                    <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>this.addToCart(post.id)}>Add Product</button>
              </h3>
              <p>Product Type: {post.type}</p>
              <p>Description: {post.desc}</p>
              <p>Price: {post.price}$</p>
              
            </div>
          )}
        </div>
      )
    }
  }

  export default DeleteMenu */
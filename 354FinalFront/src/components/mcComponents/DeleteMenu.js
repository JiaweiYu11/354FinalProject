import axios from "axios";
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

  export default DeleteMenu

/* import axios from "axios";
import { useState } from 'react';
import { Component } from "react/cjs/react.production.min";
import AddToCart from "../../pages/McOrder/AddToCart";

const api = axios.create({
    baseURL: 'http://localhost:3000/mcD'
  })

function DeleteMenu() {

    // state = {
    //   mcD: []
    // }

    const getMcD = async () => {
      // let data = await api.get('/').then(({ data }) => data);
      let data = await axios.get('http://localhost:3000/mcD').then(({ data }) => data)
      setMCd(data)
      // //this.setState({ mcD: data })
      // console.log(data);
      // setMCd(data);
      // await axios.get('http://localhost:3000/mcD')
      //     .then(response => setMCd(response.data))
      //     .then(error => console.log(error))
    }

    const [mcD, setMCd] = useState([getMcD()])
    const [cartData, setCartData] = useState([])
    // constructor() {
    //   super();
    //   this.getMcD();
    // }

    
    console.log(mcD);

    //delete menu include in api
    const deleteMcD = async (id) => {
        await api.delete(`/${id}`)
        getMcD();
    }

    const addToCart = async (id) => {
      axios.get('http://localhost:3000/mcD')
      .then(response => setCartData(response.filter(item => item.id == id)))
      .catch(error => console.log(error))

      axios.post('http://localhost:3000/comments', {
        cartData,
      })
      .then(response => console.log(response.data.cartData))
      .catch(error => console.log(error))
    }

    //render() {
      return (
          
        <div className="container">
          {mcD.map(post =>
            <div key={post.id}>
              <h3>
                  {post.dishName}
                  <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>deleteMcD(post.id)}>Delete Product</button>
                  <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>addToCart(post.id)}>Add To Cart</button>
              </h3>
              <p>Product Type: {post.type}</p>
              <p>Description: {post.desc}</p>
              <p>Price: {post.price}$</p>
              
            </div>
          )}
        </div>
      )
    //}
  }

  export default DeleteMenu; */
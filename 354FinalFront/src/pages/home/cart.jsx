import axios from "axios";
import { Component } from "react/cjs/react.production.min";
import NaviOrder from "../naviOrder/index"


const api = axios.create({
    baseURL: 'http://localhost:3000/comments'
  })
  const api2 = axios.create({
    baseURL: 'http://localhost:3000/comments/mc'
  })
class Cart extends Component {

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
        await api2.delete(`/${id}`)
        this.getMcD();
    }
    



    render() {
      return (
          
        <div className="container">
            <NaviOrder />
          {this.state.mc.map(post =>
            <div key={post.mc[0].id}>
              <h3>
                  {post.mc[0].dishName}
                  <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>this.deleteMcD(post.mc[0].id)}>Delete Product</button>
              </h3>
              <p>Product Type: {post.mc[0].type}</p>
              <p>Description: {post.mc[0].desc}</p>
              <p>Price: {post.mc[0].price}$</p>
              <p>---------------------------------------------------</p>
              
            </div>
          )}
        </div>
      )
    }
  }

  export default Cart
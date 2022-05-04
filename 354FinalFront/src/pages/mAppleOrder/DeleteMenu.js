import axios from "axios";
import { Component } from "react/cjs/react.production.min";


const api = axios.create({
    baseURL: 'http://localhost:3000/applebee'
  })

class DeleteMenu extends Component {

    state = {
      applebee: []
    }

    constructor() {
      super();
      this.getMcD();
    }

    getMcD = async () => {
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ applebee: data })
    }
    

    //delete menu include in api
    deleteMcD = async (id) => {
        await api.delete(`/${id}`)
        this.getMcD();
    }


    render() {
      return (
          
        <div className="container">
          {this.state.applebee.map(post =>
            <div key={post.id}>
              <h3>
                  {post.dishName}
                  {/* <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>this.deleteMcD(post.id)}>Delete Product</button> */}
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
import React from 'react';
import { useState } from 'react';
import axios, { Axios } from 'axios';

function AddToCart() {
    const api = 'http://localhost:3000/comments'
    const [data, setData] = useState({
        dishName: "",
        desc: "",
        price: ""
    })
    
    function submit(e) {
         e.preventDefault();
         axios.post(api,{
             dishName: data.dishName,
             desc: data.desc,
             price: data.price
         })
         .then(res=>{
             console.log(res.data)
         })
    }
  
    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div className="container">
                <div className="col-md-6 mb-4">
                    <form onSubmit={(e)=> submit(e)}>
                        {/* 
                        <div className="mb-3">
                            <label htmlFor="postTitle" className="form-label">Post Title</label>
                            <input className="form-control" id="ptitle" value={data.ptitle} onChange={(e) => handle(e)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contentInput" className="form-label">Blog Post</label>
                            <textarea className="form-control" id="blog" rows="3" value={data.blog} onChange={(e) => handle(e)}></textarea>
                        </div> */}
                        {data.dishName}
                        <div>
                            <button id="dishName" type="submit" className="btn btn-primary">Add to cart</button>
                        </div>
                    </form>
                </div>
            </div>
      )
    }
    
    export default AddToCart
  
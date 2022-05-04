import React from 'react';
import { useState } from 'react';
import axios, {} from 'axios';


function AddMenu() {
    const api = 'http://localhost:3000/kfc'
    const [mc, setData] = useState({
        dishName: "",
        type: "",
        desc: "",
        price:"",
       
    })
    function submit(e) {
         e.preventDefault();
         axios.post(api,{
             dishName: mc.dishName,
             type: mc.type,
             desc: mc.desc,
             price: mc.price,
             
         })
         .then(res=>{
             console.log(res.mc)
         })
    }

    function handle(e) {
        const newmc = {...mc}
        newmc[e.target.id] = e.target.value
        setData(newmc)
        console.log(newmc)
    }

    function Reload(){
        window.location.reload();
    }

  return (
    <div className="container">
            <div className="col-md-6 mb-4">
                <h1>Add New Product on Menu</h1>
                <form onSubmit={(e)=> submit(e)}>
                    <div className="mb-2">
                        <select className="form-select" aria-label="User select" id="type" value={mc.type} onChange={(e) => handle(e)}>
                            <option value="defaultValue">What type of food</option>
                            <option value="1 - Burger">Burger</option>
                            <option value="2 - Snack">Snack</option>
                            <option value="3 - Ice cream">Ice cream</option>
                            <option value="4 - Drink">Drink</option>
                            <option value="5 - Salad">Salad</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="kfcTitle" className="form-label">Dish Name</label>
                        <input className="form-control" id="dishName" value={mc.dishName} onChange={(e) => handle(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="kfcTitle" className="form-label">Enter the Price</label>
                        <input className="form-control" id="price" value={mc.price} onChange={(e) => handle(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contentInput" className="form-label">Desctiption</label>
                        <textarea className="form-control" id="desc" rows="3" value={mc.desc} onChange={(e) => handle(e)}></textarea>
                    </div>
                    <div>
                        <button onClick={Reload} type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AddMenu
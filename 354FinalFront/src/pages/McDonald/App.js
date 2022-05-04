
//import StyleLink from "./components/style";
import Menus from "../../components/mcComponents/Menus";
import AddMenu from "../../components/mcComponents/AddMenu";
import { useState } from 'react';

function App() {

  const [menus] = useState([
    {
      dishName: '',
      type: '',
      desc: '',
      price: '',
    },
  ])

  return (
    <div className='container'>
      
      
      <AddMenu  />
      <Menus menus={menus} /> 

    </div>
  );
}

export default App;
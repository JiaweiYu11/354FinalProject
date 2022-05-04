
//import StyleLink from "./components/style";
import Menus from "../../components/abeeComponents/Menus";
import AddMenu from "../../components/abeeComponents/AddMenu";
import { useState } from 'react';

function App() {

  const [menus] = useState([
    {
      ptitle: '',
      user: '',
      menu: '',
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
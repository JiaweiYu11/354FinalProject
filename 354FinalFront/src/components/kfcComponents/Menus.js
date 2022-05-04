import Menu from "./Menu";


const Menus = ({menus, onDelete}) => {
  return (
    <>
      {menus.map((menu) => (
      <Menu 
         key={menu.id} 
         menu={menu} 
         onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Menus
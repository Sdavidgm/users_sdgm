import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './Hooks/useCrud';
import FormUser from './components/FormUser.jsx';
import CardUser from './components/CardUser.jsx';

function App() {
  const [btnTitle, setBtnTitle] = useState('')
  const [title, setTitle] = useState(' ');
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState();
  const url = 'https://users-crud.academlo.tech';
  
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
    getUsers('/users/');
  }, []);
  
  //console.log(users);
   
  const handleOpen = ()=>{
    setIsOpen(true);
    setTitle('Nuevo usuario');
    setBtnTitle('Agregar nuevo usuario');
  }
  
  return (
    <div className='app_container'>
      <div className='app_info'>
      <h2 className='app_name'>USUARIOS</h2>
      <button className='app_btn' onClick={handleOpen}>
        + Crear nuevo usuario
      </button>
      </div>
      <FormUser
      createUser={createUser}
      editUser={editUser}
      updateUser={updateUser}
      setEditUser={setEditUser}
      isOpen={isOpen}
      title={title}
      setIsOpen={setIsOpen}
      btnTitle={btnTitle}
      setBtnTitle={setBtnTitle}
      
      />
      <div className='app_user'>
        {
          users?.map(user => (
            <CardUser 
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}
            title={title}
            setTitle={setTitle}
            btnTitle={btnTitle}
            setBtnTitle={setBtnTitle}
           
            />
          ))
        }
    </div>
      </div>
      
    
  )
    
  
}

export default App

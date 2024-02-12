import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen, setTitle, setBtnTitle}) => {

    const handleDelete =()=>{
        deleteUser('/users', user.id);
    }

    const handleEdit = ()=>{
        setEditUser(user);
        setIsOpen(true);
        setTitle('Editar Usuario');
        setBtnTitle('Guardar cambios');
    }

  return (
    <article className='container'>
        <h3 className='name_card'>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='list_card'>
            <li className='item_card'><span>CORREO</span><br /><span>{user.email}</span></li>
            <li className='item_card'><span>CUMPLEAÑOS</span><br /><ion-icon name="gift-outline"></ion-icon> <span> {user.birthday}</span></li>
        </ul>
        <hr />
        <div className='card_btn'>
            <button 
                className='btn_delete'
                onClick={handleDelete}>
                    <ion-icon name="trash-outline"></ion-icon></button>
            <button 
                className='btn_edit'
                onClick={handleEdit}>
                    <ion-icon name="create-outline"></ion-icon>
            </button>
        </div>
    </article>
  )
}

export default CardUser;
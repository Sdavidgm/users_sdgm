import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css';

const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen, setTitle, title, btnTitle, setBtnTitle}) => {

    
    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
      reset(editUser);
    }, [editUser]);
    

    const submit = (data)=>{
        if(editUser){
            updateUser('/users', editUser.id, data);
            setEditUser();
              
            
        } else {
            createUser('/users', data);
            setBtnTitle('Agregar nuevo usuario');
            
        
        }
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:'',
            
        });
        
        setIsOpen(false);

    }

    const handleClose = () =>{
        setIsOpen(false);
    }


  return (
    <div className={`form_background ${isOpen&&'able'}`}>
        <form className='form_container' onSubmit={handleSubmit(submit)}>
            <div className='form_close' onClick={handleClose}>
            <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <h2 className='form_title'>{title}</h2>
            <div className='form_item'>
                <label htmlFor="first_name">Nombre</label> <br />
                <input {...register('first_name')} id='first name' className='form_input' type="text" />
            </div>
            <div className='form_item'>
                <label htmlFor="last_name">Apellidos</label> <br />
                <input {...register('last_name')} id='last name' className='form_input' type="text" />
            </div>
            <div className='form_item'>
                <label htmlFor="email">Correo</label> <br />
                <input {...register('email')} id='email' className='form_input'type="email" />
            </div>
            <div className='form_item'>
                <label htmlFor="password">Contraseña</label> <br />
                <input {...register('password')} id='password'className='form_input' type="password" />
            </div>
            <div className='form_item'>
                <label htmlFor="birthday">Cumpleaños</label><br />
                <input {...register('birthday')} id='birthday' className='form_input' type="date" />
            </div>
            <button className='form_btn'>{btnTitle}</button>
        </form>
    </div>
    
  )
}

export default FormUser;
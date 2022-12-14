import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import '../TodoFormulario/TodoForm.css'

export const TodoFormulario = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
    const {
      totalTodos,
      addTodo,
      setOpenModal,
    } = useContext(TodoContext);

    const onChange = (event) => {
      setNewTodoValue(event.target.value)
    }
    const onCancelar = () => {
      setOpenModal(false);
    }
    
    const onSubmit = (event) => {
      event.preventDefault();
      if (newTodoValue === '') {
        alert('Debes escribir una tarea');
      } else {
        addTodo(newTodoValue);
        alert('Bien!... tarea añadida');
        setOpenModal(false);
      }   
    }

  return (
    <form onSubmit={onSubmit}>
      <label>New task</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        type='text' 
        placeholder='Escribe la tarea'/>
      <p>Task # {totalTodos + 1}</p>
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancelar}
          >
            Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button--add"
          type='submit'
          >
            Añadir
        </button>
      </div>
    </form>
  );
}



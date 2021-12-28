import React, { useState} from 'react';

/// Modifica el componente para que se puedan agregar tareas

function App() {
  const [list, changeList] = useState([
    'Sacar la ropa', 
    'Hacer la cama', 
    'Leer un rato'
  ]);
  
  const [newItem, setNewItem] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    newItem != '' ? changeList ([...list,newItem]):setNewItem ('');
    setNewItem ('')
  }

  const onChange = (e) => {
    setNewItem (e.target.value)
  }

  return (
    <div className='wrapper'>
      <div className='list'>
        <h3>Por hacer:</h3>
        <ul className='todo'>
          {list.map((e, index)=>{return <li key = {index}>{e}</li>})}
        </ul>
          <form 
          onSubmit = {onSubmit}>
            <input 
            value={newItem}
            type='text' 
            id='new-task' 
            placeholder='Ingresa una tarea y oprime Enter'
            onChange={onChange}
             />
          </form>
      </div>
    </div>
  )
  
}


export default App;

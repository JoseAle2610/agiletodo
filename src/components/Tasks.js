import {useState, useEffect, useCallback} from 'react'
import {fetcher} from 'lib/fetcher'
import {InputAddon} from 'uicomponents/Input'
import {TableContainer, Col} from 'uicomponents/Table'


export const Tasks = (props) => {

  const [tareas, setTareas] = useState([])
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    fetcher(props.apiUrl).then(json => setTareas(json))
  }, [])

  const handleAddTodo = (value) => {
    fetcher(`${props.apiUrl}`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
        body: JSON.stringify({name: value})
    }).then(json => setTareas(prev => [...prev, json]))
      .catch(err => console.log(err))
  }

  const handleDeleteTodo = (id) => {
    fetcher(`${props.apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(json => {
      console.log(json)
      setTareas(prev => prev.filter(e => e.id !== id))
    })
  }

  const handleChangeTodo = useCallback((id, event) => {
    setTareas(prev => {
      const index = prev.findIndex(e => e.id === id)
      prev[index][event.target.name] = event.target.type == 'checkbox'? event.target.checked : event.target.value 
      return [...prev]
    })
  }, [])

  const updateTodo = (id) => {
    const data = tareas.find(e => e.id === id)
    console.table(data)
    fetcher(`${props.apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...data})
    }).then((json) => console.log(json))
  }

  return (
    <>
      <h1 className='title'>Tareas</h1>
      <InputAddon 
        placeholder='NuevaTarea'
        buttonLabel='Agregar'
        onSubmit={handleAddTodo}
      />
      {alerts.map((e, index)=> (
        <article key={index} className={`message is-${e.color}`}>
          <div className="message-body">
            {e.message}
            <button 
              className='delete' 
              style={{float: 'right'}}
              onClick={() => setAlerts(prev => prev.filter((x) => x.message !== e.message))}
            ></button>
          </div>
        </article>
      ))
      }
      <TableContainer 
        data={tareas}
        onUpdateRow={handleChangeTodo}
        update={updateTodo}
      >
        <Col title='id' data='id'/>
        <Col title='Nombre' data='name' type='editable'/>
        <Col title='Fecha tope' data='deadline' type='date'/>
        <Col title='Estado' data='ready' type='check' />
        <Col title='Borrar' type='action' action={handleDeleteTodo}/>
      </TableContainer>
    </>
  )
}

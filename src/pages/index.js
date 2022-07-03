import { useState, useEffect } from 'react'
import {HomeTemplate} from 'templates/HomeTemplate'
import {Table, Cell} from 'components/Table'
import {TagList} from 'components/Tag'
import {InputAddon} from 'components/Input'
import {fetcher} from 'utils/fetcher'

export default function Home() {

  const [metas , setMetas] = useState([])
  const [tareas, setTareas] = useState([])
  const tableHeaders = [
    'name',
    'importance',
    'deadline',
    'borrar'
  ]

  useEffect(() => {
    fetcher('https://62c0e85fc134cf51ced58604.mockapi.io/api/tasks')
      .then(json => setTareas(json))
    fetcher('https://62c0e85fc134cf51ced58604.mockapi.io/api/goals')
      .then(json => setMetas(json))
  },[])

  // metas

  const handleDeleteMeta = (title) => {
    setMetas(metas.filter(e => e.title !== title))
  }
  const addMeta = (title) => {
    title = title.trim()
    if (metas.find(e => e.title === title)){
      alert(`La meta ${title} ya ha sido agregada`)
      return
    }
    setMetas([...metas, {id: metas.length +1, title:title}])
  }
  const handleChangeMeta = (e, title) => {
    if (metas.find(meta => e.target.value === meta))
      return
    setMetas(metas.map(meta => {
      if (meta.title == title){
        return e.target.value
      }
      return meta
    }))
  }

  const handleChangeTodo = (id, key, data) => {
    const index = tareas.findIndex(e => e.id === id)
    setTareas(prev => {
      prev[index][key] = data
      return [...prev]
    })
  }

  const onUpdateTodo = (data) => {
    fetch('https://62c0e85fc134cf51ced58604.mockapi.io/api/tasks/'+data.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...data})
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

  // tareas

  const addTarea = (title) => {
  }

  return (
    <HomeTemplate title='AgileTodo'>
      <h1 className='title'>Metas</h1>
      <InputAddon
        placeholder='Nueva Meta'
        buttonLabel='Agregar'
        addMeta={addMeta}
      />

      <TagList 
        tags={metas} 
        handleDelete={handleDeleteMeta}
        handleChange={handleChangeMeta}
      />

      <h1 className='title'>Tareas</h1>

      <InputAddon 
        placeholder='Tarea nueva'
        buttonLabel='Agregar'
        addMeta={addTarea}
      />

      <Table
        tableData={tareas}
        onChangeTodo={handleChangeTodo}
        onUpdate={onUpdateTodo}
      >
        <Cell title='id' data='id' />
        <Cell title='Nombre' data='name' />
        <Cell title='Importancia' data='importance' type='select' />
        <Cell title='Fecha tope' data='deadline' />
        <Cell title='Estado' data='ready' type='check' />
        <Cell title='Borrar' type='action' action={(row) => console.log(row)} />
      </Table>
    </HomeTemplate>
  )
}

import {useState, useEffect} from 'react'
import {fetcher} from 'lib/fetcher'
import {InputAddon} from 'components/Input'
import {TagList} from 'components/Tag'


export const Goals = ({apiUrl}) => {

  const [goals, setGoals] = useState([])

  useEffect(() => {
    fetcher(apiUrl).then(json => setGoals(json))
  }, [])

  const handleDeleteMeta = (data) => {
    fetcher(`${apiUrl}/${data.id}`, {
      method: 'DELETE',
    }).then(() => setGoals(prev => prev.filter(e => e.id !== data.id)))
  }
  const addGoal = (title) => {
    title = title.trim()
    fetcher(`${apiUrl}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({title: title})
    }).then(json => setGoals(prev => [...prev, json] ))
  }
  const handleChangeMeta = (e, data) => {
    setGoals(prev => prev.map(i => {
      if (i.id === data.id) {
        i.title = e.target.value
      }

      return i
    }))
  }
  const updateGoal = (data) => {
    fetcher(`${apiUrl}/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(json => console.log(json))
  }

  return (
    <>
      <h1 className='title'>Tareas</h1>
      <InputAddon 
        placeholder='NuevaTarea'
        buttonLabel='Agregar'
        onSubmit={addGoal}
      />
      <TagList 
        tags={goals}
        handleChange={handleChangeMeta}
        handleDelete={handleDeleteMeta}
        update={updateGoal}
      />
    </>
  )
}

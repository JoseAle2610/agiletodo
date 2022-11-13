import {useState, Children} from 'react'
import {Row} from './Row'

export const Col = ({title}) => {
  return (
    <td>{title}</td>
  )
}

export const Table = ({data, onUpdateRow, update, children}) => {

  const [idRowEditing, setIdRowEditing] = useState()

  const cols = Children.map(children, child => {
    if (child.type !== Col) return
    return child
  })

  return (
    <>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
          {cols.map(e => e)}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <Row 
              key={row.id} 
              data={row}
              cols={cols} 
              onChange={(e) => {
                onUpdateRow(row.id, e)
              }}
              onFocus={() => {
                if (idRowEditing === undefined || !data.some(e => e.id === idRowEditing)){
                  setIdRowEditing(row.id)
                  return
                }
                if(idRowEditing !== row.id){
                  update(idRowEditing)
                  setIdRowEditing(row.id)
                }
              }}
            />
          ))}
        </tbody>
      </table>
   </>
  )
}

import {useState, Children, cloneElement} from 'react'
import {SpanEdit} from 'components/Input'
export const Cell = (props) => {
  return (
    <th className={props.selected && 'is-selected'} 
      onClick={props.onClick}
    >{props.title}</th>
  )
}

export const Table = ({tableData, onChangeTodo, onUpdate, ...props}) => {

  const [rowDisplayNumber, setRowDisplayNumber] = useState(10)
  const [pageDisplay, setPageDisplay] = useState(1)
  const [cellSelected, setCellSelected] = useState(null)
  const [search, setSearch] = useState('')
  const [rowEditing, setRowEditing] = useState()

  const handleColumnSelected = (title, data) => {
    if (!data) return
    if (cellSelected && cellSelected.data === data) {
      setCellSelected({title, data, highest: !cellSelected.highest})
      console.log('chick again', cellSelected)
      return
    }
    setCellSelected({title , data, highest: true})
  }
  const cells = Children.map(props.children, child => {
    if (child.type !== Cell) return
    return cloneElement(child, {
      ...child.props,
      onClick: () => handleColumnSelected(child.props.title, child.props.data)
    }) 
  })
  const pagination = Math.ceil(tableData.length / rowDisplayNumber)
  const rowTo = rowDisplayNumber * pageDisplay
  const rowFrom = rowTo - rowDisplayNumber

  const tableSorted = cellSelected !== null && tableData.sort((a, b) => {
    if (cellSelected.highest){
      if (parseInt(a[cellSelected.data])){
        return parseInt(a[cellSelected.data]) - parseInt(b[cellSelected.data])
      }
      return String(a[cellSelected.data]).localeCompare(b[cellSelected.data])
    } else {
      if (parseInt(a[cellSelected.data])){
        return parseInt(b[cellSelected.data]) - parseInt(a[cellSelected.data])
      }
      return String(b[cellSelected.data]).localeCompare(a[cellSelected.data])
    }
  })

  const tableFilter = () => {
    if (search === '') return tableData
    return tableData.filter(e => 
      Object.values(e).some(entry =>
        String(entry).toLowerCase().includes(search)
      )
    )
  }

  const handleEditingStatus = (data) => {
    if (!rowEditing){
      setRowEditing(data)
      return
    }
    if(rowEditing.id !== data.id) {
      onUpdate(rowEditing)
      setRowEditing(data)
      return
    }

  }

  return (
    <div>
      <input
        className='input is-inline'
        placeholder='Buscar'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            {cells.map(e => e)}
          </tr>
        </thead>
        <tbody>
          {tableFilter().slice(rowFrom, rowTo).map(data => (
            <tr key={data.id} className={`${rowEditing && rowEditing.id === data.id && 'has-background-primary-light'}`}>
              {cells.map((cell, index)=> {
                if (cell.props.type === 'check')
                  return (
                    <td key={index}>
                      <input type='checkbox' readOnly checked={data[cell.props.data]} onFocus={() => handleEditingStatus(data)}/>
                    </td>
                  )
                if (cell.props.type === 'select')
                  return (
                    <td key={index}>
                      <select onFocus={() => handleEditingStatus(data)}>
                        <option>Alto</option>
                        <option>medio</option>
                        <option>bajo</option>
                      </select>
                    </td>
                  )
                if (cell.props.type === 'action')
                  return (
                    <td key={index}>
                      <button onClick={e => cell.props.action(data,e)}>{cell.props.title}</button>
                    </td>
                  )
                return (
                  <td key={index}>
                    <SpanEdit 
                      onFocus={() => handleEditingStatus(data)} 
                      onChange={(e) => onChangeTodo(data.id, cell.props.data, e.target.value)}
                      title={data[cell.props.data]}
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons has-addons">
        {pageDisplay !== 1 && 
          <button 
            className="button"  
            onClick={() => setPageDisplay(pageDisplay - 1)}
          >Prev</button>
        }
        {Array(pagination).fill(0).map((e, index) => (
          <button key={index} className="button is-active" onClick={() => setPageDisplay(index + 1)}>{index + 1}</button>
        ))}
        {pageDisplay !== pagination && 
          <button 
            className="button"  
            onClick={() => setPageDisplay(pageDisplay + 1)}
          >Next</button>
        }
      </div>
      <div className="select">
        <select select={rowDisplayNumber} onChange={e => setRowDisplayNumber(e.target.value)}>
          <option value={10}>Show 10</option>
          <option value={25}>Show 25</option>
          <option value={50}>Show 50</option>
        </select>
      </div>
    </div>
  )
}

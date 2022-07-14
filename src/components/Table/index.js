import {useState} from "react"
import {Pagination} from "./Pagination"
import {Table, Col} from './Table'

const TableContainer = ({data, onUpdateRow, update, children}) => {
  const [rowRange, setRowRange] = useState({
    fromRow: 0,
    toRow: 10
  })

  const [search, setSearch] = useState('')

  const pageData = (allData) => {
    return allData.slice(rowRange.fromRow, rowRange.toRow)
  }

  const filterTable = () => {
     return data.filter(e => 
      Object.values(e).some(entry =>
        String(entry).toLowerCase().includes(search)
      )
    )
  }

  return (
    <>
      <input
        className='input is-inline'
        placeholder='Buscar'
        value={search}
        onChange={e =>{
          setSearch(e.target.value)
        }}
      />

      <Table data={pageData(filterTable())} onUpdateRow={onUpdateRow} update={update}>
        {children}
      </Table>

       <Pagination 
        rows={filterTable()} 
        onSelectPage={(range) => setRowRange(range)}
      />
    </>
  )

}

export {
  TableContainer,
  Col
}

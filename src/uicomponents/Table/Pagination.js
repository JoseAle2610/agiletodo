import {useState} from "react"
import PropTypes from 'prop-types'

const Pagination = ({rows, onSelectPage, rowNumber}) => {
  const [rowsPerPage, setRowsPerPage] = useState(rowNumber)
  const [currentPage, setCurrentPage] = useState(1)

  const numPages = Math.ceil(rows.length / rowsPerPage)

  const getRowRange = (curPage) => {
    const toRow = rowsPerPage * curPage
    const fromRow = toRow - rowsPerPage
    return {
      fromRow,
      toRow
    }
  }

  return (
    <>
      <div className="is-flex is-justify-content-space-between">
        <div className="select">
          <select 
            select={rowsPerPage} 
            onChange={e => setRowsPerPage(e.target.value)}
          >
            <option value={10}>Show 10</option>
            <option value={25}>Show 25</option>
            <option value={50}>Show 50</option>
          </select>
        </div>
        <div className="buttons has-addons">
          {currentPage !== 1 && 
            <button 
              className="button"  
              onClick={() => {
                onSelectPage(getRowRange(currentPage - 1))
                setCurrentPage(currentPage - 1)
              }}
            >Prev</button>
          }
          {Array(numPages).fill(0).map((e, index) => (
            <button 
              key={index} 
              className={`button ${currentPage == index + 1 && 'is-active'}`} 
              onClick={() => {
                onSelectPage(getRowRange(index + 1))
                setCurrentPage(index + 1)
              }}
            >
              {index + 1}
            </button>
          ))}
          {currentPage !== numPages && 
            <button 
              className="button"  
              onClick={() => {
                onSelectPage(getRowRange(currentPage + 1))
                setCurrentPage(currentPage + 1)
              }}
            >Next</button>
          }
        </div>
      </div>
    </>
  )
}

Pagination.propTypes = {
  rows: PropTypes.array,
  onSelectPage: PropTypes.func,
  rowNumber: PropTypes.number
}

Pagination.defaultProps = {
  onSelectPage: () => {return},
  rowNumber: 10
}


export {
  Pagination
}

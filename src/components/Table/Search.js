import {useState} from "react"
import PropTypes from 'prop-types'

const Search = ({placeholder, onChange}) => {
  const [search, setSearch] = useState('')
  return (
    <input
      className='input is-inline'
      placeholder={placeholder}
      value={search}
      onChange={e =>{
        setSearch(e.target.value)
        onChange(e.target.value)
      }}
    />
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

Search.defaultProps = {
  placeholder: '',
  onChange: () => {return}
}

export {Search}

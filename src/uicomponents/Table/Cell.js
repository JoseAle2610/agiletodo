import PropTypes from 'prop-types'

const Cell= ({type, title, data, dataKey, onChange, onBlur, onFocus, action}) => {
  if (type === 'check')
    return (
      <td>
        <input 
          type='checkbox' 
          name={dataKey}
          checked={data} 
          onChange={onChange}
          onFocus={onFocus}
        />
      </td>
    )
  if (type === 'select')
    return (
      <td>
        <select select={data} onChange={onChange}>
          <option>Alto</option>
          <option>medio</option>
          <option>bajo</option>
        </select>
      </td>
    )
  if (type === 'action')
    return (
      <td>
        <button onClick={action}>{title}</button>
      </td>
    )
  if (type === 'editable'){
    return (
      <td>
        <input
          type='text'
          value={data}
          name={dataKey}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </td>
    )
  }
  if (type === 'date'){
    const formatDate = (date) => {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) 
        month = '0' + month;
      if (day.length < 2) 
        day = '0' + day;

      return [year, month, day].join('-');
    }
    return (
      <td>
        <input
          type='date'
          value={formatDate(data)}
          name={dataKey}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </td>
    )
  }
  return (
    <td>
      {data}
    </td>
  )
}

Cell.propTypes = {
  type: PropTypes.string,
  data: PropTypes.any,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  action: PropTypes.func,
}

Cell.defaultProps = {
  type: '',
  data: '',
  onchange: () => {return},
  onFocus: () => {return},
  onBlur: () => {return},
  action: () => {return},
}

export {
  Cell
}

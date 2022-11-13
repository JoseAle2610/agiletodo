import PropTypes from 'prop-types'
import {Cell} from './Cell'

export const Row = ({data, cols, onChange, onFocus, onBlur}) => {

  return (
    <tr>
      {cols.map((col, id) => (
        <Cell 
          key={id} 
          data={data[col.props.data]} 
          dataKey={col.props.data}
          title={col.props.title}
          type={col.props.type} 
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          action={() => col.props.action(data.id)}
        />
      ))}
    </tr>
  )
}

Row.propTypes = {
  data: PropTypes.object,
  cols: PropTypes.array,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

Row.defaultProps = {
  onChange: () => {return},
  onFocus: () => {return},
  onBlur: () => {return},
}

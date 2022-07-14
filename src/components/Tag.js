import {useState} from 'react'
import PropTypes from 'prop-types'

export const Tag = ({handleDelete, handleChange, update, data}) => {
  const [showInput, setShowInput] = useState(false)
  const handleShowInput = () => {
    setShowInput(!showInput)
  }
  return (
    <div className="tag is-primary"
      onDoubleClick={handleShowInput}
    >
      {showInput ? (
        <input
          type='text'
          className='has-text-white is-size-5'
          value={data.title}
          onChange={(e) => handleChange(e, data)}
          onBlur={() => {
            handleShowInput()
            update(data)
          }}
          onKeyUp={e => {
            if (e.key === 'Enter'){
              handleShowInput()
              update(data)
            }
          }}
          autoFocus={true}
          style={{
            background: 'transparent',
            border: 'none',
            width: `${data.title.length}ch`
          }}
        />
      ) : (
        <span>
          {data.title}
        </span>
      )}
      <button className="delete" onClick={() => handleDelete(data)}></button>
    </div>
  )
}
Tag.propTypes = {
  handleDelete: PropTypes.func,
  update: PropTypes.func,
  handleChange: PropTypes.func,
  title: PropTypes.string
}
Tag.defaultProps = {
  handleDelete: () => {return},
  handleChange: () => {return},
  update: () => {return}
}

export const TagList = ({tags, handleDelete, update, handleChange}) => {
  return (
    <div className="tags are-large">
      {tags.map((e) => (
        <Tag 
          key={e.id} 
          handleDelete={handleDelete}
          handleChange={handleChange}
          update={update}
          data={e}
        />
      ))}
    </div>
  )
}

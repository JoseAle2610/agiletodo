import {useState} from 'react'
export const Tag = ({handleDelete, handleChange, title}) => {
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
          value={title}
          onChange={(e) => handleChange(e, title)}
          onBlur={handleShowInput}
          onKeyUp={e => e.key === 'Enter' && handleShowInput()}
          autoFocus={true}
          style={{
            background: 'transparent',
            border: 'none',
            width: `${title.length}ch`
          }}
        />
      ) : (
        <span>
          {title}
        </span>
      )}
      <button className="delete" onClick={() => handleDelete(title)}></button>
    </div>
  )
}

export const TagList = ({tags, handleDelete, handleChange}) => {
  return (
    <div className="tags are-large">
      {tags.map((e) => (
        <Tag 
          key={e.id} 
          handleDelete={handleDelete}
          handleChange={handleChange}
          title={e.title}
        />
      ))}
    </div>
  )
}

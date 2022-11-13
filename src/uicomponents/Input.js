import {useState, useRef} from 'react'
import PropTypes from 'prop-types'

export const InputAddon = ({placeholder, buttonLabel, onSubmit}) => {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e) => {
    onSubmit(inputValue)
    setInputValue('')
    e.preventDefault()
  }
  return (
    <div className="is-flex is-justify-content-center block">
      <div className="field has-addons">
        <form className="control"
          onSubmit={e => handleSubmit(e)}
        >
          <input className="input" type="text" placeholder={placeholder} style={{width: '60vw'}}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </form>
        <div className="control">
          <button 
            onClick={e => handleSubmit(e)}
            className="button is-primary">
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
InputAddon.propTypes = {
  placeholder: PropTypes.string,
  buttonLabel: PropTypes.string,
  onSubmit: PropTypes.func
}
InputAddon.defaultProps = {
  onSubmit: () => {return}
}

export const SpanEdit = ({title, onChange, onFocus}) => {
  const [showInput, setShowInput] = useState(false)
  const input = useRef()
  const handleShowInput = () => {
    setShowInput(!showInput)
  }
  return (
    <div onDoubleClick={handleShowInput}>
      {showInput ? (
        <input
          type='text'
          className='is-size-6'
          value={title}
          ref={input}
          onChange={onChange}
          onFocus={onFocus}
          autoFocus={true}
          onBlur={handleShowInput}
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
    </div>
  )
}

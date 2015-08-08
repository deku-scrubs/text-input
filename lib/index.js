/**
 * Imports
 */
import element from 'magic-virtual-element'

/**
 * defaultProps
 */
const defaultProps = {
  type: 'text',
  errorKey: null,
  messages: null,
  placeholder: ''
}

/**
 * Render
 */
export default function ({props}) {
  const {onChange, placeholder, type, error, style, inputStyle} = props

  return (
    <div style={props.style}>
      <input type={type} placeholder={placeholder} onChange={handleChange} style={inputStyle} />
      {error}
    </div>
  )

  function handleChange (e) {
    onChange(e)
  }
}
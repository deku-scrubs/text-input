/**
 * Imports
 */
import element from 'magic-virtual-element'

/**
 * defaultProps
 */
const defaultProps = {
  type: 'text',
  error: null,
  placeholder: '',
  style: {},
  inputStyle: {}
}

/**
 * Render
 */
export default function ({props}) {
  const {onChange, placeholder, type, error, style, inputStyle} = props

  return (
    <div style={props.style}>
      <input type={type} placeholder={placeholder} onChange={handleChange} style={inputStyle} />
      {error || null}
    </div>
  )

  function handleChange (e) {
    onChange(e)
  }
}
/**
 * Imports
 */
import {element} from 'deku'
import {Style, Block} from '@deku-scrubs/style'

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
function render (component) {
  const {props} = component
  const {onChange, placeholder, type, error} = props

  return (
    <Block style={props.style}>
      <Style
        component='input'
        props={{type: type, placeholder: placeholder, onChange: handleChange}}
        style={props.inputStyle}>
      </Style>
      {error}
    </Block>
  )

  function handleChange (e) {
    onChange(e)
  }
}

/**
 * Exports
 */
export default {render, defaultProps}

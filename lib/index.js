/**
 * Imports
 */

import element from 'magic-virtual-element'

/**
 * defaultProps
 */

const defaultProps = {
  type: 'text',
  placeholder: '',
  style: {},
  inputStyle: {}
}

/**
 * Render
 */

function render ({props, state}, handler) {
  const {onChange, onInvalid, onInput, placeholder, type, style, inputStyle, name} = props
  const {error=null} = state

  return (
    <div style={props.style}>
      <input type={type} name={name} placeholder={placeholder} onChange={handleChange} style={inputStyle} onInvalid={handleInvalid} />
      {error}
    </div>
  )

  function handleChange (e) {
    onChange && onChange(e)

    const el = e.target
    el.setCustomValidity('')
    handler('validate')(el)
  }

  function handleInvalid (e) {
    onInvalid && onInvalid(e)
    handler('validate')(e.target)
  }
}

/**
 * Update
 */

function update({props, state}, type, payload) {
  switch (type) {
    case 'validate':
      const el = payload
      return {error: el.validationMessage}
  }
}

/**
 * Exports
 */

export default {render, update, defaultProps}
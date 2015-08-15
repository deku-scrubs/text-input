/**
 * Imports
 */

import element from 'magic-virtual-element'
import validationAttrs from 'validation-attrs'
import validityKeys from 'validity-keys'
import pick from 'object-pick'

/**
 * defaultProps
 */

const defaultProps = {
  type: 'text',
  error: null,
  placeholder: '',
  style: {},
  inputStyle: {},
  errors: {}
}

/**
 * Render
 */

function render ({props, state}, handler) {
  const {onChange, onInvalid, onInput, placeholder, type, style, inputStyle, errors} = props
  const validation = pick(props, validationAttrs)
  const {error} = state

  return (
    <div style={props.style}>
      <input type={type} placeholder={placeholder} onChange={handleChange} style={inputStyle} onInvalid={handleInvalid} {...validation} />
      {error || null}
    </div>
  )

  function handleChange (e) {
    onChange && onChange(e)

    const el = e.target
    el.setCustomValidity('')
    el.checkValidity()
  }

  function handleInvalid (e) {
    onInvalid && onInvalid(e)
    handler('invalid')(e.target)
  }
}

/**
 * Return a key describing the validity state
 * of the element
 */

function errorKey (el) {
  const invalid = validityKeys.filter(key => el.validity[key])

  return invalid.length
    ? invalid[0]
    : el.validationMessage
}

/**
 * Update
 */

function update({props, state}, type, payload) {
  switch (type) {
    case 'invalid':
      const error = props.errors[errorKey(payload)]
      return {error}
  }
}

/**
 * Exports
 */

export default {render, update, defaultProps}
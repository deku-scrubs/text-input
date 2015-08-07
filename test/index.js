/**
 * Imports
 */
import assert from 'assert'
import empty from 'component-empty'
import {tree, render} from 'deku'
import element from 'virtual-element'
import TextInput from '..'

/**
 * Tests
 */
let container
describe('text-input', function () {
  beforeEach(function () {
    empty(document.body)
    container = document.body.appendChild(document.createElement('div'))
  })

  it('should work', function () {
    create(<TextInput placeholder='test' />)
  })

  it('should allow styling of the underlying input element', function () {
    create(<TextInput inputStyle={{color: 'blue'}} />)
    var css = container.querySelector('input').attributes.style.value
    assert(css.indexOf('color:blue') !== -1)
  })

  function create (component) {
    render(tree(component), container)
  }
})

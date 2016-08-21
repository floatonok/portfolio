import Ember from 'ember'

export function uppercase (params /*, hash*/) {
  let title = params[0]
  return title.toUpperCase()
}

export default Ember.Helper.helper(uppercase)

import DS from 'ember-data'

export default DS.RESTAdapter.extend({
  // host: 'https://api-dot-isabella.herokuapp.com/api'
  host: 'http://localhost:3000/api'
})

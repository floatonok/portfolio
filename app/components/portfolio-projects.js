import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    document.getElementById('myChart')
    $('#portfolio').mixItUp()
  }
})

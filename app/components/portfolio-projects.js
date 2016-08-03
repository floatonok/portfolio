import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    new Vivus('Layer_3', {duration: 100})

    document.getElementById('myChart')
    $('#portfolio').mixItUp()
  }
})

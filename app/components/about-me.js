import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    new Vivus('Layer_1', {duration: 100})
  }
})

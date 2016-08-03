import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    new Vivus('Layer_6', {duration: 100})
  }
})

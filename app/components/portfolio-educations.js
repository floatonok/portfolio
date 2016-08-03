import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    new Vivus('Layer_4', {duration: 100})
    new Vivus('Layer_5', {duration: 100})
    new WOW().init()
  }
})

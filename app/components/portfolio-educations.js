import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    new WOW().init()
  }
})

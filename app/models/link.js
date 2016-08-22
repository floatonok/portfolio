import DS from 'ember-data'

export default DS.Model.extend({
  website: DS.attr(),
  url: DS.attr(),
  icon: DS.attr()
})

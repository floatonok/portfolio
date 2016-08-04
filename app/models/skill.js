import DS from 'ember-data'

export default DS.Model.extend({
  category: DS.attr(),
  skill: DS.attr(),
  proficiency: DS.attr('number')
})

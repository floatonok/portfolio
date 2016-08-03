import DS from 'ember-data'

export default DS.Model.extend({
  achievement: DS.attr('string'),
  year: DS.attr('string')
})

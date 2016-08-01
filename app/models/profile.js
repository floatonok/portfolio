import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  industry: DS.attr('string'),
  currently: DS.attr('string'),
  education: DS.attr('string'),
  profile_image: DS.attr('string')
})

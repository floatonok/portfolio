import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string'),
  description: DS.attr('string'),
  dataOrder: DS.attr('number'),
  links: DS.attr(),
  images: DS.attr(),
  skills: DS.attr()
})

import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      profiles: this.store.findAll('profile'),
      projects: this.store.findAll('project'),
      educations: this.store.findAll('education'),
      skills: this.store.findAll('skill'),
      achievements: this.store.findAll('achievement'),
      links: this.store.findAll('link')
    })
  }
})

import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('projects', function () {
    this.route('show', {
      path: ':project_id'
    })
  })
  this.route('educations')
  this.route('skills')
  this.route('profiles');
})

export default Router

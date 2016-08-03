import Ember from 'ember'

export default Ember.Component.extend({
  numberData: Ember.computed('model', function () {
    return {
      labels: this.get('skills').mapBy('skill'),
      datasets: [{
        label: 'Skills',
        data: this.get('skills').mapBy('proficiency'),
        backgroundColor: '#F2385A'
      }]
    }
  }),

  numberData2: Ember.computed('model', function () {
    return {
      labels: this.get('skills').mapBy('skill'),
      datasets: [{
        label: 'Skills',
        data: this.get('skills').mapBy('proficiency'),
        backgroundColor: '#000'
      }]
    }
  }),

  // skillsArray: function () {
  //   return this.get('skills').map(function (item) {
  //     return item.getProperties('skill')
  //   })
  // }.property('skill.[]'),

  // proficiencyArray: function () {
  //   return this.get('skills').map(function (item) {
  //     return item.getProperties('proficiency')
  //   })
  // }.property('proficiency.[]'),

  didRender: function () {
    new Vivus('Layer_2', {duration: 100})

    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: this.get('numberData'),
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })
    var ctx = document.getElementById('myChart2')
    var myChart2 = new Chart(ctx, {
      type: 'bar',
      data: this.get('numberData2'),
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })
  }
})

import Ember from 'ember'

export default Ember.Component.extend({
  numberData: Ember.computed('model', function () {
    let graphData = {
      labels: [],
      datasets: [{
        label: 'Skills',
        data: [],
        backgroundColor: '#F2385A'
      }]
    }
    return this.get('skills').filter(skill => skill.get('category') === 'webdev')
      .reduce((data, skill) => {
        data.labels.push(skill.get('skill'))
        data.datasets[0].data.push(skill.get('proficiency'))
        return data
      }, graphData)
  }),

  numberData2: Ember.computed('model', function () {
    let graphData = {
      labels: [],
      datasets: [{
        label: 'Skills',
        data: [],
        backgroundColor: '#000'
      }]
    }
    return this.get('skills').filter(skill => skill.get('category') === 'archi')
      .reduce((data, skill) => {
        data.labels.push(skill.get('skill'))
        data.datasets[0].data.push(skill.get('proficiency'))
        return data
      }, graphData)
  }),

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
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
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
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
})

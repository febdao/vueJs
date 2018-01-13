apiURL = "http://daodinhhien.local/api/movies"

new Vue({
  el: '#app',

  data: {
    message: 'Hello world, Again!',
    names: [
      {firstname: 'Feb', lastname: 'Dao'},
      {firstname: 'Luna', lastname: 'Nguyen'},
      {firstname: 'Phoebe', lastname: 'Dao'}
    ],
    movies: '',
  },

  ready: function() {
    this.getMovies();
  },

  methods: {
    addList: function() {
      var firstName = this.newFirstname
      var lastName = this.newLastname
      if( firstName && lastName) {
        this.names.push({ firstname: firstName, lastname: lastName})
        this.newFirstname = ''
        this.newLastname = ''
      }
      else {
        alert('Enter both of them');
      }
    },
    removeItem: function(index) {
      this.names.splice(index, 1)
    },
    getMovies: function() {
      this.$http.get(apiURL, function(movies) {
        this.$set('movies', movies);
        console.log(movies);
      })
    }
  }
})

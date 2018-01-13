apiURL = "http://daodinhhien.local/api/movies"

new Vue({
  el: '#app',

  data: {
    movies: '',
    liveFilter: '',
    genreFilter: '',
    genres: ''
  },

  ready: function() {
    this.getMovies();
  },

  methods: {
    getMovies: function() {
      this.$http.get(apiURL, function(movies) {
        this.$set('movies', movies);

        // Automatic get the genres from drupal Site
        genresArr=[];
        jQuery.each(movies, function(index, movie) {
          jQuery.each(movie.field_genres, function(index, genre) {
            if(jQuery.inArray(genre.value.toLowerCase(), genresArr) === -1){
              genresArr.push(genre.value.toLowerCase());
            };
          });
        });
        this.$set('genres',genresArr);
      });
    }
  }
});

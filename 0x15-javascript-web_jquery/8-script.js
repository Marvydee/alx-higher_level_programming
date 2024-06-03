// Script to fetch and list the titles of all movies from the provided URL

$(document).ready(function(){
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data){
    const movies = data.results;
    const list = $('#list_movies');
    $.each(movies, function(index, movie){
      list.append('<li>' + movie.title + '</li>');
    });
  });
});

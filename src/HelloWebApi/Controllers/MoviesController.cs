using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using HelloWebApi.Models;

namespace HelloWebApi.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        static List<Movie> _movies = new List<Movie>() {
            new Movie () { Id = 1, Title = "Star Wars", Director = "George Lucas" },
            new Movie () { Id = 2, Title = "Transformers", Director = "Michael Bay" },
            new Movie () { Id = 3, Title = "Harry Potter", Director = "Chris Columbus" }
        };

        //GET: api/values
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _movies;
        }

        [HttpGet("{id}")]
        public Movie Get(int id) {
            return _movies.Where(m => m.Id == id).FirstOrDefault();
            // or _movies.Find(m => m.Id == id);
        }


        [HttpPost]
        public IActionResult Post([FromBody] Movie movie) {

            //adds an Id to the movies- okay until you want to delete one - will be solved once we get into databases
            int index = _movies
                .OrderByDescending(o => o.Id)
                .Select(o => o.Id)
                .FirstOrDefault();

            movie.Id = index + 1;

            _movies.Add(movie);

            return Ok(movie);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Movie movie) {
            Movie editMovie = _movies.Find(m => m.Id == id);
            editMovie.Director = movie.Director;
            editMovie.Title = movie.Title;

            return Ok();
        }
    }
}
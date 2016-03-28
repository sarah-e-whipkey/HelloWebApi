using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using HelloWebApi.Models;

namespace HelloWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Products")]
    public class ProductsController : Controller {

        static List<Product> _products = new List<Product>() {

                new Product { Id = 1, Name = "Milk", Price = 2.33m },
                new Product { Id = 2, Name = "Cheese", Price = 5.44m },
                new Product { Id = 3, Name = "Apples", Price = 2.50m }
        };

        [HttpGet]
        public IEnumerable<Product> Get() {
            return _products;
        }
    }
}
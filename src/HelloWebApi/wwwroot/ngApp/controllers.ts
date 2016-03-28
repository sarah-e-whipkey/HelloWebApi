namespace HelloWebApi.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class ListController {
        public products;

        constructor(private $http: ng.IHttpService) {
            $http.get('/api/Products')
                .then((response) => {
                    this.products = response.data;
                });
        }

    }
    export class MovieController {
        public movies;

        constructor(private $http: ng.IHttpService) {
            $http.get('/api/movies')
                .then((response) => {
                    this.movies = response.data;
                });
          }
    }

    export class EditMovieController {
        public title;
        public director;


        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $location: ng.ILocationService) {
            $http.get('/api/movies/' + this.$stateParams['id'])
                .then((response) => {
                    let data: any = response.data;
                    this.title = data.title;
                    this.director = data.director;
                });
        }
        EditMovie() {
            let data = {
                title: this.title,
                director: this.director
            };

            this.$http.put('/api/movies/' + this.$stateParams['id'], data).then((s) => {
                this.$location.path('/movieList');

            }, (e) => { });
        }
    }

    export class AddMovieController {
        public title;
        public director;
        public message;

        constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {            
        }

        AddMovie() {
            let data = {
                title: this.title,
                director: this.director
            };

            this.$http.post('/api/movies', data).then((s) => {
                //this.title = '';
                //this.director = '';
                //this.message = 'Movie created successfully';
                this.$location.path('/movieList');

            }, (e) => { });
        }
    }
}

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

}

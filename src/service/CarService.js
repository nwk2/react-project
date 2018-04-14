import axios from 'axios';


class CarService {

    getCars() {
        return axios.get('resources/cars-large.json') // local json file for demo
            .then(res => res.data);

    }

    /*getCars() {
        return axios.get('http://localhost:9000/cars') // local postgres db
            .then(res => res.data);

    }*/
}

export default CarService;
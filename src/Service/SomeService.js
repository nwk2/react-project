import axios from 'axios';

class SomeService {

    getItems() {
        return axios.get('http://localhost:9000/cars') // resources/cars-large.json // http://localhost:9000/cars
            .then(res => res.data);

    }
}

export default SomeService;
import axios from 'axios';

class MetricsService {

    getMetrics() {
        return axios.get('http://localhost:9001/metrics');

    }
}

export default MetricsService;
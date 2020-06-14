import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID hlgw3Cy5QUOmlAG4-B0NOjVJwtCBE9DIMAkClfXuUzE' }
});
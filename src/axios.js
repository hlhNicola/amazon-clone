import axios from "axios"

const instance = axios.create({
    // baseURL: 'http://localhost:5001/clone-eebc3/us-central1/api'  // local
    baseURL: 'https://us-central1-clone-eebc3.cloudfunctions.net/api'

});

export default instance
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseUrl = 'https://cafe-node-prueba.onrender.com/api';

const CafeApi = axios.create({
    baseURL: baseUrl
});

CafeApi.interceptors.request.use(

    async(config) => {
        const token = await AsyncStorage.getItem("token");
        if ( token ) {
            config.headers['x-token'] = token;
        }

        return config;
    }

)

export default CafeApi;
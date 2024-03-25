import axios from "axios";

const axiosPublic = axios.create( {
    baseURL: 'https://score360identity-server.vercel.app/',
    // baseURL: 'http://localhost:3000/',
} );

const usePublicApi = () => {
    return axiosPublic;
};

export default usePublicApi;


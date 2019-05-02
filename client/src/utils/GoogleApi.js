import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&AIzaSyDCG1uiAEOdEVv0XeaTOfzoHRANn7JxlGs";

export default {
    search: function(query) {
        let q=(query).split(" ").join("+");
        return axios.get(BASEURL + q + APIKEY)
    }
};
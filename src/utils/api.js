import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";
const TMBD_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjA5ZDhlMzBiMzNkNDhkYTM5NDgyNjZiYWJjZmY4NyIsInN1YiI6IjY0NTY3MzI1NmM4NDkyMDE4MTg2NzVhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atR2gsha79cLYdKU_kxIYized517OWGzP54nIP7G_Pk";


// Function to Fetch Data
export const fetchDataFromAPI = async(url, params) => {
    // console.log(params)
    let Url = null;
    if(params !== undefined) {
        // convert params object to proper string 
        Url = BASE_URL + url + "?" + new URLSearchParams(params).toString();
    }else{
        Url = BASE_URL + url;
    }
    // console.log(Url)
    const options = {
        method: 'GET',
        headers: {
            Authorization: TMBD_TOKEN,
        },
    }
    const response = await fetch(Url, options)
    const data = await response.json()
    // console.log(data)
    if(response.ok === true){
        return data
    }
    else{
        return 'Something went wrong'
    }
}


// export const fetchDataFromAPI = async(url, params) => {
//     try {
//         const {data} = await axios.get(BASE_URL + URL, {
//             headers,
//             params,
//         });
//         console.log(data);
//         return data
//     }
//     catch (err) {
//         console.error(err)
//         return err
//     }
// };

//https://developers.themoviedb.org/3/discover/movie-discover
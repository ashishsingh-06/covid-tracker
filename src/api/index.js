import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async ()=>{

    try {
        const res = await axios.get(url);
        return res;

    } catch (error) {
        console.log(error);
    }
}

export default fetchData;
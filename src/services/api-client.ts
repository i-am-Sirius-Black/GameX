import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '5249c9eec70f4dddb09c5fddcc1cddff'
    }
})
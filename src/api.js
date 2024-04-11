import axios from "axios";

const helpSearch =async (query,API_endpoint) => {
   const response= await axios.get(API_endpoint,
    {
        headers: {
           "Content-Type": "application/json",
             /*"Authorization": "Bearer " + localStorage.getItem("token")*/},
        params: {
            query: query
        }
    })
    
    return response.data;
}
export default helpSearch;
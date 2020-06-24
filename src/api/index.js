import axios from 'axios';
const url ='http://localhost:3333/poc';

export const FetchData = async () =>{

 const{data}=await axios.get(url)
  return data;
}      
   
export default FetchData;

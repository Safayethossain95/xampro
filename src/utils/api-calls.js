import axios from 'axios';
import toast from 'react-hot-toast';
export const getPopularCourses = async () => {
  try {
    const response = await axios.get('https://api.xampro.org/api/v1/package/get-top-three-popular-package');
    return response.data; // Return the data from the API
  } catch (error) {
    console.error('Error fetching popular courses:', error);
    throw error; // Re-throw the error for further handling
  }
};

export const loginApi = async(formData)=>{
  try{
    const response = await axios.post('https://api.xampro.org/api/v1/login',formData)
    return response.data
  }
  catch(err){
    console.log(err)
    toast.error(err.response.data.message)
  }
}
export const registerApi = async(formData)=>{
  try{
    const response = await axios.post('https://api.xampro.org/api/v1/signup',formData)
    return response.data
  }
  catch(err){
    console.log(err)
    toast.error(err.response.data.message)
  }
}



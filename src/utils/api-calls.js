import axios from 'axios';

export const getPopularCourses = async () => {
  try {
    const response = await axios.get('https://api.xampro.org/api/v1/package/get-top-three-popular-package');
    return response.data; // Return the data from the API
  } catch (error) {
    console.error('Error fetching popular courses:', error);
    throw error; // Re-throw the error for further handling
  }
};

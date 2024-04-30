import { useEffect } from "react";
import axiosInstance from "../api/api";

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get('ping');
        console.log('response', response);
      } catch (error) {
        console.log(error)
      }
    };
    getData();
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home;
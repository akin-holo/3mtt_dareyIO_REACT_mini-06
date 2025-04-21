import { useState, useEffect } from "react";
import ListComponent from "./ListComponent";

const Home = () => {
   const heading = "Data Fetched from JSON Placeholder";

   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

     
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
         if (!response.ok) {
            throw new Error(`Error fetching data. HTTP Error: ${response.status}`)
         }

         return response.json();
      })
      .then(data => {
         console.log(data)
         setData(data);
         setIsLoading(false);
         setError(null)
      })
      .catch(error => {
         setError(error.message);
         setIsLoading(false);
      });
   }, []);

   return (  
      <div>
         <h1 style={{color: "black"}}>{heading}</h1>

        {isLoading && <div className="loading">Loading...</div>}
        {error && <span className="error-message">{error}</span>}
        {data && <ListComponent data={data}/>}
      </div>
   );
}
 
export default Home;
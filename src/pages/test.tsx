import { useEffect } from "react";

const Test = () =>{
    
useEffect(() => {
    fetch('http://localhost:5000/simple')
      .then(res => res.json())
      .then(data => console.log("Simple test response:", data))
      .catch(err => console.error("Simple test error:", err));
  }, []);
    return(
        <>
        <h1>typeshi</h1>
        </>
    )
}
export default Test
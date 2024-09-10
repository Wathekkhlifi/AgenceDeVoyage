import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [test, setTest] = useState("");

  useEffect(() => {
    const test = async () => {
      // Making a GET request
      axios
        .post("http://localhost:8080/users/createUser",{
          firstName:"wathek",
          lastName:"khlifi",
          email:"wathek@gmail.com",
          password:"123456789"
        })
        .then((response) => {
          // Handle success
          console.log(response.data);
          setTest(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error fetching data:", error);
        });
    };

    test();
  }, []);

  return (
    <div className="App">
      <p>{test}</p>
    </div>
  );
}

export default App;

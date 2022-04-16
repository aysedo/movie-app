import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/movies");
      const data = await response.json();
      setMovieList(data);
    }
    fetchData();
  }, []);

  async function AddMovie() {
    await fetch(
      `https://localhost/movies/`,{
        method: "POST",
        headers: { Accept: "application/json" },
        body:JSON.stringify({
    
          "body": "Ayse is here!"
         
      })
      }
    );

  return (
    <div>
      <table className="App">
        <section>
          <input type="text">{AddMovie}</input>
        </section>
        <thead>
          <tr>
            <th scope="colSpan">Movie</th>
            <th scope="colSpan">Actor</th>
            <th scope="colSpan">Image</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.actor}</td>
                <td>
                  <img src={movie.img} alt="poster" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import { useState,useEffect } from 'react'


function App() {
 const initialMovies =  [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]
 const [movies,setMovies]=useState(initialMovies);
 const [genre,setGenre] = useState('');

 useEffect(()=>{
  if(genre!==''){
    const selectedMovies= initialMovies.filter((movie) => movie.genre===genre)
    setMovies(selectedMovies)
  }
  else{
    setMovies(initialMovies)
  }
 },[genre])

  return (
    <>
      <header>
        <h1>movie list</h1>
      </header>
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <select 
              value={genre}
                name="movies-list" 
                id="" 
                className="form-select" 
                onChange={(e)=>setGenre(e.target.value)}>

                  <option value="">select genre</option>
                  <option value="Fantascienza">Fantascienza</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Romantico">Romantico</option>
                  <option value="Azione">Azione</option>
                
              </select>
            </div>
           <div className="col-12">
            <ul className="list-group list-unstyled">
              {movies.map((movie , index) => {
                return(
                  <li key={index} className="list-group-item"><span>titolo:{movie.title}</span></li>
                )
              })}
            </ul>
           </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

import { useState,useEffect } from 'react'


function App() {
 const movies =  [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]

 

  return (
    <>
      <header>
        <h1>movie list</h1>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
             
            </div>
           <div className="col-12">
            <ul className="list-group list-unstyled">
              {movies.map(movie=>{
                return(
                  <li className="list-group-item"><span>titolo:{movie.title}</span> <hr /><span> genere: {movie.genre}</span></li>
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

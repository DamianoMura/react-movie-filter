import { useState,useEffect,} from 'react'


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
 const [search,setSearch]=useState('');
 const [filteredMovies,setFilteredMovies]=useState(movies);
 const [title,setTitle]=useState('')

 const handleSubmit = (e)=>{
    e.preventDefault();
   if (title!==""){
    const copy =[...movies,{title:title, genre:"horror"}];
    setMovies(copy);
    setTitle("")
   }
 }


 useEffect(()=>{
  let updatedMovies=movies;
  if(genre){
    updatedMovies=updatedMovies.filter((movie) => movie.genre.toLowerCase()===genre.toLowerCase())
  }
  
  if(search){
    updatedMovies=updatedMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
  }
  
  setFilteredMovies(updatedMovies)


 },[genre,search,movies])

  return (
    <>
      <header className="text-center">
        <h1>movie list</h1>
      </header>
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-6">
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
            <div className="col-6">
              
                <input type="text" 
                  className="w-100" 
                  value={search}
                  onChange={(e)=> {setSearch(e.target.value)}}/>
                
              
            </div>
           <div className="col-12">
            <ul className="list-group list-unstyled">
              {filteredMovies.map((movie , index) => {
                return(
                  <li key={index} className="list-group-item"><span>{movie.title}</span></li>
                )
              })}
            </ul>
           </div>
           <div className="col-12">
            <div className="flex justify-content-between">
              <input type="text"
                     value={title}
                     onChange={(e)=> {setTitle(e.target.value)}} />
              <button className="btn btn-success"
                onClick={handleSubmit}>
                  aggiungi</button>
            </div>
           </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

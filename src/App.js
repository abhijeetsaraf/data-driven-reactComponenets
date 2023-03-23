import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './data';
import './index.css';
console.log(data)


function App() {
  const cards = data.map(x => {
    return (<Card
    image={x.image}
    rating={x.rating}
    ratingCount={x.ratingCount}
    country={x.country}
    title={x.title}
    cost={x.cost}
    />
    )
  })

  return (
    <div className="container">
      <NavBar/>
      <HeroSection/>
      <div className='card--section'>
        {cards}
      </div>
    </div>
  )
}

export default App;

// export default function App(){
//   //console.log(JokesData)
//   const jokeElements = JokesData.map( joke => { 
//     return <Joke setup={joke.setup} punchline={joke.punchline}/> })
  
//   return(

//       <div>
//         {jokeElements}
//       </div>
//   )
// }





// const rating = [5,5,4.8]
// const rating_count = [6,30,6]
// const title = ["Learning lessons with Katie Zaffer",
//                 "Learn wedding photography",
//                 "Group mountain biking"]
// const cost = ["136","125","50"]


// //Jokes assignment 

// export default function App(){
//   //console.log(JokesData)
//   const jokeElements = JokesData.map( joke => { 
//     return <Joke setup={joke.setup} punchline={joke.punchline}/> })
  
//   return(

//       <div>
//         {jokeElements}
//       </div>
//   )
// }





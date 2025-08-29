import {useState, useEffect} from 'react';
export default function Joker(){
    let [joke, setJoke] = useState({});

    const URL = "http://www.official-joke-api.appspot.com/random_joke";

    const getJoke =async ()=>{
        let respose =  await fetch(URL);
        let jsonResponse = await respose.json();
        setJoke({setup:jsonResponse.setup , punchline: jsonResponse.punchline});
    }
    useEffect(()=>{async function getFirstJoke(){
        let respose =  await fetch(URL);
        let jsonResponse = await respose.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup , punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    },
        []
    );
       return (
        <div >
            <h2>Random Jokes</h2>

            <div style={{border:'2px solid black',borderRadius:"10px",width:'550px',height:"180px",alignItems:'center',color:"green"}}>
        
             <h3>  The Setup = {joke.setup}</h3>
              <h3> The Punchline = {joke.punchline}</h3>
              </div>
            <button onClick={getJoke}>Get Jokes</button>
        </div>
       )
}
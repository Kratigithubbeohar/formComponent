import {useState} from 'react';
import {generateTicket,sum} from './helper';
import Ticket from './Ticket';

export default function Lottery({n=3,winningCondition}) {
    let [ticket , setTicket] = useState(generateTicket(n));
    let isWinning = winningCondition(ticket);
    let buyTicket = ()=>{
          setTicket(generateTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!!</h1>
            <h3>{isWinning && "congratulation you won!"}</h3>
            <Ticket ticket = {ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
        </div>
    )
}

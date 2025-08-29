import TicketNum from './TicketNum';
import './Ticket.css';
export default function Ticket({ticket}){
    return (
        <div className="mainDiv">
            <p>Ticket</p>
            <br/>
            <div className = 'tickets'>
         {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}/>
         ))}
         </div>
        </div>
    )
}
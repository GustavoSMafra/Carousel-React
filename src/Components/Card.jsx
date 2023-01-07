import { useState } from 'react';
import '../Styles/Card.scss'

function Card(props) {
    const [card] = useState(props.content)
    const [name] = useState(props.name)
    return (
        <div className='CardContainer'>
            <div>
                <h1>{name}</h1>
                <p>{card.Value}</p>
            </div>
        </div>
    );
}

export default Card;
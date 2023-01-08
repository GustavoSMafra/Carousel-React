import { useState } from 'react';
import { Button } from '@mui/material';
import '../Styles/Card.scss';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function Card(props) {
    const [card] = useState(props.content)
    const [name] = useState(props.name)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const startFunction = (rate) => {
        let elements = []
        for (let i = 1; i <= 5; i++) {
            elements.push(
                rate >= i ? rate >= i + 1 ? <BsStarFill key={i}/> :
                    <BsStarHalf key={i}/> : <BsStar key={i}/>
            )
        }
        return elements
    }
    return (
        <div className='CardContainer'>
            <div className='CardContainerItem'>
                <div className='CardContainerImg'><img src={card.Src} alt="" /></div>
                <div className='CardDescription'>
                    <h1>{name}</h1>
                    <p>Price: {formatter.format(card.Value)}</p>
                    <div className='CardRate'>
                        <p>Rate:</p>
                        {startFunction(card.Rate)}
                    </div>
                </div>
                <div className='CardButton'>
                    <Button>Add</Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
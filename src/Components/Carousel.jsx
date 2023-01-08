import { useEffect, useState } from 'react';
import Card from './Card';
import '../Styles/Carousel.scss';
import StartFirebase from './StartFirebase';
import { ref, get } from 'firebase/database';
import { Loading } from 'react-loading-dot';


function Carousel() {

    const [cards, setCards] = useState(false);
    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        const db = StartFirebase();
        const dbRef = ref(db)
        get(dbRef, 'Products/').then((response) => setCards(response.val()))
    }, [])

    const handleAnimation = () => {
        setAnimation(!animation)
        setTimeout(()=> {
            setAnimation(true)
        }, 10000)
    }

    return cards ? (
        <div className='CarouselContainer'>
            <div className='CarouselCards'>
                <div className= {`CarouselCardsContainer ${animation}`} onClick={handleAnimation}>
                    {
                        Object.keys(cards.Products).map((card, key) => {
                            return (
                                <Card content={cards.Products[card]} name={card} key={key} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    ) :  <Loading background='Black'/>
}

export default Carousel;
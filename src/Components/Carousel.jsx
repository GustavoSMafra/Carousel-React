import { useEffect, useState } from 'react';
import Card from './Card';
import '../Styles/Carousel.scss';
import { GrPrevious, GrNext } from 'react-icons/gr';
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

    return cards ? (
        <div className='CarouselContainer'>
            <div className='CarouselController'><GrPrevious size={60} onClick={() => setAnimation(false)}/></div>
            <div className='CarouselCards'>
                <div className={`CarouselCardsContainer ${animation}`}>
                    {
                        Object.keys(cards.Products).map((card, key) => {
                            return (
                                <Card content={cards.Products[card]} name={card} key={key} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='CarouselController'><GrNext size={60} onClick={() => setAnimation(false)} /></div>
        </div>
    ) :  <Loading background='Black'/>
}

export default Carousel;
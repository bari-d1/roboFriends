import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const cardComponent = robots.map((user, index) => {
        return     <Card key={index} id ={robots[index].id} name={robots[index].name} email={robots[index].email} />
        
    })
    if (true){
            throw new Error('Noooooo');
        }
    return(
        <div>
            {cardComponent}
    </div>
    );
}

export default CardList;
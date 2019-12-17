import React from 'react';
import styled from 'styled-components';



const CardHolder = () => {
    const CardPlace = styled.div`
         background-color: green;
         width: 100%;
         height: 55vh;
         z-index: -1;
    `;
    return <CardPlace/>
    
}

export default CardHolder;
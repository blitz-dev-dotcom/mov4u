import React from 'react'
import UserContext from './UserContext'
import alambana from '../assets/alambana.jpg';
import amitab from '../assets/amitab.jpg';
import animal from '../assets/animal.jpg';
import annapoo from '../assets/annapoorani.jpg';
import art from '../assets/art.jpg';
import candy from '../assets/candy cane.jpg';
import conjuring from '../assets/conjuring.jpg';
import dunki from '../assets/dunki.jpg';
import fallout from '../assets/fall out.jpg';
import fightclub from '../assets/fightclub.jpg';
import forbes from '../assets/forbes.jpg';
import godzilla from '../assets/godzilla.jpg';
import hegde from '../assets/hegde.jpg';
import invinsible from '../assets/invisible.jpg';
import kiara from '../assets/kiara.jpg';
import loki from '../assets/loki.jpg';
import naani from '../assets/naani.jpg';
import napolean from '../assets/napolean.jpg';
import office from '../assets/office.jpg';
import parking from '../assets/parking.jpg';
import poojafoot from '../assets/poojafoot.jpg';
import salaar from '../assets/salaar.jpg';
import salaarpra from '../assets/salaarprabas.jpg';
import sam from '../assets/sam.jpg';
import topcele from '../assets/topcele.jpg';

function UserContextProvider({children}) {
    const posterdata = [
        {
            image:alambana,
        
        },
        {
            image: amitab,
        
        },
        {
            image:animal,
        
        },
        {
            image:annapoo,
        
        },
        
        {
            image:art,
        
        },
        {
            image:candy,
        
        },
        {
            image:conjuring,
        
        },
        {
            image:dunki,
        
        },
        {
            image:fallout,
        
        },
        {
            image:fightclub,
        
        },{
            image:forbes,
        
        }
        ,
        {
            image:godzilla,
        
        },
        {
            image:hegde,
        
        },
        {
            image:invinsible,
        
        },
        {
            image:kiara,
        
        },{
            image:loki,
        
        },
        {
            image:naani,
        
        },
        {
            image:napolean,
        
        },{
            image:office,
        
        },
        {
            image:parking,
        
        },{
            image:poojafoot,
        
        }
        ,
        {
            image:salaarpra,
        
        },{
            image:salaar,
        
        },{
            image:sam,
        
        },{
            image:topcele,
        
        }
    ]
    const name = 'ajay';
    const cluster = {
        posterdata,name
    }
  return (
    <UserContext.Provider value={cluster}  >
            {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
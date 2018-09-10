import React from 'react';
import Home from './pages/Home';
import Boats from './pages/Boats'
import BoatDetails from './pages/BoatDetails';




export default [
    {
        ...Home,
        path: '/',
        exact: true
    },
    {
        ...Boats,
        path: '/boats',
        exact:true
    },
    {
        ...BoatDetails,
        path:'/boats/details/:id',       
    },
  
]
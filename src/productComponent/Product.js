import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import {API} from '../global/global';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import React from 'react'

function Product() {
    const [product,setproduct]=useState([])
  useEffect(()=>{
    fetch(`${API}/product`)
    .then((data)=>data.json())
    .then((value)=>setproduct(value))
  },[])
  var rate = [];
  return (
    <div id = "full">
      {product.map((n,i)=>(

n.image == null ? "" :
<Card sx={{ maxWidth: 345 }}>
    <CardMedia
    className='image'
      component="img"
      alt={n.title}
      height="250"
      image={n.image}
     
    />
    <CardContent>
    
      <Typography variant="h7" sx={{fontWeight:"bold"}} color="text.secondary">
        {n.title}
      </Typography> <br/><br/>
      {rate=n.rating.split(" ")}
      <Typography variant="h7" color="text.secondary">
        Rating:{n.rating}
      </Typography>
      <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={+rate[0]} precision={0.1} readOnly />
    </Stack><br/><br/>
      <Typography variant="h7" color="text.secondary">
        Offer: {n.offerPrice}
      </Typography><br/><br/>
      <Typography variant="h7" color="text.secondary">
        Price:₹ {n.price}
      </Typography>
    </CardContent>
  </Card>
))}
    </div>
  )
}

export default Product

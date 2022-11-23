import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function ShowSingleProduct(props) {
    const navigate = useNavigate()
    console.log(props.data)

  return (
    <div>
      <Stack direction="row" sx={{margin:"24px",position:"fixed"}} spacing={2}>
      <Button variant="contained" onClick={()=>navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>
        Back
      </Button>
    </Stack>
    <section id = "full">
    {props.data.map((n, i) => ( 
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
      <Typography variant="h7" color="text.secondary">
        Rating:{n.rating}
      </Typography><br/><br/>
      <Typography variant="h7" color="text.secondary">
        Offer: {n.offerPrice}
      </Typography><br/><br/>
      <Typography variant="h7" color="text.secondary">
        Price:₹ {n.price}
      </Typography>
    </CardContent>
  </Card>
      ))}
      </section>
    </div>
  )
}

export default ShowSingleProduct

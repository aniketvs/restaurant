import React, { useState } from 'react'
import {  Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Button } from '@mui/base'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice'

export default function Cartitem(props) {
  const buttonA = {
    color: "white",
    backgroundColor: "#00308F",
    width: "150px",
    padding: "5px",
    borderRadius: "50px",
    marginLeft: "15px"

  }
  const buttonB = {
    color: "white",
    backgroundColor: "#00308F",
    width: "30px",
    padding: "5px",
    borderRadius: "50px",
    marginLeft: "15px"

  }
  const [url] = useState("..\\\\images\\" + props.item.pic.split("images")[1]);
  const dispatch = useDispatch();
  const removeFromCart = () => {
  
    dispatch(remove(props.item._id));
  }
  
  


  return (
    <Card style={{marginBlockEnd:'1rem'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={url}

        title="green iguana"
      />
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>

      </CardContent>
      <CardActions style={{ padding: "20px" }}>
        <Typography>${props.item.price}</Typography>
        <Button size="small" style={buttonA} onClick={removeFromCart}>
          remove
        </Button>
       
      </CardActions>
    </Card>
  )
}

import React, { useState } from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Button } from '@mui/base'
import { useSelector,useDispatch } from 'react-redux'
import { remove,add } from '../redux/slices/cartSlice'


export default function FoodCart(props) {
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
  const {cart} = useSelector((state)=>state);
 
  const dispatch = useDispatch();

const addToCart =()=>{
 props.item.price=props.item.price*count;
  
    dispatch(add(props.item));
 
 
}

const removeFromCart=()=>{
 
  dispatch(remove(props.item._id));
 
}
  const [url] = useState("..\\\\images\\" + props.item.pic.split("images")[1]);
const [count,setCount]=useState(0);
const increment=()=>{
  setCount(count+1);
  props.setcounter(props.counter+1);
 
}
const decrement=()=>{
  setCount(count-1);
  props.setcounter(props.counter-1);
}

  return (
    


      <Card>
        <CardMedia
          sx={{ height: 240 }}
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
         
          {
          cart.some((p)=>p._id==props.item._id)?(
              count>0?
              <Button style={buttonA} onClick={removeFromCart}>
                 remove
              </Button> :""
            ):( count>0?
              <Button style={buttonA} onClick={addToCart}>
                add to cart
              </Button>
              :""
             
              
            )
          }
         
         
          <Box style={{display:'flex',marginLeft:'2rem',textAlign:'center',boxSizing:'border-box'}}>
             <Button onClick={increment} style={buttonB}>+</Button>
             <Typography style={{textAlign:'center',marginLeft:'8px'}} >{count}</Typography>
             <Button onClick={decrement} style={buttonB}>-</Button>
          </Box>
        </CardActions>
      </Card>

  
  )
}

import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, listItemButtonClasses, TextField, Typography } from '@mui/material'
import { Button } from '@mui/base'
import { useSelector,useDispatch } from 'react-redux'
import { remove,add } from '../redux/slices/cartSlice'
import { addprice, popprice, removeprice } from '../redux/slices/priceSlice'
import { addextra } from '../redux/slices/extraSlice'


export default function FoodCart(props) {
  const [option,setoption]=useState(props.item.option[0]);
  const [price,setprice]=useState(props.item.option[0].price);
  const [extras,setExtras]=useState("");
 
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
  const finalprice=price*count;
  
    dispatch(add(props.item));
    dispatch(addprice(finalprice));
    dispatch(addextra(extras));
}

const removeFromCart=()=>{
  const finalprice=price*count;
  dispatch(remove(props.item._id));
 dispatch(removeprice(finalprice));
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
            {props.item.description.slice(0,75)}...
          </Typography>
          <Typography>{price}</Typography>
        </CardContent>
        <CardActions style={{ padding: "20px" }}>
        
          <select onChange={(e)=>{setoption(e.target.value);
               
          setprice(parseInt(e.target.value.split(',')[1]))}}>
            {
              props.item.option.map((item,index)=>(
                <option key={index} ><Typography><span>{item.opt}</span>,<span>{item.price}</span></Typography></option>
              ))
            }
          </select>
         
          {
          cart.some((p)=>p._id==props.item._id)?(
              count>0?
              <Button style={buttonA} onClick={removeFromCart}>
                 remove
              </Button> :""
            ):( count>0?
              <Button style={buttonA} onClick={addToCart}>
                add
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
        <Box style={{display:'flex',justifyContent:'center',height:'15px'}}>
        <Typography className='extrastext'>{extras}</Typography>
        </Box>
        
         <Box style={{display:'flex',flexDirection:'raw',justifyContent:'center'}}>
       
           <label style={{margin:'auto',fontSize:'20px'}}>
            Extras:-
           </label>
          <TextField
            style={{padding:'5px',margin:'0.5rem'}}
            onChange={(e)=>{setExtras(e.target.value)}}
          />
         
        
         </Box>
      </Card>

  
  )
}

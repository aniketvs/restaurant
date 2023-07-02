import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from './Cartitem';
export default function Cart(props) {
 
  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc + curr.price,0))
  },[cart])
 if(cart.length===0){
  props.setcounter(0);
 }
  return (
   <>
    {
      cart.length>0 ? (
        <>
         <Box style={{margin:"5rem"}}>
         <Grid container spacing={5}>
         <Grid item xs={6}>
         {
          cart.map((item,index)=>{
            return  <Cartitem key={index} item={item} />
          })
         }
         </Grid>
         <Grid item xs={6}>
             <Box>
              <Typography variant='h4' style={{textAlign:'center'}}>Summary</Typography>
              
              <Typography style={{textAlign:'center',marginTop:"30%"}}>
                Total Amount:{totalAmount}
              </Typography>
              <Typography style={{textAlign:'center'}}>
                Total Quantity:{props.counter}
              </Typography>
              <Typography style={{textAlign:'center'}}>
               estimated delivery time:{Math.floor(totalAmount/(props.counter*24*7))} days
              </Typography>
             </Box>
         </Grid>
         </Grid>
         </Box>
        </>
      ):
      <div>
        <h4 style={{textAlign:"center"}}> No Item Is Present</h4>
       
      </div>
    }

   </>
  )
}

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from './Cartitem';
import CartPrice from './CartPrice';
export default function Cart(props) {
 
  const {cart} = useSelector((state)=>state);
  const [sum,setsum]=useState(0);
  useEffect(()=>{
    const value=cart.reduce((accumulator, currentValue) => {
    const final=currentValue.extras.reduce((acc,cur)=>{
      return acc+parseInt(cur)
    },0)
 
      return accumulator  +((parseInt(currentValue.item.price)+final)*parseInt(currentValue.count));
    }, 0)
    setsum(value);
  }
  
  ,[cart])



  return (
   <>
      <Typography variant='h4' style={{ textAlign: 'center', fontWeight: '700' }}> Cart</Typography>
    {
      cart.length>0 ? (
        <>
         <Box style={{margin:"5rem"}}>
         <Grid container spacing={5} style={{display:'flex',justifyContent:'center'}}>
         <Grid item xs={8} >
         {
          cart.map((item,index)=>{
            return  <Cartitem key={index} item={item} />
          })
         }
         </Grid>
          <Grid item xs={4}>
          <Typography variant='h4' style={{ textAlign: 'center', fontWeight: '700' }}> Summary</Typography>
           <Box>
            {
              cart.map((item,index)=>(
               <CartPrice item={item} key={index} sum={sum} setsum={setsum}/>
              ))
            }
           </Box>
            <hr/>
           <Typography style={{textAlign:'center',fontSize:'20px',fontWeight:'700'}}>Total Price :- {sum} </Typography>
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



{/*
  const {price}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(price.reduce((acc,price)=>acc + price,0))
  },[price])
 if(cart.length===0){
  props.setcounter(0);
 }
 const {extra} = useSelector((state)=>state);






<Grid item xs={6}>
             <Box>
              <Typography variant='h4' style={{textAlign:'center'}}>Summary</Typography>
              <Box style={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'3rem'}}>
               <Typography> Extras:-</Typography>
              {
                extra.map((item,ind)=>(
                  
                    <Typography key={ind}>{item},</Typography>
                  
                ))
              }
              </Box>
              <Typography style={{textAlign:'center',marginTop:"20%"}}>
                Total Amount:{totalAmount}
              </Typography>
              <Typography style={{textAlign:'center'}}>
                Total Quantity:{props.counter}
              </Typography>
              <Typography style={{textAlign:'center'}}>
               estimated delivery time:{Math.floor(totalAmount/(props.counter*24*7))} days
              </Typography>
             </Box>
            </Grid>*/}
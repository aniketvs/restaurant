import React, { useState,useEffect } from 'react'
import { Typography } from '@mui/material'
import Pizza from './Pizza'
import { Box } from '@mui/system'



export default function FoodCart(props) {

  const [food, setfood] = useState([]);
  useEffect(() => {
    getfood();
  }, [])
  const getfood = async () => {
    let result;
    if (props.val) {
      result = await fetch(`http://localhost:5000/get/food/${props.val}`);
    } else {
      result = await fetch('http://localhost:5000/get/food/');
    }

    result = await result.json();

    setfood(result);

  }
  
  return (



    <>
              
           <Box id={props.val} style={{ width: '70%',display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'10rem',marginTop:'3rem',marginBottom:'3rem' }} >
            <Typography style={{display:'flex',justifyContent:'center',flexDirection:'column' ,backgroundColor:'lightblue',textAlign:'center'}}>{props.val}</Typography>
             {
              food.length>0 ? (
                 food.map((item,index)=>(
                  <Pizza item={item} key={index} />
                 ))
              ) :(
                <Typography variant='h4'>No Food Is Available</Typography>
              )
             }
           </Box>
    </>

  )
}

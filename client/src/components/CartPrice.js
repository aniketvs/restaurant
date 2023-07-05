import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

export default function CartPrice(props) {
    const [cal,setCal]=useState(props.item.item.price);
    const sum = props.item.extras.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
      }, 0);

    useEffect(()=>{
      

       setCal((props.item.item.price+parseInt(sum))*props.item.count);
     
      
    },[props.item.count,cal])
   

  return (
   <>
    <Box>
    { props.item.count>0 ?
      <Typography style={{textAlign:'center',fontSize:'20px',fontWeight:'700'}}>{cal}$</Typography>
      : ""
    }
    </Box>
   </>
  )
}

import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart';
import { Grid } from '@mui/material'
export default function Home(props) {

  const [food, setfood] = useState([]);
  useEffect(() => {
    getfood();
  }, [])
  const getfood = async () => {
    let result = await fetch('http://localhost:5000/get/food/');

    result = await result.json();

    setfood(result);

  }
  console.warn(food);
  return (
    <>
      {
        food.length > 0 ?
          <Box style={{ margin: "5rem" }}>
            <Grid container spacing={4}>
             
              {food.map((item) => {
                return (
                  <Grid item xs={4}>
                  <FoodCart key={item.id} item={item} counter={props.counter} setcounter={props.setcounter} />
                  </Grid>
                  )
              })}
              
            </Grid>
          </Box>
         :
  <Box>
    <h4 style={{ textAlign: "center" }}>No Food Is Available</h4>
  </Box>
}
    </>
  )
}

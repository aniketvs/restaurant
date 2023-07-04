import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart';
import { Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
export default function Home(props) {

  const [food, setfood] = useState([]);
  useEffect(() => {
    getfood();
  }, [])
  const getfood = async (val) => {
    let result;
    if (val) {
      result = await fetch(`http://localhost:5000/get/food/${val}`);
    } else {
      result = await fetch('http://localhost:5000/get/food/');
    }

    result = await result.json();

    setfood(result);

  }
  const filterresult = (val) => {
    getfood(val)
  }
  return (
    <>

      <Box style={{ margin: "5rem" }}>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Box style={{ margin: '1rem' ,display:'flex',flexDirection:"column",justifyContent:'center'}}>
              <TextField
                label="Search"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
                onChange={(e) => filterresult(e.target.value)}
              />
              <Box style={{display:'flex',flexDirection:"column",justifyContent:'center',marginTop:'2rem'}}>
                <Button value="pizza" style={{fontSize:"16px"}} onClick={(e) => filterresult(e.target.value)}>Pizza</Button>
                <Button value="briyani" style={{fontSize:"16px"}} onClick={(e) => filterresult(e.target.value)}>Briyani</Button>
                <Button value="burger"  style={{fontSize:"16px"}} onClick={(e) => filterresult(e.target.value)}>Burger</Button>
              </Box>


            </Box>
          </Grid>
          {food.length > 0 ?
            food.map((item) => {
              return (
                <Grid item xs={4}>
                  <FoodCart key={item.id} item={item} counter={props.counter} setcounter={props.setcounter} />
                </Grid>
              )
            })
            :
            <Grid item xs={8}>
            <Box>
              <h4 style={{ textAlign: "center" }}>No Food Is Available</h4>
            </Box>
           </Grid>
          }

        </Grid>
      </Box>



    </>
  )
}

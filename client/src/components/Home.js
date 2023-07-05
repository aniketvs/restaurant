import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart';
import { Button, Grid, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {HashLink as Link} from 'react-router-hash-link'
export default function Home(props) {
  const [food, setfood] = useState([]);
  const [value,setvalue]=useState("");
  console.warn(food.length);
  useEffect(() => {
    getfood();
  }, [])
  const getfood = async (val) => {
    let result;
    if (val) {
      result = await fetch(`http://localhost:5000/get/food/${val}`);
    }
    result = await result.json();

    setfood(result);

  }

const filterresult=(val)=>{
  setvalue(val);
  getfood(val);
 
  
}
  
  return (
    <>

      <Box style={{ margin: "5rem" }}>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box style={{ margin: '1rem' ,display:'flex',flexDirection:"raw",justifyContent:'center'}}>
              <TextField
                label="Search"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
                onChange={(e) => filterresult(e.target.value)}
              />
              <Box style={{display:'flex',flexDirection:"raw",justifyContent:'center'}}>
                <Button value="pizza" style={{fontSize:"16px"}} ><Link to='#pizza' style={{textDecoration:'none',color:'black'}}>Pizza</Link></Button>
                <Button value="briyani" style={{fontSize:"16px"}} ><Link to='#briyani' style={{textDecoration:'none',color:'black'}}>Briyani</Link></Button>
                <Button value="burger"  style={{fontSize:"16px"}} ><Link to='#desert' style={{textDecoration:'none',color:'black'}}>Desert</Link></Button>
              </Box>


            </Box>
          </Grid>
          {
            food.length > 0 ?
            
              <FoodCart item={props.item} val={value}/> 
            

          :
            
          <>
           <FoodCart item={props.item} val='pizza' />
           <FoodCart item={props.item} val='briyani' />
           <FoodCart item={props.item} val='desert' />
           </>
          }

        </Grid>
      </Box>



    </>
  )
}

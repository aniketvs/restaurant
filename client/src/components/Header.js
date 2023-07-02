import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <>
     <Box>
       <AppBar position='static'>
           <Toolbar>
              <FoodBankIcon style={{fontSize:"30px"}} ></FoodBankIcon> 
              
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} > <Link to="/" style={{color:"#fff",textDecoration:"none"}}>Foodies</Link></Typography>
            
              <Link to="/cart"style={{color:"#fff"}}><ShoppingCartIcon/></Link>   
           </Toolbar>
           
       </AppBar>

     </Box>
    </>
  )
}

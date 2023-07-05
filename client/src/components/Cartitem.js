import React ,{useState} from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {  decrement, increment } from '../redux/slices/cartSlice';
import Button from '@mui/material/Button';
export default function Cartitem(props) {

  const dispatch = useDispatch();

  const [count, setcount] = useState(props.item.count);


  return (
    <>
      {
        count>0 ? 
         <Card style={{ marginBlockEnd: '1rem', width: '80%' }} >

<CardContent style={{display:'flex',justifyContent:'space-between'}}>
  <Box>
    <Typography variant='h5' gutterBottom>
      {props.item.item.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {props.item.option}
      {
        props.item.extra.map((it) => (<span>,{it}</span>))
      }
    </Typography>

  </Box>
  <Box style={{display:'flex'}}>
    <Button variant="contained" 
    style={{height:'40px',margin:'auto',fontSize:'16px',fontWeight:'700'}}
    onClick={() => {
      setcount(count - 1);
      dispatch(decrement(props.item.item.name))
    }}>-</Button>
    <Typography style={{fontSize:'12px',fontWeight:'700',margin:'auto',width:'20px',textAlign:'center'}}>{count}</Typography>
    <Button variant="contained" 
     style={{height:'40px',margin:'auto',fontSize:'16px',fontWeight:'700'}}
    onClick={() => {
      setcount(count + 1);
      dispatch(increment(props.item.item.name))
    }}>+</Button>
  </Box>

</CardContent>

</Card>
:""
      }
      
     
    </>

  )
}

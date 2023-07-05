import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useDispatch, useSelector} from 'react-redux'
import { add, decrement, increment } from '../redux/slices/cartSlice';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Pizza(props) {
    const [value, setValue] = useState('1');
    const [toggel, settoggel] = useState(false);
    const [additem, setAddItem] = useState(false);
    const [count, setcount] = useState(0);
    const [extraname,setextraname]=useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [selectopt, setSelectopt] = useState(props.item.option[0]);
    const handeloption = (e) => {
        setSelectopt(e.target.value);
        console.warn(selectopt);
    }

    const [isChecked, setIsChecked] = useState([]);

    const handleCheckboxChange = (event,item) => {
      
        const { value, checked } = event.target;
        if (checked) {
            setIsChecked(prev => [...prev, value]);
            setextraname(prev=>[...prev,item]);
        } else {
            setIsChecked(prev => [...prev.filter(val => val !== value)]);
            setextraname(prev=>[...prev.filter(val => val !== item)])
        }

    };

    useEffect(() => {
      console.warn(extraname);
        console.warn(isChecked);
    }, [isChecked])

    const handelAdd = () => {
        setAddItem(true);
        setcount(count + 1);
        settoggel(false);
        addToCart();

    }
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();
    const addToCart=()=>{

        const data={
            item:props.item,
            count:count+1,
            option:selectopt,
            extras:isChecked,
            extra:extraname
        }
        dispatch(add(data));
        
    }
    return (
        <>
            <Card >

                <CardContent style={{ borderBottom: '1px solid grey' }}>
                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Box>

                            <Typography variant='h5' gutterBottom style={{ fontWeight: '700' }}>
                                {props.item.name}
                            </Typography>

                            <Typography variant='h6' gutterBottom style={{ fontWeight: '700' }}>{props.item.price}</Typography>
                        </Box>
                        {
                            (count>0) ? "" :
                                <Box>

                                    <Button variant="contained" onClick={() => settoggel(!toggel)}>{
                                        toggel ? "Remove":
                                        "ADD"}</Button>
                                </Box>

                        }
                        {
                            additem && count > 0 ?
                                <Box>

                                    <Button variant="contained" onClick={() =>{
                                          setcount(count-1);
                                        dispatch(decrement(props.item.name))}}>-</Button>
                                    <Typography>{count}</Typography>
                                    <Button variant="contained" onClick={() =>{
                                        setcount(count+1);
                                        dispatch(increment(props.item.name))}}>+</Button>
                                </Box> : ""
                        }
                    </Box>

                </CardContent>


            </Card>
            {
                toggel === true ?

                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="options" {...a11yProps(0)} />
                                <Tab label="extras" {...a11yProps(1)} />

                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <fieldset style={{ display: 'flex', flexDirection: 'column', border: 'none' }}>
                                {



                                    props.item.option.map((item, index) => (
                                        <>   <label for={index}>
                                            <input
                                                type="radio"
                                                onChange={handeloption}
                                                name={item}
                                                value={item}
                                                id={index}
                                                checked={selectopt === item}

                                            />
                                            {item}</label>
                                        </>

                                    ))

                                }
                            </fieldset>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1} >
                            <Box style={{ display: 'flex', flexDirection: 'column', border: 'none' }}>
                                {
                                    props.item.extra.map((item, index) => (
                                        <>
                                            <label key={index} >
                                                <input
                                                    type='checkbox'

                                                    onChange={
                                                       (e)=>
                                                        handleCheckboxChange(e,item.item)
                                                   }
                                                   
                                                    value={item.extramoney}

                                                />
                                                {item.item}
                                                <span style={{ color: 'black', marginLeft: '1rem', fontWeight: '700' }}>${item.extramoney}</span>
                                            </label>
                                        </>
                                    ))
                                }
                            </Box>

                        </CustomTabPanel>
                        <Box style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>

                            <Button variant="contained" onClick={handelAdd} >
                                ADD</Button>
                        </Box>

                    </Box> : ""}
        </>

    )
}

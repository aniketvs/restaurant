import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Footer() {
  return (
    <>
      <Box>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} >
          <Toolbar style={{textAlign:"center",justifyContent:"center"}}>
            <Typography variant="h6" >All rights reserved by ©foodies 2023</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

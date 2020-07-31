import React from "react"
import { Typography} from '@material-ui/core'
const SecondPage = () => (
  <div style={{background: '#111', width:'100%', height: '100vh'}} align="center">
    <img src="https://material-ui.com/static/logo.png" width="60px"/>
    <Typography 
      variant="h3"
      style={{
        fontWeight: 300,
        textIndent: '.7rem',
        whiteSpace: 'nowrap',
        letterSpacing: '.7rem',
        color: '#fff'
      }}
    >
      MATERIAL-UI
    </Typography>
  </div>
)

export default SecondPage

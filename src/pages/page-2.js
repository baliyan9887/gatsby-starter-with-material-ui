import React from "react"
import { Typography, Grid} from '@material-ui/core'
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'gatsby'


const useStyles = makeStyles(theme => ({
  head:{
    fontWeight: 300,
    textIndent: '.7rem',
    whiteSpace: 'nowrap',
    letterSpacing: '.7rem',
  },
  desc:{
    letterSpacing: '1px',
    marginTop: '1em',
    marginBottom: '2em',
    lineHeight: 1.7,
    paddingLeft: '1em'
  },
}));


const SecondPage = () => {

  const classes = useStyles()
  return (
    <Layout>
        <SEO title= "Material Page" />
        <Grid container spacing={3} justify="center">
            <Grid item xs={2}>
              <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
                <img src="https://material-ui.com/static/logo.png" />
              </div>
            </Grid>
            <Grid item xs={10}>
            <Typography variant="h3" className={classes.head}>
              MATERIAL-UI
            </Typography>
              <Typography variant="body2" className={classes.desc} align="justify" color="textSecondary" component="p">
                A responsive, minimalist Gatsby starter based on the world's most
                popular React UI framework.
              </Typography>
              <Typography variant="body2" color="textSecondary" className={classes.desc}>To learn more, head over to our <a href="https://material-ui.com/getting-started/example-projects/" target="_blank" style={{color: '#65359D'}}>documentation about Material UI</a>.</Typography>
            </Grid>
          </Grid>
      </Layout>
    
    )
}

export default SecondPage

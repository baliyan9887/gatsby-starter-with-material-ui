// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Grid, Typography} from "@material-ui/core"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type DataProps = {
  site: {
    buildTime: string
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 120,
      marginBottom: 30
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    desc:{
      letterSpacing: '1px',
      marginTop: '1em',
      marginBottom: '2em',
      lineHeight: 1.7
    },
    head: {
      fontSize: '2rem',
      fontWeight: 600
    }
  }),
);



const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {

  const classes = useStyles();

  return(
    
      <Layout>
        <SEO title="Using TypeScript" />
          <Grid container className={classes.root}>
            <Grid item xs={10} >
              <Typography variant="h3" className={classes.head}>Gatsby supports TypeScript by default!</Typography>
              <hr className="break"></hr>
              <Typography variant="body2" align="justify" color="textSecondary" component="p" className={classes.desc}>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. 
              Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
              You're currently on the page "{path}" which was built on {data.site.buildTime}.
              </Typography>

              <Typography variant="body2" color="textSecondary">To learn more, head over to our <a href="https://www.gatsbyjs.org/docs/typescript/" target="_blank" style={{color: '#65359D'}}>documentation about TypeScript</a>.</Typography>
              <br/>
             <Link to="/" className="back">Go back</Link>

            </Grid>
            <Grid item xs={6}>
    
            </Grid>
          </Grid>
      </Layout>
    
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

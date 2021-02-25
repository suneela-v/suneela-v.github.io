import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  circles:{
    border:"15px solid white",
    borderRadius:"50%",
    height:"150px",
    width:"150px",
   
   top:"40%",
   left:"30%",
   position:"relative"
  },
  innerCircle:{
    color:"#3BCEC8",
      fontSize:42,
      position:"relative",
      top:"30%"
        },
        topdiv:{
            position:"realtive",
            display:"grid",
            gridTemplateColumns:"auto auto auto",
            border:"1px solid red",
            backgroundColor:"#0E6E84",
            height:"100vh",
           
        }
        
}));
export default function Details() {
    const classes= useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed >
        <Typography component="div" className={classes.topdiv}>
          
            <Box component="div" className={classes.circles} style={{borderBottomColor:"#FFC831",borderLeftColor:"#FFC831"}}>
             <Typography className={classes.innerCircle}>1000+</Typography>
            </Box>
            
            <Box component="div" className={classes.circles} style={{borderTopColor:"#FFC831"}} >
             <Typography className={classes.innerCircle}>200+</Typography>
            </Box>
            <Box component="div" className={classes.circles} style={{borderRightColor:"#FFC831"}}>
             <Typography className={classes.innerCircle}>200+</Typography>
            </Box>
            <div>
            <h2 style={{color:"#3BCEC8"}}>Hours of <br/>coding</h2>
            </div>
            <div>
            <h2 style={{color:"#FFC831"}}>HackerRank <br/>Problems</h2>
            </div>
            <div>
            <h2 style={{color:"#3BCEC8"}}>Git<br/> Commits</h2>
            </div>
            </Typography>
      </Container>
    
    </React.Fragment>
  );
}

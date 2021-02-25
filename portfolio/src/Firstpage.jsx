import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import { green,red,blue,yellow,white } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
   display:"flex",
   justifyContent:"space-evenly"
  },
  box1:
  {
      position:"relative",
    height:"100px",
width:"100px",
border:"1px solid white",
borderRadius:"50%",
 zIndex:"-1",
 textAlign:"center",
 
}

}));

export default function Firstpage() {
  const classes = useStyles();
<a href="https://icons8.com/icon/egQrEphjrirz/redux">Redux icon by Icons8</a>
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className={classes.root}>
     <div className={classes.box1}><Icon className="fab fa-html5" style={{color: red[500], fontSize: 80 ,position:"relative",top:"10%"}} /></div>
     <div className={classes.box1}><Icon className="fab fa-css3" style={{color: blue[500], fontSize: 80 ,position:"relative",top:"10%"}} /></div>
     <div className={classes.box1} style={{backgroundColor:"blue"}}><Icon className="fab fa-react" style={{fontSize: 80 ,position:"relative",top:"10%"}} /></div>
     <div className={classes.box1}><Icon className="fab fa-js-square" style={{color: yellow[500], fontSize: 80 ,position:"relative",top:"10%"}} /></div>
    
    </div>
  );
}


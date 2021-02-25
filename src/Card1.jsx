import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { green,yellow,red,blue } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
 
  title: {
    fontSize: 24,
    fontWeight:"bold",
    fontFamily:"open Sans",
    textAlign:"left",
    padding:"10px"
  },
  subtitle:{
    fontSize: 16,
    fontWeight:"bold",
    fontFamily:"open Sans",
    textAlign:"left",
    padding:"5px"
  },
  bodycontent:{
      fontFamily:"Roboto",
      fontWeight:5,
      fontSize: 14,
      textAlign:"left",
      padding:"5px"
  }

});

export default function Card1() {
  const classes = useStyles();
 

  return (
    <div style={{ border: "1px solid red" }}>
      <div
        style={{
          display: "flex",
         
          width: "50%",
          margin: "auto",
          border: "1px solid green",
        }}
      >
        <img
        src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA0fHx0ZWNobm9sb2d5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt=""
          style={{width:"35%",borderRadius:"10px"}}
        />

        <Card className={classes.root} variant="outlined" style={{width:"65%"}}>
          <CardContent>
            <Typography
              className={classes.title}
              
            >
              TechcrunchClone
            </Typography>
            <Typography
              className={classes.subtitle}
              
            >
              One stop for technology news
            </Typography>
            <Typography
              className={classes.bodycontent}
              
            >
             The app helps user to be updated with the
news related to tech, express their opinions as
well as book the events within the tech
community.
            </Typography>
<div style={{size:30,textAlign:"left"}}>
            <Icon className="fab fa-html5" style={{color: red[500],paddingRight:"40px"}} />
            <Icon className="fab fa-css3" style={{color: blue[500],paddingRight:"40px"}} />
            <Icon className="fab fa-react" style={{color: green[500],paddingRight:"40px"}}/>
            <Icon className="fab fa-js-square"style={{color: yellow[500],paddingRight:"40px"}} />
            <Button variant="outlined" size="small" color="primary" className={classes.margin} style={{float:"right"}}>
          View full project
        </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

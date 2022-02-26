import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  footer:
  {
    height:'50px',
    color:'white',
    backgroundColor:'black',
    textAlign:'center',
    marginBottom:'0px',
    position:'absolute'
  }
}))

const Footer = () => {
  const d = new Date();
  const classes = useStyles();
  let year = d.getFullYear();
  return (
    <>
  <table style={{"position":"fixed", "width":"100%", "height":"38px","bottom":"0px", "left":"0px", "right":"0px", "backgroundColor": "black"}}>
  <tr><td align='center'><font style={{"color":"white", "size":'30px'}}><h4>Copyright {year} @Sahil Sachin Donde</h4></font></td></tr></table>
    </>
  );
};

export default Footer;
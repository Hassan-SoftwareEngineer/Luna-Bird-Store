import React from 'react';

const BgImageContainer = (props) => {

    const divStyle = {
        width: 'auto',
        height :  "auto",
        backgroundImage: `url(${props.bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display : "flex",
        alignItems : "center",
        // margin : "0.5% 2%",
        padding : "5% 2.5%",
        justifyContent : "flex-end"
      };

      const divStyle2 = {
        width: 'auto',
        height :  "auto",
        backgroundImage: `url(${props.bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display : "flex",
        alignItems : "center",
        // margin : "0.5% 2%",
        // padding : "5% 12%",
        padding : "0% 12%",
        justifyContent : "flex-start"
      }
  return (
    <div style={props.pgName == "SignUpLoginLayout" ? divStyle2 : divStyle}>
        {props.children}
    </div>
  )
}

export default BgImageContainer;


// src/components/HomePage.js
import React, { useState } from 'react';
import "../CSS/HomePage.css";
import imageOverCircle from "../../Images/imageOverCircle.png";
import imageOverCircle2 from "../../Images/imageOverCircle2.png";
import imageOverCircle3 from "../../Images/imageOverCircle3.png";
import loveBirdImage5 from "../../Images/loveBirdImage5.png";
import loveBirdImage9 from "../../Images/loveBirdImage9.png";
import loveBirdImage10 from "../../Images/loveBirdImage10.png";
import loveBirdImage11 from "../../Images/loveBirdImage11.jpg";
import loveBirdImage12 from "../../Images/loveBirdImage12.jpg";
import loveBirdImage16 from "../../Images/loveBirdImage16.png";
import Header from '../../Components/Header';
import Footer from "../../Components/Footer";
import SignUpLoginLayout from '../../Layout/SignUpLoginLayout';
import Login from '../../Components/Login';
import SignUp from '../../Components/SignUp';
import { useNavigate } from 'react-router-dom';


const HomePage = (props) => {

    const navigate = useNavigate();

    const [signUpPart, setSignUpPart] = useState(false);
    const [loginPart, setLoginPart] = useState(false);

    function SignUpFunction() {
        setSignUpPart(true);
    }

    function SignUpFunctionDisabled() {
        setSignUpPart(false);
    }

    function LoginFunction() {
        setLoginPart(true);
    }

    function LoginFunctionDisabled() {
        setLoginPart(false);
    }

    const imagesForMain2 = [
        loveBirdImage5,
        loveBirdImage9,
        loveBirdImage10,
      ];

      const imagesForMain3 = [
        loveBirdImage11,
        loveBirdImage12,
        loveBirdImage16,
      ];

    const DynamicBackgroundImage = ({ imageUrl }) => {
        return (
            <div className="dynamic-background" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          );
      };

    function HomePagePart1 (props) {
        return (
            <div className="part part1">
                <h1 className="afterHeaderData" id={props.partNo === "main2 part2" ? "h1" : undefined}>
  {props.mainHeading}
</h1>
                <p className="afterHeaderData" id="p1"> {props.paraText} </p>
                <div style={{display : 'flex', flexDirection : 'row', flexWrap : 'wrap'}}>
                {
                    props.btn1 == "Join Now" ? <button className="btnStyle" onClick={SignUpFunction}> { props.btn1 } </button> : <button className="btnStyle"  onClick={() => {
                        navigate(props.btn1 == "Love Birds" ? "/loveBirds" : "/healthyFoods" )
                     }} > { props.btn1 } </button> 
                }

                {
                 props.btn2 == "Sign In" ? <button onClick={LoginFunction} className="btnStyle" id="Explore"> { props.btn2 } </button> : <button className="btnStyle" id="Explore" onClick={() => {
                    navigate(props.btn2 == "Ring Birds" ? "/ringNeckBirds" : "/birdsCategories" )
                 }}> { props.btn2 } </button> 
                }
                 </div>

            </div>
        );
    }

    function HomePagePart2 (props) {
        return (
            <div className="part part2">
                        <div className="sub-part"><img src={imageOverCircle} alt="Over Circle" className="centered-image" /></div>
                        <div className="sub-part"><img src={imageOverCircle2} alt="Over Circle" className="centered-image" /></div>
                        <div className="sub-part"><img src={imageOverCircle3} alt="Over Circle" className="centered-image" /></div>
                    </div>
        );
    }


    return (
        <div className="container">
            <Header />
            <div className={signUpPart == false || loginPart == false ? "contentWithoutPadding " : "content"}>
                {
                    signUpPart == false ? loginPart == false ?
                <section id="main1">
                         <HomePagePart1 
                            mainHeading="Explore the Stunning Realm of Wild Birdlife." 
                            paraText="Enter a fascinating bird haven filled with dazzling feathered wonders, where each bird's unique colors and melodies create a symphony of natural splendor at our bird store!" 
                            btn1="Join Now" 
                            btn2="Sign In"
                            partNo="main2 part2" 
                        /> 
                        <HomePagePart2 />
                        
                </section> : <SignUpLoginLayout imagePath = "https://th.bing.com/th/id/OIP.IVXC41K7b4W0ntOCAu8RNwHaE8?w=900&h=600&rs=1&pid=ImgDetMain" >  <Login SignUpFunction = {SignUpFunction} SignUpFunctionDisabled = {SignUpFunctionDisabled } LoginFunctionDisabled = {LoginFunctionDisabled} />                
                </SignUpLoginLayout>: <SignUpLoginLayout imagePath = "https://wallpapercave.com/wp/wp3930618.jpg" >
                <SignUp LoginFunction = {LoginFunction} SignUpFunctionDisabled = {SignUpFunctionDisabled } LoginFunctionDisabled = {LoginFunctionDisabled} />
                </SignUpLoginLayout>
                }
                <section id="main2">
                    
                    <div className="part part1">
                        <div style={{display : "flex" , justifyContent : "space-around"}}> 
                        {imagesForMain2.map((image, index) => (
              <DynamicBackgroundImage key={index} imageUrl={image} />
            ))}
                        </div>
                    </div>
                    <div className="part part2">
                    <HomePagePart1 
                            mainHeading="Begin a Fascinating Exploration into the World of Wild Birdlife" 
                            paraText="Step into our Birds Haven, a special place where the avian world thrives. With over 1,000 birds from 50 unique species, including over 10 Master Piece, our store is your gateway to avian wonder and conservation. Shop with us to support our feathered friends!" 
                            btn1="Love Birds" 
                            btn2="Ring Birds" 
                            partNo="main2 part2"
                        /> 
                    </div>
                </section>
                
                <section id="main3">
                    <div className="part part1">
                    <HomePagePart1 mainHeading = "Embark on a Fascinating Journey into the World of Wild Birdlife" paraText = "Step into an enchanting world of avian marvels, where vibrant plumage and captivating melodies converge to orchestrate a symphony of natural beauty at our bird store!" btn1 = "Birds Health" btn2 = "Categories" partNo="main2 part2" />
                    </div>
                    <div className="part part2">

                    <div style={{display : "flex" , justifyContent : "space-around"}}> 
                        {imagesForMain3.map((image, index) => (
              <DynamicBackgroundImage key={index} imageUrl={image} />
            ))}
                        </div>

                    </div>
                </section>

                <Footer footer2 = {true} />
                
            </div>
        </div>
    );
};

export default HomePage;

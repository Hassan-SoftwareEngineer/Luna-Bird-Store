import React from "react";
import "../CSS/BirdsCategories.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BgImageContainer from "../../Components/BgImageContainer";
import CategoriesCard from "../../Components/CategoriesCard";

const BirdsCategories = (props) => {

  return (
    <div className="container">
    <Header  path = {props.path} />
    <div className="mainContent">
      {/* <BgImageContainer bgImageUrl = "https://media.cnn.com/api/v1/images/stellar/prod/221004143045-gang-gang-cockatoo.jpg?q=w_1110,c_fill" > */}
      <BgImageContainer bgImageUrl = "https://media.cnn.com/api/v1/images/stellar/prod/221004143045-gang-gang-cockatoo.jpg?q=w_1110,c_fill" >
      <CategoriesCard
      title = "Discover the Bird Categories"
      description = "Parrots can be categorized into small and large species. Small parrots, like budgies, Love Birds etc are playful and colorful, thriving in smaller spaces. Large parrots, such as macaws, are highly intelligent, forming strong bonds and requiring more attention and space." 
      />
      {/* <BirdCategoriesCard mainHeading = "Discover the World of Birds"  para = "Explore the diverse world of birds, where vibrant colors, unique behaviors, and melodious songs captivate the senses. From tiny hummingbirds to majestic eagles, each species offers a glimpse into the wonders of nature. " /> */}
      </BgImageContainer>

  <Footer footer2 = {true} />

      </div>
      </div>
  )
}

export default BirdsCategories;


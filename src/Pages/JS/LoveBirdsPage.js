import React from 'react';
import Header from "../../Components/Header";
import Cards from "../../Layout/Cards";
import Footer from "../../Components/Footer";
import SellingLayout from '../../Layout/SellingLayout';

const LoveBirdsPage = (props) => {
 
    const numCardsPerSet = 3;
    const sets = [];
    const LoveBirdsData =   [
        {
          "image_url": "https://cache.desktopnexus.com/thumbseg/2494/2494382-bigthumbnail.jpg",
          "title": "Albino Red Eyes",
          "description": "Albino Red Eyes Lovebirds are known for their unique albino mutation, featuring striking red eyes. These lovebirds are not only visually distinctive but also boast a charming personality.",
          "price": "$200"
        },
        {
          "image_url": "https://preview.redd.it/xwwxull5mwf11.jpg?width=827&auto=webp&s=efda19b9f6b5ab1ee6b89dd0a45d551e86f49d69",
          "title": "Dun Fellows",
          "description": "Dun Fellows Lovebirds are recognized for their dun (brownish) feather coloration, often displaying a calm and friendly demeanor. These lovebirds combine a unique color palette with a gentle personality, making them wonderful companions.",
          "price": "$180"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.QZ8DCbS0Xo9cJ91lTbG7UAHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "title": "Lutino Peach-faced",
          "description": "Lutino Peach-faced Lovebirds are characterized by a lutino mutation, featuring a yellow plumage and peach-colored face. These lovebirds are known for their playful nature and captivating appearance. With their vibrant colors and affectionate demeanor.",
          "price": "$220"
        },
        {
          "image_url": "https://t3.ftcdn.net/jpg/03/56/06/32/240_F_356063253_AflMDRjb9DPPSkGKQRE4JoX5QqHdpocq.jpg",
          "title": "Fischer's Lovebird",
          "description": "Fischer's Lovebirds are a popular species known for their vibrant colors and affectionate behavior. Native to central Africa, these lovebirds are recognized for their captivating appearance and sociable nature.",
          "price": "$250"
        },
        {
          "image_url": "https://i.pinimg.com/736x/f5/fe/20/f5fe20c929c96e12cbf8bc39bec8da76.jpg",
          "title": "Black-masked Lovebird",
          "description": "Black-masked Lovebirds are characterized by a distinctive black face mask, displaying a lively and sociable personality. These lovebirds are known for their energetic nature and engaging demeanor.",
          "price": "$200"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.QtElPCXVocwvmRqj32G04AHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "title": "Peach-faced Lovebird",
          "description": "Peach-faced Lovebirds are one of the most common lovebird species, recognized for their peach-colored face and playful antics. These lovebirds are known for their friendly and outgoing personalities.",
          "price": "$180"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.-XFKCH0UlRHnXs3--KWa0AHaE9?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "title": "Yellow-collared Lovebird",
          "description": "Yellow-collared Lovebirds are known for their yellow collar, striking appearance, and friendly behavior. These lovebirds are recognized for their captivating colors and engaging demeanor. Yellow-collared Lovebirds form strong bonds.",
          "price": "$220"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.ke3Etj0DvRVwAFzRWfOaaAHaFj?rs=1&pid=ImgDetMain",
          "title": "Blue-masked Lovebird",
          "description": "Blue-masked Lovebirds are recognized for their blue face mask and often exhibit a gentle and affectionate demeanor. These lovebirds are known for their captivating colors and engaging personality.",
          "price": "$200"
        },
        {
          "image_url": "https://th.bing.com/th/id/R.5ae0f72a6030ab4dd47fa1edc8fedb78?rik=2ZuTg2zY3f3pbg&pid=ImgRaw&r=0",
          "title": "Rosy-faced Lovebird",
          "description": "Rosy-faced Lovebirds are known for their rosy face, displaying a charming and social nature. These lovebirds are recognized for their captivating colors and affectionate behavior.",
          "price": "$250"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.GozHW6WB7UdhgaD5C5wLrwHaFj?w=800&h=600&rs=1&pid=ImgDetMain",
          "title": "Abyssinian Lovebird",
          "description": "Abyssinian Lovebirds are recognized for their unique feather pattern resembling the fur of Abyssinian cats. These lovebirds are known for their playful behavior and captivating appearance.",
          "price": "$180"
        },
        {
          "image_url": "https://i.ytimg.com/vi/njVKno21Q3Y/maxresdefault.jpg",
          "title": "Pied Lovebird",
          "description": "Pied Lovebirds are recognized for their pied (multi-colored) feather pattern, displaying a lively and entertaining personality. These lovebirds are known for their vibrant colors and engaging demeanor.",
          "price": "$220"
        },
        {
          "image_url": "https://th.bing.com/th/id/R.c663c5008482bd2c8e420cde5ec52393?rik=TDvKg4ZDeNe%2fHA&riu=http%3a%2f%2fburungnya.com%2fwp-content%2fuploads%2f2018%2f03%2fJenis-Lovebird-Violet-juzaphoto.com_.jpg&ehk=7l3YyjXGPhfWgMGiIefrqKZgovfzG97qUJATxzzPi4w%3d&risl=&pid=ImgRaw&r=0",
          "title": "Violet Lovebird",
          "description": "Violet Lovebirds are recognized for their violet coloration, known for their captivating appearance and friendly disposition. These lovebirds form strong bonds with their owners and thrive on social interaction.",
          "price": "$200"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.7u2Ihk3g5pJFu2RyFexmzAHaFj?w=253&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "title": "Nyasa Lovebird",
          "description": "Nyasa Lovebirds are native to the Nyasa region, recognized for their vibrant colors and charming behavior. These lovebirds form strong bonds with their owners and thrive on social interaction.",
          "price": "$250"
        },
        {
          "image_url": "https://www.birdspark.lk/wp-content/uploads/2018/11/madagascar-lovebird-agapornis-Canus.jpg",
          "title": "Madagascar Lovebird",
          "description": "Madagascar Lovebirds are native to Madagascar, known for their unique color variations and social nature. These lovebirds form strong bonds with their owners and enjoy social interaction.",
          "price": "$180"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.bcIKjL5bjHRfVohCfF3X_gHaFj?w=282&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "title": "Peach-faced Lutino",
          "description": "Peach-faced Lutino Lovebirds are recognized for their lutino mutation and peach-colored face, displaying a playful and affectionate demeanor. These lovebirds form strong bonds with their owners and thrive on social interaction.",
          "price": "$220"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.PK-ls2HU314I5WoKKXQjOQHaFo?rs=1&pid=ImgDetMain",
          "title": "Masked Blue Lovebird",
          "description": "Masked Blue Lovebirds are recognized for their blue face mask, known for their gentle temperament and colorful appearance. These lovebirds form strong bonds with their owners and enjoy social interaction.",
          "price": "$200"
        },
            {
              "image_url": "https://th.bing.com/th/id/R.d25b08071fcf43168a3fb1916eb8d409?rik=8%2belfED8lsNIOw&riu=http%3a%2f%2fwww.singing-wings-aviary.com%2fwp-content%2fuploads%2f2016%2f12%2fBlack-Cheeked-Lovebird-Photos.jpg&ehk=%2bY%2fvLkq%2b5%2f9y%2fa5YafpMUEPeDBhsoHrJNv0OfA8ZbP8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
              "title": "Black-cheeked Lovebird",
              "description": "Description: Lovebirds with exceptionally distinctive black cheek markings, showcasing their highly social behavior and a mesmerizing array of captivating colors. Known for their extraordinary charm, these lovebirds are the epitome of social companionship.",
              "price": "$250"
            },
            {
              "image_url": "https://images.alphacoders.com/108/thumb-1920-1081683.jpg",
              "title": "Green Lovebird",
              "description": "Description: Lovebirds with a timeless classic green coloration, exuding a remarkably lively and exceptionally friendly personality. Their vivid green plumage adds a touch of vibrancy to any environment, and their friendly nature makes them perfect companions.",
              "price": "$180"
            },
            {
              "image_url": "https://i.pinimg.com/originals/bb/cb/17/bbcb17234137ecbee2961d0cdbc176d8.jpg",
              "title": "Personata Lovebird",
              "description": "Description: Lovebirds with an unmistakable facial mask, celebrated for their endearing playful antics and an explosion of vibrant, breathtaking colors.",
              "price": "$220"
            },
            {
              "image_url": "https://th.bing.com/th/id/OIP.EVjPZpQ-VI2ovysbifm1LAHaFE?w=262&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              "title": "Parblue Lovebird",
              "description": "Description: Lovebirds with an enchanting yellow face, acknowledged for their irresistibly charming appearance and an inherently sociable nature. The captivating yellow hue of their face complements their friendly demeanor.",
              "price": "$200"
            },
            {
              "image_url": "https://i.pinimg.com/originals/bf/90/44/bf9044b0ee55e73fc078cb7d8880cb07.jpg",
              "title": "Caremino Lovebird",
              "description": "Description: Caremino Lovebirds, distinguished for their undeniably charming appearance and an inherently sociable nature that creates a delightful companionship. With an increased sense of charm and social grace.",
              "price": "$150"
            }
          
          ];

      
for (let i = 0; i < LoveBirdsData.length; i += numCardsPerSet) {
    const cardSet = LoveBirdsData.slice(i, i + numCardsPerSet).map((data, index) => (
      <Cards
        key={index}
        image={data.image_url}
        title={data.title}
        description={data.description}
        price={data.price}
      />
    ));
  
    sets.push(
      <SellingLayout key={i / numCardsPerSet}>
        <div className="flexes">
          {cardSet}
        </div>
      </SellingLayout>
    );
  }



  return (

    <div className="container">
    <Header  path = {props.path} />
    <div className="content">
      {sets}
        <Footer />
        </div>
        </div>

  );
}

export default LoveBirdsPage;

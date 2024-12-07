import React from 'react';
import Header from "../../Components/Header";
import Cards from "../../Layout/Cards";
import Footer from "../../Components/Footer";
import SellingLayout from '../../Layout/SellingLayout';

const Cages = (props) => {

  const numCardsPerSet = 3;
  const sets = [];
  const cagesData = [
    {
      "image_url": "https://m.media-amazon.com/images/I/51V37Hq6m6L.jpg",
      "title": "Wrought Steel Cage",
      "description": "Yaheetech 52-inch Wrought Steel Standing Large Flight King Bird Cage for Cockatiels African Grey Quaker Amazon Sun Parakeets Green Cheek Conures Pigeons Parrot Bird Cage Birdcage with Stand.",
      "price": "$99.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41D0fkmEPFL.jpg",
      "title": "Metal Parrot Cage",
      "description": "Yaheetech 69'' Extra Large Bird Cage Metal Parrot Cage w/Detachable Stand for Mid-Sized Parrots Cockatiels Conures Parakeets Lovebirds Budgie Finch, White.",
      "price": "$89.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41RsSYZV83L.jpg",
      "title": "Iron Bird Cage",
      "description": "Yaheetech 40 Inch Wrought Iron Bird Cage Open-Top Parrot Cage with Rolling Stand for Parakeets Cockatiels Budgies Parrotlets Lovebirds Canary Small-Sized Birds Parrots.",
      "price": "$75.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41gHvNP5EML.jpg",
      "title": "Playtop Parrot Cage",
      "description": "SUPER DEAL PRO 61-inch 2in1 Large Bird Cage with Rolling Stand Playtop Parrot Chinchilla Finch Cage Macaw Conure Cockatiel Cockatoo Pet House Wrought Iron Birdcage, Black.",
      "price": "$120.00"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/51vbZVUTEQL.jpg",
      "title": "Large Elegance Cage",
      "description": "Large Elegance and Durable Wrought Iron Open Play Top Stand Bird Parrot Rolling Cage, Include Metal Seed Guard Solid Metal Feeder Nest Door (30.5 x 29.5 x 63 H, White Vein).",
      "price": "$85.75"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/5151O9v36-L.jpg",
      "title": "YITAHOME 53 Inches Cage",
      "description": "YITAHOME 53 inches Birdcage Cover and Bird Cage Seed Catcher, Bird Cages for Parakeets, Parrot, Cockatiel, Pigeon, Flight cage for Birds.",
      "price": "$99.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/51QM4t0BjdL.jpg",
      "title": "Yaheetech 69-Inch Cage",
      "description": "Yaheetech 69-inch Wrought Iron Rolling Large Parrot Bird Cage for African Grey Small Quaker Amazon Cockatiel Sun Parakeet Green Cheek Conure Dove Lovebird Budgie Play Top with Stand.",
      "price": "$119.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41QZTseEwcL.jpg",
      "title": "Flyline Corner Bird Cage",
      "description": "Flyline Corner Bird Cage for Cockatiel Parakeet Black and White (White Vein).",
      "price": "$89.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/51I6Dz7PCrL.jpg",
      "title": "Iron Bird Cage",
      "description": "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys.",
      "price": "$75.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41j32-MlAYL.jpg",
      "title": "Wrought Iron Cage",
      "description": "HSM 63 Inch Wrought Iron Large Bird Flight Cage with Rolling Stand for African Grey Parrot Cockatiel Sun Parakeet Conure Lovebird Canary.",
      "price": "$119.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41xxBrDGvxL.jpg",
      "title": "Flight Bird Cage",
      "description": " 'Yaheetech 54' Large Flight Bird Cage for Parrots Macaw Cockatiels Sun Parakeets Lovebird Green Cheek Conures African Grey Small Quaker Amazon Parrots with Rolling Stand.",
      "price": "$99.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/51kxH3qUH8L.jpg",
      "title": "Bag Portable Cage",
      "description": "Bird Carrier,Bird Travel Bag Portable Bird Parrot Carrying Carrier Transparent Breathable Travel Cage,with Wooden Perch Stand and Tray,Backpack,Lightweight Birds Carrier with Food Bowl & Water Bottle.",
      "price": "$145.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41K45e-MdSL.jpg",
      "title": "Large Aviary Cage",
      "description": "Yaheetech Wrought Iron Bird Cages, Play Top Large Aviary with Stand for Cockatiel Parrot Sun Parakeet Conures Lovebird Budgie Finch African Grey White, 61-inch",
      "price": "$119.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41iADLfhDVS.jpg",
      "title": "Rolling Standing Cage",
      "description": " Yaheetech 55-inch Rolling Standing Triple Roof Top Medium Parrot Cage for Mid-Sized Parrots Cockatiels Sun Parakeets Green Cheek Conures Caique Pet Bird Cage with Detachable Stand.",
      "price": "$79.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/51JWMqxJRaL.jpg",
      "title": "Metal Bird Cage",
      "description": "YITAHOME 62 inch Metal Bird Cage, Large Parakeet Cages for Parrot, Cockatiel, Lovebird, Pigeon with Roof Top, Rolling Stand and Hanging Toys.",
      "price": "$125.50"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41V965xpHAL.jpg",
      "title": "Vivo Home Cage ",
      "description": "VIVOHOME 54 Inch Wrought Iron Large Bird Flight Cage with Rolling Stand for African Grey Parrot Cockatiel Sun Parakeet Conure Lovebird Canary Whtie.",
      "price": "$69.99"
    },
    {
      "image_url": "https://m.media-amazon.com/images/I/41oqPpH59eL.jpg",
      "title": "PawHut Wooden Cage",
      "description": "'PawHut 64.5' Wooden Bird Cage Aviary, Flight Cage with 4 Perches, Nest and Slide-Out Tray for Indoor/Outdoor, Gray.",
      "price": "$139.99"
    }
    ,
    {
      "image_url": "https://m.media-amazon.com/images/I/41VAs+XfgpL.jpg",
      "title": "Outdoor Bird Cage",
      "description": "'PawHut 60' Wooden Outdoor Bird Cage for Finches, Parakeet, Large Bird Cage with Removable Bottom Tray 4 Perch, Light Gray",
      "price": "$149.99"
    }
    ,
    {
      "image_url": "https://m.media-amazon.com/images/I/51J25fOBPrL.jpg",
      "title": "Wooden Bird Aviary",
      "description": "Aivituvin Outdoor Bird Cage Large Wooden Bird Aviary with Perch for Parakeet,Macaw and Any Small Birds,Wire Netting Above The Tray,Prevent Escape",
      "price": "$134.99"
    }
    ,
    {
      "image_url": "https://m.media-amazon.com/images/I/51pRv-FFAUL.jpg",
      "title": "Trixie Aviary",
      "description": "Trixie Outdoor Bird Aviary, 71-in Wooden Birdcage, 2 Perches, Ideal for Small Birds, Finches, Brown, (55951)",
      "price": "$74.99"
    }
    ,
    {
      "image_url": "https://m.media-amazon.com/images/I/51IrywP+VjS.jpg",
      "title": "Wooden Hand Crafted",
      "description": "Wooden Hand Crafted Bird Cage; Slide Out Tray, Plexiglas.",
      "price": "$129.99"
    }
    ,
    {
      "image_url": "https://m.media-amazon.com/images/I/51AsGn7KfEL.jpg",
      "title": "Parakeet Cage",
      "description": " 'Gowoodhut 68.8' L Outdoor Bird Aviary Indoor Wooden Large Bird Cage Parakeet Cage on Wheels,Removable Wire Netting Slide Pull Out Tray, 2 Perches, Nest House,Ideal for Small Birds,Finches,Parrots,Grey",
      "price": "$139.99"
    }
    ,
    {
      "image_url": "https://m.media-amazon.com/images/I/41GcaYO94EL.jpg",
      "title": "Wooden Bird Cage",
      "description": "Hanover Outdoor Vertical Wooden Bird Cage, 3 Resting Bars, Ladder, Waterproof Roof, Removable Tray",
      "price": "$79.99"
    }
    ,
    {
      "image_url": "https://m.media-amazon.com/images/I/51oM8ZXgsWL.jpg",
      "title": "Gutinnen Bird Cage",
      "description": "GUTINNEEN Outdoor Bird Aviary Wooden Large Bird Cage on Wheels, Featuring Play Stand, Perches, Nest Habitat, Include Wire Mesh Above Bottom Tray Easy to Clean",
      "price": "$79.99"
    }
  ];

for (let i = 0; i < cagesData.length; i += numCardsPerSet) {
        const cardSet = cagesData.slice(i, i + numCardsPerSet).map((data, index) => (
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
    <Header path = {props.path} />
    <div className="content">
      {sets}
        <Footer />
        </div>
        </div>

  )
}

export default Cages;

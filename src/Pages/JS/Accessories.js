import React from 'react';
import Header from "../../Components/Header";
import Cards from "../../Layout/Cards";
import Footer from "../../Components/Footer";
import SellingLayout from '../../Layout/SellingLayout';

const Accessories = (props) => {

  const numCardsPerSet = 3;
  const sets = [];
  const AccessoriesData = [
    {
      "image_url": "https://th.bing.com/th/id/OIP.plaaS8F-ovyzdfhMaWgfbgHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "title": "Measuring Spoons",
      "description": "Pack of 5 Spoons: 1.25ml, 2.5ml, 5ml, 7.5ml ,15ml",
      "price": "$3.99"
    },
    {
      "image_url": "https://th.bing.com/th/id/OIP.FN2gIhFH8ILtEIUQY9j3VwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "title": "Nesting Material",
      "description": "Imported Nesting Material For canary/Finchs.Material include: Coton, Jute, Coconut, sisal. Weight: 50gm",
      "price": "$2.00"
    },
    {
      "image_url": "https://static-01.daraz.pk/p/404965a97e6922c29b83fcc16faca493.jpg",
      "title": "Budgies Breeding Box",
      "description": "Breeding Box is for bird owners interested in breeding their birds. The box works both inside and outside the cage and provides a safe shelter for mating birds. The easy access door allows you easy viewing of your bird's eggs or babies. size : 6x5.5inches hieght is 8 inches.",
      "price": "$3.75"
    },
    {
      "image_url": "https://static-01.daraz.pk/p/3fa33a94e2a5c5c06cd2d9653bc2f1d3.jpg",
      "title": "Water Dispenser",
      "description": "Product details of 2 Multicolour Water Dispenser Cage Bird/Parrot Canary Plastic Drink Bottle Feeder Pet Food ( 90 ml).",
      "price": "$2.50"
    },
    {
      "image_url": "https://static-01.daraz.pk/p/e1b1a1b95752a71562e934f8f58c4a49.jpg",
      "title": "Rings For Love Birds",
      "description": "Product details of Rings For Love Birds Adult & baby Aluminum (2Pc).Finest Quality in your Range,4.5mm / 5mm,Printed with date and Country,Material : Aluminium.",
      "price": "$7.99"
    },
    {
      "image_url": "https://int.ferplast.com/cdn/shop/products/1-0180007910_180x.jpg?v=1669028117",
      "title": "SIRIO",
      "description": "In three sizes available, Sirio feeders for parrots are equipped with a hook for fastening. They have a rounded shape, capacious, perfect to contain seed or food mix; the use of steel make them very hygienic, long-lasting and easy to clean",
      "price": "$9.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/4ec252f21764c304626790a7e819b6f8.jpg_400x400q75.jpg_.webp",
      "title": "Birds Feeder Spoon",
      "description": "5Pcs Birds Feeder Spoon Stainless Steel Handfeed Spoon for Small Parrots Cockatiel Love birds Accessories",
      "price": "$49.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/fc21a8e359969305ee3f42da03a0fc23.jpg_400x400q75.jpg_.webp",
      "title": "Wood Hanging Stand",
      "description": "3Pcs Wood Hanging Stand Rack Toy Branch Perches for Bird Cage Parrot Perch Standing Holder Cage Accessories",
      "price": "$39.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/a74e524426e28e0ab81e111f669d9fa1.jpg_400x400q75.jpg_.webp",
      "title": "Bird Feeding Syringe",
      "description": "10/20/30/50/100ml Bird Feeding Syringe with PVC Tube for Parrots Pigeons Lovebirds",
      "price": "$24.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/41349e9a7986cfd590ae11bc4730a829.jpg_400x400q75.jpg_.webp",
      "title": "Perch Plastic Stand",
      "description": "5Pcs Bird Perch Plastic Stand Perches Holders for Parrot Lovebirds Cage Accessories",
      "price": "$29.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/1c5e0de750e2123b077fb4a341284449.jpg_400x400q75.jpg_.webp",
      "title": " Parrot bird nest",
      "description": "Natural high-quality forage fiber for Parrot bird nest Pet mattress material Bird house Accessories 1Pack/3Packs",
      "price": "$44.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/07228332a1d83418ef6c56b45cb15576.jpg_400x400q75.jpg_.webp",
      "title": "Rat Station Board",
      "description": "Animals For Bird Cage Pet Supplies Rat Station Board Stand Rack Toy Perches Pet Bird Parrot Wood Platform",
      "price": "$24.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/e87a37e02ba4217897b1ea08712ca62a.png_400x400q75.png_.webp",
      "title": "Wooden Nest box",
      "description": "The Bird Shop Ph Bird Wooden Nest box Parrot Pairing house",
      "price": "$14.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/b6b0d8220ecc219ed8503e065a0d47dd.jpg_400x400q75.jpg_.webp",
      "title": "Egg Candling Lamp",
      "description": "Birds Egg Candling Lamp LED Pen Light for Bird Poultry Incubation Flashlight lighting equipment",
      "price": "$9.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/d76012b3b949399862a39638e351ab18.jpg_400x400q75.jpg_.webp",
      "title": "Automatic Feeder",
      "description": "1Pcs Automatic Drinking with Clip for Birds Parrot Feeders Automatic Feeder Pet Bird accessories S/M/L/XL",
      "price": "$14.50"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/6964bb4438349d5118ba8ea1712ea3e7.jpg_400x400q75.jpg_.webp",
      "title": "Bird Bathtub",
      "description": "Renna's Bird Bath Cage For Bird Cage Parrot Cage Pet Cage Transparent Bird Bathtub Bird Accessories",
      "price": "$5.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/8f249a6023c16971a58eec8127049948.jpg_400x400q75.jpg_.webp",
      "title": "Food Adding Scoop",
      "description": "2Pcs Bird Feeder Spoon Stainless Steel Bird Cage Food Adding Scoop for Parrot Pigeon Lovebirds Accessories",
      "price": "$9.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/53c8039776762bb1157bb63581db831c.jpg_400x400q75.jpg_.webp",
      "title": "Acrylic Food Container",
      "description": "Bloom Proof Bird Poultry Feeder Automatic Acrylic Food Container Parrot Pigeon Splash",
      "price": "$9.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/d546dc4c3954b189a2115b6269c4b140.jpg_400x400q75.jpg_.webp",
      "title": "Drinker Acrylic Seed ",
      "description": "No Mess Bird Feeders Automatic Parrot Feeder Drinker Acrylic Seed Food Container Cage Accessories for Small and Medium Parakeets Cockatiels Lovebirds polite",
      "price": "$7.99"
    },
    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/d4495971e0abf010dc98c6142ce93285.jpg_400x400q75.jpg_.webp",
      "title": "Decorative Nest Cage",
      "description": "Natural Coconut Hideaway Parrot Birds Toys Decorative Bird Nest Cage House for Pet Parrot Budgies Parakeet Finch Pigeon Cage Rat",
      "price": "$6.99"
    },

    {
      "image_url": "https://lzd-img-global.slatic.net/g/p/25b91b348d66641f860c598778466b96.jpg_400x400q75.jpg_.webp",
      "title": "Handfeeding Syringe",
      "description": "10Pcs Bird Handfeeding Syringe Soft Hose Plastic Feeding Tubes for Baby Birds Parrot Cockatiel Budgie Bird Accessories",
      "price": "$14.99"
    }
    
  ];

for (let i = 0; i < AccessoriesData.length; i += numCardsPerSet) {
        const cardSet = AccessoriesData.slice(i, i + numCardsPerSet).map((data, index) => (
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

export default Accessories;


import React from 'react';
import Header from "../../Components/Header";
import Cards from "../../Layout/Cards";
import Footer from "../../Components/Footer";
import SellingLayout from '../../Layout/SellingLayout';

const HealthyFoods = (props) => {

  const numCardsPerSet = 3;
  const sets = [];
  const HealthyFoodsData = [
    {
      "image_url": "https://t3.ftcdn.net/jpg/05/71/79/68/240_F_571796804_pv0VQ3gweilypKqMSB6QfIKPrw4bXGNX.jpg",
      "title": "Organic Parrot Pellets",
      "description": "Our premium organic parrot pellets are a blend of carefully selected organic grains, seeds, and fruits. Designed to provide your feathered friend with the essential nutrients they need, these pellets are not only healthy but also delicious. ",
      "price": "$6.50"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/a136ba5dae84270693d55aa19eeec10a_17933119-1ee6-4eb9-abf7-9cfad8e19815_300x.jpg?v=1639405482",
      "title": "Mega Mix Bulk",
      "description": "Perfect for medium birds, JUST 4 BIRDS MEGA MIX includes the perfect combination of necessary nutrition birds need in their diet: 70% pellet 30% of nuts, healthy seeds, dried fruits and veggies",
      price: "$4.25"
    },
    {
      "image_url": "https://t4.ftcdn.net/jpg/03/98/22/55/240_F_398225571_hBrKS7Lfi2zk6gCdVvk5D8UzkJMooM5M.jpg",
      "title": "Seed Blend for Parrots",
      "description": "Our Seed Blend for Parrots is a thoughtfully crafted combination of sunflower seeds, safflower seeds, and millet. These seeds are not only delicious but also a source of essential nutrients that promote your parrot's health and well-being.",
      price: "$3.75"
    },
    {
      "image_url": "https://t3.ftcdn.net/jpg/03/80/72/56/360_F_380725694_eqULoFoknbrWXu1RYJECsxIMiCUP2s5X.jpg",
      "title": "Nutty Parrot Snack",
      "description": "Treat your parrot to a nutty delight with our Nutty Parrot Snack. This irresistible snack is a blend of roasted nuts and seeds that provides your parrot with a rich source of protein and healthy fats. Each bite is a crunch of happiness for your feathered companion.",
      price: "$2.99"
    },
    {
        "image_url": "https://www.just4birds.com/cdn/shop/products/dc53cbf19d6dec49d27e4892d6e368f7_300x.jpg?v=1658860840",
        "title": "Hagen Tropican Food",
        "description": "Since Tropican incorporates vitamins and minerals, a vitamin supplement is not needed. The ingredients found in this new formula have been carefully selected to support birds that might have had issues with our current Lifetime and High Performance formulations.",
        price: "$8.99"
      }
      ,
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/dd1fd22ab8e8abf5d71d639f8a329f04_300x.jpg?v=1634669963",
      "title": "Zupreem Mix Treats",
      "description": "Real Rewards® Garden Mix Treats for Medium birds offers a delicious mix of carrots, peas, almonds and zucchini to reward those special moments you share with your pet and this item is made with ' Dried carrots, Dried peas, Almonds, Dried zucchini ' ",
      price: "$5.50"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/Just4Birds-whole-shelled-nuts_600x.jpg?v=1677718441",
      "title": "Shelled Mixed Nuts",
      "description": "Our Whole Shelled Mixed Nuts are a gourmet treat for parrots. Packed with almonds, walnuts, pecans, and more, they offer healthy fats, protein, and essential nutrients. These nuts engage your parrot's beak and provide mental stimulation.",
      price: "$6.75"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/d261b57bc005e3f0d232c5b908b3077e_600x.jpg?v=1659474755",
      "title": "ZuPreem FruitBlend ",
      "description": "FruitBlend Flavor with natural flavors provides healthy and delicious nutrition for everyday feeding for Conures, Caiques, African Greys, Senegals, Amazons, Eclectus, Small Cockatoos and other medium to large parrots that prefer this pellet size..",
      price: "$4.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/b990c5f4c2c23d7bd87968ffa1828f15_300x.jpg?v=1659465556",
      "title": "Kaytee Nutrisorf",
      "description": "We were inspired by picky eaters! We were inspired by picky eaters! A unique texture combined with optimal nutrition and naturally sweet flavors, make Kaytee NutriSoft food a great foundation for your pet bird's variety diet.",
      price: "$5.25"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/c5581eff9313725b8fa1a6df28c4d315_600x.jpg?v=1638401930",
      "title": "Classic Nutri-Berries",
      "description": "The Lafeber difference is that we’ve perfected a way to nutritionally balance our foods without sacrificing taste and texture the way regular pellets do. Macaw & Cockatoo Nutri-Berries have all the essential vitamins and minerals, but instead of being ground up and put into a pellet form.",
      price: "$17.50"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/caf2e65881d705f385ce2404909619e1_f0d0bb61-ee4b-49bb-a113-622ac6c08059_300x.jpg?v=1659474863",
      "title": "ZuPreem VeggieBlend ",
      "description": "VeggieBlend Flavor with natural flavors provides healthy and delicious nutrition for everyday feeding for Conures, Caiques, African Greys, Senegals, Amazons, Eclectus, Macaws, Cockatoos, and other birds that prefer this pellet size.",
      price: "$24.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/173fa662d03eb9d5437f600712588313_600x.jpg?v=1659471340",
      "title": "Kaytee Forti-Diet",
      "description": "Hang Kaytee Treat Stick in your pet's cage following the instructions below. For best results alternate varieties and limit to 1 stick per bird per week. The specially designed 3-way hanger is made of a non-toxic, passable plastic that is safe for your pet.",
      price: "$9.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/a7923228ee6a08dbf8a8d335414002b3_600x.jpg?v=1657915585",
      "title": "Hagen Tropican",
      "description": "Tropican High Performance Sticks for Parrots is a scientifically formulated and completely balanced diet that meets the higher requirements for breeding (parental egg laying and rearing of young) and growing Parrots (hand-feeding from hatch).",
      price: "$24.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/3ee64d1459d5afb3a257ac66af6a114b_300x.jpg?v=1659472008",
      "title": "ZuPreem Natural Food",
      "description": "Natural with added vitamins, minerals and amino acids provides healthy and delicious nutrition for everyday feeding for Conures, Caiques, African Greys, Senegals, Amazons, Eclectus, Small Cockatoos and other medium to large parrots that prefer this pellet size.",
      price: "$21.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/ecf486615f53c2094a02fad16cd24978_300x.jpg?v=1659473004",
      "title": "ZuPreem FruitBlend",
      "description": "FruitBlend® Flavor with natural flavors provides healthy and delicious nutrition for everyday feeding for Parakeets, Budgies, Parrotlets and other small birds that prefer this pellet size.",
      price: "$16.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/989ac3ab644bc028ca5a27b715555f63_d8223fe0-7417-46b0-8900-4251c1411205_600x.jpg?v=1638408114",
      "title": "Tropical Fruit Berries",
      "description": "Instead of all the seeds and grains being ground down into a pelleted form, the ingredients in Tropical Fruit Nutri-Berries are left mostly whole to give your bird the flavors and textures pellets lack. And, unlike vitamin- and mineral-fortified seed mixes that essentially lose their health benefits.",
      price: "$12.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/Just4Birds-Sunflower-seeds-2_600x.jpg?v=1677635736",
      "title": "Sunflower Seed",
      "description": "Nutrient-rich and delicious, our Sunflower Seeds are a favorite of parrots. Packed with essential nutrients, these seeds support feather health, energy, and overall well-being. Ideal for training, playtime, or as a daily treat.",
      price: "$4.50"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/163c15540b0c61b3c86687304298fbd0_600x.jpg?v=1658859763",
      "title": "Hagen Tropican Food",
      "description": "Tropican Lifetime Formula Granules for Cockatiels is a scientifically formulated, completely balanced and flavorful maintenance diet for fledged Juvenile to adult Parrots. Since Tropican incorporates vitamins and minerals, a vitamin supplement is not needed.",
      price: "$8.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/0fe6146ad29eb267a827bca902c429d9_300x.jpg?v=1659471862",
      "title": "ZuPreem Natural Food",
      "description": "Natural with added vitamins, minerals and amino acids provides healthy and delicious nutrition for everyday feeding for Cockatiels, Quakers, Lovebirds, Small Conures and other medium birds that prefer this pellet size.",
      price: "$16.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/944533d3d8d3fe1eb330f6e64a767ecf_600x.jpg?v=1659473220",
      "title": "Hagen Tropimix Food",
      "description": "Tropimix enrichment formula for Cockatiels and Lovebirds is an appetizing food mix full of grains, legumes, peanuts, fruits and extruded Tropican granules. Tropican granules are not only bursting with peanut flavor, but are formulated.",
      price: "$10.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/96e95a4fd22a048b0ca554bf6067b985_600x.jpg?v=1658860924",
      "title": "Tropimix enrichment",
      "description": "Tropimix enrichment formula for Small Parrots is an appetizing food mix full of grains, fruits, nuts, legumes and extruded Tropican granules. Tropican granules are not only bursting with peanut flavor, but are formulated with plenty of essential nutrients to ensure optimal health.",
      price: "$24.50"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/9d1e0bdfa6392eea6ec79a24bbf00d6f_600x.jpg?v=1649887898",
      "title": "Egg Granules Food",
      "description": "Egg Granules is a scientifically formulated extruded blend of grains, egg protein, essential vitamins & minerals for budgies, canaries and finches and other small birds.",
      price: "$6.50"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/c2cc657474b23e457f2b2c7d1c16a688_600x.jpg?v=1638413988",
      "title": "Lafeber's Sunny Orchard",
      "description": "Sunny Orchard Nutri-Berries combine fresh ingredients, hulled seeds, and essential vitamins and minerals rolled together to offer all the nutrition of pellets, plus all the benefits and fun of foraging. Instead of grinding down the ingredients into a pelleted form.",
      price: "$12.25"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/942e83ce6a4a9065b1f2352ad28f8e61_859f7443-6dda-46d3-9397-a1bc3ca7c3b5_600x.jpg?v=1638413930",
      "title": "Pellet-Berries Parakeet",
      "description": "Parakeets peck their way through the seed bowl so enthusiastically, it’s hard to imagine them eating anything else. That’s not to say that these little birds don’t get excited about more wholesome food, especially if it has the tastes and textures their busy little beaks can tear into.",
      price: "$25.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/fde47cc1f538c6fdca195db9d91251e8_600x.jpg?v=1638404985",
      "title": "Garden Veggie Berries",
      "description": "Like a pelleted diet, Garden Veggie Nutri-Berries are a nutritionally complete food. Unlike pellets, in which all the ingredients are ground down and formed into a pellet, the ingredients in Nutri-Berries are left mostly whole.",
      price: "$15.25"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/3d5726a1d34aa1ef0ffd28bb3c01b82f_600x.jpg?v=1638397959",
      "title": "El Paso Nutri-Berries",
      "description": "Instead of grinding down the ingredients into a pelleted form, the ingredients in El Paso Nutri-Berries are left mostly whole to give your bird zesty flavors and textures pelleted diets lack. And, unlike vitamin- and mineral-fortified seed mixes that lose their health benefits.",
      price: "$10.45"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/1f8d39687ec4ed480c1fd5c54e2bc284_300x.jpg?v=1650660732",
      "title": "Tropical Mix Treats",
      "description": "Real Rewards™ Tropical Mix Treats for Medium Birds offers a delicious mix of peanuts, pineapple, mango and coconut to provide reward occasions for those special moments you share with your bird.",
      price: "$6.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/higgins-vl-goldenfeast-amazon-bird-food-175-lbs-983577_1400x_6ecae48e-e056-494d-aa93-168c6a7a19e1_600x.jpg?v=1680811305",
      "title": "GoldenFeast Blend",
      "description": "New Goldenfeast by Versele-Laga are bountiful bird Foods with origin-inspired ingredients free of artificial components not found in nature. These premium exotic ingredients, fruits, nuts and vegetables are all blended with first crop seeds and ancient grains.",
      price: "$89.50"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/f9a495240a386aa00283bb00dc0e0862_600x.jpg?v=1658861124",
      "title": "Enrichment Food",
      "description": "Tropimix enrichment formula for Large Parrots is an appetizing food mix full of grains, fruits, legumes, nuts and extruded Tropican sticks. Tropican sticks are not only bursting with peanut flavor, but are formulated with plenty of essential nutrients to ensure optimal health.",
      price: "$29.99"
    },
    {
      "image_url": "https://www.just4birds.com/cdn/shop/products/a860d0bb0d0608fea5474c63a7e39c9e_400x.jpg?v=1638387170",
      "title": "Lafeber's Premium Food",
      "description": "Each pellet is a high-quality blend of natural ingredients like ground non-GMO corn and soybean meal. Our grains are literally grown outside Lafeber Company’s front door. We also include whole egg, one of the most digestible forms of protein.",
      price: "$29.99"
    }
  ];

for (let i = 0; i < HealthyFoodsData.length; i += numCardsPerSet) {
        const cardSet = HealthyFoodsData.slice(i, i + numCardsPerSet).map((data, index) => (
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

  )
}

export default HealthyFoods;

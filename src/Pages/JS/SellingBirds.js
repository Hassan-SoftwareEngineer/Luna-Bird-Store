import React from 'react';
import Header from "../../Components/Header";
import Cards from "../../Layout/Cards";
import Footer from "../../Components/Footer";
import SellingLayout from '../../Layout/SellingLayout';

const SellingBirds = (props) => {

  const numCardsPerSet = 3;
  const sets = [];
      const SellingBirdsData =   [
           {
       image_url: 'https://cdn.pixabay.com/photo/2017/11/02/00/36/parrot-2909835_640.jpg',
      //  image_url: '',
      title: 'Scarlet Macaw',
      description: "Scarlet Macaws are famous for their vibrant red plumage and large size. They are intelligent, social, and make impressive pets for those who can provide the space and attention they need." ,
      price: '$3000'
  },
  {
      image_url: 'https://t4.ftcdn.net/jpg/04/46/12/93/240_F_446129343_AhLU2UxQx7MmmCGKtyyaELXRspj5ij7M.jpg',
      title: 'Gray Parrot',
      description: "Gray Parrots, also known as African Grey Parrots, are intelligent birds with remarkable talking abilities. They make excellent companions, forming strong bonds with their owners.",
      price: '$300'
  },
  {
      image_url: 'https://t3.ftcdn.net/jpg/05/57/52/16/240_F_557521635_hzhVXqGjjYkgJjBa9cS84WgDlDCe2flv.jpg',
      title: 'Crimson Rosella',
      description:  "Crimson Rosellas are stunning parrots with vibrant red, blue, and black plumage. They are native to Australia and are cherished for their striking appearance and friendly personalities.",
      price: '$320'
  }, 
  {
      image_url: "https://cdn.pixabay.com/photo/2022/12/22/11/33/quaker-7672007_640.jpg",
      title: "Quaker Parrot",
      description: "Quaker Parrots are intelligent and often excellent talkers, known for their engaging personalities. They have a distinctive gray face and bright green plumage, making them a striking addition to any home.",
      price: "$250"
  },
  {
      image_url: "https://media.istockphoto.com/id/1639464356/photo/parrot.webp?b=1&s=612x612&w=0&k=20&c=jT1kL7hddnJ1h6Ag0eN5FIiEGRPO-xZUJvk7ssq6Ykg=",
      title: "Senegal Parrot",
      description: "Senegal Parrots are playful and curious, making them delightful companions for bird lovers. With their striking green and yellow plumage, they are a sight to behold and can provide endless entertainment.",
      price: "$350"
  },
  {
      image_url: "https://petsoid.com/wp-content/uploads/2019/12/Pionus-Parrots-768x548.jpg",
      title: "Pionus Parrot",
      description: "Pionus Parrots are known for their calm demeanor and colorful plumage. They may not be the best talkers, but their gentle disposition and vibrant feathers make them charming pets.",
      price: "$500"
  },
  {
      image_url : "https://media.istockphoto.com/id/1256734929/photo/flying-parrot.webp?b=1&s=612x612&w=0&k=20&c=-YV4de0spODx--i5mcWIPlzsMdpwrKYkKXGk1RrXDCo=",
      title: "Indian Ringneck Parrot",
      description: "Indian Ringneck Parrots are intelligent and have the ability to mimic human speech. They come in various colors, including vibrant greens and blues, and can be highly entertaining companions.",
      price: "$250"
  },
  {
      image_url: "https://t4.ftcdn.net/jpg/02/75/07/67/240_F_275076704_MSJl9kCdCImZT8kRBzvstLptdXnzUlVg.jpg",
      title: "Moluccan Cockatoo",
      description: "Moluccan Cockatoos are affectionate and known for their beautiful salmon-pink plumage. They thrive on social interaction and can be cuddly pets that enjoy being part of the family.",
      price: "$2,000"
  },
  {
      image_url: "https://t3.ftcdn.net/jpg/05/57/52/16/240_F_557521638_3zPuEiO89wVIOspGUIX57rz71mgxHQQw.jpg",
      title: "Crimson Rosella",
      description: "Crimson Rosellas are stunning parrots with vibrant red, blue, and black plumage. They are native to Australia and are cherished for their striking appearance and friendly personalities.",
      price: "$350"
  },
  {
      image_url: "https://media.gettyimages.com/id/1124450299/photo/parrot.jpg?s=612x612&w=0&k=20&c=DQjYHxbaxY9JO4xAfRxI_Sad_TvNiPbYK3PtKwIQdwQ=",
      title: "Black-capped Conure",
      description: "Black-capped Conures are small parrots with a big personality. They are known for their playful and lively nature, making them entertaining pets for families and individuals alike.",
      price: "$400"
  },
  {
      image_url: "https://cdn.pixabay.com/photo/2017/08/18/22/14/macaw-2656728_640.jpg",
      title: "Scarlet Macaw",
      description: "Scarlet Macaws are famous for their vibrant red plumage and large size. They are intelligent, social, and make impressive pets for those who can provide the space and attention they need.",
      price: "$3,500"
  },

  {
      image_url: "https://cdn.pixabay.com/photo/2021/02/11/13/01/macaw-6005220_640.jpg",
      title: "Blue and Gold Macaw",
      description: "Blue and Gold Macaws are striking parrots with bright blue and yellow feathers. They are known for their intelligence and talking ability, making them popular pets for those who want an interactive companion.",
      price: "$2,500"
  },
  {
      image_url: "https://t4.ftcdn.net/jpg/02/01/18/59/240_F_201185952_qCHFIaWkXEh8EHcSa9s4D9WgwO5pJt6z.jpg",
      title: "Hawk-headed Parrot",
      description: "Hawk-headed Parrots are named for their distinctive head feathers that resemble a hawk's crest. They are intelligent and can make wonderful, unique companions for those who appreciate their unique appearance.",
      price: "$1,200"
  },
  {
      image_url: "https://images.pexels.com/photos/3250437/pexels-photo-3250437.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Lilac-crowned Amazon",
      description: "Lilac-crowned Amazons are known for their charming personalities and lilac-colored crowns. They are social and intelligent, often forming strong bonds with their owners.",
      price: "$700"
  },
  {
      image_url: "https://media.istockphoto.com/id/1253996166/photo/yellow-naped-amazon-parrot-amazona-auropalliata-adult-standing-on-branch.webp?b=1&s=612x612&w=0&k=20&c=VHg-r99T4WoXKDK_zNBQmer3y5gQy1djo9pA0NAy_XA=",
      title: "Yellow-naped Amazon",
      description: "Yellow-naped Amazons are characterized by their yellow nape and green plumage. They are excellent talkers and have playful personalities, making them delightful companions.",
      price: "$1,000"
  },
  {
      image_url: "https://images.pexels.com/photos/4139373/pexels-photo-4139373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Goffin's Cockatoo",
      description: "Goffin's Cockatoos are known for their white plumage and playful nature. They are intelligent and can be great talkers, bringing joy and entertainment to their owners.",
      price: "$1,200"
  },
  {
      image_url: "https://t4.ftcdn.net/jpg/00/81/88/63/240_F_81886375_ezPVBjJ96jTiZ6VWqcTIXnLC2LZxT0Qy.jpg",
      "title": "Yellow-crowned Amazon",
      description: "Yellow-crowned Amazons are characterized by their yellow crowns and green feathers. They are known for their cheerful personalities and talking abilities, making them engaging pets.",
      price: "$800"
  },
  {
      image_url: "https://media.istockphoto.com/id/1477970060/photo/blue-fronted-amazon.webp?b=1&s=612x612&w=0&k=20&c=BZpW9JW7D8tqXL3HOrmgt9_mtgp2fcRjZAGJAiDuS5k=",
      title: "Blue-fronted Amazon",
      description: "Blue-fronted Amazons are named after the blue patch on their foreheads. They are intelligent and have a knack for mimicry, making them entertaining companions for bird enthusiasts.",
      price: "$950"
  },
  {
      image_url: "https://cdn.pixabay.com/photo/2018/09/07/17/52/jardines-parrot-3661167_640.jpg",
      title: "Jardine's Parrot",
      description: "Jardine's Parrots are small and colorful parrots with playful personalities. They are known for their intelligence and engaging behaviors, making them delightful pets.",
      price: "$800"
  },
  {
      image_url: "https://cdn.pixabay.com/photo/2021/07/06/02/06/cockatoo-6390457_640.jpg",
      title: "Sulphur-crested Cockatoo",
      "description": "Sulphur-crested Cockatoos are recognized by their bright yellow crests. They are lively and intelligent birds that require social interaction and mental stimulation.",
      price: "$1,500"
  },
  {
      image_url: "https://cdn.pixabay.com/photo/2015/03/23/13/57/rainbow-lorikeets-686100_640.jpg",
      title: "Lorikeet",
      description: "Lorikeets are small parrots with stunning, multicolored plumage. They are nectar feeders and have lively personalities, often becoming the life of the party in any bird collection.",
      price: "$300"
  },
  {
      image_url: "https://t4.ftcdn.net/jpg/03/66/20/79/240_F_366207995_8vc7b7iRo13E2mgnZBssNIG2BQdRdi6c.jpg",
      title: "Red Lory",
      description: "Red Lories are characterized by their striking red plumage. They are known for their playful and social nature, forming strong bonds with their owners and often displaying a knack for mimicry.",
      price: "$1,000"
  },
  {
      image_url: "https://t4.ftcdn.net/jpg/04/74/78/25/360_F_474782520_nqtosSkVPlUPMdi90Y8M5Uj0KaR2dYRb.jpg",
      title: "Bourke's Parakeet",
      description: "Bourke's Parakeets are small parrots with gentle dispositions. They are known for their soft pastel plumage and sweet personalities, making them lovely pets.",
      price: "$150"
  },
  {
      image_url: "https://t3.ftcdn.net/jpg/02/54/90/14/240_F_254901409_nW0GhN2OBI4WDR3zvH3AnjU9DH5kedCH.jpg",
      title: "Monk Parakeet",
      description: "Monk Parakeets are intelligent and often considered excellent talkers. They are social and enjoy the company of their human flock, displaying a charming and interactive nature.",
      price: "$200"
  },
  {
      image_url: "https://t4.ftcdn.net/jpg/05/65/15/59/240_F_565155997_IbEa0FTRMaE0BJuttfSyaO3ss5BNTD7k.jpg",
      title: "Brotogeris Parakeet",
      description: "Brotogeris Parakeets are small parrots known for their playful and social nature. They are highly intelligent and can be quick learners, often displaying a knack for mimicry and talking.",
  price: "$250"
},
{
  image_url: "https://t4.ftcdn.net/jpg/03/70/02/87/240_F_370028785_n2eKQYEjnLERe66yG07zjTdrtxKz97in.jpg",
  title: "Moluccan Cockatoo",
  description: "Moluccan Cockatoos are affectionate and known for their beautiful salmon-pink plumage. They thrive on social interaction and can be cuddly pets that enjoy being part of the family.",
  price: "$2,200"
},

{
  image_url: "https://t4.ftcdn.net/jpg/05/87/14/71/240_F_587147120_wOpWT55TffdjtwdcDjVgFUV3Mzk1qf84.jpg",
  title: "Blue and Gold Macaw",
  description: "Blue and Gold Macaws are striking parrots with bright blue and yellow feathers. They are known for their intelligence and talking ability, making them popular pets for those who want an interactive companion.",
  price: "$2,700"
},

{
  image_url: "https://t3.ftcdn.net/jpg/06/26/17/30/240_F_626173037_mv56azZW91EPZp8GF6k6HYPCADtw5xSZ.jpg",
  title: "Senegal Parrot",
  description: "Senegal Parrots are playful and curious, making them delightful companions for bird lovers. With their striking green and yellow plumage, they are a sight to behold and can provide endless entertainment.",
  price: "$400"
},
{
  image_url: "https://t4.ftcdn.net/jpg/03/27/71/67/240_F_327716733_rTYZG9wyZHkqv63i64byQB8buh1MsK7Z.jpg",
  title: "Pionus Parrot",
  description: "Pionus Parrots are known for their calm demeanor and colorful plumage. They may not be the best talkers, but their gentle disposition and vibrant feathers make them charming pets.",
  price: "$550"
},
{
  image_url: "https://t4.ftcdn.net/jpg/00/22/03/29/240_F_22032915_x987f1ZlbHhlVA9YvgHo6nEVUiclEH11.jpg",
  title: "Quaker Parrot",
  description: "Quaker Parrots are intelligent and often excellent talkers, known for their engaging personalities. They have a distinctive gray face and bright green plumage, making them a striking addition to any home.",
  price: "$300"
},
];

for (let i = 0; i < SellingBirdsData.length; i += numCardsPerSet) {
        const cardSet = SellingBirdsData.slice(i, i + numCardsPerSet).map((data, index) => (
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

export default SellingBirds;

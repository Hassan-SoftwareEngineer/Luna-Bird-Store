import React from 'react';
import Header from "../../Components/Header";
import Cards from "../../Layout/Cards";
import Footer from "../../Components/Footer";
import SellingLayout from '../../Layout/SellingLayout';

const RingneckBirdsPage = (props) => {

    const numCardsPerSet = 3;
    const sets = [];

    const RingneckBirdsData =   [
        {
          "image_url": "https://images.pexels.com/photos/7722510/pexels-photo-7722510.jpeg?auto=compress&cs=tinysrgb&w=600",
          "title": "African Grey",
          "description": "A highly intelligent and social parrot species known for its exceptional mimicry skills. African Grey parrots are renowned for their ability to learn and imitate human speech, making them fascinating companions. ",
          "price": "$1000"
        },
        {
          "image_url": "https://t4.ftcdn.net/jpg/02/84/73/39/240_F_284733957_e31vsOblJTLnd9gMVUksjg6WWjdua4o5.jpg",
          "title": "Cockatoo",
          "description": "Cockatoos are lively and affectionate parrots with a distinctive crest and a penchant for loud vocalizations. These social birds thrive on human interaction and enjoy forming strong bonds with their owners. Cockatoos are known for their playful antics and love for attention.",
          "price": "$1200"
        },
        {
          "image_url": "https://t3.ftcdn.net/jpg/04/10/04/76/240_F_410047694_ZApRfqRhCBz5OswHwCx9mdjwStAtc0E2.jpg",
          "title": "Indian Ringneck",
          "description": "Indian Ringnecks are a popular parrot species known for their vibrant colors and ability to learn tricks and words. These intelligent birds have charming personalities and often form strong bonds with their owners. ",
          "price": "$800"
        },
        {
          "image_url": "https://t4.ftcdn.net/jpg/05/20/61/93/240_F_520619311_JtG0t3GxAC4hmd1FzGENGadsAkfueFIx.jpg",
          "title": "Alexandrine Parakeet",
          "description": "Alexandrine Parakeets are large and beautiful parrots with distinctive neck rings, known for their playful demeanor. These parrots are characterized by their vibrant green plumage and striking red beaks. ",
          "price": "$900"
        },
        {
          "image_url": "https://i.pinimg.com/736x/a3/f9/a3/a3f9a35587bbbc79a4399aa3bd167bab--parakeet.jpg",
          "title": "Rose-ringed Parakeet",
          "description": "Rose-ringed Parakeets are colorful parrot species with a distinctive ring around their neck, native to Africa and South Asia. These parrots are known for their vibrant plumage, which includes shades of green, blue, and red.",
          "price": "$600"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.iI0O-Z7hhmBH9b5wvAFHOAHaFe?pid=ImgDet&w=200&h=147&c=7&dpr=1.3",
          "title": "Eclectus Parrot",
          "description": "Eclectus Parrots are known for their striking color dimorphism, with males and females displaying different vibrant hues. These parrots are visually stunning, with the male parrots showcasing bright green plumage and the females exhibiting vibrant red and blue feathers.",
          "price": "$1500"
        },
        {
          "image_url": "https://th.bing.com/th/id/R.92ed065e2896b463fe517821cb9f87c8?rik=nBETwjC0vtyMPg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-m2gkip5QFKw%2fTqt5_9OSHxI%2fAAAAAAAACMs%2fo909Nl27je4%2fs1600%2fSun%2bParakeet.jpg&ehk=3%2b1gpLG05BDM4xBKxzVuJPyL2vpmZ5eEQ4j1v6q25iM%3d&risl=&pid=ImgRaw&r=0",
          "title": "Sun Conure",
          "description": "Sun Conures are small and brightly colored parrots with a cheerful and playful personality. These parrots are characterized by their vibrant yellow, orange, and red plumage. Sun Conures are social birds that enjoy spending time with their owners and thrive on interaction.",
          "price": "$700"
        },
        {
          "image_url": "https://i.pinimg.com/originals/af/73/e5/af73e542b702246249a59977f2d96123.jpg",
          "title": "Quaker Parrot",
          "description": "Quaker Parrots, also known as monk parakeets, are social birds recognized for their talking ability. These parrots are characterized by their gray plumage, vibrant green feathers on their chest, and a distinctive facial pattern.",
          "price": "$500"
        },
        {
          "image_url": "https://wallpaperboat.com/wp-content/uploads/2019/12/parakeet-05-640x360.jpg",
          "title": "Blue-and-gold Macaw",
          "description": "Blue-and-gold Macaws are large and vibrant parrots with a beautiful blue and gold plumage, known for their talkative nature. These parrots are characterized by their striking appearance, with bright blue feathers on their wings and tail, contrasting with vibrant yellow and green hues.",
          "price": "$2000"
        },
        {
          "image_url": "https://i.pinimg.com/originals/ba/82/ef/ba82ef018858051f393cf8a7dd9f7c7e.jpg",
          "title": "Congo African Grey",
          "description": "Congo African Greys are a subspecies of the African Grey, known for their exceptional cognitive abilities and talking skills. These parrots are characterized by their gray plumage, red tail feathers, and a distinctive white mask around their eyes.",
          "price": "$1200"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.kvsR2y_GBka-DL6iorE7xAHaF7?w=1400&h=1120&rs=1&pid=ImgDetMain",
          "title": "Lorikeet",
          "description": "Lorikeets are colorful parrots known for their brush-like tongues and unique feeding habits on nectar. These parrots come in a variety of vibrant colors, including shades of red, blue, green, and yellow.",
          "price": "$600"
        },
        {
          "image_url": "https://c4.wallpaperflare.com/wallpaper/447/998/432/bird-cockatoo-parrot-tropical-wallpaper-preview.jpg",
          "title": "Macaroni Cockatoo",
          "description": "Macaroni Cockatoos are distinctive cockatoo species with a large crest, known for their playful behavior. These parrots are characterized by their striking appearance, with white plumage and a prominent, feathery crest on their heads.",
          "price": "$1300"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.vInQhirSqD6QZHB8aKP4JgHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",
          "title": "Senegal Parrot",
          "description": "Senegal Parrots are small parrots with a calm and friendly nature, known for their charming personality. These parrots are characterized by their green plumage, yellow chest, and a distinctive V-shaped marking on their front.",
          "price": "$400"
        },

        {
          "image_url": "https://th.bing.com/th/id/R.703ce2c5fce7c3e805230d2af5b20856?rik=VliBUrnCSM6SLA&pid=ImgRaw&r=0",
          "title": "Amazon Parrot",
          "description": "Amazon Parrots are medium to large parrots known for their bright plumage and vocal nature, making them popular as pets. With a vibrant array of colors, Amazon Parrots are visually striking and can be a delightful addition to any household.",
          "price": "$800"
        },
        {
          "image_url": "https://www.thehappychickencoop.com/wp-content/uploads/2022/08/Pionus-parrot-768x436.jpg",
          "title": "Pionus Parrot",
          "description": "Pionus Parrots are medium-sized parrots known for their gentle disposition and distinctive eye-ring markings. These charming birds are recognized for their calm and friendly nature, making them great companions.",
          "price": "$600"
        },
        {
          "image_url": "https://cdn.pixabay.com/photo/2021/02/11/13/01/macaw-6005220_640.jpg",
          "title": "Blue and Gold Macaw",
          "description": "Blue and Gold Macaws are striking parrots with bright blue and yellow feathers. They are known for their intelligence and talking ability, making them popular pets for those who want an interactive companion.",
          "price": "$2,500"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.kicMtS6JqcJWYDvHnsTFMwHaE8?w=626&h=418&rs=1&pid=ImgDetMain",
          "title": "Yellow-collared Macaw",
          "description": "The Yellow-collared Macaw is a smaller macaw species with a vibrant yellow collar, known for its friendly nature. Despite their smaller size, these macaws are full of personality and make delightful companions.",
          "price": "$1000"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.hL2XF6KR5C4RPBhwS3E6rQAAAA?pid=ImgDet&w=474&h=355&rs=1",
          "title": "Meyer's Parrot",
          "description": "Meyer's Parrots are small parrots with a charming personality, known for their playful antics. These birds are characterized by their vibrant plumage and endearing demeanor. Meyer's Parrots enjoy social interaction and can form strong bonds with their owners.",
          "price": "$450"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.5ixX1td2uDVMcB8KUeDt5wHaE6?rs=1&pid=ImgDetMain",
          "title": "Hahn's Macaw",
          "description": "Hahn's Macaws are a miniature macaw species known for their vibrant colors and playful behavior. Despite their smaller size, these macaws are full of energy and charisma. Hahn's Macaws are characterized by their beautiful plumage and distinctive features.",
          "price": "$900"
        },
        {
          "image_url": "https://th.bing.com/th/id/OIP.bYeRPeEInk2AtG8aHKyGfAHaE7?rs=1&pid=ImgDetMain",
          "title": "Black-capped Conure",
          "description": "The Black-capped Conure is a small conure species with a distinctive black cap, known for its social nature. These charming birds are recognized for their friendly and outgoing personalities, making them delightful companions.",
          "price": "$350"
        },
      
        {
          "image_url": "https://t4.ftcdn.net/jpg/02/01/18/59/240_F_201185952_qCHFIaWkXEh8EHcSa9s4D9WgwO5pJt6z.jpg",
          "title": "Hawk-headed Parrot",
          "description": "Hawk-headed Parrots are named for their distinctive head feathers that resemble a hawk's crest. They are intelligent and can make wonderful, unique companions for those who appreciate their unique appearance.",
          "price": "$1,200"
        }

      ];

      
for (let i = 0; i < RingneckBirdsData.length; i += numCardsPerSet) {
    const cardSet = RingneckBirdsData.slice(i, i + numCardsPerSet).map((data, index) => (
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

export default RingneckBirdsPage;


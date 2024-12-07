import React from 'react';
import Header from "../../Components/Header";
import Cards from "../../Layout/Cards";
import Footer from "../../Components/Footer";
import SellingLayout from '../../Layout/SellingLayout';

const BreedingAndTreatment = (props) => {

  const numCardsPerSet = 3;
  const sets = [];
  const Breeding_Treatment_Data = [
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/eMtiVtoG5h/mobile",
        "title": "High Energy Breeding",
        "description": "Suitable for hand-rearing those parrot species that require high-fat diets: Psittacus, Ara (except Ara chloroptera and Ara ambiguus), Poicephalus and Pionites melanocephalus. It is a follow-on hand-feeding formula that should be used from the moment pin feathers emerge until weaning.",
        "price": "$25.00"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/BWaCbAZ9b2/mobile",
        "title": "Omega",
        "description": "Highly palatable formula of great nutritional value, especially recommended for stages in which parrots have greater nutritional needs (young parrots up to one year of age, parrots with nutritional deficiencies …).",
        "price": "$30.50"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/BMZXLAlam4/public",
        "title": "High Protein Breeding",
        "description": "This product is suitable for the reproductive stage of medium and large-sized species which benefit from a fatty acid profile rich in oleic acid (Amazona, Cacatua, Psittacula, Pionus).",
        "price": "$20.00"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/4Lvcf1OZVh/public",
        "title": "High Energy Pro",
        "description": "Ideal for species that in the wild consume a significant amount of seeds from oil-rich plants (genera Psittacus, Ara, Poicephalus). It is a maintenance formula, suitable for non-reproductive periods.",
        "price": "$24.00"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/xEDcyvCBbn/public",
        "title": "Silex Grit Coarse",
        "description": "Calibrated flint sand. Essential to ensure optimal functioning of the gizzard and the digestive system in general for birds with a marked granivorous specialization. Suitable for psittacine birds and medium to large-sized pigeons.",
        "price": "$35.50"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/PaVl66qQGY/mobile",
        "title": "Calcium Grit Coarse",
        "description": "Calcium Grit Coarse is a complementary product for medium and large birds. This product gives birds the possibility to correct calcium deficiencies inherent in seed mixtures and to the increase in calcium demand that takes place during the laying or growth periods.",
        "price": "$45.00"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/9BJWnqjVbt/mobile",
        "title": "Sprouting Helper",
        "description": "Sprouting Helper is a product based on citric extracts which facilitates the process of germination, minimizing the risk of the growth of fungus and/or bacteria. It is intended to be added to the water used for rinsing the seeds and for hydrating those that will sprout.",
        "price": "$40.50"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/pRKTRiPDsN/public",
        "title": "Silex Grit Fine",
        "description": "Calibrated flint sand. Essential to ensure optimal functioning of the gizzard and the digestive system in general. This product is suitable for birds with a marked granivorous specialization such as canaries, wild finches, estrildid finches, and small psittacine birds.",
        "price": "$18.00"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/y8hhM2dAfJ/public",
        "title": "Vitamin-Mineral Supplement",
        "description": "Vitamin and mineral supplement for granivorous psittacine birds. Designed to correct deficits in vitamins, minerals, and trace elements inherent in seed mixtures.",
        "price": "$35.00"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/UntKZvCknb/public",
        "title": "Bird Litter Small Size",
        "description": "Bird Litter is a natural bedding produced from the central part of corn cobs, with a pleasant aroma of rosemary. It is suitable as an absorbent substrate for cages or facilities of all types of birds.",
        "price": "$25.00"
    },
    {
        "image_url": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/XRtedBRQl0/public",
        "title": "Calcium Grit",
        "description": "Calcium supplement for birds. Facilitates the correction of calcium deficiencies inherent in seed mixtures and the increase in calcium demand that occurs during laying.",
        "price": "$15.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/Medistatin-25_600x.jpg?v=1546206231",
        "title": "Medistatin",
        "description": "Medistatin is Nystatin 400,000 i.u./g and will treat and prevent candida disease in caged birds and pigeons, and in some cases can treat Stargazing/Twirling. It can also be used on game birds and poultry.",
        "price": "$10.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/megabac-s-25g_600x.jpg?v=1546710327",
        "title": "Megabac-S",
        "description": "The active ingredients within Megabac-S are not absorbed from the gut, nor do they affect the normal gut flora of the bird; therefore, treatment of the affected bird is completely safe.",
        "price": "$15.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/psittavet-100g_1400x.jpg?v=1546623290",
        "title": "Psittavet",
        "description": "For the treatment of psittacosis/Ornithosis (caused by Chlamydia Psittaci) and other susceptible bacterial diseases in caged and aviary birds. Use in the drinking water.",
        "price": "$15.99"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/respiratory-soluble-powder-25_1400x.jpg?v=1550099730",
        "title": "Respiratory Powder",
        "description": "Respiratory Soluble Powder is a powerful combination of Sulfamethoxypyridazine, Trimethoprim, Bromhexine Hydrochloride, Tylosin, Tetracycline Hydrochloride, and Sodium phenylbutazone.",
        "price": "$20.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/scatt_1400x.jpg?v=1546623624",
        "title": "Scatt",
        "description": "Is your bird suffering? Scales around its legs or beak? Maybe it's your beloved canary or another type of bird, and they have stopped singing? Are they panting or making clicking noises? These are just some of the things that can make your bird suffer and can even kill your bird.",
        "price": "$24.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/teramycin_600x.jpg?v=1540499727",
        "title": "Terramycin Ointment",
        "description": "A broad-spectrum antibiotic for topical use in the treatment of ocular infections. Indicated for the prophylaxis and local treatment of superficial ocular infections due to oxytetracycline and polymyxin-sensitive organisms, including infections due to streptococci and rickettsiae.",
        "price": "$15.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/vetrx-bird_1400x.jpg?v=1550091675",
        "title": "VetRx Veterinary Remedy",
        "description": "An effective relief from respiratory diseases, watery eyes, coughing, sneezing, and scaly face and leg mites. Does not stain feathers. A safe and effective herbal treatment.",
        "price": "$5.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/wheeze-eeze-rtu-250ml_1400x.jpg?v=1542137102",
        "title": "Wheeze Eeze",
        "description": "A natural herbal respiratory spray with antibacterial properties. Wheeze-Eeze is a blend of five herbal extracts. Some have antibacterial effects, others help loosen catarrh, and others are general disinfectants.",
        "price": "$7.50"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/wormout-gel-50ml_1400x.jpg?v=1546624820",
        "title": "Worm Out Gel",
        "description": "Water-soluble wormer for parrots, budgies, finches, canaries, pigeons, and other ornamental birds. For the treatment of threadworm (Capillaria spp.), tapeworm (Raillietina spp., Choanotaenia spp.), caecal worm (Heterakis gallinarum), and hookworm (Acuaria spp.)",
        "price": "$20.00"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/amtyl-25g_1400x.jpg?v=1606257796",
        "title": "Amtyl",
        "description": "Amtyl is a very safe and effective broad-spectrum antibiotic that treats a wide range of bacterial infections in birds and rats. When using any antibiotic, be sure to continue the whole course of 5 days.",
        "price": "$19.99"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/aureomycin-25g_1400x.jpg?v=1542491319",
        "title": "Aureomycin",
        "description": "For use in birds for the treatment of bacterial pneumonia and bacterial enteritis. When your bird is sick, you have to get medication quickly; it is best to call us or visit your vet quickly.",
        "price": "$16.35"
    },
    {
        "image_url": "https://allbirdproducts.com/cdn/shop/products/Baytril-10_1400x.jpg?v=1546205482",
        "title": "Baytril 10%",
        "description": "Many birds are treated with Baytril for many different bacterial infections, infections of the urinary tract, respiratory infections, negative and gram-positive bacteria, and many other susceptible bacteria.",
        "price": "$35.99"
    },

    {
      "image_url": "https://allbirdproducts.com/cdn/shop/products/triple-c-25g_1400x.jpg?v=1546624306",
      "title": "Triple C",
      "description": "Triple C is a water soluble antibiotic powder for use in ornamental birds for bacterial infections including E.coli (Enteritis), Mycoplasma (Chronic Respiratory Disease) and Chlamydia (Psittacosis).",
      "price": "$14.95"
  }
];

for (let i = 0; i < Breeding_Treatment_Data.length; i += numCardsPerSet) {
        const cardSet = Breeding_Treatment_Data.slice(i, i + numCardsPerSet).map((data, index) => (
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

export default BreedingAndTreatment;

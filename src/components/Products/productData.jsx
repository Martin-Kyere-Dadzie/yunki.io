import React from 'react'
import rolledOats from '../public/images/Oats-PNG-Photos.png';
import adidasSneaker from '../public/images/pngaaa.com-3341178.png';
import jeanJacket from '../public/images/Jean-Jacket-PNG-Isolated-Photos.png';
import menShorts from '../public/images/63f8e3268c0b8e90026e4366_Img  (4).png';
import girlsWear from '../public/images/pngaaa.com-76322.png';
import corkCicleBag from '../public/images/corkcicle-bag.png';
import corkCicleBag1 from '../public/images/corkcicle-bag1.png';
import sweatTop from '../public/images/626bc12adcace1adec523e95_4.png';
import kidsWatch from '../public/images/pngaaa.com-420063.png';
import shoe from '../public/images/pngaaa.com-76436 (1).png'
import babyShoes from '../public/images/pngaaa.com-4380128.png'
import controller from '../public/images/pngaaa.com-661433.png'
import delLaptop from '../public/images/pngaaa.com-1507035.png'
import Oat from '../public/images/Oats-PNG-HD.png'
import darkSweatTop from '../public/images/63a1a7e19fcbc227ce973a1d_Img-p-500.jpg'
import versace from '../public/images/625fe2a3794231633801c0e8_610cfb8bacbdd50a08b37b63_2.png'
import handSanitizer from '../public/images/625fe2bf83d34722bf6a7330_6152eae00f5c774e656e8e20_Group%2079.png'
import swimSuit from '../public/images/626bb5a3c561673851fd842f_5 39302.png'
import leatherBelt from '../public/images/brown-belt.png'
import heels from '../public/images/Heels-PNG-Isolated-HD.png'
import zaraSneaker from '../public/images/zara-black-and-white.png'
import zaraSneaker1 from '../public/images/zara-blck-and-white1.png'
import paperTowel from '../public/images/Paper-Towel-PNG-Isolated-Pic.png'
import petLeash from '../public/images/pet leash.png'
import kidsDress from '../public/images/pngaaa.com-2739313.png'
import woofers from '../public/images/pngaaa.com-2867097.png'
import officeChairs from '../public/images/pngaaa.com-2902482.png'
import ps5ControllerWithCharger from '../public/images/pngaaa.com-6079473.png'
import lunchBoxGirls from '../public/images/pngaaa.com-2739328.png'
import miPhone from '../public/images/Mi-PNG-HD.png'
import bottleFood from '../public/images/bottle-food 2.png'
import ladiesWristWatch from '../public/images/ladies-wrist-watch.png'
import ladiesWristWatch1 from '../public/images/ladies-wrist-watch1.png'
import leatherTraveler from '../public/images/leather-traveller.png'
import leatherTraveler1 from '../public/images/leather-traveller1.png'
import blackAndWhiteSneaker2 from '../public/images/black_and_white2.png'
import blackAndWhiteSneaker1 from '../public/images/black_and_white1.png'
import blackAndWhiteSneaker3 from '../public/images/black-and-white-sneaker-back.png';
import blackAndWhiteSneaker4 from '../public/images/black_and_white4.png';
import blueLeatherBag from '../public/images/blue-leather-traveler.png'
import blueLeatherBag1 from '../public/images/blue-leather-traveler1.png'
import ladiesRedBag from '../public/images/ladies-red-bag.png'
import ladiesRedBag1 from '../public/images/ladies-red-bag1.png'
// import Rating from './Rating';
import Filter from '../Home/Filter/Filter'
import heartFill from '../public/icons/heart-red-fill.svg'
import heartOutline from '../public/icons/heart-red-outline.svg'
import heartHalf from '../public/icons/heart-red-half.svg'
import { useSelector } from 'react-redux';
import { wishActions } from '../Redux/WishListSlice';


// const Rating = ({ratings}) => {
//     const heartRating = Array.from({length: 5}, (elem, index) => {
//         let number = index + 0.5;
//         debugger;
//         return(
//             <span key={index}>
//                 {ratings >= index + 1 ? (<img alt='' src={heartFill} className='heart-fill'></img>): 
//                 ratings >= number ? (<img alt='' src={heartHalf} className='heart-half'></img>): 
//                 (<img alt='' src={heartOutline} className='heart-outline'></img>) }
//             </span>
//         )
//     })
//   return (
//     <div>Rating</div>
//   )
// }
// const wishCounter = useSelector(state => state.wish.totalQuantity);


export const productData = [
    {
        images:[
            {
                image:  rolledOats,
                image1: rolledOats,
                image2: rolledOats,            
                image3: rolledOats,
            }
        ],
        imageOnclick:[
            {imageDisplay: blackAndWhiteSneaker1},
            {imageDisplay: blackAndWhiteSneaker2},
            {imageDisplay: blackAndWhiteSneaker3},
            {imageDisplay: blackAndWhiteSneaker4},
        ],
        name: 'rolled oat',
        ProductType: 'food',
        title: 'rolled oats granola',
        // colors: 0,
        price: 80,
        oldPrice: '100GHS',
        id: 1,
        ratings: 2.5,
        comments: 20,
        discount: '-20%',
        priceTag: 0
    },
    {
        images:[
            {
                image: adidasSneaker,
                image1: adidasSneaker,
                image3: adidasSneaker,
                image2: adidasSneaker,
            }
        ],
        imageOnclick:[
                {imageDisplay: adidasSneaker},
                {imageDisplay: adidasSneaker},
                {imageDisplay: adidasSneaker},
                {imageDisplay: adidasSneaker},
        ],
        name: 'adidas sneaker',
        ProductType: 'apparels',
        title: 'adidas sneaker for casual wear',
        colors: 1,
        price: 250,
        id: 2,
        ratings: 3.5,
        comments: 290,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: jeanJacket,
                image1: jeanJacket,
                image3: jeanJacket,
                image2: jeanJacket,
            }
        ],
        imageOnclick:[
            {imageDisplay: jeanJacket},
            {imageDisplay: jeanJacket},
            {imageDisplay: jeanJacket},
            {imageDisplay: jeanJacket},
        ],
        name: 'jean Jacket',
        ProductType: 'apparels',
        title: 'jeans jacket for men',
        colors: 0,
        price: 120,
        oldPrice: '150GHS',
        id: 3,
        ratings: 4.5,
        comments: 20,
        discount: '-30%',
        priceTag: 1
    },
    {
        images:[
            {
                image: leatherTraveler,
                image1: leatherTraveler1,
                image3: leatherTraveler,
                image2: leatherTraveler,
            }
        ],
        imageOnclick:[
            {imageDisplay: leatherTraveler},
            {imageDisplay: leatherTraveler1},
            {imageDisplay: leatherTraveler},
            {imageDisplay: leatherTraveler},
        ],
        name: 'Leather Bag',
        ProductType: 'apparel',
        title: 'leather traveling bag',
        colors: 0,
        price: 415,
        id: 4,
        ratings: 4,
        comments: 250,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: controller,
                image1: controller,
                image3: controller,
                image2: controller,
            }
        ],
        imageOnclick:[
            {imageDisplay: controller},
            {imageDisplay: controller},
            {imageDisplay: controller},
            {imageDisplay: controller},
        ],
        name: 'ps5 controller',
        ProductType: 'electronics',
        title: 'single ps5 controller',
        colors: 0,
        price: 300,
        id: 5,
        ratings: 2.4,
        comments: 340,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: menShorts,
                image1: menShorts,
                image3: menShorts,
                image2: menShorts,
            }
        ],
        imageOnclick:[
            {imageDisplay: menShorts},
            {imageDisplay: menShorts},
            {imageDisplay: menShorts},
            {imageDisplay: menShorts},
        ],
        name: 'short',
        ProductType: 'apparels',
        title: 'short for men',
        colors: 2,
        price: 120,
        id: 6,
        ratings: 3.5,
        comments: 92,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: corkCicleBag,
                image1: corkCicleBag1,
                image3: corkCicleBag,
                image2: corkCicleBag,
            }
        ],
        imageOnclick:[
            {imageDisplay: corkCicleBag},
            {imageDisplay: corkCicleBag},
            {imageDisplay: corkCicleBag},
            {imageDisplay: corkCicleBag},
        ],
        name: "Cockcicle Bag",
        ProductType: 'apparels',
        title: 'cockcicle bag for ladies',
        colors: 2,
        price: 320,
        id: 7,
        ratings: 4.5,
        comments: 300,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: delLaptop,
                image1: delLaptop,
                image3: delLaptop,
                image2: delLaptop,
            }
        ],
        imageOnclick:[
            {imageDisplay: delLaptop},
            {imageDisplay: delLaptop},
            {imageDisplay: delLaptop},
            {imageDisplay: delLaptop},
        ],
        name: 'dell laptop',
        ProductType: 'electronics',
        title: 'dell led screen laptop',
        colors: 1,
        price: 1220,
        id: 8,
        ratings: 4,
        comments: 102,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: babyShoes,
                image1: babyShoes,
                image3: babyShoes,
                image2: babyShoes,
            }
        ],
        imageOnclick:[
            {imageDisplay: babyShoes},
            {imageDisplay: babyShoes},
            {imageDisplay: babyShoes},
            {imageDisplay: babyShoes},
        ],
        name: 'baby shoe',
        ProductType: 'apparels',
        title: 'baby shoe for occasions',
        colors: 1,
        price: 110,
        id: 9,
        ratings: 2.3,
        comments: 420,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: Oat,
                image1: Oat,
                image3: Oat,
                image2: Oat,
            }
        ],
        imageOnclick:[
            {imageDisplay: Oat},
            {imageDisplay: Oat},
            {imageDisplay: Oat},
            {imageDisplay: Oat},
        ],
        name: 'quaker oat',
        ProductType: 'food',
        title: 'quaker oat meal',
        colors: 0,
        price: 80,
        id: 10,
        ratings: 1.5,
        comments: 630,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: blueLeatherBag,
                image1: blueLeatherBag1,
                image3: blueLeatherBag,
                image2: blueLeatherBag,
            }
        ],
        imageOnclick:[
            {imageDisplay: blueLeatherBag},
            {imageDisplay: blueLeatherBag},
            {imageDisplay: blueLeatherBag},
            {imageDisplay: blueLeatherBag},
        ],
        name: 'Leather Bag',
        ProductType: 'apparel',
        title: 'blue leather traveling bag',
        colors: 0,
        price: 400,
        id: 11,
        ratings: 3.5,
        comments: 430,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: shoe,
                image1: shoe,
                image3: shoe,
                image2: shoe,
            }
        ],
        imageOnclick:[
            {imageDisplay: shoe},
            {imageDisplay: shoe},
            {imageDisplay: shoe},
            {imageDisplay: shoe},
        ],
        name: "men's shoe",
        ProductType: 'apparels',
        title: 'men shoe for office wear',
        colors: 1,
        price: 300,
        id: 12,
        ratings: 4.5,
        comments: 1300,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: kidsWatch,
                image1: kidsWatch,
                image3: kidsWatch,
                image2: kidsWatch,
            }
        ],
        imageOnclick:[
            {imageDisplay: kidsWatch},
            {imageDisplay: kidsWatch},
            {imageDisplay: kidsWatch},
            {imageDisplay: kidsWatch},
        ],
        name: "kids watch",
        ProductType: 'apparels',
        title: 'kids watch for boys and girls',
        colors: 1,
        price: 130,
        id: 13,
        ratings: 2.5,
        comments: 60,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: sweatTop,
                image1: sweatTop,
                image3: sweatTop,
                image2: sweatTop,
            }
        ],
        imageOnclick:[
            {imageDisplay: sweatTop},
            {imageDisplay: sweatTop},
            {imageDisplay: sweatTop},
            {imageDisplay: sweatTop},
        ],
        name: "sweat top",
        ProductType: 'apparels',
        title: 'sweat top for men',
        colors: 1,
        price: 120,
        id: 14,
        ratings: 4,
        comments: 30,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: blackAndWhiteSneaker1,
                image1: blackAndWhiteSneaker2,
                image3: blackAndWhiteSneaker3,
                image2: blackAndWhiteSneaker4,
            }
        ],
        imageOnclick:[
            {imageDisplay: blackAndWhiteSneaker1},
            {imageDisplay: blackAndWhiteSneaker2},
            {imageDisplay: blackAndWhiteSneaker3},
            {imageDisplay: blackAndWhiteSneaker4},
        ],
        name: 'Nike Sneaker',
        ProductType: 'apparel',
        title: 'black and white nike sneakers for men',
        colors: 1,
        price: 255,
        id: 15,
        ratings: 5,
        comments: 102,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: darkSweatTop,
                image1: darkSweatTop,
                image3: darkSweatTop,
                image2: darkSweatTop,
            }
        ],
        imageOnclick:[
            {imageDisplay: darkSweatTop},
            {imageDisplay: darkSweatTop},
            {imageDisplay: darkSweatTop},
            {imageDisplay: darkSweatTop},
        ],
        name: "sweat top",
        ProductType: 'apparels',
        title: "mens's sweat top",
        colors: 1,
        price: 130,
        id: 16,
        ratings: 4,
        comments: 60,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: swimSuit,
                image1: swimSuit,
                image3: swimSuit,
                image2: swimSuit,
            }
        ],
        imageOnclick:[
            {imageDisplay: swimSuit},
            {imageDisplay: swimSuit},
            {imageDisplay: swimSuit},
            {imageDisplay: swimSuit},
        ],
        name: "swim suit",
        ProductType: 'apparels',
        title: 'swimming suit for girls',
        colors: 1,
        price: 95,
        id: 17,
        ratings: 2,
        comments: 30,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: versace,
                image1: versace,
                image3: versace,
                image2: versace,
            }
        ],
        imageOnclick:[
            {imageDisplay: versace},
            {imageDisplay: versace},
            {imageDisplay: versace},
            {imageDisplay: versace},
        ],
        name: "versace perfume",
        ProductType: 'apparels',
        title: 'versace perfume for men and women',
        colors: 1,
        price: 640,
        id: 18,
        ratings: 4,
        comments: 170,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: zaraSneaker,
                image1: zaraSneaker1,
                image3: zaraSneaker,
                image2: zaraSneaker,
            }
        ],
        imageOnclick:[
            {imageDisplay: zaraSneaker},
            {imageDisplay: zaraSneaker1},
            {imageDisplay: zaraSneaker},
            {imageDisplay: zaraSneaker},
        ],
        name: "Zara Sneaker",
        ProductType: 'apparels',
        title: 'black zara leather sneaker for men',
        colors: 1,
        price: 180,
        id: 19,
        ratings: 4,
        comments: 13,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: leatherBelt,
                image1: leatherBelt,
                image3: leatherBelt,
                image2: leatherBelt,
            }
        ],
        imageOnclick:[
            {imageDisplay: leatherBelt},
            {imageDisplay: leatherBelt},
            {imageDisplay: leatherBelt},
            {imageDisplay: leatherBelt},
        ],
        name: "leather belt",
        ProductType: 'apparels',
        title: 'brown leather belt for office and occasions',
        colors: 1,
        price: 110,
        id: 20,
        ratings: 3,
        comments: 63,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: heels,
                image1: heels,
                image3: heels,
                image2: heels,
            }
        ],
        imageOnclick:[
            {imageDisplay: heels},
            {imageDisplay: heels},
            {imageDisplay: heels},
            {imageDisplay: heels},
        ],
        name: 'ladies high heel',
        ProductType: 'apparels',
        title: 'black ladies high heels',
        colors: 1,
        price: 340,
        id: 21,
        ratings: 5,
        comments: 571,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: ladiesWristWatch,
                image1: ladiesWristWatch1,
                image3: ladiesWristWatch,
                image2: ladiesWristWatch,
            }
        ],
        imageOnclick:[
            {imageDisplay: ladiesWristWatch},
            {imageDisplay: ladiesWristWatch1},
            {imageDisplay: ladiesWristWatch},
            {imageDisplay: ladiesWristWatch},
        ],
        name: "Wrist Watch",
        ProductType: 'electronic',
        title: 'ladies wrist watch for occasions and office',
        colors: 1,
        price: 120,
        id: 22,
        ratings: 3,
        comments: 67,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: paperTowel,
                image1: paperTowel,
                image3: paperTowel,
                image2: paperTowel,
            }
        ],
        imageOnclick:[
            {imageDisplay: paperTowel},
            {imageDisplay: paperTowel},
            {imageDisplay: paperTowel},
            {imageDisplay: paperTowel},
        ],
        name: "paper towels",
        ProductType: 'apparels',
        title: 'disposable paper towels pack',
        colors: 1,
        price: 105,
        id: 23,
        ratings: 4,
        comments: 38,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: petLeash,
                image1: petLeash,
                image3: petLeash,
                image2: petLeash,
            }
        ],
        imageOnclick:[
            {imageDisplay: petLeash},
            {imageDisplay: petLeash},
            {imageDisplay: petLeash},
            {imageDisplay: petLeash},
        ],
        name: "pet leash",
        ProductType: 'apparels',
        title: 'pet leash for pet walk',
        colors: 1,
        price: 70,
        id: 24,
        ratings: 4,
        comments: 64,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: kidsDress,
                image1: kidsDress,
                image3: kidsDress,
                image2: kidsDress,
            }
        ],
        imageOnclick:[
            {imageDisplay: kidsDress},
            {imageDisplay: kidsDress},
            {imageDisplay: kidsDress},
            {imageDisplay: kidsDress},
        ],
        name: "kids dress",
        ProductType: 'apparels',
        title: 'kids dress for occasions',
        colors: 1,
        price: 130,
        id: 25,
        ratings: 3,
        comments: 95,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: woofers,
                image1: woofers,
                image3: woofers,
                image2: woofers,
            }
        ],
        imageOnclick:[
            {imageDisplay: woofers},
            {imageDisplay: woofers},
            {imageDisplay: woofers},
            {imageDisplay: woofers},
        ],
        name: "woofers",
        ProductType: 'electronic',
        title: 'woofers set for indoors',
        colors: 1,
        price: 230,
        id: 26,
        ratings: 4,
        comments: 250,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: officeChairs,
                image1: officeChairs,
                image3: officeChairs,
                image2: officeChairs,
            }
        ],
        imageOnclick:[
            {imageDisplay: officeChairs},
            {imageDisplay: officeChairs},
            {imageDisplay: officeChairs},
            {imageDisplay: officeChairs},
        ],
        name: "office chairs",
        ProductType: 'apparels',
        title: 'office chairs for offices',
        colors: 1,
        price: 3500,
        id: 27,
        ratings: 5,
        comments: 1300,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: ps5ControllerWithCharger,
                image1: ps5ControllerWithCharger,
                image3: ps5ControllerWithCharger,
                image2: ps5ControllerWithCharger,
            }
        ],
        imageOnclick:[
            {imageDisplay: ps5ControllerWithCharger},
            {imageDisplay: ps5ControllerWithCharger},
            {imageDisplay: ps5ControllerWithCharger},
            {imageDisplay: ps5ControllerWithCharger},
        ],
        name: "chargeable ps5 controller",
        ProductType: 'electrical',
        title: 'rechargeable ps5 controller with charger',
        colors: 1,
        price: 280,
        id: 28,
        ratings: 4,
        comments: 510,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: lunchBoxGirls,
                image1: lunchBoxGirls,
                image3: lunchBoxGirls,
                image2: lunchBoxGirls,
            }
        ],
        imageOnclick:[
            {imageDisplay: lunchBoxGirls},
            {imageDisplay: lunchBoxGirls},
            {imageDisplay: lunchBoxGirls},
            {imageDisplay: lunchBoxGirls},
        ],
        name: "lunch box",
        ProductType: 'apparels',
        title: 'kids lunch for girls',
        colors: 1,
        price: 74,
        id: 29,
        ratings: 3,
        comments: 48,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: miPhone,
                image1: miPhone,
                image3: miPhone,
                image2: miPhone,
            }
        ],
        imageOnclick:[
            {imageDisplay: miPhone},
            {imageDisplay: miPhone},
            {imageDisplay: miPhone},
            {imageDisplay: miPhone},
        ],
        name: "mi phone",
        ProductType: 'electronic',
        title: 'led screen mi phone',
        colors: 1,
        price: 230,
        id: 30,
        ratings: 3,
        comments: 110,
        discount: 0,
        priceTag: 0
    },
    {
        images:[
            {
                image: bottleFood,
                image1: bottleFood,
                image3: bottleFood,
                image2: bottleFood,
            }
        ],
        imageOnclick:[
            {imageDisplay: bottleFood},
            {imageDisplay: bottleFood},
            {imageDisplay: bottleFood},
            {imageDisplay: bottleFood},
        ],
        name: "red pepper",
        ProductType: 'food',
        title: 'bottled organic red pepper',
        colors: 1,
        price: 53,
        id: 31,
        ratings: 3,
        comments: 40,
        discount: 0,
        priceTag: 1
    },
    {
        images:[
            {
                image: ladiesRedBag,
                image1: ladiesRedBag1,
                image3: ladiesRedBag1,
                image2: ladiesRedBag1,
            }
        ],
        imageOnclick:[
            {imageDisplay: ladiesRedBag},
            {imageDisplay: ladiesRedBag1},
            {imageDisplay: ladiesRedBag1},
            {imageDisplay: ladiesRedBag1},
        ],
        name: "ladies bag",
        ProductType: 'apparel',
        title: 'ladies bag for occasions and office',
        colors: 1,
        price: 250,
        id: 32,
        ratings: 3.5,
        comments: 570,
        discount: 0,
        priceTag: 1
    },

];
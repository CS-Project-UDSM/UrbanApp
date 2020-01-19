import colors from "../styles/colors";

const listing1Photo = require("./photos/listing1.jpg");
const listing2Photo = require("./photos/listing2.jpg");
const listing3Photo = require("./photos/listing3.jpg");
const listing4Photo = require("./photos/listing4.jpg");
const listing5Photo = require("./photos/listing5.jpg");
const listing6Photo = require("./photos/listing6.jpg");
const listing7Photo = require("./photos/listing7.jpg");
const listing8Photo = require("./photos/listing8.jpeg");
const listing9Photo = require("./photos/listing9.jpg");
const listing10Photo = require("./photos/listing10.jpg");
const listing11Photo = require("./photos/listing11.jpg");
const listing12Photo = require("./photos/listing12.jpg");
const listing13Photo = require("./photos/listing13.jpg");
const listing14Photo = require("./photos/listing14.jpg");
const listing15Photo = require("./photos/listing15.jpg");
const listing16Photo = require("./photos/listing16.jpeg");

const listings = [
  {
    title: "Hostels DaresSalaam",
    boldTitle: true,
    showAddToFav: false,
    listings: [
      {
        id: 12,
        photo: listing12Photo,
        type: "MAGUFULI",
        title: "Mawasiliano",
        price: "70000",
        priceType: "2 people",
        stars: 0,
        color: colors.blue
      },
      {
        id: 13,
        photo: listing13Photo,
        type: "MABIBO",
        title: "Ubungo",
        price: "40000",
        priceType: "4 people",
        stars: 0,
        color: colors.black
      },
      {
        id: 14,
        photo: listing14Photo,
        type: "TAEF",
        title: "Magomeni",
        price: "50000",
        priceType: "per person",
        stars: 0,
        color: colors.brown01
      },
      {
        id: 15,
        photo: listing15Photo,
        type: "DIT",
        title: "M.Mmoja",
        price: "10000",
        priceType: "per person",
        stars: 0,
        color: colors.green01
      },
      {
        id: 16,
        photo: listing16Photo,
        type: "IFM-Hostels",
        title: "Posta",
        price: "70000",
        priceType: "5 people",
        stars: 0,
        color: colors.gray04
      }
    ]
  },

  {
    title: "Homes",
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: listing7Photo,
        type: "ENTIRE HOUSE - 2 BEDS",
        title: "BALIAN TREEHOUSE with beautiful pool",
        location: "Tabata, DaresSalaam",
        price: 100000,
        priceType: "per month",
        stars: 101,
        color: colors.green01
      },
      {
        id: 8,
        photo: listing8Photo,
        type: "ENTIRE VILLA - 3 BEDS",
        title: "Beach and Mountains",
        location: "Buza, DaresSalaam",
        price: 50000,
        priceType: "per month",
        stars: 119,
        color: colors.brown01
      },
      {
        id: 9,
        photo: listing9Photo,
        type: "ENTIRE HOUSE - 4 BEDS",
        title: "Cozy A-Frame Cabin in the Redwoods",
        location: "5th-Road, Tanga",
        price: 15200,
        priceType: "per month",
        stars: 320,
        color: colors.darkOrange
      },
      {
        id: 10,
        photo: listing10Photo,
        type: "ENTIRE HOUSE - 3 BED",
        title: "1880s Carriage House in Curtis Park",
        location: "UDOM, Dodoma",
        price: 116,
        priceType: "per month",
        stars: 300,
        color: colors.gray04
      },
      {
        id: 11,
        photo: listing11Photo,
        type: "ENTIRE BOAT - 2 BEDS",
        title: "A Pirate's Life for Me Houseboar!",
        location: "Masaki, DaresSalaam",
        price: 1000000,
        priceType: "year",
        stars: 132,
        color: colors.green01
      }
    ]
  },
  {
    title: "Appartments",
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing1Photo,
        type: "BOAT RIDE",
        title: "Sail past Japan's largest port with a certified skipper",
        location: "Tokyo, Japan",
        price: 60,
        priceType: "per person",
        stars: 29,
        color: colors.gray04
      },
      {
        id: 2,
        photo: listing2Photo,
        type: "CHEESE TASTING",
        title: "Funny cheesemonger takes you on a Tour de Fromage",
        location: "Paris, France",
        price: 70,
        priceType: "per person",
        stars: 4,
        color: colors.darkOrange
      },
      {
        id: 3,
        photo: listing3Photo,
        type: "BIKE RIDE",
        title: 'Cycling, "KFC" & Drinking for your Seoul',
        location: "Seoul, South Korea",
        price: 47,
        priceType: "per person",
        stars: 30,
        color: colors.black
      },
      {
        id: 4,
        photo: listing4Photo,
        type: "BIKE RIDE",
        title: "Cycle through side streets with a local",
        location: "Amsterdam, Netherlands",
        price: 57,
        priceType: "per person",
        stars: 70,
        color: colors.brown01
      },
      {
        id: 5,
        photo: listing5Photo,
        type: "SURFING",
        title: "Surf Bondi's waves, then eat & drink like a local",
        location: "Sydney, Australia",
        price: 61,
        priceType: "per person",
        stars: 66,
        color: colors.blue
      },
      {
        id: 6,
        photo: listing6Photo,
        type: "DRAWING CLASS",
        title: "A drawing/walking tour in Montmartre",
        location: "Paris, France",
        price: 55,
        priceType: "per person",
        stars: 15,
        color: colors.brown02
      }
    ]
  }
];

export default listings;

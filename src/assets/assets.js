import logo from './logo.svg'
import email_icon from './email_icon.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import email from './email.svg'
import phone_solid_full from './phone_solid_full.svg'
import map from './map.svg'
import envelope from './envelope.svg'
import check from './check.svg'
import google from './google.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.jpg'
import roomImg2 from './roomImg2.jpg'
import roomImg3 from './roomImg3.jpg'
import roomImg4 from './roomImg4.jpg'
import regImage from './regImage.jpg'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.jpg";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.jpg";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.jpg";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    facebook,
    twitter,
    email,
    envelope,
    email_icon,
    phone_solid_full,
    map,
    google,
    check,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Los Angeles",
    "Paris",
    "Chicago",
    "Miami",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Weekend Special", description: "Get 20% off on weekend stays", priceOff: 20, 
        expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Family Package", description: "Special discount for family bookings", priceOff: 18, 
        expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Business Traveler Deal", description: "Discount for business classrooms", 
        priceOff: 10, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Richard Nelson", address: "23 Dragon Lane, Beijing, China", 
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 4, 
        review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that Velora Suites provides."},
    { id: 2, name: "Ava Johnson", address: "77 Rose Avenue, Paris, France", 
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", 
        rating: 4, review: "Velora Suites exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Liam Carter", address: "26 Victoria Street, London, UK", 
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200", rating: 4, 
        review: "Amazing service! I always find the best luxury accommodations through Velora Suites. Their recommendations never disappoint!"},
    { id: 4, name: "Sophia Lee", address: "", 
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200", rating: 4,
        review: "The environment is so peaceful and luxurious. it felt like a home from home. Highly recommend Velora Suites to anyone looking for comfort and class."
    }    
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "001",
    "username": "Emmanuel Junior",
    "email": "user.emmanueljunior@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    "role": "hotelOwner",
    "createdAt": new Date().toISOString(),
    "updatedAt": new Date().toISOString(),
    "__v": 1,
    "recentSearchedCities": [
        "Madrid"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "001",
    "name": "Velora Suites",
    "address": "39 Queen Street",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Manchester",
    "createdAt": new Date().toISOString(),
    "updatedAt": new Date().toISOString(),
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "001",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "002",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "003",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "004",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 349,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    }
]

// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "001",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": new Date().toISOString(),
        "checkOutDate": new Date().toISOString(),
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "002",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": new Date().toISOString(),
        "checkOutDate": new Date().toISOString(),
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "003",
        "user": userDummyData,
        "room": roomsDummyData[2],
        "hotel": hotelDummyData,
        "checkInDate": new Date().toISOString(),
        "checkOutDate": new Date().toISOString(),
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData ={
    "totalBookings": 3,
    "totalRevenue": 800,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
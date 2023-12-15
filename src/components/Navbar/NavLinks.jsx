import { NavLink } from "react-router-dom"
import homeIcon from '../public/icons/home-icon.svg';


const navLinks = [
    {
        Image: homeIcon,
        name: 'Home',
        route: '/',
        to: '/newArrivals'
    },
    {
        name: 'BLOG',
        route: '/HomeAndKitchens',
        to: '/HomeAndKitchens'
    },
    {
        name: 'SERVICES',
        route: '/OfficeAndSecurity',
        to: '/OfficeAndSecurity'
    },
    {
        name: 'WHOLESALES',
        route: '/BeautyAndPersonalCare',
        to: '/BeautyAndPersonalCare'
    },
    {
        name: 'ABOUT',
        route: '/PetSupplies',
        to: '/PetSupplies'
    },
]

export default navLinks
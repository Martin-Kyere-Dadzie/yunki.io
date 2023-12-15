// export {poppinsBold} from '../public/fonts/poppins/Poppins-Bold.ttf'
// export {poppinsMedium} from '../public/fonts/poppins/Poppins-Medium.ttf'

export const activeLinkStyle = ({ isActive }) => {
    return {
        borderBottom: isActive ? '2px solid #FBBA00': 'none',
        color: isActive ? '#FBBA00' : '#ffffff',
        fontFamily: isActive ? 'poppinsBold' : 'poppinsMedium'
    }
}
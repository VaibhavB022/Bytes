import { Link } from 'react-router-dom'
import menuIcon from '../images/menuIcon.png'
import ordersIcon from '../images/ordersIcon.png'
import insightsIcon from '../images/insightsIcon.png'

const Footer = () => {
  return (
    <div className="landing-page-footer bg-white flex justify-around items-center bottom-0 w-footer-width  border-t-2 h-12">

    <Link to='/landingpage' className="w-10 h-10 mx-auto">
        <img src={menuIcon} alt="menuIcon" className=""/>
    </Link>
    <Link to='' className="w-10 h-10 mx-auto">
        <img src={ordersIcon} alt="ordersIcon" className=""/>
    </Link>
    <Link to='' className="w-12 h-12 mt-3 mx-auto">
        <img src={insightsIcon} alt="insightsIcon" className=""/>
    </Link>
    </div>
  )
}
export default Footer
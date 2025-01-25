
import {Link} from 'react-router-dom'
const FooterOther = () => {
  return (
    <>
        <div className="footerother  text-white  bg-[#1B283A] h-[72px] w-full">
            <div className="container  h-full">
            <div className="flex justify-between items-center h-full">
            <div className="left">
                <p>&copy; 2020 MAAC all right reserve</p>
            </div>
            <div className="right">
                <ul className="flex gap-[24px] text-[15px] font-sora">
                    <li>
                        <Link to="/terms">Terms & Condition</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/refund">Refund Policy</Link>
                    </li>
                    <li>
                        <Link to="/faw">FAQ</Link>
                    </li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default FooterOther
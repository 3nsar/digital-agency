
import "./Sponsor.scss";
import { TbNorthStar } from "react-icons/tb";
import logo1 from "./Sponsor-Images/logo1.webp";
import logo2 from "./Sponsor-Images/logo2.webp";
import logo3 from "./Sponsor-Images/logo3.webp";
import logo4 from "./Sponsor-Images/logo4.webp";
import logo5 from "./Sponsor-Images/logo5.webp";

const Sponsor = () => {
  // Array of image sources
  const logos = [logo1, logo2, logo3, logo4,logo5]; 

  return (
    <div className='sponsor-container'>
      <div className="sponsor-content">
      <div className="sponsor-subtitle">
        <p><TbNorthStar color="#0044ff"/> Trusted by</p>
        </div>
        {logos.map((logo, index) => (
          <>
            <img key={index} src={logo} alt={`logo-${index + 1}`} />
            {index === 2 && <br className='sponsor-break'/>}
          </>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-400 p-4">
      <p></p>
      <ul className= "flex justify-around space-x-4 text-2xl text-white">
          <li className="hover:text-black"><Link to="/home">Home</Link></li>
          <li className="hover:text-black"><Link to="/pricing">Pricing</Link></li>
          <li className="hover:text-black"><Link to="/about">About</Link></li>
          <li className="hover:text-black"><Link to ="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}


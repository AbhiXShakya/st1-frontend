import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(process.env.REACT_APP_APIURL + "/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://graph.org/file/c8ff18f6079218ff5ffd4.jpg"
          alt=""
          width={250}
        />
        <p>
          I'm Abhishek Shakya I'm a MERN Stack (Next.js) Web Developer.
          Currently learning Blockchain Development. I'm a 3rd Year Student
          pursuing for B.E. (Bachelor of Engineering) I focus on an accessible
          and simplified style of writing code, and can adapt to whichever
          framework is required. I always try to automate my tasks using JS &
          Python by Developing Bots.
        </p>
      </div>
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">CATEGORIES</span> */}
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

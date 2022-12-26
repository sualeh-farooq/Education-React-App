import "../style/header.css";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Drawer from "../Components/drawer";
import {FaSearch} from 'react-icons/fa'

export default function TopHeader() {
  return (
    <>
      
      <div className="check">
        <div className="top_bg">
          <div className="top_search">
            <input placeholder="search" type="text"/> <button className="search-btn search-icon" > <FaSearch  /> </button>
          </div>
          <div className="top_right">
            <BsFillBellFill className="bell" />
            <AiOutlineSetting className="setting" />
          </div>
        </div>
      </div>
    </>
  );
}

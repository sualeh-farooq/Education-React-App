import "../style/header.css";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Drawer from "../Components/drawer";

export default function TopHeader() {
  return (
    <>
      
      <div className="check">
        <div className="top_bg">
          <div className="top_search">
            <input type="text"/>
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

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {IoIosPeople} from 'react-icons/io'
import '../style/cards.css'
import { BsFillPeopleFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';


function FrontCards({fillImage , quantity , total}) {
  return (
    <Card  className="card" >
      <Card.Body>
        <div className="card-upper" >
          <span className="fill">{fillImage}</span>
          <span className="qty">{quantity}</span>
        </div>
        <div className="card-lower" >
            <span className="card-total">{total} </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FrontCards;

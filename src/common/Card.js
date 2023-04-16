import Card from "react-bootstrap/Card";
import LogosCoursera from "../assets/Cards/LogosCoursera";
import LogosUdemy from "../assets/Cards/LogosUdemy";

import Button from "react-bootstrap/Button";
const CustomCard = ({ Title, rating, link }) => {
  let platform = "Coursera";
  let color = "primary";
  let image = <LogosCoursera />;
  if (link[12] === "u") {
    platform = "Udemy";
    image = <LogosUdemy />;
    color = "danger";
    console.log(color);
  }
  return (
    <Card text={"dark"} style={{ width: "18rem" }} className="mb-2 custom hover:scale-125 hover:duration-150">
      <Card.Body>
        <Card.Text>{image}</Card.Text>
        <Card.Title>{Title}</Card.Title>
        <div className="mx-auto">
          <Card.Text>Course Rating : {rating}</Card.Text>
          <Button variant={color} target="_blank" href={ link }>
            {platform}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;

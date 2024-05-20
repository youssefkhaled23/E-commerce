import { Container } from "react-bootstrap";
import { Link} from "react-router-dom";
import "@styles/global.css";
import { LottiHandler } from "@feedback/LottiHandler/LottiHandler";
export const Error = () => {
  return (
    <>
      <Container className="notFound">
        <div className="d-flex flex-column align-items-center ">
          <LottiHandler type="notFound"/>
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
        </div>
      </Container>
    </>
  );
};

export default Error
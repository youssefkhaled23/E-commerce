import { Col, ListGroup, Row } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"


const ProfileLayout = () => {
  return (
    <Row >
      <Col md={3} className="mt-0 mt-lg-5 pt-3">
        <ListGroup>
            <ListGroup.Item as={NavLink} to="" end>
                Account Info
            </ListGroup.Item>
            <ListGroup.Item as={NavLink} to="orders"> 
                Orders
            </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
      <Outlet/>
      </Col>
    </Row>
  )
}

export default ProfileLayout

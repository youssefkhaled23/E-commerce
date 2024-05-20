import { Container } from "react-bootstrap";
import style from "./MainLayout.module.css";
import Header from "@componets/common/header/Header";
import Footer from "@componets/common/footer/Footer";
import { Outlet } from "react-router-dom";
const { container } = style;
export const MainLayout = () => {
  return (
    <>
      <Container className={container}>
        {/* Header */}
        <Header />
        {/* Outlit */}
          <Outlet />
        {/* Footer */}
        <Footer />
      </Container>
    </>
  );
};
export default MainLayout
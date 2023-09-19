import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logoninja.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={3}>
            <img src={logo} alt="Logo" width={200} height={200}/>
          </Col>

          <Col size={12} sm={6}>
            <center>Copyright 2023 | JEFFREY RYAN R. ALONSAGAY | All Rights Reserved</center>
          </Col>

          <Col size={12} sm={3} className="text-center text-sm-end">
         
            <div className="social-icon">
            
                <a href="https://www.linkedin.com/in/jeffrey-ryan-alonsagay/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/JefuriRyankun"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/jefuriryankun"><img src={navIcon3} alt="" /></a>
            </div>
            
           
          </Col>
         
         
          
        </Row>
      </Container>
     
    </footer>
  )
}

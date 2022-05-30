import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Iconfacebook from "../assets/img/icon_facebook.png";
import Iconinstagram from "../assets/img/icon_instagram.png";
import Icontwitter from "../assets/img/icon_twitter.png";
import Iconemail from "../assets/img/icon_mail.png";
import Icontwitch from "../assets/img/icon_twitch.png";
import Logo from "../assets/img/logo.png";

export default function Footer() {
    return (
            <Container>
        <Row className="mt-5">
          <Col className="md">
            <p>Jalan Suroyo No. 161 Mayangan Kota Jember 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081233334808</p>
          </Col>
          <Col className="md">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </Col>
          <Col className="md">
            <p>Connect with us</p>
            <img src={Iconfacebook} alt="facebook" />
            <img src={Iconinstagram} alt="instagram" />
            <img src={Icontwitter} alt="twitter" />
            <img src={Iconemail} alt="mail" />
            <img src={Icontwitch} alt="twitch" />
          </Col>
          <Col className="md">
            <p>Copyright Binar 2022</p>
            <img src={Logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    )
}

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import starWars from "../../img/star-wars-logo.png";
import { Navbar as Navbarbs } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import { Favoritelist } from "./FavoriteList";

export const Navbar = () => {
	return (
		<div className="fondo-navbar mb-5">
			<Navbarbs expand="lg">
				<Container>
					<Navbarbs.Brand>
						<Link to="/">
							<p className="navbar-brand mb-0 h1">
								<img src={starWars} width="110" height="60" />
							</p>
						</Link>
					</Navbarbs.Brand>

					<Navbarbs.Toggle aria-controls="basic-navbar-nav" />

					<Navbarbs.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav className="me-auto">
							<Favoritelist />
						</Nav>
					</Navbarbs.Collapse>
				</Container>
			</Navbarbs>
		</div>
	);
};

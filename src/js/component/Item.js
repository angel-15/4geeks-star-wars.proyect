import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

export const Item = props => {
	const { store, actions } = useContext(Context);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		setloading(false);
	}, []);

	const charProperties = props.properties.map((property, index) => {
		const toggleFavorite = () => {
			if (actions.isFavorite(property.name) === true) {
				actions.deleteFavorite(property.name);
			} else {
				actions.addFavorite(property.name);
			}
		};
		// eslint-disable-next-line no-console
		console.log(property);

		const heart = <FontAwesomeIcon icon={faHeart} />;
		const heartregular = <FontAwesomeIcon icon={farHeart} />;
		let icon = setIcon();
		// eslint-disable-next-line no-console
		console.log(icon);

		function setIcon() {
			if (actions.isFavorite(property.name) === true) {
				return heart;
			} else {
				return heartregular;
			}
		}

		return (
			<div key={index}>
				{loading ? (
					<h2>
						<FontAwesomeIcon icon={faSpinner} style={{ margin: "20px" }} />
					</h2>
				) : (
					<div className="container-fluid">
						<Card style={{ width: "18rem" }} className="mt-5">
							<Card.Img
								variant="top"
								src="https://via.placeholder.com/400x200.jpg/000000/FFFFFF/?text=Star+Wars+Rocks!"
							/>
							<Card.Body>
								<Card.Title>{property.name}</Card.Title>
								<Link to={"/" + props.url + "/" + property.uid + "/"}>
									<Button>Learn more</Button>
								</Link>
								<Button
									onClick={toggleFavorite}
									style={{ margin: "5px", color: "yellow" }}
									variant="outline-warning">
									{icon}
								</Button>
							</Card.Body>
						</Card>
					</div>
				)}
			</div>
		);
	});
	return (
		<div className="container-fluid mb-3">
			<h1 className="text-light">{props.typeName}</h1>
			<div className="overflow-auto row row flex-nowrap ">{charProperties}</div>
		</div>
	);
};

Item.propTypes = {
	properties: PropTypes.array,
	typeName: PropTypes.string,
	url: PropTypes.string
};

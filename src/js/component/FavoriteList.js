import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Favoritelist = () => {
	const { store, actions } = useContext(Context);

	let Favoritelist = store.favorites.map((favorite, index) => {
		const deleteFavorite = () => {
			actions.deleteFavorite(favorite);
		};

		return (
			<div key={index} calssName="container-fluid d-flex">
				<div>
					<p style={{ margin: "7px" }}>{favorite}</p>
				</div>
				<Button onClick={deleteFavorite} style={{ margin: "3px" }}>
					X
				</Button>
			</div>
		);
	});

	return (
		<div className="btn-group">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
					<span>({store.favorites.length})</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">{Favoritelist}</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

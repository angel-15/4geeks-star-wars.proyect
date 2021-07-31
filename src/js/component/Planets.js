import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Item } from "./Item";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		getPlanets();
	}, []);

	async function getPlanets() {
		let res = await actions.getPlanets();
		const planetResults = getPlanetDetails();
		setPlanets(planetResults);
		// eslint-disable-next-line no-console
		console.log(planetResults);
	}

	function getPlanetDetails() {
		let planetDetails = [];
		planetDetails = store.planets.results.map((planet, index) => {
			return {
				name: planet.name,
				uid: planet.uid,
				url: planet.url
			};
		});

		return planetDetails;
	}

	return (
		//
		<div>
			<Item properties={planets} typeName={"Planets"} url={"Planetsdetail"} />
		</div>
	);
};

import React from "react";
import "../../styles/home.scss";
import { Character } from "../component/character";
import { Planets } from "../component/Planets";
import { Vehicle } from "../component/Vehicles";

export const Home = () => (
	<div className="fondo-star-wars">
		<Character />

		<Vehicle />

		<Planets />
	</div>
);

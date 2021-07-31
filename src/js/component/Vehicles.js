import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Item } from "./Item";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);
	const [vehicles, setvehicles] = useState([]);

	useEffect(() => {
		getVehicles();
	}, []);

	async function getVehicles() {
		let res = await actions.getVehicles();
		const vehicleResults = getvehicleDetails();
		setvehicles(vehicleResults);
		// eslint-disable-next-line no-console
		console.log(vehicleResults);
	}

	function getvehicleDetails() {
		let vehicleDetails = [];
		vehicleDetails = store.vehicles.results.map((vehicle, index) => {
			return {
				name: vehicle.name,
				uid: vehicle.uid,
				url: vehicle.url
			};
		});

		// eslint-disable-next-line no-console
		console.log(vehicleDetails);
		return vehicleDetails;
	}

	return (
		//
		<div>
			<Item properties={vehicles} typeName={"Vehicles"} url={"vehicledetails"} />
		</div>
	);
};

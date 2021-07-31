import React, { useState, useEffect, useContext } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

export const Vehicle = props => {
	const [vehicle, setVehicle] = useState([]);
	const [loading, setloading] = useState(true);

	let { id } = useParams();

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		fetch(`https://www.swapi.tech/api/vehicles/${id}`)
			.then(res => res.json())
			.then(data => {
				setVehicle(data.result.properties);
				// eslint-disable-next-line no-console
				console.log(data.result.properties);
				setloading(false);
			});
	};

	return (
		<div>
			<div className="container-fluid">
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Name</th>
							<th>Model</th>
							<th>Vehicle Class</th>
							<th>Manufacturer</th>
							<th>Cost in Credits</th>
							<th>Max Atmosphering Speed</th>
							<th>Cargo Capacity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{loading ? (
								<>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
								</>
							) : (
								<>
									<td>{vehicle.name}</td>
									<td>{vehicle.model}</td>
									<td>{vehicle.vehicle_class}</td>
									<td>{vehicle.manufacturer}</td>
									<td>{vehicle.cost_in_credits}</td>
									<td>{vehicle.max_atmosphering_speed}</td>
									<td>{vehicle.cargo_capacity}</td>
								</>
							)}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

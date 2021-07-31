import React, { useState, useEffect, useContext } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

export const Planet = props => {
	const [planet, setPlanet] = useState([]);
	const [loading, setloading] = useState(true);

	let { id } = useParams();

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		fetch(`https://www.swapi.tech/api/planets/${id}`)
			.then(res => res.json())
			.then(data => {
				setPlanet(data.result.properties);
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
							<th>Climate</th>
							<th>Population</th>
							<th>Orbital Period</th>
							<th>Rotation Period</th>
							<th>Diameter</th>
							<th>Gravity</th>
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
									<td>{planet.name}</td>
									<td>{planet.climate}</td>
									<td>{planet.population}</td>
									<td>{planet.orbital_period}</td>
									<td>{planet.rotation_period}</td>
									<td>{planet.diameter}</td>
									<td>{planet.gravity}</td>
								</>
							)}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

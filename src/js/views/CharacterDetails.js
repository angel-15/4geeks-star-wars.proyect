import React, { useState, useEffect, useContext } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Table, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

export const Character = props => {
	const [character, setCharacter] = useState([]);
	const [loading, setloading] = useState(true);

	let { id } = useParams();

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		fetch(`https://www.swapi.tech/api/people/${id}`)
			.then(res => res.json())
			.then(data => {
				setCharacter(data.result.properties);
				// eslint-disable-next-line no-console
				console.log(data.result.properties);
				setloading(false);
			});
	};

	return (
		<div>
			<div className="container-fluid">
				<div className="justify-content-end">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Name</th>
							<th>Birth year</th>
							<th>Gender</th>
							<th>Height</th>
							<th>Eye Color</th>
							<th>Hair Color</th>
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
									<td>{character.name}</td>
									<td>{character.birth_year}</td>
									<td>{character.gender}</td>
									<td>{character.height}</td>
									<td>{character.eye_color}</td>
									<td>{character.hair_color}</td>
								</>
							)}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

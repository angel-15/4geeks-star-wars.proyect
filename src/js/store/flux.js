const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				let response = await fetch("https://www.swapi.tech/api/people/");
				let data = await response.json();
				setStore({ characters: data });
				// eslint-disable-next-line no-console
				console.log(data);
			},
			getPlanets: async () => {
				let response = await fetch("https://www.swapi.tech/api/planets/");
				let data = await response.json();
				setStore({ planets: data });
				// eslint-disable-next-line no-console
				console.log(data.results);
			},
			getVehicles: async () => {
				let response = await fetch("https://www.swapi.tech/api/vehicles/");
				let data = await response.json();
				setStore({ vehicles: data });
				// eslint-disable-next-line no-console
				console.log(data.results);
			},
			addFavorite: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			},
			deleteFavorite: name => {
				const newFavorites = getStore().favorites.filter(item => {
					return item != name;
				});
				setStore({ favorites: newFavorites });
				// eslint-disable-next-line no-console
				console.log(newFavorites);
			},
			isFavorite: name => {
				if (getStore().favorites) {
					return getStore().favorites.includes(name);
				} else {
					return false;
				}
			}
		}
	};
};

export default getState;

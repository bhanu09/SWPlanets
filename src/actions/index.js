const fetchPlanets = search => fetch("https://swapi.co/api/planets/?search=" + search);

export const updatePlanets = planets => ({
    type: 'UPDATE_PLANETS',
    planets
});

export const planetSearch = search => dispatch => {
    fetchPlanets(search)
    .then(res => res.json())
    .then(data => dispatch(updatePlanets(data.results)));
}
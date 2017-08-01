const planets = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_PLANETS':
      return [
        ...action.planets
      ]
    default:
      return state
  }
}

export default planets
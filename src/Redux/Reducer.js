const auth = (state = false, action) => {
  switch (action.type) {
    case "STORE AUTHENTICATION":
      return action.payload;
    default:
      return state;
  }
};

const categoryData = (state = {}, action) => {
  switch (action.type) {
    case "STORE CATEGORY DATA":
      return action.payload;
    default:
      return state;
  }
};

export { auth, categoryData };

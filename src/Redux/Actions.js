const storeAuth = auth => {
  return {
    type: "STORE AUTHENTICATION",
    payload: auth,
  };
};

const storeCategoryData = data => {
  return {
    type: "STORE CATEGORY DATA",
    payload: data,
  };
};

export { storeAuth, storeCategoryData };

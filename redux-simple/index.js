console.clear();

// Action Creators
const createPolicy = (name, amount) => {
  return { // Action
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = (name) => {
  return { // Action
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { // Action
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

// Reducers
const claimHistory = (oldListOfClaims = [], action) => {
  switch(action.type) {
    case 'CREATE_CLAIM': 
      return [...oldListOfClaims, action.payload];

    default: 
      return oldListOfClaims;
  }
};

const accounting = (bagOfMoney = 100, action) => {
  switch(action.type) {
    case 'CREATE_CLAIM':
      return bagOfMoney - action.payload.amountOfMoneyToCollect;
    case 'CREATE_POLICY':
      return bagOfMoney + action.payload.amount;

    default:
      return bagOfMoney;
  }
};

const policies = (listOfPolicies = [], action) => {
  switch(action.type) {
    case 'CREATE_POLICY':
      return [...listOfPolicies, action.payload.name];
    case 'DELETE_POLICY':
      return listOfPolicies.filter(policy => policy !== action.payload.name);

    default:
      return listOfPolicies;
  }
};

// Start using Redux
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Leo', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState())
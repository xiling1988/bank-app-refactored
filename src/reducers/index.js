import { initialState } from "../store";

const withdrawMoneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
        console.log(state)
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload.amount,
      }
    default:
      return state
  }
};

export default withdrawMoneyReducer;
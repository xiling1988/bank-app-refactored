function withdrawMoney(amount) {
    return {
        type: "WITHDRAW_MONEY",
        payload: {
            amount: amount
        }
    }
}

export default withdrawMoney;

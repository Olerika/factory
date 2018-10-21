const skusData = require('data/deposits.json');

export const FETCH_LOCAL_DATA = 'FETCH_LOCAL_DATA';
class Sku {
    constructor(apiResponseData) {
        this.setDepositRate(apiResponseData['deposit-rate']);
        this.setDepositRate(apiResponseData['deposit-term']);
    }
    setDepositRate = value => {
        this.depositRate = value;
    };
    getDepositRate = () => this.depositRate;

    setDepositTerm = value => {
        this.depositTerm = value;
    };
    getDepositTerm = () => this.depositTerm;

}

class Product {
    constructor(apiResponseData) {
        this.setName(apiResponseData.name);
    }
    setName = value => {
        this.name = value;
    };
    getName = () => this.name;

}

class ProductFactory {
    createFromApiResponse(apiResponse) {
        return apiResponse.map(item => new Product(item));
    }
}
const factory = new ProductFactory();
const itemList = factory.createFromApiResponse(skusData.data);
console.log(itemList);

export function fetchLocalData() {
    return dispatch => {
        dispatch({
            type: FETCH_LOCAL_DATA,
            payload: itemList,
        });
    };
}

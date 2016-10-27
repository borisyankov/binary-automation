import { LiveApi } from 'binary-live-api';

export default class Binary {

    constructor(token: string) {
        this.ticks = [];
        this.candles = [];
        this.symbol;
        this.api = new LiveApi(token);
    }

    getTickHistory = (symbol: string) => {
        this.symbol = symbol;
        return api.getTickHistory(symbol);
    }

    print = () => {
        console.log('Symbol: ', this.symbol);
        console.log(this.ticks);
        console.log(this.candles);
    }
}

import { LiveApi } from 'binary-live-api';

class Binary {

    constructor(token: string) {
        this.ticks = [];
        this.candles = [];
        this.symbol;
        this.api = new LiveApi({ useRx: true });
    }

    getLastTick = (symbol: string) => {
        return this;
    }

    getTickHistory = (symbol: string) => {
        this.symbol = symbol;
        api.getTickHistory(symbol);
        return this;
    }

    print = () => {
        console.log('Symbol: ', this.symbol);
        console.log(this.ticks);
        console.log(this.candles);
        return this;
    }
}

export default new Binary();

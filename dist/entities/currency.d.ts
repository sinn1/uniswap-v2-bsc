/**
 * A currency is any fungible financial instrument on Binance Smart Chain, including BNB and all BEP20 tokens.
 *
 * The only instance of the base class `Currency` is BNB.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly BNB: Currency;
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.BNB`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const BNB: Currency;
export { BNB };

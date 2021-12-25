export type WalletCoins = {
    id: string;
    iconUrl: string;
    coin: string;
    quantity: number;
    valueInBuyDate: number;
    updatedValue: number;
    buyDate: string;
    investedValue: number;
    updatedInvestedValue: number;
}

export type CoinProps = {
    id: string;
    symbol?: string;
    price?: number;
    iconUrl?: string;
}

export type AlarmProps = {
    id: string;
    coin: string;
    iconUrl: string;
    targetValue: number;
    isActive: boolean;
    removeAlarm?: () => void;
}
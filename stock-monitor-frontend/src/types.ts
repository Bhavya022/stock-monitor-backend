export interface User {
    username: string;
    email: string;
    password: string;
  }
  
  export interface Stock {
    symbol: string;
    price: number;
  }
  
  export interface Watchlist {
    user: string;
    stockSymbols: string[];
  }
  
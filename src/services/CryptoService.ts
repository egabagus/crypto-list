import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.coinlore.net/api',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
});

export const CryptoService = {
    getTickers: async () => {
        try {
            const response = await api.get('/tickers/');
            return response.data;
        } catch (error) {
            console.error("Error fetching tickers:", error);
            throw error;
        }
    }
}
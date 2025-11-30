# Crypto List - Ionic Vue App

A mobile-first cryptocurrency listing application built with Ionic Framework and Vue 3. This app displays real-time cryptocurrency data including prices, rankings, and market information.

## 🚀 Features

- **Real-time Crypto Data**: Fetches live cryptocurrency data from CoinLore API
- **Responsive Design**: Optimized for mobile devices using Ionic components
- **Vue 3 Composition API**: Modern Vue development with TypeScript support
- **Cross-platform**: Runs on iOS, Android, and web browsers
- **Clean Architecture**: Well-structured codebase with services and composables
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Mobile Framework**: Ionic 8
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Package Manager**: npm
- **Testing**: Cypress (E2E), Vitest (Unit)
- **Linting**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Ionic CLI (`npm install -g @ionic/cli`)
- Capacitor CLI (included as dev dependency)

## 📁 Project Structure

```
src/
├── App.vue                 # Root component
├── main.ts                # Application entry point
├── composable/
│   └── useGetCrypto.ts    # Crypto data composable
├── router/
│   └── index.ts           # Vue Router configuration
├── services/
│   └── CryptoService.ts   # API service layer
├── theme/
│   └── variables.css      # Ionic CSS variables
├── type/
│   └── crypto.type.ts     # TypeScript interfaces
└── views/
    ├── HomePage.vue       # Main page component
    └── components/
        └── listCrypto.vue # Crypto list component
```

## 🌐 API Integration

This app uses the [CoinLore API](https://api.coinlore.net/api/tickers/) to fetch cryptocurrency data:

- **Base URL**: `https://api.coinlore.net/api`
- **Endpoint**: `/tickers/`
- **Response**: Array of cryptocurrency objects with price, rank, and market data

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [Ionic Documentation](https://ionicframework.com/docs)
- Visit the [Vue.js Documentation](https://vuejs.org/guide/)

---

⭐ **Star this repository if you found it helpful!**
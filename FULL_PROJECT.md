# FULL_PROJECT.md

## package.json
```json
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.8.2",
    "firebase": "^11.7.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router": "^7.6.0",
    "redux": "^5.0.1",
    "sass": "^1.89.0",
    "tailwindcss": "^4.1.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react-swc": "^3.9.0",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## tailwind.config.js
```js
module.exports = {
  content: [
    "./**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#400799',
          800: '#5509CC',
          700: '#6A0BFF',
          600: '#883CFF',
          500: '#A66DFF',
          400: '#C39DFF',
          300: '#D2B6FF',
          200: '#E1CEFF',
          100: '#F0E7FF',
        },
        red: {
          900: '#880727',
          800: '#AF0932',
          700: '#D50B3E',
          600: '#F3164E',
          500: '#F53D6B',
          400: '#F76489',
          300: '#F98BA6',
          200: '#FBB1C4',
          100: '#FDD8E1',
        },
        yellow: {
          900: '#FAAF00',
          800: '#FFC233',
          700: '#FFCE5C',
          600: '#FFDA85',
        },
        green: {
          900: '#17663A',
          800: '#1E874C',
          700: '#26A95F',
          600: '#2DCA72',
        },
        gray: {
          900: '#1A1A1A',
          800: '#333333',
          700: '#4D4D4D',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#B3B3B3',
          200: '#CCCCCC',
          100: '#E6E6E6',
          50 : '#F2F2F2',
        },
      },
    },
  },
  plugins: [],
}
```

---

## postcss.config.cjs
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

---

## src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## src/main.jsx
```jsx
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <h1 className="text-yellow-900 text-3xl font-bold underline hover:bg-sky-800">
        Hello world!
      </h1>
      <button style={{ backgroundColor: '#FAAF00' }} className='ps-8'>
        Кнопка
      </button>
    </Provider>
  </StrictMode>,
)
```

---

## index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
``` 
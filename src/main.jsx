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
      <ChartContainer>
        <BarChart data={data}>
          <Bar dataKey="value" />
          <ChartTooltip content={<ChartTooltipContent />} />
        </BarChart>
      </ChartContainer>
    </Provider>
  </StrictMode>,
)

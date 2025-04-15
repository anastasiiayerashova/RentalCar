import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import './index.css'
import App from './components/App.jsx'
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
          <StyledEngineProvider>
              <App />
          </StyledEngineProvider>
      </BrowserRouter>
  </Provider>
)

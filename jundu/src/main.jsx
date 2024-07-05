
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContextProvider from './Utils/ProductsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <ContextProvider>
    <App />
  </ContextProvider>
  
)

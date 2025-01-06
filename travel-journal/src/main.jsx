import {createRoot} from 'react-dom/client'
import AppComponent from './Components/AppComponent'

import './index.css';

const root = createRoot(document.getElementById("root"))
root.render(
  <AppComponent/>
)
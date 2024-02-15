
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  
  return (
    <Router>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
          </Routes>

        </AuthProvider>
    </Router>
  )
}

export default App
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MarketData = () => {
//   const [marketData, setMarketData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await axios.get('/api/market-data')
//         .then((response)=>{
//           setMarketData(response.data)
//         })
//       } catch (error) {
//         console.error('Error fetching market data:', error);
//       }
//     };

//     // Fetch data every 3 seconds
//     const interval = setInterval(fetchData, 100);

//     // Cleanup function to clear interval
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* <h1>Market Data</h1> */}
//       {marketData && (
//         <div>
//           <h2>XAI-INR Depth</h2>
//           <pre>{JSON.stringify(marketData.xaiInrDepth, null, 2)}</pre>
//           <h2>USDT-INR Depth</h2>
//           <pre>{JSON.stringify(marketData.usdtInrDepth, null, 2)}</pre>
//           <h2>XAI-USDT Depth</h2>
//           <pre>{JSON.stringify(marketData.xaiUsdtDepth, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MarketData;



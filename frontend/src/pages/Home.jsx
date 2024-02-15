import React from 'react'

const Home = () => {
  return (
  
        <div className="container">
            <h1>Welcome to my website!</h1>

            <p>This page should be protected by a PrivateRoutes component for authenticated users</p>
        </div>

// const [terminalData, setTerminalData] = useState('');
// const { isAuthenticated } = useAuth(); // Get authentication status using useAuth hook

// useEffect(() => {
//   if (isAuthenticated) {
//     // Create WebSocket connection only when the user is authenticated
//     const ws = new WebSocket('ws://localhost:8080');

//     ws.onmessage = (event) => {
//       setTerminalData(event.data);
//     };

//     return () => {
//       ws.close();
//     };
//   }
// }, [isAuthenticated]);

  )
}

export default Home

// import './App.css';
// import PersistentDrawerLeft from './Component/CountryTable/minibar';
// import Home from './Component/Home';
// //import PaginationComponent from './Component/CountryTable/Table';
// import PickerWithButtonField from './date';
// import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


// function App() {
//   return (
//     // <div className="App">
//     //  {/* <PaginationComponent/> */}
//     //  {/* <PickerWithButtonField/> */}
//     //  <PersistentDrawerLeft/>
//     // </div>
    
//     // <Router basename="/">
//     //   <PersistentDrawerLeft />
//     //   <Routes>
//     //     {/* Define your routes here */}
//     //     <Route exact path="/inbox" component={Home} />
//     //     {/* Add more routes as needed */}
//     //     {/* Example: */}
//     //     {/* <Route path="/about" component={About} /> */}
//     //   </Routes>
      
//     // </Router>
//     <Router basename="/">
//       <Routes>
//         {/* Define your routes here */}
//         <Route path="/" element={<PersistentDrawerLeft />}>
//           <Route path="/inbox" element={<Home />} />
//           {/* Add more routes as needed */}
//           {/* Example: */}
//           {/* <Route path="/about" element={<About />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PersistentDrawerLeft from './Component/CountryTable/minibar'; // Assuming this is where your drawer component is defined
import Home from './Component/Home'; // Assuming this is your Home component
import LoginPage from './Component/LoginPage/LoginPage'; // Import the LoginPage component

const App = () => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/inbox" />} />
        {/* Login Route */}
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/inbox" />} />
        
        {/* Protected Routes */}
        <Route path="/" element={<PersistentDrawerLeft />}>
          <Route path="/inbox" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          {/* Add more protected routes as needed */}
          {/* Example: */}
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

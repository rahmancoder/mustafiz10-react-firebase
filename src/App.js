
import './App.css';
// Bootstrap Link
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Doctors from './Components/Doctors/Doctors';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import SingleDoctorInfo from './Components/SingleDoctorInfo/SingleDoctorInfo';
import SingleServiceInfo from './Components/SingleServiceInfo/SingleServiceInfo';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <div>
      <AuthProvider>


        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/booking/:doctorId">
              <SingleDoctorInfo></SingleDoctorInfo>
            </Route>

            <Route path="/servicebooking/:serviceId">
              <SingleServiceInfo></SingleServiceInfo>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>


            <Route path="/register">
              <Register></Register>
            </Route>


            <Route path="/questions">
              <FAQ></FAQ>

            </Route>



            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>

        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;

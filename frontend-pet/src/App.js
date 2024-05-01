import React from "react";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
  Router,
} from "react-router-dom";

import logoImage from "./Components/images/happy little paws - pet sitting -.png";
import { About } from "./Components/About";
import { PetDetails } from "./Components/PetDetails/PetDetails";
import { Petshop } from "./Components/PetShop/Petshop";
import { VeterinaryServices } from "./Components/Veterinary/VeterinaryServices";
import { WelfareAssociation } from "./Components/WelfareAssociation/WelfareAssociation";
import Communication from "./Components/Communication/Communication";
import { Diseases } from "./Components/DiseasesDiagnosis/Diseases";
import { Contact } from "./Components/Contact";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import AddNewPet from "./Components/PetDetails/AddNewPet";
import PetProfile from "./Components/PetDetails/PetProfile";
import DeletePet from "./Components/PetDetails/DeletePet";
import UpdatePet from "./Components/PetDetails/UpdatePet";
import DeleteAccessories from "./Components/PetShop/DeleteAccessories";
import AddAccessories from "./Components/PetShop/Add Accessories";
import AddNewServices from "./Components/Veterinary/AddNewServices";
import UpdateServices from "./Components/Veterinary/UpdateServices";
import EmergencyServices from "./Components/Veterinary/EmergencyServices";
import MedicalReports from "./Components/Veterinary/MedicalReports";
import Veterinarian from "./Components/Veterinary/Veterinarian";
import AdoptionProgram from "./Components/WelfareAssociation/AdoptionProgram";
import YourComponent from "./Components/WelfareAssociation/YourComponent";
import AddtoCart from "./Components/PetShop/AddtoCart";
import VolunteersAndStaff from "./Components/WelfareAssociation/Volunteers&Staff";
import CommunityOutreach from "./Components/WelfareAssociation/CommunityOutreach";
import PetOwner from "./Components/Communication/PetOwner";
import UserProfile from "./Components/Communication/UserProfile";
import LiveChat from "./Components/Communication/LiveChat";
import Diagnosis from "./Components/DiseasesDiagnosis/Diagnosis";
import Symptoms from "./Components/DiseasesDiagnosis/Symptoms";
import DiagnosisTest from "./Components/DiseasesDiagnosis/DiagnosisTest";
import Home from "./Components/Home";
import AnimalRecords from "./Components/WelfareAssociation/AnimalRecords";
import { Category } from "./Components/PetShop/Category";
import Foods from "./Components/PetShop/Foods";
import Pharmacy from "./Components/PetShop/Pharmacy";
import Crates from "./Components/PetShop/Crates";
import Beds from "./Components/PetShop/Beds";
import Flea from "./Components/PetShop/Flea";
import PetToys from "./Components/PetShop/PetToys";
import Footer from "./Components/Footer/Footer";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            fixed="top"
            className="navbar"
          >
            <Navbar.Brand as={Link} to="/">
              <img
                src={logoImage}
                alt="Smart Pets"
                width="auto"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Container>
              <Navbar.Brand href="#home">Smart Pets</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  {" "}
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/pet details">
                  Pet Details
                </Nav.Link>
                <Nav.Link as={Link} to="/pet shop">
                  Pet shop
                </Nav.Link>
                <Nav.Link as={Link} to="/veterinary">
                  {" "}
                  Veterinary Services
                </Nav.Link>
                <Nav.Link as={Link} to="/welfare">
                  Welfare Association
                </Nav.Link>
                <Nav.Link as={Link} to="/communication">
                  Communication
                </Nav.Link>
                <Nav.Link as={Link} to="/Diseases">
                  Diseases Diagnosis
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/pet details" element={<PetDetails />} />
            <Route path="/pet shop" element={<Petshop />} />
            <Route path="/veterinary" element={<VeterinaryServices />} />
            <Route path="/welfare" element={<WelfareAssociation />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/Diseases" element={<Diseases />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-new-pet" element={<AddNewPet />} />
            <Route path="/pet-profile" element={<PetProfile />} />
            <Route path="/delete-pet" element={<DeletePet />} />
            <Route path="/update-pet-details" element={<UpdatePet />} />
            <Route path="/Add-accessories" element={<AddAccessories />} />
            <Route path="/delete-accessories" element={<DeleteAccessories />} />
            <Route path="/add-new-services" element={<AddNewServices />} />
            <Route path="/update-services" element={<UpdateServices />} />
            <Route path="/emergency-services" element={<EmergencyServices />} />
            <Route path="/medical-reports" element={<MedicalReports />} />
            <Route path="/veterinarian" element={<Veterinarian />} />
            <Route path="/adoption-program" element={<AdoptionProgram />} />
            <Route path="/adoption-program" element={<YourComponent />} />
            <Route path="/add-cart" element={<AddtoCart />} />
            <Route path="/volunteers-staff" element={<VolunteersAndStaff />} />
            <Route path="/medical-resources" element={<MedicalReports />} />
            <Route path="/community-outreach" element={<CommunityOutreach />} />
            <Route path="/owner" element={<PetOwner />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/live" element={<LiveChat />} />
            <Route path="/diseases" element={<Diagnosis />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/diagnosis-tests" element={<DiagnosisTest />} />
            <Route path="/" element={<Home />} />
            <Route path="/pet-details" element={<PetDetails />} />
            <Route path="/animal-records" element={<AnimalRecords />} />
            <Route path="/category" element={<Category />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/Pharmacy" element={<Pharmacy />} />
            <Route path="/crates" element={<Crates />} />
            <Route path="/beds" element={<Beds />} />
            <Route path="/flea" element={<Flea />} />
            <Route path="/toy" element={<PetToys />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

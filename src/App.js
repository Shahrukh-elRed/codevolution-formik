import "./App.css";
import EnrollmentForm from "./components/EnrollmentForm";
import { ChakraProvider } from "@chakra-ui/react";
// import LoginForm from "./components/LoginForm";
// import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        <EnrollmentForm />
      </div>
    </ChakraProvider>
  );
}

export default App;

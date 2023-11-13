// App.js
import ContactForm from "./components/ContactForm";
import { GlobalCss } from "./styles";
function App() {
  return (
    <div className="container">
      <GlobalCss />
      <ContactForm />
    </div>
  );
}

export default App;

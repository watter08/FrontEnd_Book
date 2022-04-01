import HomeComponent from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import BookState from "./Context/Book/BookState";

function App() {
  return (
    <BookState>
      <HomeComponent />
    </BookState>
  );
}

export default App;

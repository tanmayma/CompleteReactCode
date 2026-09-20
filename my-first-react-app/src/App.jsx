import Home from "./Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Homeclass from "./Components/HomeClass";
import Aboutclass from "./Components/Aboutclass";
// functional component
function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, autem. Exercitationem nisi labore suscipit libero quo, accusamus sequi aliquid vitae perspiciatis laborum, explicabo voluptatibus atque. Obcaecati quidem voluptate esse exercitationem.</p>
      <h3>Thank You</h3>
      <Home />
      <About />
      <Contact />
      <Homeclass />
      <Aboutclass />
    </>
  )
}

export default App;
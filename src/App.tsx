import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { LoginForm } from './components/LoginForm';
import { CounterButton } from './components/Contador';
import './styles/global.css';
import './styles/themes.css';
function App() {
 
return (
  <div>
    <Heading/>
  <Container>
  <CounterButton/>
  </Container>
  <Footer/>

  
</div>
)
}
export default App
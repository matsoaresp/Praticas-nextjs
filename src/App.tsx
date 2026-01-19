import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/themes.css';
import { SelectOptions } from './components/SelectOptions';
import { LoginForm } from './components/LoginForm';
function App() {
 
return (
  <div>
    <Heading/>
  <Container>
    <LoginForm/>
  </Container>
</div>
)
}
export default App
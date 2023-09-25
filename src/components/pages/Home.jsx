import { Button } from '@ui5/webcomponents-react'; // loads ui5-button wrapped in a ui5-webcomponents-react component
import Header from '../layout/Header';
import Container from '../layout/Container';
import Footer from '../layout/Footer';
import styles from './Home.module.scss'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <div className={styles.Home}>
        <Header/>
        <Container/>
        <Footer/>
    </div>
    
  )
}

export default Home
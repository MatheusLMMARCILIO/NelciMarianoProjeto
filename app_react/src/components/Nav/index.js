import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './index.module.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className={styles.bkgNav}>
      <Container>
        <Navbar.Brand href="#home" className={styles.title}> #DreamPie  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">

            <Nav.Link className={styles.link} href="/">Home</Nav.Link>
            <Nav.Link className={styles.link} href="/music">Programação</Nav.Link>
            <Nav.Link className={styles.link} href="/students">Sua Sessão</Nav.Link>
            <Nav.Link className={styles.link} href="/students">Filmes</Nav.Link>
     <button style={{  backgroundColor: '#fdff00', border: 'none', borderRadius: '20px', cursor: 'pointer' }} className='btnMenu' >  <Nav.Link style={{color:'black'}} className={styles.link} href="/MenuCardapio"><span style={{color:'black'}} >Contato</span></Nav.Link></button>     

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
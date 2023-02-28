import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="danger" variant="danger">
            <Container>
                <Link to="/" className="text-white ms-3 text-decoration-none fw-bold">
                    🏠  Home
                </Link>
                <Link to="/contact" className="text-white ms-3 text-decoration-none fw-bold">
                    📚 Contacto
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="text-white ms-3 fw-bold">
                        Happy Cake 🍰 
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
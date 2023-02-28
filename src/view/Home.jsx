import { Container } from "react-bootstrap"

const Home = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5 mb-4">
                Bienvenido a <span className="fw-bold">Happy Cake</span>
            </h1>
            <h6 className="fw-bold fs-5 fst-italic"> El lugar de los pasteles felices </h6>
            <div className="cake">
            🎂 
            </div>
        </Container>
    )
}

export default Home;

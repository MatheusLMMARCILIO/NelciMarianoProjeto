//import serve para importar componentes
// Componentes: Container, Row, CardImage, dbjson
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardImage from 'components/CardImage';
import filmesjson from 'json/filmes.json';
import Carousel from '../../components/Carousel'
import TitleSection from 'components/TitleSection';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

//Função Home
export default function Home() {
    return (
        <>
            <Carousel />
            <Container>
                <TitleSection> Nosso menu </TitleSection>

                <Row>
                    {
                        filmesjson.data.map((json) => {
                            return <CardImage {...json} key={json.id} />
                        })
                    }
                </Row>

                <TitleSection> Nosso Preparo </TitleSection>
                <p>

                    Na nossa confeitaria, o preparo das tortas é uma arte meticulosa e apaixonada. Começamos escolhendo os melhores ingredientes, optando por marcas renomadas que garantem qualidade e frescor em cada mordida. Cada passo do processo é executado com precisão e cuidado, desde o amassar da massa até o delicado arranjo dos ingredientes no topo. Nossos chefs dedicam-se a criar preparos específicos que elevam o sabor e a textura das nossas tortas a um nível superior. Utilizamos técnicas de alta qualidade para garantir que cada fatia seja uma experiência inesquecível, uma verdadeira celebração do prazer gastronômico.
                </p>


                <TitleSection> Nossa torta de chocolate </TitleSection>

                <Row>
                    <Col xs={12} sm={6} md={2} lg={2}>
                        <figure>
                            <Image src={<img src='/images/chocolatCake.jpg' />} fluid />

                        </figure>
                    </Col>

                    <p>Nossa torta de chocolate é uma verdadeira indulgência para os amantes de cacau. Começamos com um chocolate de alta qualidade, escolhendo cuidadosamente cada ingrediente para garantir um sabor rico e intenso. Nossa massa é preparada com precisão, proporcionando uma base macia e delicada que complementa perfeitamente o recheio decadente de chocolate. Cada camada é cuidadosamente montada para criar uma harmonia de texturas e sabores, resultando em uma experiência sensorial que faz jus à reputação do chocolate como uma iguaria luxuosa. Cada mordida da nossa torta de chocolate é uma jornada de prazer para o paladar, uma experiência indulgente que deixará uma impressão duradoura em todos os amantes de chocolate.</p>

                </Row>

            </Container>
        </>
    )
}
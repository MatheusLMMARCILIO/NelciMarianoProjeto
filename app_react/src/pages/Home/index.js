//import serve para importar componentes
// Componentes: Container, Row, CardImage, dbjson
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardImage from 'components/CardImage';
import filmesjson from 'json/filmes.json';
import Carousel from '../../components/Carousel'
import TitleSection from 'components/TitleSection';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';


import './index.module.css'


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

                <br />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Nossa Preparo</Accordion.Header>
                        <Accordion.Body>
                            Na nossa confeitaria, cada preparo dos alimentos é uma verdadeira celebração da arte culinária. Desde a cuidadosa seleção dos melhores ingredientes até a meticulosa execução de cada receita, buscamos criar doces que não apenas deliciem, mas também encantem os sentidos. Cada bolinho é uma combinação perfeita de sabores e texturas, preparada com amor e dedicação para proporcionar aos nossos clientes uma experiência única e memorável.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Produtos de Qualidade</Accordion.Header>
                        <Accordion.Body>
                            Na nossa confeitaria, primamos pela excelência dos produtos. Escolhemos cuidadosamente ingredientes frescos e de alta qualidade para garantir o sabor e a textura perfeitos em cada doce que preparamos. Valorizamos a confiança dos nossos clientes, oferecendo produtos que não só satisfazem, mas também superam expectativas, proporcionando uma experiência gourmet única e inesquecível.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br />

                <div className='CardPage' >
                    <Row>
                        <Card style={{ width: '18rem', margin: ' 15px' }}>
                            <Card.Img variant="top" src="./images/PiePi.jpg" />
                            <Card.Body>
                                <Card.Title>Torta de pistache</Card.Title>
                                <Card.Text>
                                    A torta de pistache seduz com seu creme delicado e sabor marcante. A combinação perfeita de crocância e suavidade, é uma escolha sofisticada para os amantes de sobremesas gourmet.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'yellow', border: 'none', color: 'black' }} variant="primary">Peça já!</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem', margin: ' 15px' }}>
                            <Card.Img variant="top" src="./images/trufas.jpg" />
                            <Card.Body>
                                <Card.Title>Trufas recheadas</Card.Title>
                                <Card.Text>
                                    As trufas de chocolate são pequenas indulgências de puro prazer. Com sua textura cremosa e sabor intenso de chocolate, cada mordida é uma experiência luxuosa que agrada aos mais exigentes paladares.        </Card.Text>
                                <Button style={{ backgroundColor: 'yellow', border: 'none', color: 'black' }} variant="primary">Peça já!</Button>
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '18rem', margin: ' 15px' }}>
                            <Card.Img variant="top" src="./images/redFrutsPie.jpg" />
                            <Card.Body>
                                <Card.Title>Torta de frutas vemelhas</Card.Title>
                                <Card.Text>
                                    A torta de frutas vermelhas encanta com sua mistura equilibrada de doçura e acidez, ressaltando o frescor das frutas. Uma delícia irresistível para quem aprecia sabores refinados e ingredientes de qualidade.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'yellow', border: 'none', color: 'black' }} variant="primary">Peça já!</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem', margin: '15px' }}>
                            <Card.Img variant="top" src="./images/cupCake.jpg" />
                            <Card.Body>
                                <Card.Title>Torta de frutas vemelhas</Card.Title>
                                <Card.Text>
                                    Os cupcakes são pequenos bolos repletos de sabor e criatividade. Decorados com diferentes coberturas e recheios, são uma explosão de doçura em cada mordida, perfeitos para qualquer ocasião especial.</Card.Text>
                                <Button style={{ backgroundColor: 'yellow', border: 'none', color: 'black' }} variant="primary">Peça já!</Button>
                            </Card.Body>
                        </Card>

                    </Row>
                    <br />
                </div>


            </Container>
        </>
    )
}
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'react-bootstrap/Image';
import Styles from './index.module.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image src="/images/bannerPieOne.jpg" fluid className={Styles.image}  />
        <Carousel.Caption className={Styles.caption}>
          <h3>Doçura Divina em Cada Fatia</h3>
          <p>Delicie-se com nossas tortas doces feitas com amor e cuidado, cada fatia é uma explosão de sabores irresistíveis!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Image src="/images/bannerPieTwo.jpg" fluid  className={Styles.image}  />
        <Carousel.Caption className={Styles.caption}>
          <h3>Uma Viagem ao Paraíso dos Sabores</h3>
          <p>Em cada mordida, uma nova descoberta: nossas tortas doces são uma jornada gastronômica que desperta os sentidos e alegra a alma.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Image src="/images/bannerTrheePie.jpg" fluid className={Styles.image}  />
        <Carousel.Caption className={Styles.caption}>
          <h3>Tortas Doces: O Delicioso Encontro entre Tradição e Criatividade</h3>
          <p>
          Em nossa confeitaria, tradição e inovação se unem para criar tortas doces que são verdadeiras obras-primas culinárias.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
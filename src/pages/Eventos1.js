import { Page, Document, Side, Title, PlainText, Picture } from '../components';

export default function Eventos1() {
  return (
    <Page>
      <Document>
        <Side centered>
          <Title color="white" background="pink">
            CHÁ DE FRALDAS SOLIDÁRIO
          </Title>
          <PlainText mx="50px">
            A comunidade é convidada a participar de um café da tarde ou de uma
            festa junina, por exemplo, em que a entrada se vincula à doação de
            um pacote de fraldas. As comidas e bebidas servidas durante o evento
            são feitas com muito carinho por nossos voluntários.
          </PlainText>

          <Picture name="chadefraldas" mx="100px" />
        </Side>
        <Side centered>
          <Title color="white" background="blue">
            DIA DAS CRIANÇAS
          </Title>
          <PlainText mx="50px">
            Crianças que nunca viveram a experiência de entrar em uma sala de
            cinema são levadas por voluntários a este local, onde, além de
            assistir ao filme, ainda se esbaldam em pipoca e refrigerante num
            clima de muita alegria
          </PlainText>
          <Picture name="cinema" mx="100px" />
        </Side>
      </Document>
    </Page>
  );
}

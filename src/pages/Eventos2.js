import { Page, Document, Side, Title, PlainText, Picture } from '../components';

export default function Eventos2() {
  return (
    <Page>
      <Document>
        <Side centered>
          <Title color="white" background="green">
            CAMPANHA DO AGASALHO
          </Title>
          <PlainText mx="50px">
            Antes de chegar o inverno, promove-se a campanha de arrecadação de
            agasalhos que aquecerão não só os assistidos mensalmente pelo grupo,
            mas também entidades assistenciais que estejam precisando, bem como
            os andarilhos ou os sem-teto que se encontrem ao relento nas ruas da
            cidade
          </PlainText>
          <br />
          <Picture
            name="agasalho"
            mx="50px"
            border={{ position: 'left', color: 'green' }}
          />
        </Side>
        <Side centered>
          <Title color="white" background="pink">
            DOAÇÃO DE SANGUE
          </Title>
          <PlainText mx="50px">
            Voluntários são levados ao hemocentro de Uberaba, por ser o mais
            próximo da nossa cidade, para, num ato de amor, doar sangue e,
            consequentemente, salvar vidas.
          </PlainText>
          <br />
          <Picture
            name="doacaodesangue"
            mx="50px"
            border={{ position: 'right', color: 'pink' }}
          />
        </Side>
      </Document>
    </Page>
  );
}

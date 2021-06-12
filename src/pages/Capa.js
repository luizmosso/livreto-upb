import {
  Page,
  Document,
  Side,
  Title,
  PlainText,
  Picture,
  ColoredBox,
  Logo,
  Rainbow,
  FooterText,
} from '../components';

export default function Capa() {
  return (
    <Page>
      <Document>
        <Side centered>
          <Title color="pink" icon="left">
            FAÇA PARTE
          </Title>
          <PlainText mx="100px">
            O apoio de empresários é de fundamental importância para o
            desenvolvimento e expansão do Unidos Pelo Bem.
            <br />
            <br />
            E, assim, seguimos...
            <br />
            sempre UNIDOS PELO BEM!
          </PlainText>
          <Picture
            border={{ position: 'right', color: 'green' }}
            name="kid"
            mx="100px"
          />
          <br />
          <ColoredBox color="blue" width="300px" mx="100px">
            Para maiores informações
            <br />
            <br />
            unidospelobem@outlook.com
            <br />
            Instagram - @unidospelobemoficial
            <br />
            Facebook - /unidospelobem
            <br />
            (34) 99179-6975
          </ColoredBox>
          <ColoredBox color="pink" width="300px" mx="100px">
            Para doações
            <br />
            <br />
            ASSOCIACAO UNIDOS PELO BEM
            <br />
            Conta Corrente: 3102-3 - Agencia 0097 - op 003
            <br />
            Caixa Economica Federal
            <br />
            {`CNPJ: 24702893000185 < PIX`}
          </ColoredBox>
        </Side>
        <Side centered>
          <Picture big name="cover" />
          <Rainbow big marginTop="-46px" />
          <Logo style={{ marginTop: -10 }} />
          <FooterText style={{ marginTop: -35 }}>
            unidospelobem.com.br
          </FooterText>
        </Side>
      </Document>
    </Page>
  );
}

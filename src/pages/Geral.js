import {
  Page,
  Document,
  Side,
  Title,
  PlainText,
  Picture,
  BorderedBox,
  Logo,
  Rainbow,
} from '../components';

export default function Geral() {
  return (
    <Page style={{ marginBottom: 2 }}>
      <Document>
        <Side centered>
          <Logo small />
          <BorderedBox title="O COMEÇO" mx="50px" color="green">
            <PlainText>
              Quando quatro amigos se juntaram para fazer o Natal de 2013
              especial para algumas famílias carentes da cidade de Araxá/MG, não
              imaginaram alcançar proporções tão grandes e em tão pouco tempo.
              Inicialmente, o objetivo era arrecadar apenas alimentos e
              brinquedos para esta data, porém a repercussão foi tamanha que
              deram continuidade ao projeto e, com isso, o Unidos Pelo Bem
              nasceu
            </PlainText>
          </BorderedBox>
          <br />
          <Picture
            border={{ position: 'left', color: 'green' }}
            name="founders"
            mx="100px"
            skewRight
            label={{ position: 'top', text: 'Thaís, Vinícius, Aline e Camila' }}
          />
          <Rainbow small fromLeft marginTop="45px" />
        </Side>
        <Side centered>
          <Title color="blue" icon="left" left>
            QUEM SOMOS?
          </Title>
          <PlainText mx="50px">
            O Unidos Pelo Bem encontra-se regularizado, sob a forma de
            associação sem fins lucrativos. Não guarda nenhum tipo de vínculo
            religioso, econômico, político e subsiste exclusivamente através das
            doações de voluntários. Atualmente é integrado por mais de cinquenta
            voluntários, que conseguem ajudar não só a cidade de Araxá, mas
            também toda a região. O grupo atende cerca de cinquenta famílias
            mensalmente, em grande rotatividade, que recebem cestas básicas e
            outros donativos, tais como roupas, calçados, fraldas e brinquedos.
            <br />
            O controle destas famílias é otimizado através do cadastro em
            aplicativo móvel próprio da associação, chamado Wave, que possui as
            informações socioeconômicas e os detalhes do atendimento, como o
            prazo, quantidade de cestas básicas, entre outros, sempre integrado
            com as políticas internas de forma totalmente digital e em tempo
            real.
            <br />
            <br />A fim de fazer um balanço sobre as questões apuradas durante o
            mês, bem como discutir novas ações a serem promovidas, o Unidos Pelo
            Bem se reúne mensalmente. Normalmente as reuniões acontecem no
            terceiro domingo do mês, na sede da associação.
          </PlainText>
          <br />
          <Picture
            border={{ position: 'right', color: 'blue' }}
            name="members"
            mx="100px"
            skewLeft
            label={{
              position: 'top',
              corner: 'right',
              text: 'Alguns dos integrantes e voluntários',
            }}
          />
        </Side>
      </Document>
    </Page>
  );
}

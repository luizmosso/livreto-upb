import {
  Page,
  Document,
  Side,
  Title,
  PlainText,
  Picture,
  Rainbow,
} from '../components';

export default function Page2() {
  return (
    <Page>
      <Document>
        <Side centered>
          <Picture
            border={{ position: 'left', color: 'green' }}
            name="union"
            mx="50px"
          />
          <br />
          <Title color="green" icon="right">
            O QUE FAZEMOS?
          </Title>
          <PlainText mx="50px">
            Sua proposta vai muito além da mera assistência material. O objetivo
            é, através da ajuda material, de visitas fraternas, do auxílio na
            consecução de um emprego, de uma palavra amiga, da capacitação
            profissional, de orientação e de ações assistenciais e recreativas,
            devolver a dignidade, a autoestima e o sonho de uma vida melhor para
            aqueles que passam momentos ou até uma vida inteira de dificuldades
            e sofrimentos. Todo o trabalho é desenvolvido visando a que os
            assistidos, ultrapassada a fase crítica, sejam capazes de caminhar
            com as próprias pernas.
            <br />
            <br />
            Ao longo do ano são desenvolvidas diversas campanhas, todas voltadas
            para a arrecadação de recursos financeiros e materiais para a
            realização dos eventos de arrecadação.
          </PlainText>
          <Rainbow small fromLeft marginTop="60px" />
        </Side>
        <Side centered>
          <Title color="white" background="green">
            BAZAR BENEFICENTE
          </Title>
          <PlainText mx="50px">
            Após intensa atuação dos voluntários no sentido de arrecadar
            donativos, em especial roupas e calçados, novos ou usados em bom
            estado, é realizado o bazar, no qual os itens são vendidos a preço
            módico, objetivando proporcionar meios para que pessoas carentes
            adquiram peças de seu interesse, bem como angariar fundos para a
            aquisição de alimentos que beneficiarão estas e outras famílias.
          </PlainText>
          <br />
          <Picture
            border={{ position: 'right', color: 'green' }}
            name="bazar1"
            mx="100px"
          />
          <br />
          <Picture
            border={{ position: 'left', color: 'green' }}
            name="bazar2"
            mx="100px"
          />
        </Side>
      </Document>
    </Page>
  );
}

import {
  Page,
  Document,
  Side,
  Title,
  PlainText,
  Picture,
  Double,
} from '../components';

export default function Eventos3() {
  return (
    <Page>
      <Document>
        <Side centered>
          <Title color="white" background="pink">
            UPB FESTIVAL DE MÚSICA
          </Title>
          <PlainText mx="50px">
            No festival, diversas bandas, de estilos musicais variados, tocam
            voluntariamente, criando um clima de diversão, amizade e caridade.
            Nesse evento a entrada é cobrada, assim como as comidas e bebidas.
            Trata-se de um evento de maior porte, de elevada qualidade, no qual
            os participantes vivem horas prazerosas e ainda auxiliam os mais
            necessitados.
          </PlainText>
          <Picture
            name="musica"
            mx="100px"
            border={{ position: 'right', color: 'pink' }}
          />
          <br />
          <Title color="white" background="green">
            HORTA DO BEM
          </Title>
          <Double mx="20px">
            <div style={{ flex: 0.6 }}>
              <PlainText>
                Esse projeto visa ensinar alternativas de ter uma alimentação
                saudável, utilizando alimentos que podem ser cultivados no
                quintal de casa. O grupo fornece todo o material e mão-de obra
                necessária para a criação da horta e, em contrapartida, as
                famílias assistidas com esse projeto, se comprometem no cultivo
                de hortaliças como fontes de vitaminas e sais minerais, que
                trarão melhoria de qualidade de vida para todos.
              </PlainText>
            </div>
            <div style={{ flex: 0.4 }}>
              <Picture
                name="horta"
                border={{ position: 'right', color: 'green' }}
              />
            </div>
          </Double>
        </Side>
        <Side centered>
          <Title color="white" background="blue">
            NATAL SOLIDÁRIO
          </Title>
          <PlainText mx="50px">
            Foi o evento que inspirou a criação do UPB e se configura no de
            maior repercussão. São arrecadados alimentos e brinquedos
            distribuídos entre as famílias carentes de Araxá e região alguns
            dias antes do Natal. O tradicional Natal Solidário do Unidos Pelo
            Bem é ansiosamente esperado pelos que já foram um dia beneficiados
            pelo evento e viveram um Natal menos sofrido.
          </PlainText>
          <br />
          <Picture name="natal" mx="50px" />
        </Side>
      </Document>
    </Page>
  );
}

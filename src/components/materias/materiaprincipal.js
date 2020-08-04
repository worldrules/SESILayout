import React from 'react';
import './materiaprincipal.css';

export default function MateriaPrincipal() {
  return (
    <div className="container-fluid">
      <div className="alert alert-success" id="titulinho" role="alert">
        Sociologia
      </div>
      <button className="btn btn-success" id="print" onClick={window.print}>
        Imprimir
      </button>

      <div className="conteudo">
        <div id="capitulo1">
          <strong>CAPÍTULO 1:</strong>{' '}
          <p>
            Como um cientista social pode ajudar a entender a indústria
            metalúrgica ?
          </p>
          <strong>O Que a Sociologia tem a ver com a minha vida ?</strong>
          <p>
            A Sociologia é uma especialização das Ciências Sociais. Dito de
            maneira bem simples, as Ciências Sociais pretendem entender e
            explicar cientificamente a vida social. Vamos usar uma comparação
            para tornar isso mais claro: assim como as Ciências Naturais – que
            você já conhece, como a Física, a Química e a Biologia, por exemplo
            – pretendem entender os fenômenos naturais; as Ciências Sociais
            –como a Antropologia, a Ciência Política, a Economia e a Sociologia,
            entre outras - pretendem entender os fenômenos e os problemas que
            acontecem em sociedades humanas. Por exemplo, por que os casamentos
            em algumas sociedades são monogâmicos (um homem e uma mulher),
            enquanto em outras sociedades são poligâmicos (é permitido que um
            homem ou uma mulher casem com mais de uma pessoa do outro sexo)? Por
            que umas sociedades têm índices de criminalidade e violência maiores
            do que outras? Por que existe a desigualdade social? Quais são as
            causas do desemprego? Os seres humanos são criaturas sociais. Desde
            as nossas origens mais remotas, a nossa espécie – homo sapiens
            sapiens ou homo sapiens moderno – se constitui por meio do grupo. Os
            primeiros seres humanos sobreviveram, assim como outros animais,
            porque contaram com a solidariedade e a cooperação do grupo para se
            proteger e caçar. Esses grupos desenvolveram-se desde pequenas
            unidades familiares, passando para clãs e tribos, vilas e cidades,
            até países e civilizações. Nossa inclinação natural para vivermos e
            trabalharmos juntos nos levou até as atuais sociedades. Essa
            dependência mútua continua até os dias de hoje e de maneira cada vez
            mais complexa. Por outro lado, a natureza da sociedade influencia
            nossos comportamentos sociais afetando praticamente todos os
            aspectos de nossas vidas. O estudo de como os seres humanos se
            relacionam na vida social, como eles interagem uns com os outros e
            como a sociedade vai moldando nossos comportamentos é tarefa das
            disciplinas que chamamos de Ciências Sociais. A Sociologia é uma
            dessas disciplinas. Então, o que a sociologia tem a ver com a sua
            vida? Tudo! Porque os seres humanos somos seres sociais, vivemos em
            sociedade, juntos com outros seres humanos numa rede complexa de
            relações. Ora, tem algo mais importante para se aprender do que
            entender a família na qual nascemos, a escola na qual crescemos, as
            empresas nas quais trabalharemos, a religião na qual acreditamos e,
            finalmente, a maneira como tratamos os idosos e os mortos? Na
            verdade, a Sociologia ajuda a que você entenda a sociedade e, como
            você é um ser social, ela vai ajudá-lo a se entender. Bem-vindos ao
            estudo da sociologia!
          </p>
        </div>
      </div>
    </div> //Final do Container
  );
}

import "../../src/global.css";
import "./Description.css";

export default function Description() {
  return (
    <div className="desc-container">
      <h1 className="description-title">Descrição do aplicativo</h1>
      <p className="description-text">
        No SIGO você poderá gerenciar suas obras com mais facilidade, todas as informações
        de seus clientes, de sua equipe de trabalho, dos prestadores de serviço e
        juntamente da informação de seus fornecedores que ficam disponíveis de modo prático e rápido.
      </p>
    </div>
  );
}

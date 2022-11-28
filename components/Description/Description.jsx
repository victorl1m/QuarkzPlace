import "../../src/global.css";
import "./Description.css";

export default function Description() {
  return (
    <div className="desc-container">
      <h1 className="description-title">Descrição do aplicativo</h1>
      <p className="description-text">
        No SIGO você poderá gerenciar suas obras com facilidade: as informações
        de clientes, da equipe de trabalho, dos prestadores de serviço e
        fornecedores ficam disponíveis de modo prático e rápido, tanto gestores
        quanto clientes têm acesso ao andamento da obra na palma da mão!
      </p>
    </div>
  );
}

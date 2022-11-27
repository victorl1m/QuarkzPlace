import "./Rating.css";
import "../../src/global.css";

export default function Rating() {
  const rating = 4.5;
  return (
    <div className="rating">
      <div className="rating-stars">
        <div className="stars">
          <h1 className="star-text">0.0 ★</h1>
          <h1 className="star-subtext">0 Avaliações</h1>
        </div>
        <div className="downloads">
          <h1 className="downloads-text">0+</h1>
          <h1 className="downloads-subtext">Downloads</h1>
        </div>
        <div className="suggestions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="suggestions-icon"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.698 15.354c-.405-.031-.367-.406.016-.477.634-.117.913-.457.913-.771 0-.265-.198-.511-.549-.591-.418-.095-.332-.379.016-.406.566-.045.844-.382.844-.705 0-.282-.212-.554-.63-.61-.429-.057-.289-.367.016-.461.261-.08.677-.25.677-.755 0-.336-.25-.781-1.136-.745-.614.025-1.833-.099-2.489-.442.452-1.829.343-4.391-.845-4.391-.797 0-.948.903-1.188 1.734-.859 2.985-2.577 3.532-4.343 3.802v4.964c3.344 0 4.25 1.5 6.752 1.5 1.6 0 2.426-.867 2.426-1.333 0-.167-.136-.286-.48-.313z" />
          </svg>
          <h1 className="suggestions-subtext">Arquitetura</h1>
        </div>
      </div>
    </div>
  );
}

import "../../src/global.css";
import "./DataSecurity.css";

export default function DataSecurity() {
  return (
    <div className="data-security-container">
      <div className="data-security-box">
        <h1 className="data-security-title">Data Security</h1>
        <p className="data-security-subText">
          Your security starts with understanding how developers collect and
          monitor your data. Data security and privacy practices may vary by
          use, region and age. The developer has provided the following
          information, which may be updated from time to time.
        </p>
      </div>
      <div className="security-rules">
        <div className="security-rule">
          <ul className="security-rule-list">
            <li className="security-rule-list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="security-rule-list-item-icon"
                viewBox="0 0 24 24"
                fill="#00b2cb"
              >
                <path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z" />
              </svg>
              <div className="security-rule-list-item-text">
                <h1 className="security-rule-text">
                  Data is not shared with third parties
                </h1>
                <h1 className="security-rule-subText">
                  <a href="#">Learn more</a> about how the developers declare
                  the sharing
                </h1>
              </div>
            </li>
            <li className="security-rule-list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="security-rule-list-item-icon"
                viewBox="0 0 24 24"
                fill="#00b2cb"
              >
                <path d="M23.984 11h-2.006c-.057-.557-.143-1.104-.287-1.631l1.82-.862c.245.799.401 1.632.473 2.493zm-3.035-3.493l1.81-.857c-.353-.7-.758-1.368-1.236-1.981l-1.512 1.318c.36.474.667.986.938 1.52zm.039 8.939c-.26.519-.562 1.01-.904 1.473l1.539 1.29c.465-.616.871-1.276 1.211-1.976l-1.846-.787zm-.836-13.238c-.589-.54-1.214-1.038-1.9-1.454l-1.216 1.599c.577.334 1.104.739 1.602 1.177l1.514-1.322zm-1.414 16.195c-1.779 1.608-4.129 2.597-6.713 2.597-5.525 0-10.021-4.486-10.021-10 0-3.692 2.021-6.915 5.011-8.647l-1.215-1.599c-3.473 2.103-5.8 5.897-5.8 10.246 0 6.627 5.385 12 12.025 12 3.204 0 6.107-1.259 8.264-3.297l-1.551-1.3zm3.258-6.403c-.054.54-.162 1.063-.299 1.574l1.864.795c.224-.762.372-1.553.439-2.369h-2.004zm-9.996 5l7-8h-4v-10h-6v10h-4l7 8z" />
              </svg>
              <div className="security-rule-list-item-text">
                <h1 className="security-rule-text">No data was collected</h1>
                <h1 className="security-rule-subText">
                  <a href="#">Learn more</a> about how the developers declare
                  the collect
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

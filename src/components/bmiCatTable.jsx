export default function BMICategoryTable() {
  return (
    <div>
      <table className="bmiCategoriesTbl">
        <thead>
          <tr>
            <th>BMI Categories</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Underweight</td>
            <td>&lt; 18.5</td>
          </tr>
          <tr>
            <td>Normal weight</td>
            <td>18.5 – 24.9</td>
          </tr>
          <tr>
            <td>Overweight</td>
            <td>25 – 29.9</td>
          </tr>
          <tr>
            <td>Obesity</td>
            <td>&gt;= 30</td>
          </tr>
        </tbody>
      </table>
      <div className="references">
        <h3>References:</h3>
        <ol>
          <li>
            <a
              href="https://www.betterhealth.vic.gov.au/health/healthyliving/body-mass-index-bmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Body Mass index
            </a>
          </li>
          <li>
            <a
              href="https://www.chatswoodmedicalanddental.com.au/articles/body-mass-index/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The importance of knowing your Body Mass Index
            </a>
          </li>
          <li>
            <a
              href="https://www.diabetes.co.uk/bmi/why-is-bmi-important.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Relating to diabetes.
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

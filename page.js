export default function Home() {
  return (
    <main>
      <h1>Chicken Salad Chick Nutrition Facts: Complete Menu Guide</h1>

      <p>
        This complete Chicken Salad Chick nutrition guide includes calories,
        macros, allergen information, and healthy ordering tips.
      </p>

      <h2>Our Famous Chicken Salads (Per 4 oz Scoop)</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Flavor</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Carbs (g)</th>
            <th>Protein (g)</th>
            <th>Sodium (mg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Classic Carol</td>
            <td>410</td>
            <td>35</td>
            <td>0</td>
            <td>22</td>
            <td>540</td>
          </tr>
          <tr>
            <td>Fruity Fran</td>
            <td>330</td>
            <td>26</td>
            <td>6</td>
            <td>16</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Sassy Scotty</td>
            <td>430</td>
            <td>38</td>
            <td>1</td>
            <td>21</td>
            <td>750</td>
          </tr>
        </tbody>
      </table>

      <h2>Fresh Sides</h2>
      <ul>
        <li>Fresh Fruit – 60 Calories</li>
        <li>Broccoli Salad – 230 Calories</li>
        <li>Pasta Salad – 230 Calories</li>
      </ul>

      <h2>Soups (Cup)</h2>
      <ul>
        <li>Chicken Tortilla – 280 Calories</li>
        <li>Tomato Bisque – 250 Calories</li>
        <li>Broccoli & Cheese – 330 Calories</li>
      </ul>

      <h2>Desserts</h2>
      <ul>
        <li>Small Buttercream Cookie – 90 Calories</li>
        <li>Red Velvet Cake Slice – 1250 Calories</li>
      </ul>

      <h2>Healthy Ordering Tips</h2>
      <ul>
        <li>Choose a scoop instead of a sandwich.</li>
        <li>Pair with fresh fruit instead of chips.</li>
        <li>Select unsweetened tea or diet drinks.</li>
      </ul>

      <h2>Allergen Information</h2>
      <p>
        Menu items may contain egg, milk, wheat, soy, peanuts, tree nuts, or other allergens.
        Always confirm with your local restaurant before ordering.
      </p>
    </main>
  );
}

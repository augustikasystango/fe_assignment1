import "./About.css";

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Welcome to our store. Below is our product inventory table showing
        prices and stock availability.
      </p>

      <table>
        <caption>
          Product inventory with prices and availability status
        </caption>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Apple</th>
            <td>$2</td>
            <td>In stock</td>
          </tr>
          <tr>
            <th scope="row">Banana</th>
            <td>$1</td>
            <td>Out of stock</td>
          </tr>
          <tr>
            <th scope="row">Orange</th>
            <td>$1.5</td>
            <td>In stock</td>
          </tr>
          <tr>
            <th scope="row">Mango</th>
            <td>$3</td>
            <td>Limited stock</td>
          </tr>
          <tr>
            <th scope="row">Grapes</th>
            <td>$2.5</td>
            <td>In stock</td>
          </tr>
        </tbody>
      </table>

      <p className="note">
        Note: Prices are in USD and availability may vary by season.
      </p>
    </>
  );
};

export default About;

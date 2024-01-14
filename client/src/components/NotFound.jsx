import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis
        obcaecati laudantium alias perspiciatis, ad, accusamus veritatis earum
        architecto suscipit quo sit recusandae ipsum enim qui reiciendis odit
        dolorem ducimus. Unde excepturi, voluptates magni ratione suscipit,
        consectetur illum ullam architecto repudiandae nisi, nulla et
        perferendis! Distinctio fugiat architecto saepe expedita?
      </p>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
};

export default NotFound;

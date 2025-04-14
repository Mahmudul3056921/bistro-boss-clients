import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;

  const [, refetch] = useCarts();

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const axiosSecure = useAxiosSecure();

  const handleCart = () => {
    if (user && user.email) {
      //send cart item to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Data inserted!");
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please Login?",

        showCancelButton: true,
        confirmButtonText: "Login",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="overflow-hidden h-12 text-center px-2">{recipe}</p>
          <Link>
            <button onClick={handleCart} className="btn btn-warning ">
              Order
            </button>
          </Link>
        </div>
        <p className="absolute right-0 text-black  bg-warning ">{price}</p>
      </div>
    </div>
  );
};

export default FoodCard;

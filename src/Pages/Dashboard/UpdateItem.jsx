import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/Section/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, recipe, price, image, category, _id } = useLoaderData();
  console.log(name, recipe, price, image, _id);

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    //image upload to image bb and get an url on response
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const MenuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(MenuRes.data);

      if (MenuRes.data.modifiedCount > 0) {
        Swal.fire("Data updated into menu!");
      }
    }
    console.log(res.data);

    // Optional: You can send formData to backend like this
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("price", data.price);
    // formData.append("category", data.category);
    // formData.append("recipe", data.recipe);
    // formData.append("image", data.image[0]);
    // axios.post("/your-api-endpoint", formData)

    reset(); // Clear form after submission
  };
  return (
    <div>
      <SectionTitle
        heading={"change koro mon moto"}
        subHeading={"ektai jibon"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Item Name *</span>
          </label>
          <input
            defaultValue={name}
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter item name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category & Price */}
        <div className="flex gap-4">
          {/* Category */}
          <div className="flex-1">
            <label className="label">
              <span className="label-text font-semibold">Category *</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue=""
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex-1">
            <label className="label">
              <span className="label-text font-semibold">Price *</span>
            </label>
            <input
              defaultValue={price}
              {...register("price", { required: true })}
              type="number"
              placeholder="Enter price"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Recipe */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Recipe Details *</span>
          </label>
          <textarea
            defaultValue={recipe}
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered w-full h-24"
            placeholder="Enter recipe details"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Upload Image *</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        {/* Submit */}
        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Change Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;

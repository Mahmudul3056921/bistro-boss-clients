const Menuitem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex space-x-3">
      <div>
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt=""
        />
      </div>
      <div>
        <p className="uppercase">---{name}---</p>
        <p>{recipe}</p>
      </div>
      <p className="text-black-400">${price}</p>
    </div>
  );
};

export default Menuitem;

// eslint-disable-next-line react/prop-types
const RightSideBar = ({ items }) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-3 gap-2 ">
        <div className="col-span-2 font-semibold">
          <p>{items?.post_title?.slice(0, 60)}</p>
        </div>
        <div className="col-span-1">
          <div className="h-[83px] w-[100px]">
            <img
              className="w-full h-full object-cover rounded"
              src={items?.post_image}
              alt={items?.post_image}
            />
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default RightSideBar;

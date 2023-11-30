const Card = ({ data }) => {
  return (
    <div className="bg-white cursor-pointer w-90 h-90 rounded-lg  ">
    <div className="relative mb-2 w-full h-4/5 overflow-hidden rounded-lg ">
      <img
        className="w-96 h-96 object-cover rounded-lg  flex-wrap "
        src={data.image}
        alt={data.name}
      />
      <button className="absolute top-0 right-0 flex justify-center items-center bg-black tex w-6 h-6 rounded-full m-2 p-1 text-white">
        +
      </button>
    </div>
    <div className="grid text-center">
      <h1 className="text-sm font-light font-mono">Name: {data.name}</h1>
      <span className="text-sm font-light font-serif">Species: {data.species}</span>
      <span className="text-sm font-light font-serif">Status: {data.status}</span>
      <span className="text-sm font-light font-serif">Gender: {data.gender}</span>
    </div>
  </div>
  );
};

export default Card;


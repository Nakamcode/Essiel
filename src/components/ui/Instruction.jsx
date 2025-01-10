const Instruction = () => {
  return (
    <div className="bg-white max-w-lg rounded-lg p-5 my-10 py-7 shadow-lg border border-gray-600">
      <h1 className="font-semibold mb-4 text-lg">Swap</h1>
      <ul>
        <li className="mb-4 text-gray-600 flex gap-3">
          <span className="flex bg-blue-500 text-white rounded-full w-7 h-7 aspect-square justify-center items-center">
            1
          </span>
          <span>
            Start by selecting the token to Swap from and the amount you want to
            exchange
          </span>
        </li>
        <li className="mb-4 text-gray-600 flex gap-3">
          <span className="flex bg-blue-500 text-white  rounded-full w-7 h-7 aspect-square justify-center items-center">
            2
          </span>
          <span>
            Start by selecting the token to Swap from and the amount you want to
            exchange
          </span>
        </li>
        <li className="mb-4 text-gray-600 flex gap-3">
          <span className="flex bg-blue-500 text-white  rounded-full w-7 h-7 aspect-square justify-center items-center">
            3
          </span>
          <span>
            Start by selecting the token to Swap from and the amount you want to
            exchange
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Instruction;

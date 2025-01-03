const Tab = () => {
  return (
    <div className="flex border border-gray-400 *:p-3 divide-x divide-gray-400  rounded-lg overflow-hidden *:leading-none *:font-semibold">
      <button className="bg-blue-600 text-white">Active</button>

      <button>Stable</button>

      <button>Volatile</button>

      <button>Concentrated</button>

      <button>Incentivized</button>

      <button>Low TVL</button>

      <button>Participating</button>

      <button>All Pools</button>
    </div>
  );
};

export default Tab;

import Button from "../atomic/Button";
import { InfoIcon } from "lucide-react";

export function Card({
  name,
  type,
  fee,
  apr,
  volume,
  fees,
  token1Balance,
  token2Balance,
  token1,
  token2,
  tvl,
  poolBalance1,
  poolBalance2,
}) {
  return (
    <div className="bg-white rounded-lg px-5 py-6 shadow-md border border-gray-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-20">
            <div className="absolute left-0 top-0 h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gray-100">
              <div className="h-full w-full bg-blue-600"></div>
            </div>
            <div className="absolute right-0 top-0 h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gray-100">
              <div className="h-full w-full bg-violet-600"></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-md font-semibold">{name}</h3>
            </div>
            <div>
              <div className="flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 my-3 text-sm">
                <span
                  className={
                    type === "Basic Volatile"
                      ? "text-yellow-500"
                      : "text-orange-500"
                  }
                >
                  {type}
                </span>
                <span className="text-gray-500">{fee}</span>
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <p className="text-sm text-gray-500">TVL ~${tvl}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="text-right">
            <p className="text-md font-semibold">{apr}</p>
          </div>
          <div className="text-right">
            <p className="text-md font-semibold">~${volume}</p>
            <div className="mt-1 text-sm text-gray-500">
              {token1Balance} {token1}
            </div>
            <div className="text-sm text-gray-500">
              {token2Balance} {token2}
            </div>
          </div>
          <div className="text-right">
            <p className="text-md font-semibold">~${fees}</p>
            <div className="mt-1 text-sm text-gray-500">
              {(parseFloat(token1Balance) * 0.0004).toFixed(4)} {token1}
            </div>
            <div className="text-sm text-gray-500">
              {(parseFloat(token2Balance) * 0.0004).toFixed(4)} {token2}
            </div>
          </div>
          <div className="text-right">
            <p className="text-md font-semibold">
              {poolBalance1} {token1}
            </p>
            <p className="text-sm">
              {poolBalance2} {token2}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button>Deposit</Button>
      </div>
    </div>
  );
}

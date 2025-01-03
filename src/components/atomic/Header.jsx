import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-500  bg-white shadow-md border border-gray-500 rounded-lg">
      <div>LIQUIDITY POOL</div>
      <div className="grid grid-cols-4 gap-20">
        <div className="text-right">APR</div>
        <div className="text-right">VOLUME</div>
        <div className="text-right">FEES</div>
        <div className="flex items-center justify-end gap-1">
          POOL BALANCE
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

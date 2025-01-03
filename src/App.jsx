import Container from "./components/atomic/Container";
import { Header } from "./components/atomic/Header";
import { Card } from "./components/ui/card";
import Button from "./components/atomic/Button";
import Pagination from "./components/atomic/Pagination";
import PaymentMethod from "./components/ui/PaymentMethod";
import Tab from "./components/ui/Tab";
import SearchBar from "./components/atomic/SearchBar";

function App() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-8 mb-10">
          <div className="bg-white p-7 rounded-lg border border-gray-500 shadow-md">
            <div className="flex justify-between">
              <div className="max-w-md">
                <strong className="font-semibold"> Liquidity Providers </strong>
                (LPs) make low-slippage swaps possible. Deposit and Stake
                liquidity to earn AERO.
              </div>
              <div>
                <Button>Deposit Liquidity</Button>
              </div>
            </div>

            {/* chips */}

            <div className="my-10 border-b border-t py-4 flex gap-3">
              <div className="leading-none p-1 rounded px-2 bg-gray-200 text-xs text-center">
                TVL ~$1,406,403,316.57
              </div>
              <div className="leading-none p-1 rounded px-2 bg-gray-200 text-xs text-center">
                TVL ~$1,406,403,316.57
              </div>
              <div className="leading-none p-1 rounded px-2 bg-gray-200 text-xs text-center">
                TVL ~$1,406,403,316.57
              </div>
            </div>

            {/* Footer */}

            <div className="text-sm">
              <p>
                There are currently{" "}
                <strong className="font-semibold"> 264 tokens</strong> listed.
                <a href="#" className="underline">
                  View Tokens{" "}
                </a>
                or
                <a href="#" className="underline">
                  {" "}
                  List New Token
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white p-7 rounded-lg border border-gray-500 shadow-md">
            <h1 className="font-semibold mb-4 text-lg">How it works</h1>
            <p className="mb-4 text-gray-600">
              The deeper the liquidity (TVL), the lower the slippage a pool will
              offer. LPs get AERO emissions, while veAERO lockers get the pool
              trading fees as an incentive to vote on the most productive pools.
            </p>
            <a href="#" className="underline">
              Read more
            </a>
          </div>
        </div>
        {/* Taps */}
        <h2 className="mb-4">Liquidity Pools</h2>
        <div className="flex justify-between items-center">
          <Tab />
          <SearchBar />
        </div>

        {/* Data */}
        <section className="mt-10">
          <Header />

          {/* Data tables */}

          <div className="mt-10 space-y-4">
            <Card
              name="CL1-WETH/superOETHb"
              type="Concentrated Stable"
              fee="0.04%"
              apr="5.91909%"
              volume="3,348,756.72"
              fees="1,339.5"
              token1Balance="154.19"
              token2Balance="828.74"
              token1="WETH"
              token2="superOETHb"
              tvl="352,632,447.28"
              poolBalance1="10,181.99"
              poolBalance2="93,323.55"
            />
            <Card
              name="CL1-WETH/superOETHb"
              type="Basic Volatile"
              fee="0.04%"
              apr="5.91909%"
              volume="3,348,756.72"
              fees="1,339.5"
              token1Balance="154.19"
              token2Balance="828.74"
              token1="WETH"
              token2="superOETHb"
              tvl="352,632,447.28"
              poolBalance1="10,181.99"
              poolBalance2="93,323.55"
            />
            <Card
              name="CL1-WETH/superOETHb"
              type="Concentrated Stable"
              fee="0.04%"
              apr="5.91909%"
              volume="3,348,756.72"
              fees="1,339.5"
              token1Balance="154.19"
              token2Balance="828.74"
              token1="WETH"
              token2="superOETHb"
              tvl="352,632,447.28"
              poolBalance1="10,181.99"
              poolBalance2="93,323.55"
            />
            <Card
              name="CL1-WETH/superOETHb"
              type="Concentrated Stable"
              fee="0.04%"
              apr="5.91909%"
              volume="3,348,756.72"
              fees="1,339.5"
              token1Balance="154.19"
              token2Balance="828.74"
              token1="WETH"
              token2="superOETHb"
              tvl="352,632,447.28"
              poolBalance1="10,181.99"
              poolBalance2="93,323.55"
            />
          </div>
        </section>

        <Pagination />

        <PaymentMethod />
      </Container>
    </>
  );
}

export default App;

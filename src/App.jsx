import { RevenueCard } from "./components/RevenueCard"

function App() {
  return (
    <>
      <div className="grid gap-3 grid-cols-3">
        <RevenueCard 
          title={"Next Payout"}
          orderCount={23}
          amount={2312.23}
        />

        <RevenueCard 
          title={"Amount Pending"}
          orderCount={13}
          amount={92312.20}
        />

        <RevenueCard 
          title={"Amount Processed"}
          amount={2392312.19}
        />
      </div>
    </>
  )
}

export default App

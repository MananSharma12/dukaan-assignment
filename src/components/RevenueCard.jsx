export const RevenueCard = ({
  title,
  showWarning,
  orderCount,
  amount
}) => {
  return (
    <div className="bg-white rounded drop-shadow-sm">
      <h3>
        {title}
      </h3>
      <div className="flex justify-between">
        <h2>{amount}</h2>
        <div>{orderCount} Orders</div>
      </div>
    </div>
  )
}


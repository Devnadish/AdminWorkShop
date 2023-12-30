const FixingExpenses = ({ MaintenanceExpensesArray }) => {
  return (
    <div className="flex flex-col  w-full items-center justify-around h-full ">
      {MaintenanceExpensesArray.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between w-full text-white px-3 "
          >
            <p>{item.fromName}</p>
            <p>{item.amount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FixingExpenses;

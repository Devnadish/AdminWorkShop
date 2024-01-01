const FixingExpenses = ({ MaintenanceExpensesArray }) => {
  console.log(MaintenanceExpensesArray)
  return (
    <div className="flex flex-col  w-full items-center justify-around h-full px-2 ">
      {MaintenanceExpensesArray.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between w-full text-white  border border-white/30 flex-col p-2 "
          >
            <div className="flex items-center justify-between w-full text-white px-3">
            <p>{item.fromName}</p>
            <p>{item.amount}</p>
            </div>

            <div className="flex items-center justify-between w-full text-white px-3 bg-green-300/30 text-[.7rem]">
              <span>
               كرت اصلاح
              </span>
              <span>

                {item.fixCode}
              </span>
              </div>

          </div>
        );
      })}
    </div>
  );
};

export default FixingExpenses;

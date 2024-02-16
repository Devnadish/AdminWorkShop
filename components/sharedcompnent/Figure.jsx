export const Figure = ({ title, no, icon, color }) => {
  return (
    <div className="flex flex-col items-center  justify-center border border-border  w-full  min-w-40   p-4 rounded shadow-lg font-tajwal ">
      {icon}
      <p className={`${color} text-lg font-bold`}>{title}</p>
      <p className={`${color} text-xl font-bold`}>{no}</p>
    </div>
  );
};

export const PageHeader = ({ rows }) => {
  return (<><div className="bg-systemColor-info rounded-lg px-4 self-start flex items-center gap-4 ">
    <span> العملاء التي توجد لهم حركة مالية </span>
    <span className="font-extrabold"> {rows} </span>
  </div>
  </>);
};

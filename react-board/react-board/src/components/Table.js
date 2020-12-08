import MUIDataTable from "mui-datatables";

const columns = ["Name", "Company", "City", "State"];

const data = [["Joe James", "Test Corp", "Yonkers", "NY"]];

const options = {
  filterType: "checkbox",
};

const Table = () => {
  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default Table;

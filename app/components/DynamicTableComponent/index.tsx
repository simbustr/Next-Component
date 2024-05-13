import React from "react";

type TableColumn = {
  key: string;
  header: string;
};

type TableData = {
  [key: string]: string | number;
};

type DynamicTableProps = {
  columns: TableColumn[];
  data: TableData[];
};

const DynamicTableComponent = ({ columns, data }: DynamicTableProps) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 shadow border">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTableComponent;


// const columns = [
//     { key: 'id', header: 'ID' },
//     { key: 'name', header: 'Name' },
//     { key: 'age', header: 'Age' },
//     { key: 'place', header: 'place' },
//     { key: 'city', header: 'city' },
//     { key: 'Dob', header: 'Dob' },
//     { key: 'Fname', header: 'Fname' },
//     { key: 'Mname', header: 'Mname' },
//     { key: 'Sname', header: 'Sname' },
//     { key: 'District', header: 'District' },
  
//   ];
  
//   const data = [
//     { id: 1, name: 'John Doe', age: 30, place:"vel", city:"wal", Dob:"29",Fname:"krishnan",Mname:"rani", Sname:"ele", District:"kkklk" },
//     { id: 2, name: 'John Doe', age: 30, place:"vel", city:"wal", Dob:"29",Fname:"krishnan",Mname:"rani", Sname:"ele", District:"kkklk" },
//     { id: 3, name: 'John Doe', age: 30, place:"vel", city:"wal", Dob:"29",Fname:"krishnan",Mname:"rani", Sname:"ele", District:"kkklk" },
//     { id: 4, name: 'John Doe', age: 30, place:"vel", city:"wal", Dob:"29",Fname:"krishnan",Mname:"rani", Sname:"ele", District:"kkklk" },
//     { id: 5, name: 'John Doe', age: 30, place:"vel", city:"wal", Dob:"29",Fname:"krishnan",Mname:"rani", Sname:"ele", District:"kkklk" },
//     { id: 6, name: 'John Doe', age: 30, place:"vel", city:"wal", Dob:"29",Fname:"krishnan",Mname:"rani", Sname:"ele", District:"kkklk" },
//     { id: 7, name: 'John Doe', age: 30, place:"vel", city:"wal", Dob:"29",Fname:"krishnan",Mname:"rani", Sname:"ele", District:"kkklk" },
//   ];

// <DynamicTableComponent columns={columns} data={data} />

import React from "react";

interface Props {
  thead: React.ReactNode;
  tbody: React.ReactNode;
}

export const Table: React.FC<Props> = ({ thead, tbody }) => {
  return (
    <div className="custom-data-table">
      <table className="table">    
         <thead>
           <tr>{thead}</tr>
          </thead>
         <tbody>
           {tbody}
        </tbody>
      </table>
    </div>
  );
};

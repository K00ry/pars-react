import React from 'react';

import TableWithPrice from './tableWithPrice';
import TableWithKg from './tableWithKg';

const ImgAndTable = props => {
  let abbas =
    props.check !== 'nj' ? (
      <TableWithPrice tableSizes={props.tableSizes} t={props.t} />
    ) : (
      <TableWithKg tableSizes={props.tableSizes} t={props.t} />
    );

  return (
    <div className="group">
      <div className="table_wrapper">
        <div className="aks_table">
          <img
            className="aks_preview"
            src={process.env.PUBLIC_URL + props.img}
            alt={props.imageAlt}
          />
        </div>

        {abbas}
      </div>
    </div>
  );
};

export default ImgAndTable;

import React from 'react';
import Table from'./table';

const ImgAndTable = props =>{








    return(


            <div className="group">

                <div className="table_wrapper">
                    <div className="aks_table">
                        <img
                            className="aks_preview"
                            src={process.env.PUBLIC_URL + props.img}
                            // alt={props.imageAlt}
                            alt={props.imageAlt}
                        />
                    </div>



                    <table className="tg">
                        <tbody>
                        <tr>
                            <th className="tg-6xid">{props.t("ship")}</th>
                            <th className="tg-4s02">{props.t("price")}</th>
                            <th>{props.t("sizes")}</th>
                        </tr>
                        {
                            props.tableSizes.map((obj,index)=>
                            <Table
                                key={index}
                                type={obj.type}
                                price={obj.price}
                                shipping={obj.shipping}
                                t={props.t}
                            />)

                        }

                        </tbody>
                    </table>
                </div>
            </div>



    );
};


export default ImgAndTable;
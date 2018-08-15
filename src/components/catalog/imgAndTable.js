import React from 'react';

const ImgAndTable = props =>{








    return(

        <div className="wrapper">
            <div className="group Jadval-page">
                {' '}
                <div className="table_wrapper">
                    <div className="aks_table">
                        <img
                            className="aks_preview"
                            src="images/jadval/mobile/wet.jpg"
                            alt="وت پرس"
                        />
                    </div>{' '}



                    <table className="tg">
                        <tbody>
                        <tr>
                            <th className="tg-6xid">هزینه</th>
                            <th className="tg-4s02">(فی(ریال</th>
                            <th>(cm)ابعاد</th>
                        </tr>
                        <tr>
                            <td>3000</td>
                            <td>42300</td>
                            <td>50*30*10</td>
                        </tr>
                        <tr>
                            <td>3000</td>
                            <td>47000</td>
                            <td>50*30*12.5</td>
                        </tr>
                        <tr>
                            <td>3000</td>
                            <td>52800</td>
                            <td>50*30*15</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
};


export default ImgAndTable;
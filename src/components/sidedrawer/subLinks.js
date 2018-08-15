import React from 'react';
import { Link } from 'react-router-dom';
// import data from '../../data';

const Sublinks = props =>



        <li onClick={props.correctCatalogClick}>
            <Link to={props.address} className="nav-link-style-sub">{props.product}</Link>
        </li>;





//   return (<ul className="sideNav-sub">
//       {jaber}
//       </ul>);
// };

export default Sublinks;

import React from 'react';


const Header = ({titulo}) => {
    return ( 

        <nav className="ligth-blue darken-2">
            <div className="nav-wrapper ligth-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div> 
        </nav>

     );
}
 
export default Header;
import React from 'react';
import logo from '../../assets/images/hpx-logo.png'
import './Style.scss'

const Header = () => {
	return (
		<div className="d-flex justify-content-center align-items-center header">
			<a href="/"><img src={logo} className="logo"/></a>
		</div>
	);
};

export default Header;

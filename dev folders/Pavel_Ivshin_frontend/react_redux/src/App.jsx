import React, { Component, Fragment } from 'react';
import BestDealBlock from './components/BestDealBlock/BestDealBlock';
import PartnersBlock from './components/PartnersBlock/PartnersBlock';

class App extends Component {
	render() {
		return (
			<Fragment>
				<BestDealBlock />
				<PartnersBlock />
			</Fragment>
		);
	}
};

export default App;
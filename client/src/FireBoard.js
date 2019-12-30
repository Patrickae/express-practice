import React from 'react';

const FireBoard = ({temps}) => {
	return (
			<React.Fragment>
			{temps.map(probe => (
				<div className='row' key={probe.channel}>
				<ul className="list-group">
					<li className={`list-group-item ${probe.channel == 1 ? 'list-group-item-danger' : 'list-group-item-success'}`}>
					{probe.channel == 1 ? 'Grill Temp' : 'Meat Temp'}
					</li>
					<li className="list-group-item">Temp: {probe.temp}F</li>
				</ul>
				</div>
			))}
		</React.Fragment>
		
	)
}

export default FireBoard;
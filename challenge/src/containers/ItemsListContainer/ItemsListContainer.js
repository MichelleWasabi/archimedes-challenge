import React from 'react';
import { compose } from 'react-apollo';

import ItemsList from '../../components/ItemsList';
import itemsQuery from '../../graphql/itemsQuery';


class ItemsListContainer extends React.Component {
	render() {
    const { data } = this.props;
		// let items = [];
		if (data.loading) return <p>Loading...</p>;
		if (data.error) return <p>Oops something went wrong!</p>;
		// console.log(data.project.items);
		return (
			<ItemsList
				items={data.project.items}
			/>
		);
	}
}

export default compose(
	itemsQuery,
)(ItemsListContainer);

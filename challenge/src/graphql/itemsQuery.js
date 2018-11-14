import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const query = gql`
	query itemsQuery {
		project(hostname:"example.orphe.us") {
			_id
			items {
			_id
			title
			description
			files {
				_id
				thumbPath
			}
			}
		}
	}
`;


export default graphql(query);

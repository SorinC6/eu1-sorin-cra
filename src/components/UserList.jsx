import React from 'react';
import Card from './UserCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserList = ({ users }) => {
	return (
		<Container>
			{users.map((user) => {
				return (
					<Link key={user.id} to={`/users/${user.id}`}>
						<Card name={user.name} id={user.id} />
					</Link>
				);
			})}
		</Container>
	);
};

export default UserList;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

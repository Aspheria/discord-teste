import React from 'react';

import { Container,Role,User, Avatar } from './styles';

interface UserProps {
  nickname:string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
  <User>
    <Avatar className={isBot ? 'bot' : ''}/>

    <strong> {nickname}</strong>

    {isBot && <span> Bot</span>}
  </User>
  );
};

const UserList: React.FC= () =>{
  return (
    <Container>
      <Role> Disponivel - 1</Role>
      <UserRow nickname='Nome do Usuario' />

      <Role> offline - 20</Role>
      <UserRow nickname='Harambe' isBot />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />
      <UserRow nickname='User' />


    </Container>

  );
};

export default UserList;


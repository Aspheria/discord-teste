import React from 'react';

import ChannelButton from '../ChannelButton';


import { Container,Category,AddCategoryIcon } from './styles';

const ChannelList: React.FC= () =>{
  return (
		<Container>
			<Category> 
				<span> Canais de texto</span>
				<AddCategoryIcon />
			</Category>
		<ChannelButton channelName="Ela sai, eu boto" />
		<ChannelButton channelName="Oleo de Macaco" />
		<ChannelButton channelName="Rinha de Galo" />
		<ChannelButton channelName="Machonaria" />
		<ChannelButton channelName="RPG de Shaun Carneiro" />
		</Container>

  );
};

export default ChannelList;
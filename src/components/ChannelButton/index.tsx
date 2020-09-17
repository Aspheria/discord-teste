import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Prorps {
  channelName: string;
  selected?: boolean
}

const ChannelButton: React.FC<Prorps> = ({
  channelName,
  selected
}) =>{
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>

  );
};

export default ChannelButton;
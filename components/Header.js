import React from 'react';
import { Link } from '../routes';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route='/'>
        <a className='item' href='/'>CrowdCoin</a>
      </Link>
      <Menu.Menu position="right">
        <Link route='/'>
          <a className='item'>Campaigns</a>
        </Link>
        <Link route='/campaigns/new'>
          <a className='item'>Add</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}

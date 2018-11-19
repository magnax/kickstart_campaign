import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignShow extends Component {
  render() {
    return (
      <Layout>
        <h1>Campaign</h1>
      </Layout>
    );
  }
}

export default CampaignShow;

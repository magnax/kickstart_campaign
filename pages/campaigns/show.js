import React, { Component } from 'react';
import { Card, Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderSummary() {
    const {
      minimumContribution, balance, requestCount, approversCount, manager
    } = this.props;

    const items = [
      {
        header: minimumContribution,
        meta: 'Minimum Contribution',
        description: 'sialala1'
      },
      {
        header: manager,
        meta: 'Manager',
        description: 'sialala2',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: requestCount,
        meta: 'Number of requests',
        description: 'sialala3'
      },
      {
        header: approversCount,
        meta: 'Approvers count',
        description: 'sialala4'
      },
      {
        header: balance,
        meta: 'Balance',
        description: 'sialala5'
      },
    ]

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h1>Campaign</h1>
        {this.renderSummary()}
      </Layout>
    );
  }
}

export default CampaignShow;

import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMsg: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: '' })
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMsg: err.message })
    }
    this.setState({ loading: false })
  };

  render() {
    return (
      <Layout>
        <h1>New campaign</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
          <Message error content={this.state.errorMsg} header="Error!"/>
          <Form.Field>
            <label>Minimum contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={ event => this.setState({minimumContribution: event.target.value}) }
            />
          </Form.Field>
          <Button type="submit" loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;

import React, { Component } from 'react';
import { Container, Header, Left, Right, Button, Icon, Body, Title, Content, Form, Item, Text, Input, Label } from 'native-base';
export default class NewList extends Component {
 static navigationOptions = ({ navigation }) => ({
	header: (
	  <Header> 
	    <Left> 
		  <Button transparent onPress={() => navigation.goBack()}>
		    <Icon name="arrow-back" style={{color: "#00aced"}}/>
		  </Button>
		</Left>
		<Body>
		  <Title>New list</Title>
		</Body>
	    <Right>
		  <Button>
		    <Text style={{color: "#00aced"}}>Save</Text>
		  </Button>
		</Right>
	  </Header>
	)
  });
  render() {
	return (
	  <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
	);
  }
}
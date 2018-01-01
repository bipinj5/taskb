import React, { Component } from "react";
import { Container, Header, Left, Right, Item, Input, Icon, Button, Text } from "native-base";

export default class TabTwo extends Component {
  render() {
    return (
      <Header searchBar>
        <Item full>
		  <Icon name="md-arrow-back" style={{color: "#00aced"}}/>
          <Input placeholder="Search Twitter" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}

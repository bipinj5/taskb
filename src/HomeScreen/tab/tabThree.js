import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";

export default class TabThree extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>No notifications.</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

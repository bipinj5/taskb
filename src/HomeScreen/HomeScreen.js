import React from "react";
import { Statusbar, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Thumbnail, Tab, Tabs, TabHeading, Footer, FooterTab  } from 'native-base';
import Tab1 from './tab/tabOne';
import Tab2 from './tab/tabTwo';
import Tab3 from './tab/tabThree';
import Tab4 from './tab/tabFour';
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIcon from "react-native-vector-icons/EvilIcons";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={{paddingTop: 20}}>
	    <Header hasTabs style={{backgroundColor: 'white'}}>
		  <View style={{flex: 1, flexDirection: 'row'}}>
		    <Thumbnail small style={{justifyContent: 'flex-start'}} source={require('./react/favicon.png')} />
		    <Title style={{color: "black", paddingTop: 5}}> Home</Title>
		  </View>
		</Header>
        <Tabs>
          <Tab heading={ <TabHeading><MaterialCommunityIcon name="home" style={{fontSize: 30}} /></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><FeatherIcon name="search" style={{fontSize: 30}} /></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><FeatherIcon name="bell" style={{fontSize: 30}} /></TabHeading>}>
            <Tab3 />
          </Tab>
          <Tab heading={ <TabHeading><FeatherIcon name="mail" style={{fontSize: 27}} /></TabHeading>}>
            <Tab4 />
          </Tab>
        </Tabs>
		<Footer>
		  <FooterTab style={{backgroundColor:"white"}}>
			<Left>
		    <Button transparent light>
              <Text style={{ paddingLeft: 10 , color: "#00aced"}}>All</Text>
			</Button>
			</Left>
			<Button transparent light>
              <Text note style={{ paddingLeft: 10 }}>Mentions</Text>
			</Button>
			<Right>
		    <Button transparent light>
              <FeatherIcon name="settings" style={{ fontSize: 25, color: "#00aced", marginRight: 10 }} />
		    </Button>
			</Right>
		  </FooterTab>
		</Footer>
      </Container>
    );
  }
}
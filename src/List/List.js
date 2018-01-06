import React from "react";
import { AppRegistry, Alert, View, StyleSheet } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import CrList from './CrList.js';
import { StackNavigator } from "react-navigation";
export default class Profile extends React.Component {
  componentDidMount() {
	Alert.alert("Feature will be Available soon.");
  }
  render() {
	return (
	  <Container>
	    <View style={{
		  flex: 1,
		  justifyContent: 'center',
		  alignItems: 'center'
		}}>
		  <Text style={{fontWeight: "bold"}}>No List</Text>
		  <Text style={{fontSize: 12}}>Please tap the + to add your first list.</Text>
		</View>
        <Button rounded style={styles.butt}
		  onPress={() => this.props.navigation.navigate("CrList")}>
		  <Icon name="ios-list-box-outline" />
		</Button>
	  </Container>
	);
  }
}

Profile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="md-arrow-back" />
        </Button>
	  </Left>
	  <Body>
	    <Title>Lists</Title>
	  </Body>
	  <Right />
	</Header>
  )
});

const styles = StyleSheet.create({
  butt: {
    borderRadius: 50,
	width: 50,
	height: 50,
	position: 'absolute',
	bottom: 20,
	right: 20
  }
});
	
		

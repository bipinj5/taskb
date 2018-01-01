import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Content, Thumbnail, Left, Right, Body, Icon, Button, Text, List, ListItem, Footer, FooterTab} from "native-base";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class FlexDirecsionsBasic extends React.Component {
  render() {
	return (
	  <View style={{
		flex: 1, 
	    flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end'}}>
	  <Button iconLeft light>
        <IonIcon name="ios-moon-outline" style={{ paddingLeft: 10, fontSize: 34, color: 'blue' }} />
	  </Button>
	  <Button iconRight light>
        <MaterialCommunityIcon name="qrcode" style={{ fontSize: 34, color: 'blue' }} />
      </Button>
	  </View>
	);
  }
}
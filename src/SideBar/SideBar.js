import React from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Container, Content, Thumbnail, Left, Right, Body, Icon, Button, Text, List, ListItem, Footer, FooterTab} from "native-base";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default class SideBar extends React.Component {
  render() {
	return (
	  <Container>
	    <Content>
		  <Thumbnail style={{marginLeft: 26, marginTop: 20}} source={require('./react/favicon.png')} />
		  <List>
		    <ListItem noBorder>
			<Left>
			  <Text style={{ fontWeight: 'bold' }}>Bipin Jaiswar</Text>
            </Left>
              <IonIcon name="ios-arrow-down" style={{ fontSize: 24, color: "#00aced" }} />
			</ListItem>
			<Text note style={{ paddingLeft: 30 }}>@Bipin.j</Text>
			 <Text style={{fontWeight: 'bold', paddingLeft: 30}}>
               658
               <Text note> Following   </Text>
			     <Text style={{fontWeight: 'bold'}}>
				   670
				 <Text note> Followers</Text>
			   </Text>
             </Text>
		    <ListItem noBorder
			  onPress={() => this.props.navigation.navigate("Profile")}>
              <IonIcon name="ios-contact-outline" style={{ paddingLeft: 14, fontSize: 30 }} />
              <Text style={{ paddingLeft: 20 }}>Profile</Text>
            </ListItem>
			<ListItem noBorder
			  onPress={() => this.props.navigation.navigate("List")}>
              <IonIcon name="ios-list-box-outline" style={{ paddingLeft: 14, fontSize: 30 }} />
              <Text style={{ paddingLeft: 21 }}>List</Text>
            </ListItem>
			<ListItem noBorder
			  onPress={() => this.props.navigation.navigate("Moments")}>
              <IonIcon name="ios-flash-outline" style={{ paddingLeft: 14, fontSize: 36 }} />
              <Text style={{ paddingLeft: 24 }}>Moments</Text>
            </ListItem>
			<ListItem noTopBorder
			  onPress={() => this.props.navigation.navigate("Highlights")}>
			  <IonIcon name="ios-browsers-outline" style={{ paddingLeft: 14, fontSize: 30 }} />
              <Text style={{ paddingLeft: 20 }}>Highlights</Text>
            </ListItem>
			<ListItem>
			  <Body>
                <Text>Settings and privacy</Text>
              </Body>
			</ListItem>
			<ListItem>
			  <Body>
                <Text>Help Center</Text>
              </Body>
			</ListItem>
		  </List>
		</Content>
		<Footer>
		  <FooterTab style={{backgroundColor:"white"}}>
			<Left>
		    <Button transparent light>
              <IonIcon name="ios-moon-outline" style={{ paddingLeft: 10, fontSize: 34, color: "#00aced",fontWeight: "bold" }} />
			</Button>
			</Left>
			<Right>
		    <Button transparent light>
              <MaterialCommunityIcon name="qrcode" style={{ fontSize: 34, color: "#00aced" }} />
		    </Button>
			</Right>
		  </FooterTab>
		</Footer>
	  </Container> 
	);
  }
}
				  
				
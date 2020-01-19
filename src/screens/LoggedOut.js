import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../styles/colors";
import transparentHeaderStyle from "../styles/navigation";
import RoundedButton from "../components/buttons/RoundedButton";
import NavBarButton from "../components/buttons/NavBarButton";
import styles from "./styles/LoggedOut";

const udsmLogo = require("../img/logo.png");

export default class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <NavBarButton
        handleButtonPress={() => navigation.navigate("LogIn")}
        location="right"
        color={colors.white}
        text="Log In"
      />
    ),
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white
  });

  static onFacebookPress() {
    alert("Facebook button pressed");
  }

  static onCreateAccountPress() {
    alert("Create Account button pressed");
  }

  static onMoreOptionsPress() {
    alert("More options button pressed");
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image source={udsmLogo} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome to Rehms. IDIOT</Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={
              <FontAwesome
                name="facebook"
                size={20}
                style={styles.facebookButtonIcon}
              />
            }
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />

          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termsText}>{" options,"}</Text>
            <Text style={styles.termsText}>{"I agree to Rehms' "}</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Blaaaah Blaah bla Blaaaah</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Whatever</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}> I dont care</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
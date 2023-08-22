import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <Text style={[styles.welcome, styles.signUpTypo]}>Welcome</Text>
      <Image
        style={styles.welcomePageChild}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.enterViaSocial, styles.login1Typo]}>
        Enter via Social Networks
      </Text>
      <Pressable
        style={styles.welcomePageItem}
        onPress={() => navigation.navigate("SignUp")}
      />
      <Text style={[styles.signUp, styles.signUpLayout]}>Sign up</Text>
      <View style={[styles.welcomePageInner, styles.welcomePageInnerLayout]}>
        <View
          style={[
            styles.pleaseSignUpOrLoginToConParent,
            styles.welcomePageInnerLayout,
          ]}
        >
          <Text
            style={[styles.pleaseSignUp, styles.emailTypo]}
          >{`Please sign up or login to continue using `}</Text>
          <Text style={[styles.ourApp, styles.emailTypo]}>our app.</Text>
        </View>
      </View>
      <Text
        style={[styles.youAlreadyHave, styles.emailTypo]}
      >{`You already have an account? `}</Text>
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("LoginNow")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
      <Text style={[styles.email, styles.emailTypo]}>email</Text>
      <View
        style={[styles.orLoginWithWrapper, styles.orLoginWithWrapperPosition]}
      >
        <Text style={[styles.orLoginWith, styles.emailTypo]}>
          or login with
        </Text>
      </View>
      <Image
        style={[styles.ellipseIcon, styles.signUpLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.welcomePageChild1, styles.signUpLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={[styles.facebookCircledIcon, styles.orLoginWithWrapperPosition]}
        contentFit="cover"
        source={require("../assets/facebook-circled.png")}
      />
      <Image
        style={styles.twitterIcon}
        contentFit="cover"
        source={require("../assets/twitter.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    textAlign: "right",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  login1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "right",
  },
  signUpLayout: {
    width: 71,
    position: "absolute",
  },
  welcomePageInnerLayout: {
    height: 31,
    width: 236,
    position: "absolute",
  },
  emailTypo: {
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "right",
    position: "absolute",
  },
  orLoginWithWrapperPosition: {
    left: 140,
    position: "absolute",
  },
  welcome: {
    top: 66,
    fontSize: 35,
    color: Color.mediumslateblue,
    width: 157,
    height: 42,
    left: 40,
    position: "absolute",
  },
  welcomePageChild: {
    top: 175,
    left: 47,
    borderRadius: 20,
    width: 283,
    height: 210,
    position: "absolute",
  },
  enterViaSocial: {
    top: 416,
    left: 88,
    color: Color.blueviolet,
    fontSize: 16,
    position: "absolute",
  },
  welcomePageItem: {
    top: 634,
    left: 53,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.cornflowerblue,
    width: 277,
    height: 45,
    position: "absolute",
  },
  signUp: {
    top: 642,
    left: 158,
    fontSize: 19,
    color: Color.white,
    height: 25,
    textAlign: "right",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  pleaseSignUp: {
    top: 1,
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: 2,
  },
  ourApp: {
    top: 16,
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: 2,
  },
  pleaseSignUpOrLoginToConParent: {
    top: 9,
    left: 4,
    overflow: "hidden",
  },
  welcomePageInner: {
    top: 116,
    left: 40,
  },
  youAlreadyHave: {
    top: 696,
    left: 55,
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  login1: {
    fontSize: FontSize.size_smi,
    color: Color.darkslateblue_100,
  },
  login: {
    left: 229,
    top: 695,
    position: "absolute",
  },
  email: {
    top: 570,
    left: 166,
    fontSize: 16,
  },
  orLoginWith: {
    top: 0,
    left: 4,
    fontSize: 16,
  },
  orLoginWithWrapper: {
    top: 555,
    width: 97,
    height: 34,
    overflow: "hidden",
  },
  ellipseIcon: {
    top: 465,
    left: 119,
    height: 65,
  },
  welcomePageChild1: {
    top: 464,
    left: 190,
    height: 66,
  },
  facebookCircledIcon: {
    top: 474,
    width: 25,
    height: 39,
  },
  twitterIcon: {
    top: 479,
    left: 210,
    width: 27,
    height: 29,
    position: "absolute",
  },
  welcomePage: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WelcomePage;

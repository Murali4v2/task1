import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const LoginNow = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginNow}>
      <Text style={[styles.loginNow1, styles.loginTypo]}>Login Now</Text>
      <Text style={[styles.pleaseLoginToContainer, styles.forgotPasswordTypo]}>
        <Text
          style={styles.text1Typo}
        >{`Please login to continue using our app. `}</Text>
        <Text style={styles.loginTypo}>{` `}</Text>
      </Text>
      <Text style={[styles.enterViaSocial, styles.emailTypo]}>
        Enter via Social Networks
      </Text>
      <View style={styles.orLoginWithParent}>
        <Text style={[styles.orLoginWith, styles.emailTypo]}>
          or login with
        </Text>
        <Text style={[styles.email, styles.emailTypo]}>email</Text>
      </View>
      <View style={[styles.loginNowChild, styles.loginShadowBox]} />
      <View style={[styles.loginNowItem, styles.loginShadowBox]} />
      <Text style={[styles.jhondoegmailcom, styles.text1Typo]}>
        jhon.doe@gmail.com
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>........</Text>
      <View style={styles.loginNowInner} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Image
        style={[styles.removeRedEye, styles.removeRedEyeLayout]}
        contentFit="cover"
        source={require("../assets/remove-red-eye.png")}
      />
      <Text style={[styles.forgotPassword, styles.text1Typo]}>
        Forgot Password?
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.loginNowChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.facebookCircledIcon, styles.removeRedEyeLayout]}
        contentFit="cover"
        source={require("../assets/facebook-circled.png")}
      />
      <Image
        style={styles.twitterIcon}
        contentFit="cover"
        source={require("../assets/twitter.png")}
      />
      <Text
        style={[styles.dontHaveAccount, styles.signUpPosition]}
      >{`Don’t have account? `}</Text>
      <Pressable
        style={[styles.signUp, styles.signUpPosition]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.signUp1, styles.text1Typo]}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  forgotPasswordTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "right",
  },
  emailTypo: {
    fontSize: 16,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "right",
    position: "absolute",
  },
  loginShadowBox: {
    height: 42,
    width: 266,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    left: 55,
    position: "absolute",
    backgroundColor: Color.white,
  },
  text1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  removeRedEyeLayout: {
    width: 25,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 65,
    width: 71,
    position: "absolute",
  },
  signUpPosition: {
    top: 697,
    position: "absolute",
  },
  loginNow1: {
    top: 62,
    left: 41,
    fontSize: 35,
    color: Color.mediumslateblue,
    textAlign: "right",
    position: "absolute",
  },
  pleaseLoginToContainer: {
    top: 122,
    width: 232,
    height: 17,
    color: Color.black,
    left: 31,
    position: "absolute",
  },
  enterViaSocial: {
    top: 184,
    left: 88,
    color: Color.blueviolet,
  },
  orLoginWith: {
    top: 2,
    left: 9,
    color: Color.black,
  },
  email: {
    top: 21,
    color: Color.black,
    left: 31,
  },
  orLoginWithParent: {
    top: 354,
    width: 111,
    height: 40,
    left: 126,
    position: "absolute",
    overflow: "hidden",
  },
  loginNowChild: {
    top: 448,
  },
  loginNowItem: {
    top: 524,
  },
  jhondoegmailcom: {
    top: 462,
    left: 67,
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    position: "absolute",
  },
  text1: {
    top: 518,
    left: 66,
    fontSize: FontSize.size_13xl,
    width: 73,
    height: 53,
    color: Color.black,
    textAlign: "right",
    position: "absolute",
  },
  loginNowInner: {
    top: 636,
    left: 54,
    borderRadius: 10,
    backgroundColor: Color.cornflowerblue,
    width: 267,
    height: 47,
    position: "absolute",
  },
  login: {
    top: 646,
    left: 153,
    fontSize: 19,
    color: Color.white,
    textAlign: "right",
    position: "absolute",
  },
  removeRedEye: {
    top: 536,
    left: 284,
    height: 21,
    overflow: "hidden",
  },
  forgotPassword: {
    top: 580,
    left: 173,
    color: Color.cornflowerblue,
    width: 139,
    height: 19,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    position: "absolute",
  },
  ellipseIcon: {
    top: 255,
    left: 105,
  },
  loginNowChild1: {
    top: 254,
    left: 182,
  },
  facebookCircledIcon: {
    top: 264,
    height: 39,
    left: 126,
  },
  twitterIcon: {
    top: 271,
    left: 204,
    width: 27,
    height: 29,
    position: "absolute",
  },
  dontHaveAccount: {
    left: 59,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "right",
  },
  signUp1: {
    fontSize: FontSize.size_smi,
    color: Color.darkslateblue_100,
    textAlign: "right",
  },
  signUp: {
    left: 179,
  },
  loginNow: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default LoginNow;

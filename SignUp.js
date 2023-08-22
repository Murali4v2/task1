import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={[styles.signUpChild, styles.signShadowBox]} />
      <View style={[styles.signUpItem, styles.signShadowBox]} />
      <Text style={[styles.signUp1, styles.textTypo]}>Sign Up</Text>
      <View style={[styles.signUpInner, styles.signUpInnerLayout]}>
        <View
          style={[
            styles.pleaseRegistrationWithEmailParent,
            styles.withParentPosition,
          ]}
        >
          <Text
            style={[styles.pleaseRegistrationWithContainer, styles.withTypo1]}
          >
            <Text style={styles.withTypo}>
              Please Registration with email or sign up
            </Text>
            <Text style={styles.textTypo}>{` `}</Text>
          </Text>
          <Text style={[styles.continueUsingOur, styles.withTypo]}>
            continue using our app.
          </Text>
        </View>
      </View>
      <Text style={[styles.enterViaSocial, styles.emailTypo]}>
        Enter via Social Networks
      </Text>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.orLoginWithParent, styles.groupViewLayout]}>
          <Text style={[styles.orLoginWith, styles.emailTypo]}>
            or login with
          </Text>
          <Text style={[styles.email, styles.emailTypo]}>email</Text>
        </View>
      </View>
      <Text style={[styles.jhondoegmailcom, styles.withTypo]}>
        jhon.doe@gmail.com
      </Text>
      <Text style={[styles.text1, styles.withTypo]}>........</Text>
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.rectangleView}
        onPress={() => navigation.navigate("LoginNow")}
      />
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("LoginNow")}
      >
        <Text style={[styles.login1, styles.withTypo]}>Login</Text>
      </Pressable>
      <Text style={styles.signUp2}>Sign up</Text>
      <Text
        style={[styles.youAlreadyHave, styles.withTypo]}
      >{`You already have an account? `}</Text>
      <Text style={[styles.iAgreeWith, styles.iAgreeWithPosition]}>
        I agree with privacy and policy
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.iAgreeWithPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.removeRedEye, styles.removeRedEyeLayout]}
        contentFit="cover"
        source={require("../assets/remove-red-eye.png")}
      />
      <Image
        style={[styles.signUpChild1, styles.signChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.signUpChild2, styles.signChildLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  signShadowBox: {
    height: 42,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 266,
    borderRadius: Border.br_4xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  signUpInnerLayout: {
    height: 33,
    width: 245,
    position: "absolute",
  },
  withParentPosition: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  withTypo1: {
    fontSize: FontSize.size_xs,
    textAlign: "right",
  },
  withTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  emailTypo: {
    fontSize: 16,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "right",
    position: "absolute",
  },
  groupViewLayout: {
    width: 99,
    height: 42,
    position: "absolute",
  },
  iAgreeWithPosition: {
    top: 584,
    position: "absolute",
  },
  removeRedEyeLayout: {
    width: 25,
    position: "absolute",
  },
  signChildLayout: {
    height: 65,
    top: 257,
    width: 71,
    position: "absolute",
  },
  signUpChild: {
    top: 519,
    left: 52,
  },
  signUpItem: {
    top: 448,
    left: 49,
  },
  signUp1: {
    top: 64,
    fontSize: 35,
    color: Color.mediumslateblue,
    textAlign: "right",
    left: 46,
    position: "absolute",
  },
  pleaseRegistrationWithContainer: {
    top: 3,
    color: Color.black,
    left: 5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  continueUsingOur: {
    top: 18,
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    left: 5,
    position: "absolute",
  },
  pleaseRegistrationWithEmailParent: {
    height: 33,
    width: 245,
    position: "absolute",
  },
  signUpInner: {
    top: 120,
    left: 44,
  },
  enterViaSocial: {
    top: 185,
    left: 88,
    color: Color.blueviolet,
  },
  orLoginWith: {
    top: 4,
    left: 6,
    color: Color.black,
  },
  email: {
    top: 23,
    left: 27,
    color: Color.black,
  },
  orLoginWithParent: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  groupView: {
    top: 360,
    left: 129,
  },
  jhondoegmailcom: {
    top: 466,
    left: 59,
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    position: "absolute",
  },
  text1: {
    top: 515,
    left: 60,
    fontSize: FontSize.size_13xl,
    color: Color.black,
    textAlign: "right",
    position: "absolute",
  },
  rectangleView: {
    top: 637,
    left: 55,
    backgroundColor: Color.cornflowerblue,
    height: 45,
    width: 266,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  login1: {
    fontSize: FontSize.size_smi,
    color: Color.darkslateblue_100,
    textAlign: "right",
  },
  login: {
    left: 237,
    top: 695,
    position: "absolute",
  },
  signUp2: {
    top: 647,
    left: 149,
    fontSize: 19,
    color: Color.white,
    height: 25,
    width: 71,
    textAlign: "right",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  youAlreadyHave: {
    top: 696,
    left: 63,
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    position: "absolute",
  },
  iAgreeWith: {
    left: 67,
    color: "#374989",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "right",
  },
  ellipseIcon: {
    width: 18,
    height: 15,
    left: 46,
  },
  vectorIcon: {
    top: 588,
    left: 48,
    width: 12,
    height: 8,
    position: "absolute",
  },
  removeRedEye: {
    top: 533,
    left: 281,
    height: 21,
    overflow: "hidden",
  },
  signUpChild1: {
    left: 101,
  },
  signUpChild2: {
    left: 179,
  },
  facebookCircledIcon: {
    top: 266,
    left: 124,
    height: 39,
  },
  twitterIcon: {
    top: 271,
    left: 201,
    width: 27,
    height: 29,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SignUp;

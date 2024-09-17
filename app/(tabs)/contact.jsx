import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Link, router } from "expo-router";

export default function contact() {
  return (
    <View style={styles.base}>
      <ScrollView>
        <View style={styles.paddingContainer}>
          <ImageBackground
            source={require("../../assets/images/bannerimg.jpg")}
            style={styles.banner}
          >
            <View style={styles.imageTint} />
            <Text style={[styles.textColor, styles.heading]}>Contact Us</Text>
          </ImageBackground>
        </View>
        <View style={styles.paddingContainer}>
          <View style={styles.summaryContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#707070"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#707070"
            />
            <TextInput
              style={styles.input2}
              placeholder="Message"
              placeholderTextColor="#707070"
            />
            <TouchableOpacity style={styles.linkButtonContainer}>
              <Link href="/" style={styles.linkButton}>
                Submit
              </Link>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paddingContainer}>
          <View style={styles.shopBanner}>
            <View style={styles.shopImgBannerContainer}>
              <Image
                source={require("../../assets/images/shopimg1.jpg")}
                style={styles.shopImgBanner}
              />
              <Image
                source={require("../../assets/images/shopimg2.jpg")}
                style={styles.shopImgBanner}
              />
            </View>
            <TouchableOpacity style={styles.shopBannerBtn}>
              <Link
                href="/products"
                style={[styles.textColor, styles.shopBannerText]}
              >
                Our Products
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  textColor: {
    color: Colors.dark.text,
  },
  paddingContainer: {
    padding: 16,
  },
  banner: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  heading: {
    fontFamily: "pop-ex",
    fontSize: 26,
    textAlign: "center",
  },
  imageTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  summaryContainer: {
    padding: (16, 30),
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
  },
  input: {
    height: 40,
    borderRadius: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.dark.text,
    fontFamily: "pop-reg",
    fontSize: 16,
  },
  input2: {
    height: 100,
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.dark.text,
    fontFamily: "pop-reg",
    fontSize: 16,
  },
  shopBanner: {
    marginTop: 30,
    marginBottom: 30,
  },
  shopImgBanner: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },
  shopImgBannerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  shopBannerText: {
    fontFamily: "pop-bold",
    fontSize: 18,
    textAlign: "center",
  },
  shopBannerBtn: {
    borderRadius: 100,
    backgroundColor: Colors.links,
    marginTop: 30,
    padding: 10,
  },
  linkButtonContainer: {
    borderRadius: 50,
    backgroundColor: Colors.links,
    marginTop: 20,
  },
  linkButton: {
    padding: 10,
    color: Colors.dark.text,
    textAlign: "center",
    fontFamily: "pop-bold",
    fontSize: 20,
  },
});

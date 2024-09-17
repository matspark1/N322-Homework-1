import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Link, router } from "expo-router";

export default function home() {
  return (
    <View style={styles.base}>
      <View style={styles.paddingContainer}>
        <ImageBackground
          source={require("../../assets/images/bannerimg.jpg")}
          style={styles.banner}
        >
          <View style={styles.imageTint} />
          <Text style={[styles.textColor, styles.heading]}>Helios Fitness</Text>
        </ImageBackground>
      </View>

      <View style={styles.paddingContainer}>
        <View style={styles.summaryContainer}>
          <Text style={[styles.textColor, styles.summary]}>
            We specialize in high-quality fitness products. From workout gear to
            equipment, we provide everything needed to support your fitness
            journey. Our mission is to offer durable, performance-enhancing
            products that help individuals reach their health and fitness goals.
          </Text>
        </View>
        <TouchableOpacity style={styles.linkButtonContainer}>
          <Link href="/contact" style={styles.linkButton}>
            Contact Us
          </Link>
        </TouchableOpacity>
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
    padding: 16,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
  },
  summary: {
    fontFamily: "pop-med",
    fontSize: 16,
    textAlign: "center",
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
  shopBanner: {
    marginTop: 60,
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
    marginTop: 80,
    padding: 10,
  },
});

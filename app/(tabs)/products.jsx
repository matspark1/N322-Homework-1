import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Link, router } from "expo-router";

export default function products() {
  return (
    <View style={styles.base}>
      <ScrollView>
        <View style={styles.paddingContainer}>
          <View style={styles.shopContainer}>
            <Image
              source={require("../../assets/images/shopimg2.jpg")}
              style={styles.shopImg}
            />
            <View style={styles.price}>
              <Text style={[styles.textColor, styles.shopTxt]}>$40</Text>
            </View>
            <View style={styles.shopHeader}>
              <Text style={[styles.textColor, styles.shopTxt]}>Beach </Text>
              <Text style={[styles.textColor, styles.shopTxt2]}>Bum</Text>
            </View>
          </View>
          <View style={styles.shopContainer}>
            <Image
              source={require("../../assets/images/shopimg1.jpg")}
              style={styles.shopImg}
            />
            <View style={styles.price}>
              <Text style={[styles.textColor, styles.shopTxt]}>$40</Text>
            </View>
            <View style={styles.shopHeader}>
              <Text style={[styles.textColor, styles.shopTxt]}>4 </Text>
              <Text style={[styles.textColor, styles.shopTxt3]}>Peat</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.linkButtonContainer}>
          <Link href="/contact" style={styles.linkButton}>
            Contact Us
          </Link>
        </TouchableOpacity>
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
    flex: 1,
    alignItems: "center",
  },
  shopContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    padding: 30,
    margin: 14,
  },
  shopImg: {
    width: 200,
    height: 200,
    borderRadius: 40,
    objectFit: "cover",
  },
  shopHeader: {
    flexDirection: "row",
    marginTop: 150,
  },
  shopTxt: {
    padding: (10, 0),
    fontFamily: "pop-bold",
    fontSize: 20,
  },
  shopTxt2: {
    padding: (10, 0),
    fontFamily: "pop-bold",
    fontSize: 20,
    color: "#e38f4f",
  },
  shopTxt3: {
    padding: (10, 0),
    fontFamily: "pop-bold",
    fontSize: 20,
    color: "#e3524f",
  },
  price: {
    backgroundColor: "#33cc51",
    borderRadius: 100,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -190,
    marginRight: 120,
  },
  linkButtonContainer: {
    borderRadius: 50,
    backgroundColor: Colors.links,
    margin: 50,
  },
  linkButton: {
    padding: 10,
    color: Colors.dark.text,
    textAlign: "center",
    fontFamily: "pop-bold",
    fontSize: 20,
  },
});

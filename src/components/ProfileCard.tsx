import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { colors } from "../constants/theme";

interface Props {
  name: string;
  role: string;
  email: string;
  image: ImageSourcePropType;
}
export const ProfileCard = ({ name, role, image, email }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.avatar} resizeMode="cover" />

      <View style={styles.information}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.role}>{email}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.surface,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 5,
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 3,
    borderColor: colors.primary,
  },

  information: {
    flex: 1,
    marginLeft: 18,
  },

  name: {
    color: colors.text,
    fontSize: 21,
    fontWeight: "700",
  },

  role: {
    color: colors.textSecondary,
    fontSize: 15,
    marginTop: 6,
  },
});

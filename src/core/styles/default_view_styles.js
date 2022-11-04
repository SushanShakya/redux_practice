import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        marginTop: 24
    },
    card: {
        padding: 20,
        paddingHorizontal: 20,
        borderRadius: 16,
        backgroundColor: "#fff",
        elevation: 10,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    listing: {
        paddingHorizontal: 16,
    },
    sizedbox10h: {
        height: 10
    },
    sizedbox10w: {
        height: 10
    },
    imageContainer: {
        height: 80,
        width: 80,
        borderRadius: 16,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        flexWrap: "wrap",
        color: "#000"
    },
    text: {
        fontSize: 16,
        flexWrap: "wrap",
        color: "#aaa"
    }
})
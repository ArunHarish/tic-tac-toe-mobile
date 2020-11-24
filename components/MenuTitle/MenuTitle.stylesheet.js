import { StyleSheet } from "react-native";

const MenuTitleStyling = StyleSheet.create({
    menu_title_wrapper : {
        width : "100%",
        display : "flex",
        height : "100%"
    },
    title : {
        display : "flex",
        height : 80,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "orange",
        marginHorizontal : 10
    },
    title_heading : {
        fontSize : 50,
        color : "white",
        fontFamily : "SourceCodePro-Bold",
        textAlign : "center",
    },
    menu : {
        display : "flex",
        alignItems : "center",
        marginTop : 85,
        flex  :1
    },
    menu_option : {
        display : "flex",
        width : "100%",
        alignItems : "center",
        margin : "5%",

    },
    option : {
        fontSize : 28,
        textAlign : "center",
        width : 200,
        borderColor : "black",
        borderLeftWidth : 1,
        borderTopWidth : 1,
        borderRightWidth : 5,
        borderBottomWidth : 5,
        backgroundColor : "#ddd",
        textTransform : "uppercase",
        fontFamily : "SourceCodePro-Regular",
        padding : 8,

    }
})

export default MenuTitleStyling;
import React from "react";
import SwipeUp from "../Animations/SwipeUp";
import FadeIn from "../Animations/FadeIn";
import { View, Text } from 'react-native';
import MenuTitleStyling from "./MenuTitle.stylesheet";

const MenuTitle = () => {

    return (
        <SwipeUp>
            <FadeIn>
                <View style={MenuTitleStyling.menu_title_wrapper}>
                    <View style={MenuTitleStyling.title}>
                        <Text style={MenuTitleStyling.title_heading}>
                            Tic Tac Toe
                        </Text>
                    </View>
                    <View style={MenuTitleStyling.menu}>
                        <View style={MenuTitleStyling.menu_option}>
                            <Text style={MenuTitleStyling.option}>New Game</Text>
                        </View>
                        <View style={MenuTitleStyling.menu_option}>
                            <Text style={MenuTitleStyling.option}>Join Game</Text>
                        </View>
                    </View>
                </View>
            </FadeIn>
        </SwipeUp>
    );
}

export default MenuTitle;
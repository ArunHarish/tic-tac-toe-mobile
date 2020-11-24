import React, { createContext, useCallback, useState } from "react";
import PLAYER_SELECT from "../enums/PlayerSelect";

export const GAME = createContext();

const Game = ({ children }) => {
    const [playerSelect, setPlayerSelect] = useState(PLAYER_SELECT._);
    const state = {
        getPlayerSelect : useCallback(() => {
            return playerSelect
        }, [playerSelect]),
        setPlayerSelect : nextPlayerSelect => {
            setPlayerSelect(currentSelection => {
                if (nextPlayerSelect in PLAYER_SELECT) {
                    return nextPlayerSelect;
                }

                return currentSelection;
            })
        }
    }
    return (
        <GAME.Provider value={ state }>
            { children }
        </GAME.Provider>
    );
}

export default Game;
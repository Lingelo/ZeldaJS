import { Action } from './actions';
import { Character } from '../game/character/character';
import { DIRECTION } from '../game/direction';
import { mapRenderer } from '../utils/map-renderer';

const initPage =  {
    x: 3,
    y: 3
};

const initialState = {
    map: null,
    character: null,
    walls: [],
    currentScreenCode: 'TITLE',
    page: null
};

function reducer(action, state = initialState) {
    switch (action.type) {
    case Action.UP:
        return {
            ...state,
            page: state.character.move(DIRECTION.UP)
        };
    case Action.DOWN:
        return {
            ...state,
            page: state.character.move(DIRECTION.DOWN)
        };
    case Action.LEFT: {
        return {
            ...state,
            page: state.character.move(DIRECTION.LEFT)
        };
    }
    case Action.RIGHT: {
        return {
            ...state,
            page: state.character.move(DIRECTION.RIGHT)
        };
    }
    case Action.ENTER: {
        if (state.currentScreenCode === 'TITLE') {
            return {
                ...state,
                map: mapRenderer,
                character: new Character(5, 5, DIRECTION.DOWN),
                page: initPage,
                currentScreenCode: 'GAME'
            }
        } else {
            return {
                ...state,
            };
        }
    }
    case Action.LOAD_GAME: {
        return {
            ...state,
            map: mapRenderer,
            character: new Character(5, 5, DIRECTION.DOWN),
            page: initPage
        }
    }
    }
}

export { reducer };

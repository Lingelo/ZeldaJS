import {Keyboard} from "./utils/keyboard";
import {Game} from "./game/land/game";
import {dispatch, getState, subscribe} from "./state/redux";
import {Title} from "./menus/title";
import {Action} from "./state/actions";

const screenWidth = 800;
const screenHeight = 600;

const canvas = document.getElementById('canvas');
canvas.width = screenWidth;
canvas.height = screenHeight;
const ctx = canvas.getContext('2d');

const canvasContext = {
    screenWidth,
    screenHeight,
    ctx
};

const controller = new Keyboard();
controller.bind();

let currentScreen = new Title();
let currentPage = {};

subscribe(() => {

    if (currentScreen.code !== getState().currentScreenCode){

        switch (getState().currentScreenCode) {
            case 'GAME':
                currentPage = getState().page;
                currentScreen = new Game(getState().map, getState().walls, getState().page, getState().character);
                break;
        }
    }
});

// TODO remove
dispatch({
    type: Action.ENTER,
});

const step = () => {
    currentScreen.update(canvasContext);
    requestAnimationFrame(step);
}

requestAnimationFrame(step);

const metrics = {
    width: 0,
    height: 0,
    computedWidth: function () { // computed width
        return metrics.width;
    },
    computedHeight: function () { // computed height
        return metrics.height;
    }
};

const stretch = () => {
    metrics.width = document.body.offsetWidth;
    metrics.height = document.body.offsetHeight;
    canvas.style.width = metrics.computedWidth() + 'px';
    canvas.style.height = metrics.computedHeight() + 'px';
};

stretch();
window.addEventListener('resize', stretch, false);

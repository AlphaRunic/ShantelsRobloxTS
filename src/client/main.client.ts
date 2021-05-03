import { Carbon as Framework, Assets, Player, Character, UI  } from "shared/Carbon";
import { Shop } from "./classes/GameComponents/Shop";

const Carbon = new Framework(script);

Carbon.RunComponents([
    new Shop()
]);
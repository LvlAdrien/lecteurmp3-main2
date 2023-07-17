//lorsque j'importe un ou plusieurs éléments je le fait toujours
//en debut de script
import {playlist_hiphop} from "./lib/playlist_hiphop.js";
import { initSlider } from "./lib/initSlider.js";
console.log("hello");
//initialisation de mes variables 
let currentTrack = 0;
initSlider(playlist_hiphop,currentTrack);

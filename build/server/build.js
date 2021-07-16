/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/channel/disconnect.ts":
/*!******************************************!*\
  !*** ./src/server/channel/disconnect.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"disconnect\": () => (/* binding */ disconnect)\n/* harmony export */ });\nfunction disconnect(channel, io) {\n    channel.onDisconnect(status => {\n        console.log('Disconnection', channel.id, new Date().toLocaleTimeString(), status);\n    });\n}\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/channel/disconnect.ts?");

/***/ }),

/***/ "./src/server/channel/index.ts":
/*!*************************************!*\
  !*** ./src/server/channel/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeServerChannels\": () => (/* binding */ initializeServerChannels)\n/* harmony export */ });\n/* harmony import */ var _geckos_io_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @geckos.io/server */ \"@geckos.io/server\");\n/* harmony import */ var _geckos_io_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_geckos_io_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _disconnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disconnect */ \"./src/server/channel/disconnect.ts\");\n/* harmony import */ var _joinGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joinGame */ \"./src/server/channel/joinGame.ts\");\n/* harmony import */ var _playerAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerAction */ \"./src/server/channel/playerAction.ts\");\n\n\n\n\nlet initialized = false;\nfunction initializeServerChannels(server) {\n    if (initialized)\n        throw new Error('Attempted to initialize channels twice');\n    const io = _geckos_io_server__WEBPACK_IMPORTED_MODULE_0___default()({\n        iceServers:  false ? 0 : []\n    });\n    io.addServer(server);\n    io.onConnection(channel => {\n        console.log('Connection   ', channel.id, new Date().toLocaleTimeString());\n        const listeners = [\n            _disconnect__WEBPACK_IMPORTED_MODULE_1__.disconnect,\n            _joinGame__WEBPACK_IMPORTED_MODULE_2__.joinGame,\n            _playerAction__WEBPACK_IMPORTED_MODULE_3__.playerAction\n        ];\n        listeners.forEach(cb => cb(channel, io));\n    });\n    initialized = true;\n    return io;\n}\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/channel/index.ts?");

/***/ }),

/***/ "./src/server/channel/joinGame.ts":
/*!****************************************!*\
  !*** ./src/server/channel/joinGame.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"joinGame\": () => (/* binding */ joinGame)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/server/constants.ts\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ \"./src/server/model/index.ts\");\n\n\nfunction joinGame(channel, io) {\n    channel.on('JOIN_GAME', data => {\n        channel.join(_constants__WEBPACK_IMPORTED_MODULE_0__.ROOM_ID);\n        // @ts-ignore\n        (0,_model__WEBPACK_IMPORTED_MODULE_1__.spawnNewPlayer)(channel.id, data === null || data === void 0 ? void 0 : data.name);\n        const state = (0,_model__WEBPACK_IMPORTED_MODULE_1__.getGameState)();\n        channel.broadcast.emit('ON_GAME_STATE', state);\n    });\n}\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/channel/joinGame.ts?");

/***/ }),

/***/ "./src/server/channel/playerAction.ts":
/*!********************************************!*\
  !*** ./src/server/channel/playerAction.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerAction\": () => (/* binding */ playerAction)\n/* harmony export */ });\nfunction playerAction(channel, io) {\n    channel.on('PLAYER_ACTION', (data) => {\n        console.log(data);\n    });\n}\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/channel/playerAction.ts?");

/***/ }),

/***/ "./src/server/constants.ts":
/*!*********************************!*\
  !*** ./src/server/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PORT\": () => (/* binding */ PORT),\n/* harmony export */   \"ROOM_ID\": () => (/* binding */ ROOM_ID)\n/* harmony export */ });\nconst PORT = process.env.PORT || 8081;\nconst ROOM_ID = 'GameRoom';\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/constants.ts?");

/***/ }),

/***/ "./src/server/game/game.ts":
/*!*********************************!*\
  !*** ./src/server/game/game.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhaserGame\": () => (/* binding */ PhaserGame)\n/* harmony export */ });\n/* harmony import */ var _geckos_io_phaser_on_nodejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @geckos.io/phaser-on-nodejs */ \"@geckos.io/phaser-on-nodejs\");\n/* harmony import */ var _geckos_io_phaser_on_nodejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_geckos_io_phaser_on_nodejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _gameScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameScene */ \"./src/server/game/gameScene.ts\");\n\n\n\nclass PhaserGame extends (phaser__WEBPACK_IMPORTED_MODULE_1___default().Game) {\n    constructor(server) {\n        super({\n            type: (phaser__WEBPACK_IMPORTED_MODULE_1___default().HEADLESS),\n            parent: 'phaser-game',\n            width: 800,\n            height: 600,\n            autoFocus: false,\n            scene: [_gameScene__WEBPACK_IMPORTED_MODULE_2__.GameScene],\n            physics: {\n                default: 'arcade',\n                arcade: {\n                    debug: false,\n                    gravity: { y: 0 }\n                }\n            }\n        });\n        this.server = server;\n    }\n}\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/game/game.ts?");

/***/ }),

/***/ "./src/server/game/gameScene.ts":
/*!**************************************!*\
  !*** ./src/server/game/gameScene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameScene\": () => (/* binding */ GameScene)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channel */ \"./src/server/channel/index.ts\");\n\n\nclass GameScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n    constructor() {\n        super({ key: 'GameScene' });\n    }\n    init() {\n        // @ts-ignore\n        this.io = (0,_channel__WEBPACK_IMPORTED_MODULE_1__.initializeServerChannels)(this.game.server);\n    }\n    create() {\n    }\n    update() {\n    }\n}\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/game/gameScene.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game */ \"./src/server/game/game.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./src/server/constants.ts\");\n\n\n\n\n\n// import path from 'path';\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst httpServer = (0,http__WEBPACK_IMPORTED_MODULE_0__.createServer)(app);\nnew _game_game__WEBPACK_IMPORTED_MODULE_5__.PhaserGame(httpServer);\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n// app.use(express.static(path.join(__dirname, '..', 'client')));\napp.get('/', (_req, res) => {\n    res.send({ message: 'Hello from express backend' });\n    // res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));\n});\nhttpServer.listen(_constants__WEBPACK_IMPORTED_MODULE_6__.PORT, () => {\n    console.log(`Server listening on port ${_constants__WEBPACK_IMPORTED_MODULE_6__.PORT}`);\n});\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/index.ts?");

/***/ }),

/***/ "./src/server/model/index.ts":
/*!***********************************!*\
  !*** ./src/server/model/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFood\": () => (/* binding */ getFood),\n/* harmony export */   \"getGameState\": () => (/* binding */ getGameState),\n/* harmony export */   \"getPlayerData\": () => (/* binding */ getPlayerData),\n/* harmony export */   \"spawnNewPlayer\": () => (/* binding */ spawnNewPlayer),\n/* harmony export */   \"removePlayer\": () => (/* binding */ removePlayer)\n/* harmony export */ });\nconst gameState = {\n    food: {},\n    players: {}\n};\n// const food = {\n//   'abcd': {\n//     id: 'abcd',\n//     x: 100,\n//     y: 150,\n//     value: 1\n//   }\n// };\n// const players: IPlayer = {};\nfunction getFood() {\n    return gameState.food;\n}\nfunction getGameState() {\n    return gameState;\n}\nfunction getPlayerData() {\n    return gameState.players;\n}\nfunction spawnNewPlayer(id, name) {\n    if (typeof id === 'undefined')\n        throw new Error('channelId is undefined');\n    const x = Math.random() * 200;\n    const y = Math.random() * 200;\n    const rotation = Math.PI * 1.5; // faces upward in Phaser\n    gameState.players[id] = {\n        id: id,\n        name: name || 'anonymous',\n        isAlive: true,\n        isSpeeding: false,\n        snakeSections: [\n            {\n                isHead: true,\n                x,\n                y,\n                rotation\n            },\n            {\n                isHead: false,\n                x,\n                y: y + 10,\n                rotation\n            }\n        ]\n    };\n}\nfunction removePlayer(id) {\n    delete gameState.players[id];\n}\n\n\n//# sourceURL=webpack://multiplayer-snake-game/./src/server/model/index.ts?");

/***/ }),

/***/ "@geckos.io/phaser-on-nodejs":
/*!**********************************************!*\
  !*** external "@geckos.io/phaser-on-nodejs" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@geckos.io/phaser-on-nodejs");;

/***/ }),

/***/ "@geckos.io/server":
/*!************************************!*\
  !*** external "@geckos.io/server" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@geckos.io/server");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "phaser" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("phaser");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.ts");
/******/ 	
/******/ })()
;
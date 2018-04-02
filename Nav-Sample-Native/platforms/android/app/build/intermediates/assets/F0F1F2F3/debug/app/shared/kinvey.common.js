"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var config_1 = require("./config");
/* ***********************************************************
* The {N} Kinvey plugin initialization is explained in the plugin readme here:
* http://devcenter.kinvey.com/nativescript/guides/getting-started#ConfigureYourApp
* In this template, Kinvey is set up with a custom existing project, so that
* You can build and run this template without creating your own Kinvey project.
*************************************************************/
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: config_1.Config.kinveyAppKey,
    appSecret: config_1.Config.kinveyAppSecret
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ludmV5LmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtpbnZleS5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBaUQ7QUFFakQsbUNBQWtDO0FBRWxDOzs7Ozs4REFLOEQ7QUFFOUQsZ0NBQU0sQ0FBQyxJQUFJLENBQUM7SUFDUixNQUFNLEVBQUUsZUFBTSxDQUFDLFlBQVk7SUFDM0IsU0FBUyxFQUFFLGVBQU0sQ0FBQyxlQUFlO0NBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIFRoZSB7Tn0gS2ludmV5IHBsdWdpbiBpbml0aWFsaXphdGlvbiBpcyBleHBsYWluZWQgaW4gdGhlIHBsdWdpbiByZWFkbWUgaGVyZTpcclxuKiBodHRwOi8vZGV2Y2VudGVyLmtpbnZleS5jb20vbmF0aXZlc2NyaXB0L2d1aWRlcy9nZXR0aW5nLXN0YXJ0ZWQjQ29uZmlndXJlWW91ckFwcFxyXG4qIEluIHRoaXMgdGVtcGxhdGUsIEtpbnZleSBpcyBzZXQgdXAgd2l0aCBhIGN1c3RvbSBleGlzdGluZyBwcm9qZWN0LCBzbyB0aGF0XHJcbiogWW91IGNhbiBidWlsZCBhbmQgcnVuIHRoaXMgdGVtcGxhdGUgd2l0aG91dCBjcmVhdGluZyB5b3VyIG93biBLaW52ZXkgcHJvamVjdC5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbktpbnZleS5pbml0KHtcclxuICAgIGFwcEtleTogQ29uZmlnLmtpbnZleUFwcEtleSxcclxuICAgIGFwcFNlY3JldDogQ29uZmlnLmtpbnZleUFwcFNlY3JldFxyXG59KTtcclxuIl19
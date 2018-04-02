"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("application");
require("./bundle-config");
/* ***********************************************************
* The {N} Kinvey plugin needs some initialization steps before it is ready
* for use. Check out the initialization script at /shared/kinvey.common.ts
* along with more information about it.
*************************************************************/
require("./shared/kinvey.common");
app.start({ moduleName: "cars/cars-list-page" });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBRW5DLDJCQUF5QjtBQUV6Qjs7Ozs4REFJOEQ7QUFDOUQsa0NBQWdDO0FBRWhDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0FBRWpEOzs7RUFHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuXHJcbmltcG9ydCBcIi4vYnVuZGxlLWNvbmZpZ1wiO1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBUaGUge059IEtpbnZleSBwbHVnaW4gbmVlZHMgc29tZSBpbml0aWFsaXphdGlvbiBzdGVwcyBiZWZvcmUgaXQgaXMgcmVhZHlcclxuKiBmb3IgdXNlLiBDaGVjayBvdXQgdGhlIGluaXRpYWxpemF0aW9uIHNjcmlwdCBhdCAvc2hhcmVkL2tpbnZleS5jb21tb24udHNcclxuKiBhbG9uZyB3aXRoIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaXQuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCBcIi4vc2hhcmVkL2tpbnZleS5jb21tb25cIjtcclxuXHJcbmFwcC5zdGFydCh7IG1vZHVsZU5hbWU6IFwiY2Fycy9jYXJzLWxpc3QtcGFnZVwiIH0pO1xyXG5cclxuLypcclxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XHJcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cclxuKi9cclxuIl19
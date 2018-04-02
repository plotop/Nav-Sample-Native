"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../shared/config");
var car_model_1 = require("./car-model");
var file_system_1 = require("file-system");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var editableProperties = [
    "class",
    "doors",
    "hasAC",
    "transmission",
    "luggage",
    "name",
    "price",
    "seats",
    "imageUrl"
];
var CarService = /** @class */ (function () {
    function CarService() {
        this.allCars = [];
        this.carsStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("cars");
        if (CarService._instance) {
            throw new Error("Use CarService.getInstance() instead of new.");
        }
        CarService._instance = this;
    }
    CarService.getInstance = function () {
        return CarService._instance;
    };
    CarService.cloneUpdateModel = function (car) {
        // tslint:disable-next-line:ban-comma-operator
        return editableProperties.reduce(function (a, e) { return (a[e] = car[e], a); }, { _id: car.id });
    };
    CarService.prototype.load = function () {
        var _this = this;
        return this.login().then(function () {
            return _this.carsStore.sync();
        }).then(function () {
            var sortByNameQuery = new kinvey_nativescript_sdk_1.Kinvey.Query();
            sortByNameQuery.ascending("name");
            var stream = _this.carsStore.find(sortByNameQuery);
            return stream.toPromise();
        }).then(function (data) {
            _this.allCars = [];
            data.forEach(function (carData) {
                carData.id = carData._id;
                var car = new car_model_1.Car(carData);
                _this.allCars.push(car);
            });
            return _this.allCars;
        });
    };
    CarService.prototype.update = function (carModel) {
        var updateModel = CarService.cloneUpdateModel(carModel);
        return this.carsStore.save(updateModel);
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        var imageFile = file_system_1.File.fromPath(localFullPath);
        var imageContent = imageFile.readSync();
        var metadata = {
            filename: imageFile.name,
            mimeType: this.getMimeType(imageFile.extension),
            size: imageContent.length,
            public: true
        };
        return kinvey_nativescript_sdk_1.Kinvey.Files.upload(imageFile, metadata, { timeout: 2147483647 })
            .then(function (uploadedFile) {
            var query = new kinvey_nativescript_sdk_1.Kinvey.Query();
            query.equalTo("_id", uploadedFile._id);
            return kinvey_nativescript_sdk_1.Kinvey.Files.find(query);
        })
            .then(function (files) {
            if (files && files.length) {
                var file = files[0];
                file.url = file._downloadURL;
                return file;
            }
            else {
                Promise.reject(new Error("No items with the given ID could be found."));
            }
        });
    };
    CarService.prototype.login = function () {
        if (!!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            return Promise.resolve();
        }
        else {
            return kinvey_nativescript_sdk_1.Kinvey.User.login(config_1.Config.kinveyUsername, config_1.Config.kinveyPassword);
        }
    };
    CarService.prototype.getMimeType = function (imageExtension) {
        var extension = imageExtension === "jpg" ? "jpeg" : imageExtension;
        return "image/" + extension.replace(/\./g, "");
    };
    CarService._instance = new CarService();
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3Qyx5Q0FBa0M7QUFFbEMsMkNBQW1DO0FBQ25DLG1FQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLGNBQWM7SUFDZCxTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxPQUFPO0lBQ1AsVUFBVTtDQUNiLENBQUM7QUFFRjtJQWVJO1FBSFEsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQUcsZ0NBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFNLE1BQU0sQ0FBQyxDQUFDO1FBR3pELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQXBCTSxzQkFBVyxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFJYywyQkFBZ0IsR0FBL0IsVUFBZ0MsR0FBUTtRQUNwQyw4Q0FBOEM7UUFDOUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQWFELHlCQUFJLEdBQUo7UUFBQSxpQkFvQkM7UUFuQkcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFL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LENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLGdDQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFNLENBQUMsY0FBYyxFQUFFLGVBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRSxDQUFDO0lBQ0wsQ0FBQztJQUVPLGdDQUFXLEdBQW5CLFVBQW9CLGNBQXNCO1FBQ3RDLElBQU0sU0FBUyxHQUFHLGNBQWMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXhGYyxvQkFBUyxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7SUF5RjVELGlCQUFDO0NBQUEsQUE5RkQsSUE4RkM7QUE5RlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXItbW9kZWxcIjtcclxuXHJcbmltcG9ydCB7IEZpbGUgfSBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5jb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSBbXHJcbiAgICBcImNsYXNzXCIsXHJcbiAgICBcImRvb3JzXCIsXHJcbiAgICBcImhhc0FDXCIsXHJcbiAgICBcInRyYW5zbWlzc2lvblwiLFxyXG4gICAgXCJsdWdnYWdlXCIsXHJcbiAgICBcIm5hbWVcIixcclxuICAgIFwicHJpY2VcIixcclxuICAgIFwic2VhdHNcIixcclxuICAgIFwiaW1hZ2VVcmxcIlxyXG5dO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhclNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IENhclNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiBDYXJTZXJ2aWNlLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhclNlcnZpY2UgPSBuZXcgQ2FyU2VydmljZSgpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNsb25lVXBkYXRlTW9kZWwoY2FyOiBDYXIpOiBvYmplY3Qge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tY29tbWEtb3BlcmF0b3JcclxuICAgICAgICByZXR1cm4gZWRpdGFibGVQcm9wZXJ0aWVzLnJlZHVjZSgoYSwgZSkgPT4gKGFbZV0gPSBjYXJbZV0sIGEpLCB7IF9pZDogY2FyLmlkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWxsQ2FyczogQXJyYXk8Q2FyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjYXJzU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248YW55PihcImNhcnNcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKENhclNlcnZpY2UuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZSBDYXJTZXJ2aWNlLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ2FyU2VydmljZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJzU3RvcmUuc3luYygpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0QnlOYW1lUXVlcnkgPSBuZXcgS2ludmV5LlF1ZXJ5KCk7XHJcbiAgICAgICAgICAgIHNvcnRCeU5hbWVRdWVyeS5hc2NlbmRpbmcoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLmNhcnNTdG9yZS5maW5kKHNvcnRCeU5hbWVRdWVyeSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RyZWFtLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGxDYXJzID0gW107XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoY2FyRGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJEYXRhLmlkID0gY2FyRGF0YS5faWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXIgPSBuZXcgQ2FyKGNhckRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2Fycy5wdXNoKGNhcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsQ2FycztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY2FyTW9kZWw6IENhcik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTW9kZWwgPSBDYXJTZXJ2aWNlLmNsb25lVXBkYXRlTW9kZWwoY2FyTW9kZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJzU3RvcmUuc2F2ZSh1cGRhdGVNb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkSW1hZ2UocmVtb3RlRnVsbFBhdGg6IHN0cmluZywgbG9jYWxGdWxsUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSBGaWxlLmZyb21QYXRoKGxvY2FsRnVsbFBhdGgpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlQ29udGVudCA9IGltYWdlRmlsZS5yZWFkU3luYygpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGltYWdlRmlsZS5uYW1lLFxyXG4gICAgICAgICAgICBtaW1lVHlwZTogdGhpcy5nZXRNaW1lVHlwZShpbWFnZUZpbGUuZXh0ZW5zaW9uKSxcclxuICAgICAgICAgICAgc2l6ZTogaW1hZ2VDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgcHVibGljOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEtpbnZleS5GaWxlcy51cGxvYWQoaW1hZ2VGaWxlLCBtZXRhZGF0YSwgeyB0aW1lb3V0OiAyMTQ3NDgzNjQ3IH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh1cGxvYWRlZEZpbGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgS2ludmV5LlF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICBxdWVyeS5lcXVhbFRvKFwiX2lkXCIsIHVwbG9hZGVkRmlsZS5faWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBLaW52ZXkuRmlsZXMuZmluZChxdWVyeSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChmaWxlczogQXJyYXk8YW55PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlLnVybCA9IGZpbGUuX2Rvd25sb2FkVVJMO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaXRlbXMgd2l0aCB0aGUgZ2l2ZW4gSUQgY291bGQgYmUgZm91bmQuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmICghIUtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKENvbmZpZy5raW52ZXlVc2VybmFtZSwgQ29uZmlnLmtpbnZleVBhc3N3b3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNaW1lVHlwZShpbWFnZUV4dGVuc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBpbWFnZUV4dGVuc2lvbiA9PT0gXCJqcGdcIiA/IFwianBlZ1wiIDogaW1hZ2VFeHRlbnNpb247XHJcblxyXG4gICAgICAgIHJldHVybiBcImltYWdlL1wiICsgZXh0ZW5zaW9uLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
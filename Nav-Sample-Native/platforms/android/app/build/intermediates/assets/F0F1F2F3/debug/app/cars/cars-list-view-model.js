"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var observable_property_decorator_1 = require("../shared/observable-property-decorator");
var car_service_1 = require("./shared/car-service");
/* ***********************************************************
* This is the master list view model.
*************************************************************/
var CarsListViewModel = /** @class */ (function (_super) {
    __extends(CarsListViewModel, _super);
    function CarsListViewModel() {
        var _this = _super.call(this) || this;
        _this.cars = new observable_array_1.ObservableArray([]);
        _this.isLoading = false;
        _this._carService = car_service_1.CarService.getInstance();
        return _this;
    }
    CarsListViewModel.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        this._carService.load()
            .then(function (cars) {
            _this.cars = new observable_array_1.ObservableArray(cars);
            _this.isLoading = false;
        })
            .catch(function () {
            _this.isLoading = false;
        });
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], CarsListViewModel.prototype, "cars", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], CarsListViewModel.prototype, "isLoading", void 0);
    return CarsListViewModel;
}(observable_1.Observable));
exports.CarsListViewModel = CarsListViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLWxpc3Qtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QywwREFBd0Q7QUFHeEQseUZBQTZFO0FBRTdFLG9EQUFrRDtBQUVsRDs7OERBRThEO0FBQzlEO0lBQXVDLHFDQUFVO0lBTTdDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBVHFCLFVBQUksR0FBeUIsSUFBSSxrQ0FBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFELGVBQVMsR0FBWSxLQUFLLENBQUM7UUFPN0MsS0FBSSxDQUFDLFdBQVcsR0FBRyx3QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUNoRCxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDbEIsSUFBSSxDQUFDLFVBQUMsSUFBZ0I7WUFDbkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdEJxQjtRQUFyQixrREFBa0IsRUFBRTtrQ0FBTyxrQ0FBZTttREFBcUM7SUFDMUQ7UUFBckIsa0RBQWtCLEVBQUU7O3dEQUE0QjtJQXNCckQsd0JBQUM7Q0FBQSxBQXhCRCxDQUF1Qyx1QkFBVSxHQXdCaEQ7QUF4QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL3NoYXJlZC9jb25maWdcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9zaGFyZWQvY2FyLW1vZGVsXCI7XHJcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvY2FyLXNlcnZpY2VcIjtcclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogVGhpcyBpcyB0aGUgbWFzdGVyIGxpc3QgdmlldyBtb2RlbC5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZXhwb3J0IGNsYXNzIENhcnNMaXN0Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgY2FyczogT2JzZXJ2YWJsZUFycmF5PENhcj4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENhcj4oW10pO1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FyU2VydmljZSA9IENhclNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FyU2VydmljZS5sb2FkKClcclxuICAgICAgICAgICAgLnRoZW4oKGNhcnM6IEFycmF5PENhcj4pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoY2Fycyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
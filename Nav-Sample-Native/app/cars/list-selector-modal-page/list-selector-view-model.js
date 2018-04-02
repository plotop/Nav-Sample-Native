"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var constants_1 = require("./constants");
var ListSelectorViewModel = /** @class */ (function (_super) {
    __extends(ListSelectorViewModel, _super);
    // tslint:disable-next-line:ban-types
    function ListSelectorViewModel(context, _closeCallback) {
        var _this = _super.call(this) || this;
        _this._closeCallback = _closeCallback;
        _this._tag = context.tag;
        var protoItems = _this.resolveProtoItems();
        _this._selectedIndex = protoItems.indexOf(context.selectedValue);
        _this._items = [];
        for (var i = 0; i < protoItems.length; i++) {
            _this._items.push({
                value: protoItems[i],
                isSelected: i === _this._selectedIndex ? true : false
            });
        }
        return _this;
    }
    ListSelectorViewModel.prototype.selectItem = function (newSelectedIndex) {
        var oldSelectedItem = this._items[this._selectedIndex];
        oldSelectedItem.isSelected = false;
        var newSelectedItem = this._items[newSelectedIndex];
        newSelectedItem.isSelected = true;
        this._selectedIndex = newSelectedIndex;
        this._closeCallback(newSelectedItem.value);
    };
    ListSelectorViewModel.prototype.cancelSelection = function () {
        this._closeCallback(null);
    };
    Object.defineProperty(ListSelectorViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectorViewModel.prototype, "title", {
        get: function () {
            return "Select Car " + this.capitalizeFirstLetter(this._tag);
        },
        enumerable: true,
        configurable: true
    });
    ListSelectorViewModel.prototype.resolveProtoItems = function () {
        switch (this._tag) {
            case "class":
                return constants_1.carClassList;
            case "doors":
                return constants_1.carDoorList;
            case "seats":
                return constants_1.carSeatList;
            case "transmission":
                return constants_1.carTransmissionList;
        }
    };
    ListSelectorViewModel.prototype.capitalizeFirstLetter = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return ListSelectorViewModel;
}(observable_1.Observable));
exports.ListSelectorViewModel = ListSelectorViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rvci12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1zZWxlY3Rvci12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDLHlDQUEwRjtBQUUxRjtJQUEyQyx5Q0FBVTtJQUtqRCxxQ0FBcUM7SUFDckMsK0JBQVksT0FBWSxFQUFVLGNBQXdCO1FBQTFELFlBQ0ksaUJBQU8sU0FhVjtRQWRpQyxvQkFBYyxHQUFkLGNBQWMsQ0FBVTtRQUd0RCxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFeEIsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsVUFBVSxFQUFFLENBQUMsS0FBSyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7YUFDdkQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQzs7SUFDTCxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLGdCQUF3QjtRQUMvQixJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxlQUFlLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsZUFBZSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUV2QyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsZ0JBQWMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTtJQUVPLGlEQUFpQixHQUF6QjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssT0FBTztnQkFDUixNQUFNLENBQUMsd0JBQVksQ0FBQztZQUN4QixLQUFLLE9BQU87Z0JBQ1IsTUFBTSxDQUFDLHVCQUFXLENBQUM7WUFDdkIsS0FBSyxPQUFPO2dCQUNSLE1BQU0sQ0FBQyx1QkFBVyxDQUFDO1lBQ3ZCLEtBQUssY0FBYztnQkFDZixNQUFNLENBQUMsK0JBQW1CLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFFTyxxREFBcUIsR0FBN0IsVUFBOEIsR0FBVztRQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUE3REQsQ0FBMkMsdUJBQVUsR0E2RHBEO0FBN0RZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBjYXJDbGFzc0xpc3QsIGNhckRvb3JMaXN0LCBjYXJTZWF0TGlzdCwgY2FyVHJhbnNtaXNzaW9uTGlzdCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RTZWxlY3RvclZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgcHJpdmF0ZSBfaXRlbXM6IEFycmF5PGFueT47XHJcbiAgICBwcml2YXRlIF90YWc6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmFuLXR5cGVzXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBhbnksIHByaXZhdGUgX2Nsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGFnID0gY29udGV4dC50YWc7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb3RvSXRlbXMgPSB0aGlzLnJlc29sdmVQcm90b0l0ZW1zKCk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHByb3RvSXRlbXMuaW5kZXhPZihjb250ZXh0LnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm90b0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvSXRlbXNbaV0sXHJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBpID09PSB0aGlzLl9zZWxlY3RlZEluZGV4ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RJdGVtKG5ld1NlbGVjdGVkSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG9sZFNlbGVjdGVkSXRlbSA9IHRoaXMuX2l0ZW1zW3RoaXMuX3NlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIG9sZFNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSXRlbSA9IHRoaXMuX2l0ZW1zW25ld1NlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIG5ld1NlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gbmV3U2VsZWN0ZWRJbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsYmFjayhuZXdTZWxlY3RlZEl0ZW0udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFNlbGVjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jbG9zZUNhbGxiYWNrKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBTZWxlY3QgQ2FyICR7dGhpcy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5fdGFnKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZVByb3RvSXRlbXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl90YWcpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsYXNzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyQ2xhc3NMaXN0O1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9vcnNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJEb29yTGlzdDtcclxuICAgICAgICAgICAgY2FzZSBcInNlYXRzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyU2VhdExpc3Q7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0cmFuc21pc3Npb25cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJUcmFuc21pc3Npb25MaXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuICAgIH1cclxufVxyXG4iXX0=
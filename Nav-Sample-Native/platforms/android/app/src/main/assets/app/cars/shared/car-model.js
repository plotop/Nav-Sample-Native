"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(options) {
        var _this = _super.call(this) || this;
        _this._name = options.name;
        _this._imageUrl = options.imageUrl;
        _this.id = options.id;
        _this.seats = options.seats;
        _this.luggage = Number(options.luggage);
        _this.class = options.class;
        _this.hasAC = options.hasAC;
        _this.doors = Number(options.doors);
        _this.price = Number(options.price);
        _this.transmission = options.transmission;
        _this.imageStoragePath = options.imageStoragePath;
        _this.updateDependentProperties();
        return _this;
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (this._name === value) {
                return;
            }
            this._name = value;
            this.notifyPropertyChange("name", value);
            this.updateDependentProperties();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        set: function (value) {
            if (this._imageUrl === value) {
                return;
            }
            this._imageUrl = value;
            this.notifyPropertyChange("imageUrl", value);
            this.updateDependentProperties();
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.updateDependentProperties = function () {
        this.isModelValid = !!this._name && !!this._imageUrl;
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "id", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "imageStoragePath", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "seats", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Number)
    ], Car.prototype, "luggage", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "class", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], Car.prototype, "hasAC", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Number)
    ], Car.prototype, "doors", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Number)
    ], Car.prototype, "price", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "transmission", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], Car.prototype, "isModelValid", void 0);
    return Car;
}(observable_1.Observable));
exports.Car = Car;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDLDRGQUFnRjtBQUVoRjtJQUF5Qix1QkFBVTtJQWUvQixhQUFZLE9BQVk7UUFBeEIsWUFDSSxpQkFBTyxTQWdCVjtRQWRHLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFbEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN6QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBRWpELEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDOztJQUNyQyxDQUFDO0lBRUQsc0JBQUkscUJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFTLEtBQWE7WUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FYQTtJQWFELHNCQUFJLHlCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFhO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDckMsQ0FBQzs7O09BWEE7SUFhTyx1Q0FBeUIsR0FBakM7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFqRXFCO1FBQXJCLGtEQUFrQixFQUFFOzttQ0FBWTtJQUNYO1FBQXJCLGtEQUFrQixFQUFFOztpREFBMEI7SUFDekI7UUFBckIsa0RBQWtCLEVBQUU7O3NDQUFlO0lBQ2Q7UUFBckIsa0RBQWtCLEVBQUU7O3dDQUFpQjtJQUNoQjtRQUFyQixrREFBa0IsRUFBRTs7c0NBQWU7SUFDZDtRQUFyQixrREFBa0IsRUFBRTs7c0NBQWdCO0lBQ2Y7UUFBckIsa0RBQWtCLEVBQUU7O3NDQUFlO0lBQ2Q7UUFBckIsa0RBQWtCLEVBQUU7O3NDQUFlO0lBQ2Q7UUFBckIsa0RBQWtCLEVBQUU7OzZDQUFzQjtJQUNyQjtRQUFyQixrREFBa0IsRUFBRTs7NkNBQXVCO0lBeURoRCxVQUFDO0NBQUEsQUFuRUQsQ0FBeUIsdUJBQVUsR0FtRWxDO0FBbkVZLGtCQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXIgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBpZDogc3RyaW5nO1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGltYWdlU3RvcmFnZVBhdGg6IHN0cmluZztcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBzZWF0czogc3RyaW5nO1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGx1Z2dhZ2U6IG51bWJlcjtcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBjbGFzczogc3RyaW5nO1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGhhc0FDOiBib29sZWFuO1xyXG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGRvb3JzOiBudW1iZXI7XHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHJpY2U6IG51bWJlcjtcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSB0cmFuc21pc3Npb246IHN0cmluZztcclxuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBpc01vZGVsVmFsaWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9uYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlVXJsID0gb3B0aW9ucy5pbWFnZVVybDtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgdGhpcy5zZWF0cyA9IG9wdGlvbnMuc2VhdHM7XHJcbiAgICAgICAgdGhpcy5sdWdnYWdlID0gTnVtYmVyKG9wdGlvbnMubHVnZ2FnZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzcyA9IG9wdGlvbnMuY2xhc3M7XHJcbiAgICAgICAgdGhpcy5oYXNBQyA9IG9wdGlvbnMuaGFzQUM7XHJcbiAgICAgICAgdGhpcy5kb29ycyA9IE51bWJlcihvcHRpb25zLmRvb3JzKTtcclxuICAgICAgICB0aGlzLnByaWNlID0gTnVtYmVyKG9wdGlvbnMucHJpY2UpO1xyXG4gICAgICAgIHRoaXMudHJhbnNtaXNzaW9uID0gb3B0aW9ucy50cmFuc21pc3Npb247XHJcbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2VQYXRoID0gb3B0aW9ucy5pbWFnZVN0b3JhZ2VQYXRoO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZURlcGVuZGVudFByb3BlcnRpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fbmFtZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJuYW1lXCIsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXBlbmRlbnRQcm9wZXJ0aWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGltYWdlVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpbWFnZVVybCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ltYWdlVXJsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbWFnZVVybCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJpbWFnZVVybFwiLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGVwZW5kZW50UHJvcGVydGllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRGVwZW5kZW50UHJvcGVydGllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzTW9kZWxWYWxpZCA9ICEhdGhpcy5fbmFtZSAmJiAhIXRoaXMuX2ltYWdlVXJsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
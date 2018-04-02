"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var cars_list_view_model_1 = require("./cars-list-view-model");
/* ***********************************************************
* This is the master list code behind in the master-detail structure.
* This code behind gets the data, passes it to the master view and displays it in a list.
* It also handles the navigation to the details page for each item.
*************************************************************/
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
    * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
    * Skipping the re-initialization on back navigation means the user will see the
    * page in the same data state that he left it in before navigating.
    *************************************************************/
    if (args.isBackNavigation) {
        return;
    }
    var page = args.object;
    var viewModel = new cars_list_view_model_1.CarsListViewModel();
    page.bindingContext = viewModel;
    viewModel.load();
}
exports.onNavigatingTo = onNavigatingTo;
/* ***********************************************************
* Use the "itemTap" event handler of the <RadListView> to navigate to the
* item details page. Retrieve a reference for the data item and pass it
* to the item details page, so that it can identify which data item to display.
* Learn more about navigating and passing context in this documentation article:
* https://docs.nativescript.org/core-concepts/navigation#navigate-and-pass-context
*************************************************************/
function onCarItemTap(args) {
    var tappedCarItem = args.view.bindingContext;
    frame_1.topmost().navigate({
        moduleName: "cars/car-detail-page/car-detail-page",
        context: tappedCarItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
exports.onCarItemTap = onCarItemTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLWxpc3QtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUFtQztBQUduQywrREFBMkQ7QUFHM0Q7Ozs7OERBSThEO0FBRTlEOzs4REFFOEQ7QUFDOUQsd0JBQStCLElBQW1CO0lBQzlDOzs7O2tFQUk4RDtJQUM5RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQU0sU0FBUyxHQUFHLElBQUksd0NBQWlCLEVBQUUsQ0FBQztJQUUxQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNoQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsQ0FBQztBQWZELHdDQWVDO0FBRUQ7Ozs7Ozs4REFNOEQ7QUFDOUQsc0JBQTZCLElBQXVCO0lBQ2hELElBQU0sYUFBYSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRXBELGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSxzQ0FBc0M7UUFDbEQsT0FBTyxFQUFFLGFBQWE7UUFDdEIsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBYkQsb0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBDYXJzTGlzdFZpZXdNb2RlbCB9IGZyb20gXCIuL2NhcnMtbGlzdC12aWV3LW1vZGVsXCI7XHJcbmltcG9ydCB7IENhciB9IGZyb20gXCIuL3NoYXJlZC9jYXItbW9kZWxcIjtcclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogVGhpcyBpcyB0aGUgbWFzdGVyIGxpc3QgY29kZSBiZWhpbmQgaW4gdGhlIG1hc3Rlci1kZXRhaWwgc3RydWN0dXJlLlxyXG4qIFRoaXMgY29kZSBiZWhpbmQgZ2V0cyB0aGUgZGF0YSwgcGFzc2VzIGl0IHRvIHRoZSBtYXN0ZXIgdmlldyBhbmQgZGlzcGxheXMgaXQgaW4gYSBsaXN0LlxyXG4qIEl0IGFsc28gaGFuZGxlcyB0aGUgbmF2aWdhdGlvbiB0byB0aGUgZGV0YWlscyBwYWdlIGZvciBlYWNoIGl0ZW0uXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIFVzZSB0aGUgXCJvbk5hdmlnYXRpbmdUb1wiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSB0aGUgcGFnZSBiaW5kaW5nIGNvbnRleHQuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKTogdm9pZCB7XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBUaGUgXCJvbk5hdmlnYXRpbmdUb1wiIGV2ZW50IGhhbmRsZXIgbGV0cyB5b3UgZGV0ZWN0IGlmIHRoZSB1c2VyIG5hdmlnYXRlZCB3aXRoIGEgYmFjayBidXR0b24uXHJcbiAgICAqIFNraXBwaW5nIHRoZSByZS1pbml0aWFsaXphdGlvbiBvbiBiYWNrIG5hdmlnYXRpb24gbWVhbnMgdGhlIHVzZXIgd2lsbCBzZWUgdGhlXHJcbiAgICAqIHBhZ2UgaW4gdGhlIHNhbWUgZGF0YSBzdGF0ZSB0aGF0IGhlIGxlZnQgaXQgaW4gYmVmb3JlIG5hdmlnYXRpbmcuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaWYgKGFyZ3MuaXNCYWNrTmF2aWdhdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBuZXcgQ2Fyc0xpc3RWaWV3TW9kZWwoKTtcclxuXHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdmlld01vZGVsO1xyXG4gICAgdmlld01vZGVsLmxvYWQoKTtcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBVc2UgdGhlIFwiaXRlbVRhcFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIDxSYWRMaXN0Vmlldz4gdG8gbmF2aWdhdGUgdG8gdGhlXHJcbiogaXRlbSBkZXRhaWxzIHBhZ2UuIFJldHJpZXZlIGEgcmVmZXJlbmNlIGZvciB0aGUgZGF0YSBpdGVtIGFuZCBwYXNzIGl0XHJcbiogdG8gdGhlIGl0ZW0gZGV0YWlscyBwYWdlLCBzbyB0aGF0IGl0IGNhbiBpZGVudGlmeSB3aGljaCBkYXRhIGl0ZW0gdG8gZGlzcGxheS5cclxuKiBMZWFybiBtb3JlIGFib3V0IG5hdmlnYXRpbmcgYW5kIHBhc3NpbmcgY29udGV4dCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcclxuKiBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb3JlLWNvbmNlcHRzL25hdmlnYXRpb24jbmF2aWdhdGUtYW5kLXBhc3MtY29udGV4dFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25DYXJJdGVtVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXBwZWRDYXJJdGVtID0gPENhcj5hcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XHJcblxyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcImNhcnMvY2FyLWRldGFpbC1wYWdlL2Nhci1kZXRhaWwtcGFnZVwiLFxyXG4gICAgICAgIGNvbnRleHQ6IHRhcHBlZENhckl0ZW0sXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdfQ==
var frameModule = require("@nativescript/core/ui/frame");
exports. navigateTo = function (module, navType) {
    console.log("Modules_:" + module);
    frameModule.Frame.topmost().navigate({
        moduleName: module,
        clearHistory: navType
    });
    console.log("Module_:" + navType);
}

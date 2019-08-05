import { Pipe } from "@angular/core";
var LimitToPipe = /** @class */ (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (array, itemsCount, startIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        if (!Array.isArray(array)) {
            return array;
        }
        return array.slice(startIndex, startIndex + itemsCount);
    };
    LimitToPipe.decorators = [
        { type: Pipe, args: [{
                    name: "limitTo"
                },] },
    ];
    /** @nocollapse */
    LimitToPipe.ctorParameters = function () { return []; };
    return LimitToPipe;
}());
export { LimitToPipe };
//# sourceMappingURL=limit-to.pipe.js.map
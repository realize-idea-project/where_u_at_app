export var TrackingMode;
(function (TrackingMode) {
    TrackingMode[TrackingMode["None"] = 0] = "None";
    TrackingMode[TrackingMode["NoFollow"] = 1] = "NoFollow";
    TrackingMode[TrackingMode["Follow"] = 2] = "Follow";
    TrackingMode[TrackingMode["Face"] = 3] = "Face";
})(TrackingMode || (TrackingMode = {}));

export var MapType;
(function (MapType) {
    MapType[MapType["Basic"] = 0] = "Basic";
    MapType[MapType["Navi"] = 1] = "Navi";
    MapType[MapType["Satellite"] = 2] = "Satellite";
    MapType[MapType["Hybrid"] = 3] = "Hybrid";
    MapType[MapType["Terrain"] = 4] = "Terrain";
})(MapType || (MapType = {}));

export var LayerGroup;
(function (LayerGroup) {
    LayerGroup["LAYER_GROUP_BUILDING"] = "building";
    LayerGroup["LAYER_GROUP_TRANSIT"] = "transit";
    LayerGroup["LAYER_GROUP_BICYCLE"] = "bike";
    LayerGroup["LAYER_GROUP_TRAFFIC"] = "ctt";
    LayerGroup["LAYER_GROUP_CADASTRAL"] = "landparcel";
    LayerGroup["LAYER_GROUP_MOUNTAIN"] = "mountain";
})(LayerGroup || (LayerGroup = {}));

export var Gravity;
(function (Gravity) {
    Gravity[Gravity["NO_GRAVITY"] = 0] = "NO_GRAVITY";
    Gravity[Gravity["AXIS_SPECIFIED"] = 1] = "AXIS_SPECIFIED";
    Gravity[Gravity["AXIS_PULL_BEFORE"] = 2] = "AXIS_PULL_BEFORE";
    Gravity[Gravity["AXIS_PULL_AFTER"] = 4] = "AXIS_PULL_AFTER";
    Gravity[Gravity["AXIS_X_SHIFT"] = 0] = "AXIS_X_SHIFT";
    Gravity[Gravity["AXIS_Y_SHIFT"] = 4] = "AXIS_Y_SHIFT";
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    Gravity[Gravity["LEFT"] = 3] = "LEFT";
    Gravity[Gravity["RIGHT"] = 5] = "RIGHT";
    Gravity[Gravity["CENTER_VERTICAL"] = 16] = "CENTER_VERTICAL";
    Gravity[Gravity["CENTER_HORIZONTAL"] = 1] = "CENTER_HORIZONTAL";
})(Gravity || (Gravity = {}));

export var Align;
(function (Align) {
    Align[Align["Center"] = 0] = "Center";
    Align[Align["Left"] = 1] = "Left";
    Align[Align["Right"] = 2] = "Right";
    Align[Align["Top"] = 3] = "Top";
    Align[Align["Bottom"] = 4] = "Bottom";
    Align[Align["TopLeft"] = 5] = "TopLeft";
    Align[Align["TopRight"] = 6] = "TopRight";
    Align[Align["BottomRight"] = 7] = "BottomRight";
    Align[Align["BottomLeft"] = 8] = "BottomLeft";
})(Align || (Align = {}));
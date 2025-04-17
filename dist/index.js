import React, { useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.shape, shape = _d === void 0 ? 'rectangle' : _d, _e = _a.outline, outline = _e === void 0 ? false : _e, _f = _a.fullWidth, fullWidth = _f === void 0 ? false : _f, _g = _a.isLoading, isLoading = _g === void 0 ? false : _g, children = _a.children, _h = _a.className, className = _h === void 0 ? '' : _h, props = __rest(_a, ["variant", "size", "shape", "outline", "fullWidth", "isLoading", "children", "className"]);
    var buttonClasses = [
        'btn',
        outline ? "btn-outline-".concat(variant) : "btn-".concat(variant),
        "btn-".concat(size),
        "btn-".concat(shape),
        fullWidth ? 'btn-full' : '',
        isLoading ? 'btn-loading' : '',
        className
    ].filter(Boolean).join(' ');
    return (React.createElement("button", __assign({ className: buttonClasses }, props),
        isLoading && React.createElement("span", { className: "btn-spinner" }),
        children));
};

var Alert = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.dismissible, dismissible = _d === void 0 ? false : _d, onDismiss = _a.onDismiss, icon = _a.icon, children = _a.children, _e = _a.className, className = _e === void 0 ? '' : _e, props = __rest(_a, ["variant", "size", "dismissible", "onDismiss", "icon", "children", "className"]);
    var alertClasses = [
        'alert',
        "alert-".concat(variant),
        "alert-".concat(size),
        dismissible ? 'alert-dismissible' : '',
        className
    ].filter(Boolean).join(' ');
    return (React.createElement("div", __assign({ className: alertClasses, role: "alert" }, props),
        icon && React.createElement("span", { className: "alert-icon" }, icon),
        React.createElement("div", { className: "alert-content" }, children),
        dismissible && (React.createElement("button", { className: "alert-dismiss", onClick: onDismiss, "aria-label": "Close" },
            React.createElement("span", { "aria-hidden": "true" }, "\u00D7")))));
};

var Dropdown = function (_a) {
    var options = _a.options, onSelect = _a.onSelect, label = _a.label;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(null), selectedOption = _c[0], setSelectedOption = _c[1];
    var toggleDropdown = function () {
        setIsOpen(!isOpen);
    };
    var handleOptionClick = function (option) {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };
    return (React.createElement("div", { className: "dropdown" },
        label && React.createElement("label", { className: "dropdown-label" }, label),
        React.createElement("div", { className: "dropdown-toggle", onClick: toggleDropdown }, selectedOption || 'Select an option'),
        isOpen && (React.createElement("div", { className: "dropdown-menu" }, options.map(function (option) { return (React.createElement("div", { key: option, className: "dropdown-option", onClick: function () { return handleOptionClick(option); } }, option)); })))));
};

export { Alert, Button, Dropdown };
//# sourceMappingURL=index.js.map

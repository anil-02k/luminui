import * as React from 'react';
import React__default from 'react';

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
    return (React__default.createElement("button", __assign({ className: buttonClasses }, props),
        isLoading && React__default.createElement("span", { className: "btn-spinner" }),
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
    return (React__default.createElement("div", __assign({ className: alertClasses, role: "alert" }, props),
        icon && React__default.createElement("span", { className: "alert-icon" }, icon),
        React__default.createElement("div", { className: "alert-content" }, children),
        dismissible && (React__default.createElement("button", { className: "alert-dismiss", onClick: onDismiss, "aria-label": "Close" },
            React__default.createElement("span", { "aria-hidden": "true" }, "\u00D7")))));
};

var Card = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, title = _a.title, description = _a.description, backgroundImage = _a.backgroundImage, onClick = _a.onClick;
    var cardStyle = backgroundImage
        ? { backgroundImage: "url(".concat(backgroundImage, ")") }
        : {};
    return (React__default.createElement("div", { className: "card ".concat(variant), style: cardStyle },
        React__default.createElement("h1", { className: "card-title" }, title),
        React__default.createElement("div", { className: "card-bottom" },
            React__default.createElement("div", { className: "card-text" },
                React__default.createElement("p", null, description),
                React__default.createElement("div", { className: "card-line" }),
                React__default.createElement(Button, { onClick: onClick, variant: "primary", size: "sm", className: "card-button" }, "Learn More")))));
};

var BentoGrid = function (_a) {
    var _b = _a.columns, columns = _b === void 0 ? 4 : _b, _c = _a.gap, gap = _c === void 0 ? '1rem' : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? '' : _d, props = __rest(_a, ["columns", "gap", "children", "className"]);
    var gridStyle = {
        '--columns': columns,
        '--gap': gap,
    };
    return (React__default.createElement("div", __assign({ className: "bento-grid ".concat(className), style: gridStyle }, props), children));
};

var BentoCard = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.span, span = _c === void 0 ? 1 : _c, title = _a.title, description = _a.description, background = _a.background, children = _a.children, _d = _a.className, className = _d === void 0 ? '' : _d, props = __rest(_a, ["variant", "span", "title", "description", "background", "children", "className"]);
    var cardStyle = {
        '--span': span,
        '--background': background,
    };
    return (React__default.createElement("div", __assign({ className: "bento-card bento-card-".concat(variant, " ").concat(className), style: cardStyle }, props),
        (title || description) && (React__default.createElement("div", { className: "bento-card-description" },
            title && React__default.createElement("h2", null, title),
            description && React__default.createElement("p", null, description))),
        children && (React__default.createElement("div", { className: "bento-card-details" }, children))));
};

var ProductCard = function (_a) {
    var imageUrl = _a.imageUrl, _b = _a.altText, altText = _b === void 0 ? '' : _b, title = _a.title, description = _a.description, _c = _a.tags, tags = _c === void 0 ? [] : _c, price = _a.price, _d = _a.isFavorite, isFavorite = _d === void 0 ? false : _d;
    return (React.createElement("div", { className: "product-card" },
        React.createElement("div", { className: "product-image-container" },
            React.createElement("img", { src: imageUrl, alt: altText, className: "product-image" }),
            React.createElement("span", { className: "favorite-star ".concat(isFavorite ? 'active' : '') }, "\u2605")),
        React.createElement("div", { className: "product-info" },
            React.createElement("h2", { className: "product-title" }, title),
            React.createElement("p", { className: "product-description" }, description),
            tags.length > 0 && (React.createElement("div", { className: "product-tags" }, tags.map(function (tag, index) { return (React.createElement("span", { key: index, className: "product-tag" }, tag)); }))),
            React.createElement("div", { className: "product-action" },
                React.createElement("span", { className: "product-price" }, price),
                React.createElement(Button, { variant: "primary", size: "sm", className: "order-button" }, "Order Now")))));
};

var Dropdown = function (_a) {
    var options = _a.options, _b = _a.variant, variant = _b === void 0 ? 'slate' : _b, _c = _a.shape, shape = _c === void 0 ? 'default' : _c, _d = _a.placeholder, placeholder = _d === void 0 ? 'Select an option' : _d, value = _a.value, onChange = _a.onChange, _e = _a.className, className = _e === void 0 ? '' : _e;
    var handleChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    var dropdownClasses = [
        'styled-dropdown',
        variant,
        shape !== 'default' ? shape : '',
        className
    ].filter(Boolean).join(' ');
    return (React__default.createElement("div", { className: dropdownClasses },
        React__default.createElement("select", { value: value, onChange: handleChange, className: "dropdown-select" },
            placeholder && (React__default.createElement("option", { value: "", disabled: true }, placeholder)),
            options.map(function (option) { return (React__default.createElement("option", { key: option.value, value: option.value, disabled: option.disabled }, option.label)); }))));
};

var Input = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, label = _a.label, helperText = _a.helperText, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, props = __rest(_a, ["variant", "size", "label", "helperText", "fullWidth", "className"]);
    var inputClasses = [
        'input',
        "input-".concat(variant),
        "input-".concat(size),
        fullWidth ? 'input-full-width' : '',
        className
    ].filter(Boolean).join(' ');
    return (React__default.createElement("div", { className: "input-container" },
        label && React__default.createElement("label", { className: "input-label" }, label),
        React__default.createElement("input", __assign({ className: inputClasses }, props)),
        helperText && React__default.createElement("span", { className: "input-helper-text" }, helperText)));
};

var ToggleControls = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, label = _a.label, helperText = _a.helperText, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.checked, checked = _g === void 0 ? false : _g, onChange = _a.onChange, type = _a.type, name = _a.name, value = _a.value;
    var controlClasses = [
        'control',
        "control-".concat(type),
        "control-".concat(variant),
        "control-".concat(size),
        checked ? 'control-checked' : '',
        disabled ? 'control-disabled' : '',
        fullWidth ? 'control-full-width' : '',
        className
    ].filter(Boolean).join(' ');
    var handleChange = function (e) {
        if (onChange) {
            onChange(e.target.checked);
        }
    };
    var renderControl = function () {
        switch (type) {
            case 'toggle':
                return (React__default.createElement("label", { className: "toggle-container ".concat(checked ? 'checked' : '') },
                    React__default.createElement("input", { type: "checkbox", checked: checked, onChange: handleChange, disabled: disabled, className: "toggle-input" }),
                    React__default.createElement("span", { className: "toggle-slider" })));
            case 'checkbox':
                return (React__default.createElement("label", { className: "checkbox-container" },
                    React__default.createElement("input", { type: "checkbox", checked: checked, onChange: handleChange, disabled: disabled, className: "checkbox-input" }),
                    React__default.createElement("span", { className: "checkbox-checkmark" }),
                    label && React__default.createElement("span", { className: "checkbox-label" }, label)));
            case 'radio':
                return (React__default.createElement("label", { className: "radio-container" },
                    React__default.createElement("input", { type: "radio", name: name, value: value, checked: checked, onChange: handleChange, disabled: disabled, className: "radio-input" }),
                    React__default.createElement("span", { className: "radio-checkmark" }),
                    label && React__default.createElement("span", { className: "radio-label" }, label)));
            default:
                return null;
        }
    };
    return (React__default.createElement("div", { className: controlClasses },
        type !== 'checkbox' && type !== 'radio' && label && (React__default.createElement("span", { className: "control-label" }, label)),
        renderControl(),
        helperText && React__default.createElement("span", { className: "control-helper-text" }, helperText)));
};

export { Alert, BentoCard, BentoGrid, Button, Card, Dropdown, Input, ProductCard, ToggleControls };
//# sourceMappingURL=index.js.map

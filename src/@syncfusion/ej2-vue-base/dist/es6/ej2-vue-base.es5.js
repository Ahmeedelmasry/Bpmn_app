import * as Vue from 'vue';
import { createElement, detach, extend, getTemplateEngine, getUniqueID, getValue, isNullOrUndefined, setTemplateEngine } from '@syncfusion/ej2-base';

/**
 * Vue Component Base
 */
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) {
    return obj;
}
else {
    var newObj = {};
    if (obj != null) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj["" + key] = obj["" + key];
        }
    }
    newObj.default = obj;
    return newObj;
} }
var curVue = _interopRequireWildcard(Vue);
var isExecute = (parseInt(curVue['version']) > 2) ? false : true;
var aVue = !isExecute ? curVue : (curVue['default']['default'] ? curVue['default']['default'] : curVue['default']);
var gh = curVue['h'];
var vueDefineComponent = function (options) { return !isExecute ? aVue['defineComponent'](options) : aVue['extend'](options); };
var ComponentBase = vueDefineComponent({
    name: 'ComponentBase',
    data: function () {
        return {
            tagMapper: {},
            tagNameMapper: {},
            hasInjectedModules: false,
            hasChildDirective: false,
            childDirObjects: '',
            propKeys: {},
            isDecorator: false
        };
    },
    created: function () {
        var _this = this;
        if (this.ej2Instance) {
            this.ej2Instances = this.isVue3 ? aVue.toRaw(this.ej2Instance) : this.ej2Instance;
        }
        if (!this.propKeys) {
            return;
        }
        var _loop_1 = function (prop) {
            this_1.ej2Instances.addEventListener(prop, function (args) {
                _this.$emit(prop, args);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.propKeys; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_1(prop);
        }
        var injectables = getValue('$root.$options.provide', this);
        var vueInjectables = getValue('$parent.$options.provide', this);
        vueInjectables = !isNullOrUndefined(vueInjectables) ? vueInjectables : getValue('$.parent.provides', this);
        if (this.hasInjectedModules && !isExecute) {
            var prevModule = [];
            if (injectables && injectables.managed) {
                this.isDecorator = true;
                prevModule = this.getInjectedServices() || [];
            }
            else if (injectables) {
                prevModule = injectables[this.ej2Instances.getModuleName()] || [];
            }
            else if (vueInjectables) {
                prevModule = this.getInjectedServices() || [];
            }
            var curModule = this.ej2Instances.getInjectedModules() || [];
            for (var _b = 0, curModule_1 = curModule; _b < curModule_1.length; _b++) {
                var mod = curModule_1[_b];
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
    },
    mounted: function () {
        var cusEle = this.$el ? this.$el.querySelectorAll("div.e-directive") : null;
        if (!isExecute && cusEle) {
            for (var i = 0; i < cusEle.length; i++) {
                cusEle[parseInt(i.toString(), 10)].parentElement && cusEle[parseInt(i.toString(), 10)].parentElement.removeChild(cusEle[parseInt(i.toString(), 10)]);
            }
        }
        this.ej2Instances.isVue = true;
        this.ej2Instances.isVue3 = this.isVue3;
        this.ej2Instances.vueInstance = this;
        if (this.isVue3) {
            this.ej2Instances.ej2Instances = this.ej2Instances;
            this.ej2Instances.referModels = this.models;
            this.setModelValue();
        }
        this.ej2Instances.appendTo(this.$el);
    },
    updated: function () {
        if (this.isVue3) {
            this.setModelValue();
        }
        if (this.hasChildDirective) {
            var childKey = {};
            this.fetchChildPropValues(childKey);
            var curChildDir = JSON.stringify(childKey);
            if (this.childDirObjects !== curChildDir) {
                this.childDirObjects = curChildDir;
                this.assignValueToWrapper(childKey, false);
            }
        }
    },
    beforeDestroy: function () {
        this.destroyComponent();
    },
    beforeUnmount: function () {
        this.destroyComponent();
    },
    methods: {
        setModelValue: function () {
            if (!isNullOrUndefined(this.modelValue) || !isNullOrUndefined(this.$attrs.modelValue)) {
                var key = this.models.toString().match(/checked|value/) || [];
                var propKey = key[0];
                if (!isNullOrUndefined(propKey)) {
                    this.ej2Instances["" + propKey] = !isNullOrUndefined(this.modelValue) ? this.modelValue : this.$attrs.modelValue;
                }
            }
        },
        updated: function () {
            if (this.isVue3) {
                this.setModelValue();
            }
            if (this.hasChildDirective) {
                var childKey = {};
                this.fetchChildPropValues(childKey);
                var curChildDir = JSON.stringify(childKey);
                if (this.childDirObjects !== curChildDir) {
                    this.childDirObjects = curChildDir;
                    this.assignValueToWrapper(childKey, false);
                }
            }
        },
        getInjectedServices: function () {
            var ret = [];
            var provide;
            if (this.$root && this.isDecorator) {
                provide = getValue('$root.$options.provide', this);
            }
            else if (this.$vnode) {
                provide = getValue('$vnode.context.$options.provide', this);
            }
            else if (this.$parent) {
                provide = getValue('$parent.$options.provide', this);
            }
            if (isNullOrUndefined(provide) && !isNullOrUndefined(this.$)) {
                provide = getValue('$.parent.provides', this);
            }
            if (provide) {
                // tslint:disable:no-any
                var injectables = provide;
                if (typeof provide === 'function') {
                    if (provide.managed) {
                        var provideKey = provide.managed;
                        var provideValue = Object.keys(provideKey);
                        var key = void 0;
                        if (this.$root && this.isDecorator) {
                            key = Object.keys(this.$root);
                        }
                        else if (this.$vnode) {
                            key = Object.keys(this.$vnode.context);
                        }
                        else if (this.$parent) {
                            key = Object.keys(this.$parent);
                        }
                        for (var i = 0; i < provideValue.length; i++) {
                            for (var j = 0; j < key.length; j++) {
                                if ((key[parseInt(j.toString(), 10)].indexOf(provideValue[parseInt(i.toString(), 10)])) !== -1) {
                                    if (this.$root && this.isDecorator) {
                                        provideKey[provideValue[parseInt(j.toString(), 10)]] = this.$root[key[parseInt(i.toString(), 10)]];
                                    }
                                    else if (this.$vnode) {
                                        provideKey[provideValue[parseInt(i.toString(), 10)]] = this.$vnode.context[key[parseInt(j.toString(), 10)]];
                                    }
                                    else if (this.$parent) {
                                        provideKey[provideValue[parseInt(i.toString(), 10)]] = this.$parent[key[parseInt(j.toString(), 10)]];
                                    }
                                    injectables = provideKey;
                                }
                            }
                        }
                    }
                    // tslint:disable:no-any
                    else if (this.$vnode) {
                        injectables = this.$vnode.context.$options.provide();
                    }
                    else if (this.$parent) {
                        injectables = this.$parent.$options.provide();
                    }
                }
                ret = injectables[this.ej2Instances.getModuleName()] || [];
            }
            this.isDecorator = false;
            return ret;
        },
        destroyComponent: function () {
            var tempBeforeDestroyThis = this;
            tempBeforeDestroyThis.ej2Instances.destroy();
            tempBeforeDestroyThis.$el.style.visibility = 'hidden';
            tempBeforeDestroyThis = null;
        },
        bindProperties: function () {
            var options = {};
            for (var _i = 0, _a = this.propKeys; _i < _a.length; _i++) {
                var prop = _a[_i];
                if (!isNullOrUndefined(this["" + prop])) {
                    options["" + prop] = this["" + prop];
                }
                else if (this[0] && !isNullOrUndefined(this[0][0]) && !isNullOrUndefined(this[0][0]["" + prop])) {
                    options["" + prop] = this[0][0]["" + prop];
                }
            }
            if (this.hasChildDirective) {
                this.fetchChildPropValues(options);
            }
            if (this.hasInjectedModules) {
                var prevModule = this.getInjectedServices() || [];
                var curModule = this.ej2Instances.getInjectedModules() || [];
                for (var _b = 0, curModule_2 = curModule; _b < curModule_2.length; _b++) {
                    var mod = curModule_2[_b];
                    if (prevModule.indexOf(mod) === -1) {
                        prevModule.push(mod);
                    }
                }
                this.ej2Instances.injectedModules = prevModule;
            }
            this.assignValueToWrapper(options);
        },
        assignValueToWrapper: function (option, silent) {
            this.ej2Instances.setProperties(extend({}, {}, option, true), isNullOrUndefined(silent) ? true : silent);
        },
        fetchChildPropValues: function (childOption) {
            var dirProps = {};
            if (!this.isVue3) {
                dirProps = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
            }
            else {
                var propRef = void 0;
                if (this[0] && this[0][1].slots.default) {
                    propRef = this[0][1].slots.default();
                }
                else if (this && this.$ && this.$.slots && this.$.slots.default) {
                    propRef = this.$.slots.default();
                }
                if (propRef) {
                    for (var i = 0; i < propRef.length; i++) {
                        if (propRef[parseInt(i.toString(), 10)].type.methods || propRef[parseInt(i.toString(), 10)].type === 'e-seriescollection') {
                            var key = propRef[parseInt(i.toString(), 10)].type === 'e-seriescollection' ? 'series-collection' :
                                propRef[parseInt(i.toString(), 10)].type.methods.getTag().replace("e-", "");
                            var ref = this.resolveArrayDirectives(propRef[parseInt(i.toString(), 10)].children, key);
                            var splitKeys = key.split('-');
                            var controlName = this.ej2Instances.getModuleName().toLowerCase();
                            var keyRef = (splitKeys.length > 1 && controlName.indexOf(splitKeys[0]) > -1) ? splitKeys[1] : splitKeys[0];
                            keyRef = keyRef.replace(controlName, '');
                            if (controlName == "splitter" && keyRef == "panes") {
                                keyRef = "paneSettings";
                            }
                            else if (controlName == "bulletchart" && keyRef == "range") {
                                keyRef = "ranges";
                            }
                            else if (controlName == "schedule" && keyRef == "header") {
                                keyRef = "headerRows";
                            }
                            dirProps["" + keyRef] = ref["" + key];
                        }
                    }
                }
                else {
                    return;
                }
            }
            if (!this.childDirObjects) {
                this.childDirObjects = JSON.stringify(dirProps);
            }
            for (var _i = 0, _a = Object.keys(dirProps); _i < _a.length; _i++) {
                var dirProp = _a[_i];
                childOption["" + dirProp] = dirProps["" + dirProp];
            }
        },
        resolveArrayDirectives: function (slots, tagName) {
            var slot = [];
            var innerDirValues;
            slot = slots.default ? slots.default() : slots;
            var items = {};
            items["" + tagName] = [];
            var _loop_2 = function (childSlot) {
                var tempObj = {};
                var tagRef = childSlot.type.methods ? childSlot.type.methods.getTag() : tagName;
                if (childSlot.children) {
                    var key = void 0;
                    innerDirValues = this_2.resolveComplexDirs(childSlot.children, this_2.tagMapper["e-" + tagName], tagRef);
                    if (innerDirValues.length) {
                        tempObj = innerDirValues;
                    }
                    else {
                        for (var i = 0; i < Object.keys(innerDirValues).length; i++) {
                            key = Object.keys(innerDirValues)[parseInt(i.toString(), 10)];
                            tempObj["" + key] = innerDirValues["" + key];
                        }
                    }
                }
                if (childSlot.props) {
                    Object.keys(childSlot.props).forEach(function (key) {
                        var propName = key.replace(/-[a-z]/g, function (e) { return e[1].toUpperCase(); });
                        if (propName) {
                            tempObj["" + propName] = childSlot.props["" + key];
                        }
                    });
                }
                if (((/[s]\b/).test(tagRef) && innerDirValues) && (!(/[s]\b/).test(tagName) || innerDirValues.length)) {
                    Array.isArray(tempObj) ? tempObj.forEach(function (item) { items["" + tagName].push(item); }) : items["" + tagName].push(tempObj);
                }
                else if (tempObj && Object.keys(tempObj).length !== 0) {
                    items["" + tagName].push(tempObj);
                }
            };
            var this_2 = this;
            for (var _i = 0, slot_1 = slot; _i < slot_1.length; _i++) {
                var childSlot = slot_1[_i];
                _loop_2(childSlot);
            }
            return items;
        },
        resolveComplexDirs: function (slots, tagObject, tagName) {
            var slot = [];
            var innerDirValues;
            slot = slots.default ? slots.default() : slots;
            var items = {};
            var _loop_3 = function (childSlot) {
                var tagRef = void 0;
                var tag = void 0;
                if (tagObject["" + tagName]) {
                    tagRef = Object.keys(tagObject["" + tagName]);
                    tag = tagRef.find(function (key) {
                        return tagObject["" + tagName]["" + key] ===
                            childSlot.type.methods.getTag().replace(/[s]\b/, "");
                    });
                    var moduleName = this_3.ej2Instances.getModuleName().toLowerCase();
                    tag = tag
                        ? tag.replace("e-", "")
                        : childSlot.type.methods.getTag().replace(moduleName === "ribbon" ? "e-ribbon-" : "e-", "");
                    if (this_3.ej2Instances.getModuleName().toLowerCase() == "diagram" && tag.indexOf('annotations') != -1) {
                        tag = 'annotations';
                    }
                }
                if (childSlot.children) {
                    innerDirValues = this_3.resolveComplexInnerDirs(childSlot.children, tagObject["" + tagName], childSlot.type.methods.getTag());
                    if (!items["" + tag]) {
                        items["" + tag] = [];
                    }
                    if (innerDirValues.length > 1) {
                        items["" + tag] = innerDirValues;
                    }
                    else {
                        items["" + tag].push(innerDirValues);
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this_3.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1) {
                    items = Object.keys(items).length == 0 && !items.length ? [] : items;
                    if (childSlot.props) {
                        items.push(childSlot.props);
                    }
                }
                else {
                    items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                }
            };
            var this_3 = this;
            for (var _i = 0, slot_2 = slot; _i < slot_2.length; _i++) {
                var childSlot = slot_2[_i];
                _loop_3(childSlot);
            }
            return items;
        },
        resolveComplexInnerDirs: function (slots, tagObject, tagName) {
            var slot = [];
            var innerDirValues;
            slot = slots.default ? slots.default() : slots;
            var items = slot.length > 1 ? [] : {};
            for (var _i = 0, slot_3 = slot; _i < slot_3.length; _i++) {
                var childSlot = slot_3[_i];
                var isRibbon = (this.ej2Instances.getModuleName().toLowerCase() == "ribbon");
                var tag = childSlot.type.methods.getTag().replace(isRibbon ? "e-ribbon-" : "e-", "");
                if (childSlot.children) {
                    innerDirValues = this.resolveMultilevelComplexInnerDirs(childSlot.children, tagObject["" + tagName], childSlot.type.methods.getTag());
                    if ((/[s]\b/).test(tag) || slot.length > 1) {
                        if ((/[s]\b/).test(tag)) {
                            items["" + tag] = !items["" + tag] ? [] : items["" + tag];
                            if (innerDirValues.length) {
                                items["" + tag] = innerDirValues;
                            }
                            else {
                                items["" + tag].push(innerDirValues);
                            }
                        }
                        else if (innerDirValues && !(isRibbon && innerDirValues.hasOwnProperty('collections'))) {
                            items.push(innerDirValues);
                        }
                    }
                    else {
                        items = innerDirValues ? innerDirValues : items;
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1 && childSlot.props) {
                    if (isRibbon && innerDirValues && innerDirValues.hasOwnProperty('collections')) {
                        innerDirValues = childSlot.props ? Object.assign(innerDirValues, childSlot.props) : innerDirValues;
                        items.push(innerDirValues);
                    }
                    else if (items.length >= 0) {
                        items.push(childSlot.props);
                    }
                    else {
                        items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                    }
                }
                else {
                    items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        resolveMultilevelComplexInnerDirs: function (slots, tagObject, tagName) {
            var slot = [];
            var innerDirValues;
            slot = slots.default ? slots.default() : slots;
            var items = slot.length > 1 ? [] : {};
            for (var _i = 0, slot_4 = slot; _i < slot_4.length; _i++) {
                var childSlot = slot_4[_i];
                var moduleName = this.ej2Instances.getModuleName().toLowerCase();
                var tag = childSlot.type.methods.getTag().replace(moduleName === "ribbon" ? "e-ribbon-" : "e-", "");
                if (childSlot.children) {
                    innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject["" + tagName], childSlot.type.methods.getTag());
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if ((/[s]\b/).test(tag)) {
                    items["" + tag] = !items["" + tag] ? [] : items["" + tag];
                    if (innerDirValues.length) {
                        items["" + tag] = innerDirValues;
                    }
                    else {
                        items["" + tag].push(innerDirValues);
                    }
                    if (childSlot.props) {
                        items["" + tag].push(childSlot.props);
                    }
                }
                else {
                    items = innerDirValues;
                    items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        getDirectiveValues: function (tagDirectives, tagMapper, tagNameMapper) {
            var keyTags = Object.keys(tagMapper);
            var dir = {};
            if (tagDirectives) {
                for (var _i = 0, tagDirectives_1 = tagDirectives; _i < tagDirectives_1.length; _i++) {
                    var tagDirective = tagDirectives_1[_i];
                    if (tagDirective.componentOptions && tagDirective.componentOptions.children && tagDirective.componentOptions.tag ||
                        (tagDirective.tag === 'e-seriescollection' && tagDirective.children)) {
                        var dirTag = tagDirective.componentOptions ? tagDirective.componentOptions.tag : tagDirective.tag;
                        dirTag = (dirTag === 'e-seriescollection') ? 'e-seriesCollection' : dirTag;
                        if (keyTags.indexOf(dirTag) !== -1) {
                            var tagName = tagNameMapper["" + dirTag] ? tagNameMapper["" + dirTag] : dirTag;
                            dir[tagName.replace('e-', '')] = [];
                            var children = tagDirective.componentOptions ? tagDirective.componentOptions.children : tagDirective.children;
                            for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
                                var tagDirChild = children_1[_a];
                                var retObj = this.getVNodeValue(tagDirChild, tagMapper["" + dirTag], tagNameMapper);
                                if (Object.keys(retObj).length !== 0) {
                                    dir[tagName.replace('e-', '')].push(retObj);
                                }
                            }
                        }
                    }
                }
            }
            return dir;
        },
        getMultiLevelDirValue: function (tagDirectories, tagKey, tagNameMapper) {
            var mulObj = {};
            for (var _i = 0, tagDirectories_1 = tagDirectories; _i < tagDirectories_1.length; _i++) {
                var tagDir = tagDirectories_1[_i];
                var key = void 0;
                var children = void 0;
                if (tagDir.componentOptions) {
                    key = tagDir.componentOptions.tag;
                    if (tagDir.componentOptions.children) {
                        children = tagDir.componentOptions.children;
                    }
                }
                else if ((tagDir.tag === 'e-markersettings' || tagDir.tag === 'e-markersetting') && tagDir.children) {
                    key = (tagDir.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                    children = tagDir.children;
                }
                if (key) {
                    var tagName = tagNameMapper["" + key] ? tagNameMapper["" + key] : key;
                    mulObj[tagName.replace('e-', '')] = [];
                    if (children) {
                        for (var _a = 0, children_2 = children; _a < children_2.length; _a++) {
                            var tagDirChild = children_2[_a];
                            var mulLevObj = this.getVNodeValue(tagDirChild, tagKey["" + key], tagNameMapper);
                            if (Object.keys(mulLevObj).length !== 0) {
                                mulObj[tagName.replace('e-', '')].push(mulLevObj);
                            }
                        }
                    }
                }
            }
            return mulObj;
        },
        getVNodeValue: function (tagDirective, tagKey, tagNameMapper) {
            var ret = {};
            if (tagDirective.componentOptions || ((tagDirective.tag === 'e-markersettings' || tagDirective.tag === 'e-markersetting') && tagDirective.context)) {
                var dirTag = void 0;
                if (tagDirective.componentOptions) {
                    dirTag = tagDirective.componentOptions.tag;
                }
                else {
                    dirTag = (tagDirective.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                }
                if (typeof tagKey === 'string' && dirTag === tagKey && tagDirective.data) {
                    ret = tagDirective.data.attrs ? this.getCamelCaseProps(tagDirective.data.attrs) : this.getCamelCaseProps(tagDirective.data);
                }
                else if (typeof tagKey === 'object') {
                    if (tagDirective.componentOptions.children && (Object.keys(tagKey).indexOf(dirTag) !== -1)) {
                        ret = this.getMultiLevelDirValue(tagDirective.componentOptions.children, tagKey["" + dirTag], tagNameMapper);
                    }
                    else if (tagDirective.children && (Object.keys(tagKey).indexOf(dirTag) !== -1) && (dirTag === 'e-markersettings' || dirTag === 'e-markersetting')) {
                        ret = this.getMultiLevelDirValue(tagDirective.children, tagKey["" + dirTag], tagNameMapper);
                    }
                    if (tagDirective.data && tagDirective.data.attrs) {
                        ret = extend(ret, this.getCamelCaseProps(tagDirective.data.attrs));
                    }
                }
            }
            return ret;
        },
        /**
         * convert kebab case directive props to camel case
         */
        getCamelCaseProps: function (props) {
            var retProps = {};
            for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                var prop = _a[_i];
                retProps[prop.replace(/-[a-z]/g, function (e) { return e[1].toUpperCase(); })] = props["" + prop];
            }
            return retProps;
        },
        dataBind: function () {
            this.ej2Instances.dataBind();
        },
        setProperties: function (arg, muteOnChange) {
            return this.ej2Instances.setProperties(arg, muteOnChange);
        },
    }
});
function getProps(options) {
    if (options === void 0) { options = {}; }
    if (options.props) {
        var _loop_4 = function (prop) {
            (options.newprops || (options.newprops = {}))["" + prop] = {};
            (options.watch || (options.watch = {}))["" + prop] = function (newVal) {
                this.ej2Instances["" + prop] = newVal;
                if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
                    this.dataBind();
                }
            };
        };
        for (var _i = 0, _a = options.props; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_4(prop);
        }
    }
    return [options.newprops, options.watch];
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// tslint:disable:no-any
var stringCompiler = getTemplateEngine();
function compile(templateElement, helper) {
    var that = this;
    return function (data, context, propName, element, root) {
        var returnEle;
        if (context) {
            var plugins = context.vueInstance ? context.vueInstance.plugins : null;
            var pid = getUniqueID("templateParentDiv");
            var id = getUniqueID("templateDiv");
            var ele = createElement("div", {
                id: pid,
                innerHTML: '<div id="' + id + '"></div>',
            });
            document.body.appendChild(ele);
            if (!isExecute && typeof templateElement === "string") {
                var vueSlot_1 = getCurrentVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot_1) {
                    // Compilation for Vue 3 slot template
                    var app = aVue.createApp({
                        render: function () {
                            return vueSlot_1["" + templateElement]({ data: data });
                        }
                    });
                    if (plugins) {
                        for (var i = 0; i < plugins.length; i++) {
                            app.use(plugins[parseInt(i.toString(), 10)]);
                        }
                    }
                    // Get values for Vue 3 slot template
                    getValues(app, context.vueInstance, root);
                    app.mount("#" + pid);
                    returnEle = ele.childNodes;
                    detach(ele);
                }
                else {
                    // Compilation for Vue 3 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            }
            else if (!isExecute) {
                // Compilation for Vue 3 functional template
                var tempObj = templateElement.call(that, {});
                var object = tempObj;
                var propsData = getValue("template.propsData", tempObj);
                var dataObj_1 = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance,
                };
                if (!object.template) {
                    object.template = object[Object.keys(object)[0]];
                }
                var templateCompRef = void 0;
                if (object.template.extends) {
                    templateCompRef = object.template.extends._context.components.template;
                }
                else {
                    templateCompRef = object.template._context.components[templateElement.name];
                    if (!templateCompRef) {
                        var key = Object.keys(object.template._context.components)[0];
                        templateCompRef = object.template._context.components["" + key];
                    }
                }
                var tempRef_1;
                if (propsData) {
                    tempRef_1 = Object.assign(templateCompRef.data(), propsData);
                }
                else {
                    tempRef_1 = Object.assign(templateCompRef.data(), dataObj_1.data);
                    if (templateCompRef.components) {
                        var objkeys = Object.keys(templateCompRef.components) || [];
                        var _loop_1 = function (objstring) {
                            var intComponent = templateCompRef.components["" + objstring];
                            if (intComponent && intComponent.data) {
                                if (!intComponent.__data)
                                    intComponent.__data = intComponent.data;
                                intComponent.data = function (proxy) { return Object.assign(intComponent.__data.call(proxy), dataObj_1.data); };
                            }
                        };
                        for (var _i = 0, objkeys_1 = objkeys; _i < objkeys_1.length; _i++) {
                            var objstring = objkeys_1[_i];
                            _loop_1(objstring);
                        }
                    }
                }
                templateCompRef.data = function () { return tempRef_1; };
                var app = aVue.createApp(templateCompRef);
                if (plugins) {
                    for (var i = 0; i < plugins.length; i++) {
                        app.use(plugins[parseInt(i.toString(), 10)]);
                    }
                }
                // Get values for Vue 3 functional template
                getValues(app, context.vueInstance, root);
                app.mount("#" + pid);
                returnEle = ele.childNodes;
                detach(ele);
            }
            else if (typeof templateElement === "string") {
                var vueSlot_2 = getVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot_2) {
                    // Get provide values for Vue 2 slot template
                    var provided_1 = {};
                    var getProvideValues_1 = function (vueinstance) {
                        if (vueinstance['$parent'])
                            getProvideValues_1(vueinstance.$parent);
                        if (vueinstance['_provided'] && Object.keys(vueinstance['_provided']).length > 0) {
                            provided_1 = __assign({}, provided_1, vueinstance._provided);
                        }
                    };
                    var vueInstance = context.vueInstance ? context.vueInstance : ((root && root.vueInstance) ? root.vueInstance : null);
                    if (vueInstance) {
                        getProvideValues_1(vueInstance);
                    }
                    // Compilation for Vue 2 slot template
                    var vueTemplate = new aVue({
                        provide: __assign({}, provided_1),
                        render: function () {
                            return vueSlot_2["" + templateElement]({ data: data });
                        }
                    });
                    vueTemplate.$mount("#" + id);
                    returnEle = ele.childNodes;
                    detach(ele);
                }
                else {
                    // Compilation for Vue 2 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            }
            else {
                // Compilation for Vue 2 functional template
                var tempObj = templateElement.call(that, {});
                var templateFunction = tempObj.template;
                var propsData = getValue("template.propsData", tempObj);
                var dataObj = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance,
                };
                if (propsData) {
                    templateFunction = tempObj.template.extends;
                    dataObj.propsData = propsData;
                }
                if (typeof templateFunction !== "function") {
                    templateFunction = aVue.extend(templateFunction);
                }
                var templateVue = new templateFunction(dataObj);
                // let templateVue = new Vue(tempObj.template);
                // templateVue.$data.data = extend(tempObj.data, data);
                templateVue.$mount("#" + id);
                returnEle = ele.childNodes;
                if (context.vueInstance) {
                    var templateInstance = context.vueInstance.templateCollection;
                    if (!templateInstance) {
                        context.vueInstance.templateCollection = {};
                        templateInstance = context.vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance["" + propName]) {
                            templateInstance["" + propName] = [];
                        }
                        templateInstance["" + propName].push(returnEle[0]);
                    }
                }
                detach(ele);
            }
        }
        return returnEle || [];
    };
}
setTemplateEngine({ compile: compile });
function getValues(app, cInstance, root) {
    var vueInstance = cInstance ? cInstance : ((root && root.vueInstance) ? root.vueInstance : null);
    if (!vueInstance) {
        return;
    }
    // Get globally defined variables.
    var globalVariables = ['components', 'mixins', 'provides'];
    for (var i = 0; i < globalVariables.length; i++) {
        var gVariable = globalVariables[i];
        if (app['_context'][gVariable] && vueInstance['$']['appContext'][gVariable]) {
            app['_context'][gVariable] = vueInstance['$']['appContext'][gVariable];
        }
    }
    // Get provide value from child component.
    var provided = {};
    var getProvideValue = function (vueinstance) {
        if (vueinstance['$'] && vueinstance['$']['parent'])
            getProvideValue(vueinstance.$.parent);
        if (vueinstance['provides'] && Object.keys(vueinstance['provides']).length > 0) {
            provided = __assign({}, provided, vueinstance.provides);
        }
    };
    getProvideValue(vueInstance);
    if (app['_context']['provides']) {
        app._context.provides = __assign({}, app._context.provides, provided);
    }
    // Get globally defined properties.
    if (app['_context']['config']['globalProperties'] && vueInstance['$']['appContext']['config']['globalProperties']) {
        app['_context']['config']['globalProperties'] = vueInstance['$']['appContext']['config']['globalProperties'];
    }
}
// Get the Vue2 slot template from the root or current Vue component.
function getVueSlot(vueInstance, templateElement, root) {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    var instance = (root && root.vueInstance) ? root.vueInstance : vueInstance;
    return getVueChildSlot(instance, templateElement);
}
function getVueChildSlot(vueInstance, templateElement) {
    if (!vueInstance) {
        return undefined;
    }
    var slots = vueInstance.$slots;
    var scopedSlots = vueInstance.$scopedSlots;
    var vSlots = vueInstance.scopedSlots;
    var children = vueInstance.children;
    if (scopedSlots && scopedSlots["" + templateElement]) {
        return scopedSlots;
    }
    else if (slots && slots.default) {
        var childSlots = slots.default;
        for (var i = 0; i < childSlots.length; i++) {
            var slot = getVueChildSlot(getSlot(childSlots[parseInt(i.toString(), 10)]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    else if (vSlots && vSlots["" + templateElement]) {
        return vSlots;
    }
    else if (children) {
        for (var i = 0; i < children.length; i++) {
            var slot = getVueChildSlot(getSlot(children[parseInt(i.toString(), 10)]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}
function getSlot(vnode) {
    var slot = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions :
        (!vnode.data && (vnode.tag === 'e-markersettings' || vnode.tag === 'e-markersetting')) ? vnode : vnode.data;
    return vnode.componentInstance ? vnode.componentInstance : slot;
}
// Get the Vue3 slot template from the root or current Vue component.
function getCurrentVueSlot(vueInstance, templateElement, root) {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    var slots = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
    return getChildVueSlot(slots, templateElement);
}
function getChildVueSlot(slots, templateElement) {
    if (slots && slots["" + templateElement]) {
        return slots;
    }
    else if (slots && slots.default) {
        var childSlots = slots.default();
        for (var i = 0; i < childSlots.length; i++) {
            var slot = getChildVueSlot(childSlots[parseInt(i.toString(), 10)].children, templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}

/**
 * index for component base
 */

export { isExecute, aVue, gh, vueDefineComponent, ComponentBase, getProps, compile };
//# sourceMappingURL=ej2-vue-base.es5.js.map

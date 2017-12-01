﻿! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e, t) {
    function i() {
        var e, t, i, s, a, n, h, r;
        if (t = (new Date).toString(), i = (null != (h = t.split("(")[1]) ? h.slice(0, -1) : 0) || t.split(" "), i instanceof Array) {
            n = [];
            for (var s = 0, a = i.length; a > s; s++) r = i[s], ((e = null !== (h = r.match(/\b[A-Z]+\b/))) ? h[0] : 0) && n.push(e);
            i = n.pop()
        }
        return i
    }

    function s() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    "indexOf" in Array.prototype || (Array.prototype.indexOf = function(e, i) {
        i === t && (i = 0), 0 > i && (i += this.length), 0 > i && (i = 0);
        for (var s = this.length; s > i; i++)
            if (i in this && this[i] === e) return i;
        return -1
    });
    var a = function(s, a) {
        var n = this;
        this.element = e(s), this.container = a.container || "body", this.language = a.language || this.element.data("date-language") || "en", this.language = this.language in h ? this.language : this.language.split("-")[0], this.language = this.language in h ? this.language : "en", this.isRTL = h[this.language].rtl || !1, this.formatType = a.formatType || this.element.data("format-type") || "standard", this.format = r.parseFormat(a.format || this.element.data("date-format") || h[this.language].format || r.getDefaultFormat(this.formatType, "input"), this.formatType), this.isInline = !1, this.isVisible = !1, this.isInput = this.element.is("input"), this.fontAwesome = a.fontAwesome || this.element.data("font-awesome") || !1, this.bootcssVer = a.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2), this.component = this.element.is(".date") ? 3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent() : !1, this.componentReset = this.element.is(".date") ? 3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent() : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.linkField = a.linkField || this.element.data("link-field") || !1, this.linkFormat = r.parseFormat(a.linkFormat || this.element.data("link-format") || r.getDefaultFormat(this.formatType, "link"), this.formatType), this.minuteStep = a.minuteStep || this.element.data("minute-step") || 5, this.pickerPosition = a.pickerPosition || this.element.data("picker-position") || "bottom-right", this.showMeridian = a.showMeridian || this.element.data("show-meridian") || !1, this.initialDate = a.initialDate || new Date, this.zIndex = a.zIndex || this.element.data("z-index") || t, this.title = "undefined" == typeof a.title ? !1 : a.title, this.timezone = a.timezone || i(), this.icons = {
            leftArrow: this.fontAwesome ? "fa-angle-left" : 3 === this.bootcssVer ? "glyphicon-arrow-left" : "icon-arrow-left",
            rightArrow: this.fontAwesome ? "fa-angle-right" : 3 === this.bootcssVer ? "glyphicon-arrow-right" : "icon-arrow-right"
        }, this.icontype = this.fontAwesome ? "fa" : "glyphicon", this._attachEvents(), this.clickedOutside = function(t) {
            0 === e(t.target).closest(".datetimepicker").length && n.hide()
        }, this.formatViewType = "datetime", "formatViewType" in a ? this.formatViewType = a.formatViewType : "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")), this.minView = 0, "minView" in a ? this.minView = a.minView : "minView" in this.element.data() && (this.minView = this.element.data("min-view")), this.minView = r.convertViewMode(this.minView), this.maxView = r.modes.length - 1, "maxView" in a ? this.maxView = a.maxView : "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")), this.maxView = r.convertViewMode(this.maxView), this.wheelViewModeNavigation = !1, "wheelViewModeNavigation" in a ? this.wheelViewModeNavigation = a.wheelViewModeNavigation : "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")), this.wheelViewModeNavigationInverseDirection = !1, "wheelViewModeNavigationInverseDirection" in a ? this.wheelViewModeNavigationInverseDirection = a.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")), this.wheelViewModeNavigationDelay = 100, "wheelViewModeNavigationDelay" in a ? this.wheelViewModeNavigationDelay = a.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")), this.startViewMode = 2, "startView" in a ? this.startViewMode = a.startView : "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")), this.startViewMode = r.convertViewMode(this.startViewMode), this.viewMode = this.startViewMode, this.viewSelect = this.minView, "viewSelect" in a ? this.viewSelect = a.viewSelect : "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")), this.viewSelect = r.convertViewMode(this.viewSelect), this.forceParse = !0, "forceParse" in a ? this.forceParse = a.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse"));
        for (var o = 3 === this.bootcssVer ? r.templateV3 : r.template; - 1 !== o.indexOf("{iconType}");) o = o.replace("{iconType}", this.icontype);
        for (; - 1 !== o.indexOf("{leftArrow}");) o = o.replace("{leftArrow}", this.icons.leftArrow);
        for (; - 1 !== o.indexOf("{rightArrow}");) o = o.replace("{rightArrow}", this.icons.rightArrow);
        if (this.picker = e(o).appendTo(this.isInline ? this.element : this.container).on({
                click: e.proxy(this.click, this),
                mousedown: e.proxy(this.mousedown, this)
            }), this.wheelViewModeNavigation && (e.fn.mousewheel ? this.picker.on({
                mousewheel: e.proxy(this.mousewheel, this)
            }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")), this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu"), this.isRTL) {
            this.picker.addClass("datetimepicker-rtl");
            var d = 3 === this.bootcssVer ? ".prev span, .next span" : ".prev i, .next i";
            this.picker.find(d).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
        }
        e(document).on("mousedown touchend", this.clickedOutside), this.autoclose = !1, "autoclose" in a ? this.autoclose = a.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in a ? this.keyboardNavigation = a.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.todayBtn = a.todayBtn || this.element.data("date-today-btn") || !1, this.clearBtn = a.clearBtn || this.element.data("date-clear-btn") || !1, this.todayHighlight = a.todayHighlight || this.element.data("date-today-highlight") || !1, this.weekStart = 0, "undefined" != typeof a.weekStart ? this.weekStart = a.weekStart : "undefined" != typeof this.element.data("date-weekstart") ? this.weekStart = this.element.data("date-weekstart") : "undefined" != typeof h[this.language].weekStart && (this.weekStart = h[this.language].weekStart), this.weekStart = this.weekStart % 7, this.weekEnd = (this.weekStart + 6) % 7, this.onRenderDay = function(e) {
            var t = (a.onRenderDay || function() {
                return []
            })(e);
            "string" == typeof t && (t = [t]);
            var i = ["day"];
            return i.concat(t ? t : [])
        }, this.onRenderHour = function(e) {
            var t = (a.onRenderHour || function() {
                    return []
                })(e),
                i = ["hour"];
            return "string" == typeof t && (t = [t]), i.concat(t ? t : [])
        }, this.onRenderMinute = function(e) {
            var t = (a.onRenderMinute || function() {
                    return []
                })(e),
                i = ["minute"];
            return "string" == typeof t && (t = [t]), e < this.startDate || e > this.endDate ? i.push("disabled") : Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(e.getUTCMinutes() / this.minuteStep) && i.push("active"), i.concat(t ? t : [])
        }, this.onRenderYear = function(e) {
            var t = (a.onRenderYear || function() {
                    return []
                })(e),
                i = ["year"];
            "string" == typeof t && (t = [t]), this.date.getUTCFullYear() === e.getUTCFullYear() && i.push("active");
            var s = e.getUTCFullYear(),
                n = this.endDate.getUTCFullYear();
            return (e < this.startDate || s > n) && i.push("disabled"), i.concat(t ? t : [])
        }, this.onRenderMonth = function(e) {
            var t = (a.onRenderMonth || function() {
                    return []
                })(e),
                i = ["month"];
            return "string" == typeof t && (t = [t]), i.concat(t ? t : [])
        }, this.startDate = new Date(-8639968443048e3), this.endDate = new Date(8639968443048e3), this.datesDisabled = [], this.daysOfWeekDisabled = [], this.setStartDate(a.startDate || this.element.data("date-startdate")), this.setEndDate(a.endDate || this.element.data("date-enddate")), this.setDatesDisabled(a.datesDisabled || this.element.data("date-dates-disabled")), this.setDaysOfWeekDisabled(a.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.setMinutesDisabled(a.minutesDisabled || this.element.data("date-minute-disabled")), this.setHoursDisabled(a.hoursDisabled || this.element.data("date-hour-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show()
    };
    a.prototype = {
        constructor: a,
        _events: [],
        _attachEvents: function() {
            this._detachEvents(), this.isInput ? this._events = [
                [this.element, {
                    focus: e.proxy(this.show, this),
                    keyup: e.proxy(this.update, this),
                    keydown: e.proxy(this.keydown, this)
                }]
            ] : this.component && this.hasInput ? (this._events = [
                [this.element.find("input"), {
                    focus: e.proxy(this.show, this),
                    keyup: e.proxy(this.update, this),
                    keydown: e.proxy(this.keydown, this)
                }],
                [this.component, {
                    click: e.proxy(this.show, this)
                }]
            ], this.componentReset && this._events.push([this.componentReset, {
                click: e.proxy(this.reset, this)
            }])) : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: e.proxy(this.show, this)
                }]
            ];
            for (var t, i, s = 0; s < this._events.length; s++) t = this._events[s][0], i = this._events[s][1], t.on(i)
        },
        _detachEvents: function() {
            for (var e, t, i = 0; i < this._events.length; i++) e = this._events[i][0], t = this._events[i][1], e.off(t);
            this._events = []
        },
        show: function(t) {
            this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.forceParse && this.update(), this.place(), e(window).on("resize", e.proxy(this.place, this)), t && (t.stopPropagation(), t.preventDefault()), this.isVisible = !0, this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function() {
            this.isVisible && (this.isInline || (this.picker.hide(), e(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || e(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
                type: "hide",
                date: this.date
            })))
        },
        remove: function() {
            this._detachEvents(), e(document).off("mousedown", this.clickedOutside), this.picker.remove(), delete this.picker, delete this.element.data().datetimepicker
        },
        getDate: function() {
            var e = this.getUTCDate();
            return null === e ? null : new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
        },
        getUTCDate: function() {
            return this.date
        },
        getInitialDate: function() {
            return this.initialDate
        },
        setInitialDate: function(e) {
            this.initialDate = e
        },
        setDate: function(e) {
            this.setUTCDate(new Date(e.getTime() - 6e4 * e.getTimezoneOffset()))
        },
        setUTCDate: function(e) {
            e >= this.startDate && e <= this.endDate ? (this.date = e, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
                type: "outOfRange",
                date: e,
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
        setFormat: function(e) {
            this.format = r.parseFormat(e, this.formatType);
            var t;
            this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val() && this.setValue()
        },
        setValue: function() {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t) : (this.component && this.element.find("input").val(t), this.element.data("date", t)), this.linkField && e("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
        },
        getFormattedDate: function(e) {
            return e = e || this.format, r.formatDate(this.date, e, this.language, this.formatType, this.timezone)
        },
        setStartDate: function(e) {
            this.startDate = e || this.startDate, 8639968443048e3 !== this.startDate.valueOf() && (this.startDate = r.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
        },
        setEndDate: function(e) {
            this.endDate = e || this.endDate, 8639968443048e3 !== this.endDate.valueOf() && (this.endDate = r.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
        },
        setDatesDisabled: function(t) {
            this.datesDisabled = t || [], e.isArray(this.datesDisabled) || (this.datesDisabled = this.datesDisabled.split(/,\s*/));
            var i = this;
            this.datesDisabled = e.map(this.datesDisabled, function(e) {
                return r.parseDate(e, i.format, i.language, i.formatType, i.timezone).toDateString()
            }), this.update(), this.updateNavArrows()
        },
        setTitle: function(e, t) {
            return this.picker.find(e).find("th:eq(1)").text(this.title === !1 ? t : this.title)
        },
        setDaysOfWeekDisabled: function(t) {
            this.daysOfWeekDisabled = t || [], e.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = e.map(this.daysOfWeekDisabled, function(e) {
                return parseInt(e, 10)
            }), this.update(), this.updateNavArrows()
        },
        setMinutesDisabled: function(t) {
            this.minutesDisabled = t || [], e.isArray(this.minutesDisabled) || (this.minutesDisabled = this.minutesDisabled.split(/,\s*/)), this.minutesDisabled = e.map(this.minutesDisabled, function(e) {
                return parseInt(e, 10)
            }), this.update(), this.updateNavArrows()
        },
        setHoursDisabled: function(t) {
            this.hoursDisabled = t || [], e.isArray(this.hoursDisabled) || (this.hoursDisabled = this.hoursDisabled.split(/,\s*/)), this.hoursDisabled = e.map(this.hoursDisabled, function(e) {
                return parseInt(e, 10)
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                if (!this.zIndex) {
                    var t = 0;
                    e("div").each(function() {
                        var i = parseInt(e(this).css("zIndex"), 10);
                        i > t && (t = i)
                    }), this.zIndex = t + 10
                }
                var i, s, a, n;
                n = this.container instanceof e ? this.container.offset() : e(this.container).offset(), this.component ? (i = this.component.offset(), a = i.left, ("bottom-left" === this.pickerPosition || "top-left" === this.pickerPosition) && (a += this.component.outerWidth() - this.picker.outerWidth())) : (i = this.element.offset(), a = i.left, ("bottom-left" === this.pickerPosition || "top-left" === this.pickerPosition) && (a += this.element.outerWidth() - this.picker.outerWidth()));
                var h = document.body.clientWidth || window.innerWidth;
                a + 220 > h && (a = h - 220), s = "top-left" === this.pickerPosition || "top-right" === this.pickerPosition ? i.top - this.picker.outerHeight() : i.top + this.height, s -= n.top, a -= n.left, this.picker.css({
                    top: s,
                    left: a,
                    zIndex: this.zIndex
                })
            }
        },
        hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",
        update: function() {
            var e, t = !1;
            arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (e = arguments[0], t = !0) : (e = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate, "string" == typeof e && (e = e.replace(/^\s+|\s+$/g, ""))), e || (e = new Date, t = !1), "string" == typeof e && (new RegExp(this.hour_minute).test(e) || new RegExp(this.hour_minute + ":[0-5][0-9]").test(e)) && (e = this.getDate()), this.date = r.parseDate(e, this.format, this.language, this.formatType, this.timezone), t && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
        },
        fillDow: function() {
            for (var e = this.weekStart, t = "<tr>"; e < this.weekStart + 7;) t += '<th class="dow">' + h[this.language].daysMin[e++ % 7] + "</th>";
            t += "</tr>", this.picker.find(".datetimepicker-days thead").append(t)
        },
        fillMonths: function() {
            for (var e = "", t = new Date(this.viewDate), i = 0; 12 > i; i++) {
                t.setUTCMonth(i);
                var s = this.onRenderMonth(t);
                e += '<span class="' + s.join(" ") + '">' + h[this.language].monthsShort[i] + "</span>"
            }
            this.picker.find(".datetimepicker-months td").html(e)
        },
        fill: function() {
            if (this.date && this.viewDate) {
                var t = new Date(this.viewDate),
                    i = t.getUTCFullYear(),
                    a = t.getUTCMonth(),
                    o = t.getUTCDate(),
                    d = t.getUTCHours(),
                    l = this.startDate.getUTCFullYear(),
                    u = this.startDate.getUTCMonth(),
                    c = this.endDate.getUTCFullYear(),
                    p = this.endDate.getUTCMonth() + 1,
                    m = new s(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
                    f = new Date;
                if (this.setTitle(".datetimepicker-days", h[this.language].months[a] + " " + i), "time" === this.formatViewType) {
                    var g = this.getFormattedDate();
                    this.setTitle(".datetimepicker-hours", g), this.setTitle(".datetimepicker-minutes", g)
                } else this.setTitle(".datetimepicker-hours", o + " " + h[this.language].months[a] + " " + i), this.setTitle(".datetimepicker-minutes", o + " " + h[this.language].months[a] + " " + i);
                this.picker.find("tfoot th.today").text(h[this.language].today || h.en.today).toggle(this.todayBtn !== !1), this.picker.find("tfoot th.clear").text(h[this.language].clear || h.en.clear).toggle(this.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var v = s(i, a - 1, 28, 0, 0, 0, 0),
                    w = r.getDaysInMonth(v.getUTCFullYear(), v.getUTCMonth());
                v.setUTCDate(w), v.setUTCDate(w - (v.getUTCDay() - this.weekStart + 7) % 7);
                var D = new Date(v);
                D.setUTCDate(D.getUTCDate() + 42), D = D.valueOf();
                for (var y, T = []; v.valueOf() < D;) v.getUTCDay() === this.weekStart && T.push("<tr>"), y = this.onRenderDay(v), v.getUTCFullYear() < i || v.getUTCFullYear() === i && v.getUTCMonth() < a ? y.push("old") : (v.getUTCFullYear() > i || v.getUTCFullYear() === i && v.getUTCMonth() > a) && y.push("new"), this.todayHighlight && v.getUTCFullYear() === f.getFullYear() && v.getUTCMonth() === f.getMonth() && v.getUTCDate() === f.getDate() && y.push("today"), v.valueOf() === m && y.push("active"), (v.valueOf() + 864e5 <= this.startDate || v.valueOf() > this.endDate || -1 !== e.inArray(v.getUTCDay(), this.daysOfWeekDisabled) || -1 !== e.inArray(v.toDateString(), this.datesDisabled)) && y.push("disabled"), T.push('<td class="' + y.join(" ") + '">' + v.getUTCDate() + "</td>"), v.getUTCDay() === this.weekEnd && T.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1);
                this.picker.find(".datetimepicker-days tbody").empty().append(T.join("")), T = [];
                var C = "",
                    k = "",
                    M = "",
                    b = this.hoursDisabled || [];
                t = new Date(this.viewDate);
                for (var U = 0; 24 > U; U++) {
                    t.setUTCHours(U), y = this.onRenderHour(t), -1 !== b.indexOf(U) && y.push("disabled");
                    var V = s(i, a, o, U);
                    V.valueOf() + 36e5 <= this.startDate || V.valueOf() > this.endDate ? y.push("disabled") : d === U && y.push("active"), this.showMeridian && 2 === h[this.language].meridiem.length ? (k = 12 > U ? h[this.language].meridiem[0] : h[this.language].meridiem[1], k !== M && ("" !== M && T.push("</fieldset>"), T.push('<fieldset class="hour"><legend>' + k.toUpperCase() + "</legend>")), M = k, C = U % 12 ? U % 12 : 12, 12 > U ? y.push("hour_am") : y.push("hour_pm"), T.push('<span class="' + y.join(" ") + '">' + C + "</span>"), 23 === U && T.push("</fieldset>")) : (C = U + ":00", T.push('<span class="' + y.join(" ") + '">' + C + "</span>"))
                }
                this.picker.find(".datetimepicker-hours td").html(T.join("")), T = [], C = "", k = "", M = "";
                var S = this.minutesDisabled || [];
                t = new Date(this.viewDate);
                for (var U = 0; 60 > U; U += this.minuteStep) - 1 === S.indexOf(U) && (t.setUTCMinutes(U), t.setUTCSeconds(0), y = this.onRenderMinute(t), this.showMeridian && 2 === h[this.language].meridiem.length ? (k = 12 > d ? h[this.language].meridiem[0] : h[this.language].meridiem[1], k !== M && ("" !== M && T.push("</fieldset>"), T.push('<fieldset class="minute"><legend>' + k.toUpperCase() + "</legend>")), M = k, C = d % 12 ? d % 12 : 12, T.push('<span class="' + y.join(" ") + '">' + C + ":" + (10 > U ? "0" + U : U) + "</span>"), 59 === U && T.push("</fieldset>")) : (C = U + ":00", T.push('<span class="' + y.join(" ") + '">' + d + ":" + (10 > U ? "0" + U : U) + "</span>")));
                this.picker.find(".datetimepicker-minutes td").html(T.join(""));
                var F = this.date.getUTCFullYear(),
                    x = this.setTitle(".datetimepicker-months", i).end().find(".month").removeClass("active");
                F === i && x.eq(this.date.getUTCMonth()).addClass("active"), (l > i || i > c) && x.addClass("disabled"), i === l && x.slice(0, u).addClass("disabled"), i === c && x.slice(p).addClass("disabled"), T = "", i = 10 * parseInt(i / 10, 10);
                var H = this.setTitle(".datetimepicker-years", i + "-" + (i + 9)).end().find("td");
                i -= 1, t = new Date(this.viewDate);
                for (var U = -1; 11 > U; U++) t.setUTCFullYear(i), y = this.onRenderYear(t), (-1 === U || 10 === U) && y.push(n), T += '<span class="' + y.join(" ") + '">' + i + "</span>", i += 1;
                H.html(T), this.place()
            }
        },
        updateNavArrows: function() {
            var e = new Date(this.viewDate),
                t = e.getUTCFullYear(),
                i = e.getUTCMonth(),
                s = e.getUTCDate(),
                a = e.getUTCHours();
            switch (this.viewMode) {
                case 0:
                    t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() && a <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() && a >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 1:
                    t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 2:
                    t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 3:
                case 4:
                    t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    })
            }
        },
        mousewheel: function(t) {
            if (t.preventDefault(), t.stopPropagation(), !this.wheelPause) {
                this.wheelPause = !0;
                var i = t.originalEvent,
                    s = i.wheelDelta,
                    a = s > 0 ? 1 : 0 === s ? 0 : -1;
                this.wheelViewModeNavigationInverseDirection && (a = -a), this.showMode(a), setTimeout(e.proxy(function() {
                    this.wheelPause = !1
                }, this), this.wheelViewModeNavigationDelay)
            }
        },
        click: function(t) {
            t.stopPropagation(), t.preventDefault();
            var i = e(t.target).closest("span, td, th, legend");
            if (i.is("." + this.icontype) && (i = e(i).parent().closest("span, td, th, legend")), 1 === i.length) {
                if (i.is(".disabled")) return void this.element.trigger({
                    type: "outOfRange",
                    date: this.viewDate,
                    startDate: this.startDate,
                    endDate: this.endDate
                });
                switch (i[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (i[0].className) {
                            case "switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var a = r.modes[this.viewMode].navStep * ("prev" === i[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveHour(this.viewDate, a);
                                        break;
                                    case 1:
                                        this.viewDate = this.moveDate(this.viewDate, a);
                                        break;
                                    case 2:
                                        this.viewDate = this.moveMonth(this.viewDate, a);
                                        break;
                                    case 3:
                                    case 4:
                                        this.viewDate = this.moveYear(this.viewDate, a)
                                }
                                this.fill(), this.element.trigger({
                                    type: i[0].className + ":" + this.convertViewModeText(this.viewMode),
                                    date: this.viewDate,
                                    startDate: this.startDate,
                                    endDate: this.endDate
                                });
                                break;
                            case "clear":
                                this.reset(), this.autoclose && this.hide();
                                break;
                            case "today":
                                var n = new Date;
                                n = s(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), 0), n < this.startDate ? n = this.startDate : n > this.endDate && (n = this.endDate), this.viewMode = this.startViewMode, this.showMode(0), this._setDate(n), this.fill(), this.autoclose && this.hide()
                        }
                        break;
                    case "span":
                        if (!i.is(".disabled")) {
                            var h = this.viewDate.getUTCFullYear(),
                                o = this.viewDate.getUTCMonth(),
                                d = this.viewDate.getUTCDate(),
                                l = this.viewDate.getUTCHours(),
                                u = this.viewDate.getUTCMinutes(),
                                c = this.viewDate.getUTCSeconds();
                            if (i.is(".month") ? (this.viewDate.setUTCDate(1), o = i.parent().find("span").index(i), d = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(o), this.element.trigger({
                                    type: "changeMonth",
                                    date: this.viewDate
                                }), this.viewSelect >= 3 && this._setDate(s(h, o, d, l, u, c, 0))) : i.is(".year") ? (this.viewDate.setUTCDate(1), h = parseInt(i.text(), 10) || 0, this.viewDate.setUTCFullYear(h), this.element.trigger({
                                    type: "changeYear",
                                    date: this.viewDate
                                }), this.viewSelect >= 4 && this._setDate(s(h, o, d, l, u, c, 0))) : i.is(".hour") ? (l = parseInt(i.text(), 10) || 0, (i.hasClass("hour_am") || i.hasClass("hour_pm")) && (12 === l && i.hasClass("hour_am") ? l = 0 : 12 !== l && i.hasClass("hour_pm") && (l += 12)), this.viewDate.setUTCHours(l), this.element.trigger({
                                    type: "changeHour",
                                    date: this.viewDate
                                }), this.viewSelect >= 1 && this._setDate(s(h, o, d, l, u, c, 0))) : i.is(".minute") && (u = parseInt(i.text().substr(i.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(u), this.element.trigger({
                                    type: "changeMinute",
                                    date: this.viewDate
                                }), this.viewSelect >= 0 && this._setDate(s(h, o, d, l, u, c, 0))), 0 !== this.viewMode) {
                                var p = this.viewMode;
                                this.showMode(-1), this.fill(), p === this.viewMode && this.autoclose && this.hide()
                            } else this.fill(), this.autoclose && this.hide()
                        }
                        break;
                    case "td":
                        if (i.is(".day") && !i.is(".disabled")) {
                            var d = parseInt(i.text(), 10) || 1,
                                h = this.viewDate.getUTCFullYear(),
                                o = this.viewDate.getUTCMonth(),
                                l = this.viewDate.getUTCHours(),
                                u = this.viewDate.getUTCMinutes(),
                                c = this.viewDate.getUTCSeconds();
                            i.is(".old") ? 0 === o ? (o = 11, h -= 1) : o -= 1 : i.is(".new") && (11 === o ? (o = 0, h += 1) : o += 1), this.viewDate.setUTCFullYear(h), this.viewDate.setUTCMonth(o, d), this.element.trigger({
                                type: "changeDay",
                                date: this.viewDate
                            }), this.viewSelect >= 2 && this._setDate(s(h, o, d, l, u, c, 0))
                        }
                        var p = this.viewMode;
                        this.showMode(-1), this.fill(), p === this.viewMode && this.autoclose && this.hide()
                }
            }
        },
        _setDate: function(e, t) {
            t && "date" !== t || (this.date = e), t && "view" !== t || (this.viewDate = e), this.fill(), this.setValue();
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), this.element.trigger({
                type: "changeDate",
                date: this.getDate()
            }), null === e && (this.date = this.viewDate)
        },
        moveMinute: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCMinutes(i.getUTCMinutes() + t * this.minuteStep), i
        },
        moveHour: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCHours(i.getUTCHours() + t), i
        },
        moveDate: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCDate(i.getUTCDate() + t), i
        },
        moveMonth: function(e, t) {
            if (!t) return e;
            var i, s, a = new Date(e.valueOf()),
                n = a.getUTCDate(),
                h = a.getUTCMonth(),
                r = Math.abs(t);
            if (t = t > 0 ? 1 : -1, 1 === r) s = -1 === t ? function() {
                return a.getUTCMonth() === h
            } : function() {
                return a.getUTCMonth() !== i
            }, i = h + t, a.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
            else {
                for (var o = 0; r > o; o++) a = this.moveMonth(a, t);
                i = a.getUTCMonth(), a.setUTCDate(n), s = function() {
                    return i !== a.getUTCMonth()
                }
            }
            for (; s();) a.setUTCDate(--n), a.setUTCMonth(i);
            return a
        },
        moveYear: function(e, t) {
            return this.moveMonth(e, 12 * t)
        },
        dateWithinRange: function(e) {
            return e >= this.startDate && e <= this.endDate
        },
        keydown: function(e) {
            if (this.picker.is(":not(:visible)")) return void(27 === e.keyCode && this.show());
            var t, i, s, a = !1;
            switch (e.keyCode) {
                case 27:
                    this.hide(), e.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.keyboardNavigation) break;
                    t = 37 === e.keyCode ? -1 : 1;
                    var n = this.viewMode;
                    e.ctrlKey ? n += 2 : e.shiftKey && (n += 1), 4 === n ? (i = this.moveYear(this.date, t), s = this.moveYear(this.viewDate, t)) : 3 === n ? (i = this.moveMonth(this.date, t), s = this.moveMonth(this.viewDate, t)) : 2 === n ? (i = this.moveDate(this.date, t), s = this.moveDate(this.viewDate, t)) : 1 === n ? (i = this.moveHour(this.date, t), s = this.moveHour(this.viewDate, t)) : 0 === n && (i = this.moveMinute(this.date, t), s = this.moveMinute(this.viewDate, t)), this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), e.preventDefault(), a = !0);
                    break;
                case 38:
                case 40:
                    if (!this.keyboardNavigation) break;
                    t = 38 === e.keyCode ? -1 : 1, n = this.viewMode, e.ctrlKey ? n += 2 : e.shiftKey && (n += 1), 4 === n ? (i = this.moveYear(this.date, t), s = this.moveYear(this.viewDate, t)) : 3 === n ? (i = this.moveMonth(this.date, t), s = this.moveMonth(this.viewDate, t)) : 2 === n ? (i = this.moveDate(this.date, 7 * t), s = this.moveDate(this.viewDate, 7 * t)) : 1 === n ? this.showMeridian ? (i = this.moveHour(this.date, 6 * t), s = this.moveHour(this.viewDate, 6 * t)) : (i = this.moveHour(this.date, 4 * t), s = this.moveHour(this.viewDate, 4 * t)) : 0 === n && (i = this.moveMinute(this.date, 4 * t), s = this.moveMinute(this.viewDate, 4 * t)), this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), e.preventDefault(), a = !0);
                    break;
                case 13:
                    if (0 !== this.viewMode) {
                        var h = this.viewMode;
                        this.showMode(-1), this.fill(), h === this.viewMode && this.autoclose && this.hide()
                    } else this.fill(), this.autoclose && this.hide();
                    e.preventDefault();
                    break;
                case 9:
                    this.hide()
            }
            if (a) {
                var r;
                this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change(), this.element.trigger({
                    type: "changeDate",
                    date: this.getDate()
                })
            }
        },
        showMode: function(e) {
            if (e) {
                var t = Math.max(0, Math.min(r.modes.length - 1, this.viewMode + e));
                t >= this.minView && t <= this.maxView && (this.element.trigger({
                    type: "changeMode",
                    date: this.viewDate,
                    oldViewMode: this.viewMode,
                    newViewMode: t
                }), this.viewMode = t)
            }
            this.picker.find(">div").hide().filter(".datetimepicker-" + r.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        },
        reset: function() {
            this._setDate(null, "date")
        },
        convertViewModeText: function(e) {
            switch (e) {
                case 4:
                    return "decade";
                case 3:
                    return "year";
                case 2:
                    return "month";
                case 1:
                    return "day";
                case 0:
                    return "hour"
            }
        }
    };
    var n = e.fn.datetimepicker;
    e.fn.datetimepicker = function(i) {
        var s = Array.apply(null, arguments);
        s.shift();
        var n;
        return this.each(function() {
            var h = e(this),
                r = h.data("datetimepicker"),
                o = "object" == typeof i && i;
            return r || h.data("datetimepicker", r = new a(this, e.extend({}, e.fn.datetimepicker.defaults, o))), "string" == typeof i && "function" == typeof r[i] && (n = r[i].apply(r, s), n !== t) ? !1 : void 0
        }), n !== t ? n : this
    }, e.fn.datetimepicker.defaults = {}, e.fn.datetimepicker.Constructor = a;
    var h = e.fn.datetimepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridiem: ["am", "pm"],
                suffix: ["st", "nd", "rd", "th"],
                today: "Today",
                clear: "Clear"
            }
        },
        r = {
            modes: [{
                clsName: "minutes",
                navFnc: "Hours",
                navStep: 1
            }, {
                clsName: "hours",
                navFnc: "Date",
                navStep: 1
            }, {
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            },
            getDaysInMonth: function(e, t) {
                return [31, r.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
            },
            getDefaultFormat: function(e, t) {
                if ("standard" === e) return "input" === t ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
                if ("php" === e) return "input" === t ? "Y-m-d H:i" : "Y-m-d H:i:s";
                throw new Error("Invalid format type.")
            },
            validParts: function(e) {
                if ("standard" === e) return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
                if ("php" === e) return /[dDjlNwzFmMnStyYaABgGhHis]/g;
                throw new Error("Invalid format type.")
            },
            nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
            parseFormat: function(e, t) {
                var i = e.replace(this.validParts(t), "\x00").split("\x00"),
                    s = e.match(this.validParts(t));
                if (!i || !i.length || !s || 0 === s.length) throw new Error("Invalid date format.");
                return {
                    separators: i,
                    parts: s
                }
            },
            parseDate: function(t, i, n, r, o) {
                if (t instanceof Date) {
                    var d = new Date(t.valueOf() - 6e4 * t.getTimezoneOffset());
                    return d.setMilliseconds(0), d
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(t) && (i = this.parseFormat("yyyy-mm-dd", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(t) && (i = this.parseFormat("yyyy-mm-dd hh:ii", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(t) && (i = this.parseFormat("yyyy-mm-dd hh:ii:ss", r)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(t)) {
                    var l, u, c = /([-+]\d+)([dmwy])/,
                        p = t.match(/([-+]\d+)([dmwy])/g);
                    t = new Date;
                    for (var m = 0; m < p.length; m++) switch (l = c.exec(p[m]), u = parseInt(l[1]), l[2]) {
                        case "d":
                            t.setUTCDate(t.getUTCDate() + u);
                            break;
                        case "m":
                            t = a.prototype.moveMonth.call(a.prototype, t, u);
                            break;
                        case "w":
                            t.setUTCDate(t.getUTCDate() + 7 * u);
                            break;
                        case "y":
                            t = a.prototype.moveYear.call(a.prototype, t, u)
                    }
                    return s(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), 0)
                }
                var f, g, l, p = t && t.toString().match(this.nonpunctuation) || [],
                    t = new Date(0, 0, 0, 0, 0, 0, 0),
                    v = {},
                    w = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P", "z", "Z"],
                    D = {
                        hh: function(e, t) {
                            return e.setUTCHours(t)
                        },
                        h: function(e, t) {
                            return e.setUTCHours(t)
                        },
                        HH: function(e, t) {
                            return e.setUTCHours(12 === t ? 0 : t)
                        },
                        H: function(e, t) {
                            return e.setUTCHours(12 === t ? 0 : t)
                        },
                        ii: function(e, t) {
                            return e.setUTCMinutes(t)
                        },
                        i: function(e, t) {
                            return e.setUTCMinutes(t)
                        },
                        ss: function(e, t) {
                            return e.setUTCSeconds(t)
                        },
                        s: function(e, t) {
                            return e.setUTCSeconds(t)
                        },
                        yyyy: function(e, t) {
                            return e.setUTCFullYear(t)
                        },
                        yy: function(e, t) {
                            return e.setUTCFullYear(2e3 + t)
                        },
                        m: function(e, t) {
                            for (t -= 1; 0 > t;) t += 12;
                            for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) {
                                if (isNaN(e.getUTCMonth())) return e;
                                e.setUTCDate(e.getUTCDate() - 1)
                            }
                            return e
                        },
                        d: function(e, t) {
                            return e.setUTCDate(t)
                        },
                        p: function(e, t) {
                            return e.setUTCHours(1 === t ? e.getUTCHours() + 12 : e.getUTCHours())
                        },
                        z: function() {
                            return o
                        }
                    };
                if (D.M = D.MM = D.mm = D.m, D.dd = D.d, D.P = D.p, D.Z = D.z, t = s(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()), p.length === i.parts.length) {
                    for (var m = 0, y = i.parts.length; y > m; m++) {
                        if (f = parseInt(p[m], 10), l = i.parts[m], isNaN(f)) switch (l) {
                            case "MM":
                                g = e(h[n].months).filter(function() {
                                    var e = this.slice(0, p[m].length),
                                        t = p[m].slice(0, e.length);
                                    return e === t
                                }), f = e.inArray(g[0], h[n].months) + 1;
                                break;
                            case "M":
                                g = e(h[n].monthsShort).filter(function() {
                                    var e = this.slice(0, p[m].length),
                                        t = p[m].slice(0, e.length);
                                    return e.toLowerCase() === t.toLowerCase()
                                }), f = e.inArray(g[0], h[n].monthsShort) + 1;
                                break;
                            case "p":
                            case "P":
                                f = e.inArray(p[m].toLowerCase(), h[n].meridiem);
                                break;
                            case "z":
                            case "Z":
                        }
                        v[l] = f
                    }
                    for (var T, m = 0; m < w.length; m++) T = w[m], T in v && !isNaN(v[T]) && D[T](t, v[T])
                }
                return t
            },
            formatDate: function(t, i, s, a, n) {
                if (null === t) return "";
                var o;
                if ("standard" === a) o = {
                    t: t.getTime(),
                    yy: t.getUTCFullYear().toString().substring(2),
                    yyyy: t.getUTCFullYear(),
                    m: t.getUTCMonth() + 1,
                    M: h[s].monthsShort[t.getUTCMonth()],
                    MM: h[s].months[t.getUTCMonth()],
                    d: t.getUTCDate(),
                    D: h[s].daysShort[t.getUTCDay()],
                    DD: h[s].days[t.getUTCDay()],
                    p: 2 === h[s].meridiem.length ? h[s].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
                    h: t.getUTCHours(),
                    i: t.getUTCMinutes(),
                    s: t.getUTCSeconds(),
                    z: n
                }, 2 === h[s].meridiem.length ? o.H = o.h % 12 === 0 ? 12 : o.h % 12 : o.H = o.h, o.HH = (o.H < 10 ? "0" : "") + o.H, o.P = o.p.toUpperCase(), o.Z = o.z, o.hh = (o.h < 10 ? "0" : "") + o.h, o.ii = (o.i < 10 ? "0" : "") + o.i, o.ss = (o.s < 10 ? "0" : "") + o.s, o.dd = (o.d < 10 ? "0" : "") + o.d, o.mm = (o.m < 10 ? "0" : "") + o.m;
                else {
                    if ("php" !== a) throw new Error("Invalid format type.");
                    o = {
                        y: t.getUTCFullYear().toString().substring(2),
                        Y: t.getUTCFullYear(),
                        F: h[s].months[t.getUTCMonth()],
                        M: h[s].monthsShort[t.getUTCMonth()],
                        n: t.getUTCMonth() + 1,
                        t: r.getDaysInMonth(t.getUTCFullYear(), t.getUTCMonth()),
                        j: t.getUTCDate(),
                        l: h[s].days[t.getUTCDay()],
                        D: h[s].daysShort[t.getUTCDay()],
                        w: t.getUTCDay(),
                        N: 0 === t.getUTCDay() ? 7 : t.getUTCDay(),
                        S: t.getUTCDate() % 10 <= h[s].suffix.length ? h[s].suffix[t.getUTCDate() % 10 - 1] : "",
                        a: 2 === h[s].meridiem.length ? h[s].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
                        g: t.getUTCHours() % 12 === 0 ? 12 : t.getUTCHours() % 12,
                        G: t.getUTCHours(),
                        i: t.getUTCMinutes(),
                        s: t.getUTCSeconds()
                    }, o.m = (o.n < 10 ? "0" : "") + o.n, o.d = (o.j < 10 ? "0" : "") + o.j, o.A = o.a.toString().toUpperCase(), o.h = (o.g < 10 ? "0" : "") + o.g, o.H = (o.G < 10 ? "0" : "") + o.G, o.i = (o.i < 10 ? "0" : "") + o.i, o.s = (o.s < 10 ? "0" : "") + o.s
                }
                for (var t = [], d = e.extend([], i.separators), l = 0, u = i.parts.length; u > l; l++) d.length && t.push(d.shift()), t.push(o[i.parts[l]]);
                return d.length && t.push(d.shift()), t.join("")
            },
            convertViewMode: function(e) {
                switch (e) {
                    case 4:
                    case "decade":
                        e = 4;
                        break;
                    case 3:
                    case "year":
                        e = 3;
                        break;
                    case 2:
                    case "month":
                        e = 2;
                        break;
                    case 1:
                    case "day":
                        e = 1;
                        break;
                    case 0:
                    case "hour":
                        e = 0
                }
                return e
            },
            headTemplate: '<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',
            headTemplateV3: '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    r.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", r.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + r.headTemplateV3 + r.contTemplate + r.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + r.headTemplateV3 + r.contTemplate + r.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + r.headTemplateV3 + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + r.headTemplateV3 + r.contTemplate + r.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + r.headTemplateV3 + r.contTemplate + r.footTemplate + "</table></div></div>", e.fn.datetimepicker.DPGlobal = r, e.fn.datetimepicker.noConflict = function() {
        return e.fn.datetimepicker = n, this
    }, e(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(t) {
        var i = e(this);
        i.data("datetimepicker") || (t.preventDefault(), i.datetimepicker("show"))
    }), e(function() {
        e('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
});
!function(l){function t(t){for(var e,n,i=t[0],a=t[1],s=t[2],o=0,r=[];o<i.length;o++)n=i[o],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&r.push(c[n][0]),c[n]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(l[e]=a[e]);for(h&&h(t);r.length;)r.shift()();return d.push.apply(d,s||[]),u()}function u(){for(var t,e=0;e<d.length;e++){for(var n=d[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(i=!1)}i&&(d.splice(e--,1),t=o(o.s=n[0]))}return t}var n={},c={326:0},d=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=l,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var h=i;d.push([816,0]),u()}({138:function(t,e,n){"use strict";var i=n(6),o=n.n(i),a=n(0),s=n.n(a),r=n(1),l=n.n(r),u=n(73),c=n(14),d=function(){function e(t){s()(this,e),void 0===t&&(t={}),this._init(t)}return l()(e,[{key:"_init",value:function(t){var e=$.extend(this._getDefaultOptions(t),t);e.wrapDom=t.wrapTarget,e.pageSize=this._getPageSizeByMaxLessonsNumOfChapter(e),new u.a(e),this._displayAllImmediately&&this._destroyPaging()}},{key:"_getPageSizeByMaxLessonsNumOfChapter",value:function(e){var t=e.data;if(!Object(c.d)(t)){var n=0,i=0;return t.forEach(function(t){e.context.isChapter(t)?(n=n<i?i:n,i=0):i++}),n<25?25:n+1}}},{key:"_getDefaultOptions",value:function(t){var e=this._wrapTarget(t.wrapTarget,".js-hidden-cached-data"),n=this._wrapTarget(t.wrapTarget,".js-hidden-course-info"),i=this._wrapTarget(t.wrapTarget,".js-hidden-i18n"),a=this._wrapTarget(t.wrapTarget,".js-hidden-activity-metas"),s=this._wrapTarget(t.wrapTarget,".js-hidden-current-timestamp");return{data:this._toJson(e.html()),context:{course:this._toJson(n.html()),i18n:this._toJson(i.html()),metas:this._toJson(a.html()),currentTimeStamp:o()(s.html(),10),isChapter:function(t){return"chapter"==t.itemType},isUnit:function(t){return"unit"==t.itemType},isLesson:function(t){return"lesson"==t.itemType},isTask:function(t){return"task"==t.itemType},getChapterName:function(t,e){return Translator.trans("course.chapter",{chapter_name:e.i18n.i18nChapterName,number:t.number,title:t.title,colon:t.title?":":""})},getUnitName:function(t,e){return Translator.trans("course.unit",{part_name:e.i18n.i18nUnitName,number:t.number,title:t.title,colon:t.title?":":""})},getLessonName:function(t,e){return e.isItemDisplayedAsOptional(t,e)?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title})},isItemDisplayedAsOptionalOrUnpublished:function(t,e){return e.isItemDisplayedAsOptional(t,e)||e.isItemDisplayedAsUnpublished(t,e)},isItemDisplayedAsOptional:function(t,e){return"1"==t.isOptional&&e.isLessonNode(t,e)},isItemDisplayedAsUnpublished:function(t,e){return!e.isPublished(t,e)&&e.isLessonNode(t,e)},isLessonNode:function(t){return"task"==t.itemType&&t.isSingleTaskLesson||"lesson"==t.itemType&&!t.isSingleTaskLesson},getTaskName:function(t,e){return t.isSingleTaskLesson?"1"==t.isOptional?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title}):Translator.trans("course.catalogue.task_status.task",{taskName:e.i18n.i18nTaskName,taskNumber:t.number,taskTitle:t.title})},hasWatchLimitRemaining:function(t){return!1!==t.watchLimitRemaining},highlightTaskClass:function(t,e){return t.taskId==e.course.currentTaskId?"active":""},taskClass:function(t,e){var n="es-icon left-menu";return e.isTaskLocked(t,e)?n+=" es-icon-lock":""==t.result||"false"==e.course.isMember?n+=" es-icon-undone-check color-gray":"start"==t.resultStatus?n+=" es-icon-doing color-primary":"finish"==t.resultStatus&&(n+=" es-icon-iccheckcircleblack24px color-primary"),n},lessonContainerClass:function(t,e){var n="color-gray";return e.isTask(t,e)?t.isSingleTaskLesson?n:"":e.isLesson(t,e)?n:void 0},isTaskLocked:function(t,e){return e.course.isMember?"lockMode"==e.course.learnMode&&t.lock:"lockMode"==e.course.learnMode},isPublished:function(t){return"published"==t.status},isPublishedTaskUnlocked:function(t,e){return e.isPublished(t,e)&&!e.isTaskLocked(t,e)},isCloudVideo:function(t){return"video"==t.type&&"cloud"==t.fileStorage},getMetaIcon:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].icon:""},getMetaName:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].name:""},isLiveReplayGenerated:function(t){return"ungenerated"!=t.replayStatus},isLive:function(t){return"live"==t.type},isLiveNotStarted:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp<e.toInt(t.activityStartTime)},isLiveStarting:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>=e.toInt(t.activityStartTime)&&e.currentTimeStamp<=e.toInt(t.activityEndTime)},isLiveFinished:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>e.toInt(t.activityEndTime)},toInt:function(t){return o()(t,10)},getLessonNum:function(t,e){var n=t.number;return"1"==e.course.isHideUnpublish&&(n=t.published_number),n}},dataTemplateNode:".js-infinite-item-template"}}},{key:"_wrapTarget",value:function(t,e){return t?t.find(e):$(e)}},{key:"_destroyPaging",value:function(){for(var t=["js-infinite-item-template","js-hidden-cached-data","js-hidden-course-info","js-hidden-i18n","js-hidden-activity-metas","js-hidden-current-timestamp","infinite-container","js-down-loading-more"],e=0;e<t.length;e++)$("."+t[e]).removeClass(t[e])}},{key:"_toJson",value:function(t){var e={};return t&&(e=$.parseJSON(t.replace(/[\r\n\t]/g,""))),e}}]),e}();e.a=d},166:function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function e(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+n,this.options=e.Adapter.extend({},e.defaults,t),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),s[this.key]=this,n+=1}var n=0,s={};e.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},e.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete s[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(t){var e=[];for(var n in s)e.push(s[n]);for(var i=0,a=e.length;i<a;i++)e[i][t]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){for(var t in e.Context.refreshAll(),s)s[t].enabled=!0;return this},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(t){window.setTimeout(t,1e3/60)}function n(t){this.element=t,this.Adapter=m.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,a[t.waypointContextKey]=this,i+=1,m.windowContext||(m.windowContext=!0,m.windowContext=new n(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,a={},m=window.Waypoint,t=window.onload;n.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete a[this.key])},n.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,m.requestAnimationFrame(t))})},n.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){e.didScroll&&!m.isTouch||(e.didScroll=!0,m.requestAnimationFrame(t))})},n.prototype.handleResize=function(){m.Context.refreshAll()},n.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var i=e[n],a=i.newScroll>i.oldScroll?i.forward:i.backward;for(var s in this.waypoints[n]){var o,r,l=this.waypoints[n][s];null!==l.triggerPoint&&(o=i.oldScroll<l.triggerPoint,r=i.newScroll>=l.triggerPoint,(o&&r||!o&&!r)&&(l.queueTrigger(a),t[l.group.id]=l.group))}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?m.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?m.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var i=0,a=t.length;i<a;i++)t[i].destroy()},n.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),i={};for(var a in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[a];for(var o in this.waypoints[a]){var r,l,u,c,d=this.waypoints[a][o],h=d.options.offset,p=d.triggerPoint,f=0,v=null==p;d.element!==d.element.window&&(f=d.adapter.offset()[s.offsetProp]),"function"==typeof h?h=h.apply(d):"string"==typeof h&&(h=parseFloat(h),-1<d.options.offset.indexOf("%")&&(h=Math.ceil(s.contextDimension*h/100))),r=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(f+r-h),l=p<s.oldScroll,u=d.triggerPoint>=s.oldScroll,c=!l&&!u,!v&&(l&&u)?(d.queueTrigger(s.backward),i[d.group.id]=d.group):(!v&&c||v&&s.oldScroll>=d.triggerPoint)&&(d.queueTrigger(s.forward),i[d.group.id]=d.group)}}return m.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in a)a[t].refresh()},n.findByElement=function(t){return a[t.waypointContextKey]},window.onload=function(){t&&t(),n.refreshAll()},m.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},m.Context=n}(),function(){"use strict";function o(t,e){return t.triggerPoint-e.triggerPoint}function r(t,e){return e.triggerPoint-t.triggerPoint}function e(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},i=window.Waypoint;e.prototype.add=function(t){this.waypoints.push(t)},e.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},e.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],n="up"===t||"left"===t;e.sort(n?r:o);for(var i=0,a=e.length;i<a;i+=1){var s=e[i];!s.options.continuous&&i!==e.length-1||s.trigger([t])}}this.clearTriggerQueues()},e.prototype.next=function(t){this.waypoints.sort(o);var e=i.Adapter.inArray(t,this.waypoints);return e===this.waypoints.length-1?null:this.waypoints[e+1]},e.prototype.previous=function(t){this.waypoints.sort(o);var e=i.Adapter.inArray(t,this.waypoints);return e?this.waypoints[e-1]:null},e.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},e.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);-1<e&&this.waypoints.splice(e,1)},e.prototype.first=function(){return this.waypoints[0]},e.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},e.findOrCreate=function(t){return n[t.axis][t.name]||new e(t)},i.Group=e}(),function(){"use strict";function n(t){this.$element=i(t)}var i=window.jQuery,t=window.Waypoint;i.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){n.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),i.each(["extend","inArray","isEmptyObject"],function(t,e){n[e]=i[e]}),t.adapters.push({name:"jquery",Adapter:n}),t.Adapter=n}(),function(){"use strict";function t(i){return function(){var e=[],n=arguments[0];return i.isFunction(arguments[0])&&((n=i.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=i.extend({},n,{element:this});"string"==typeof t.context&&(t.context=i(this).closest(t.context)[0]),e.push(new a(t))}),e}}var a=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},262:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i});var r=function(t,e,n){var i=t.find(".js-remove-icon"),a=t.find(".js-remove-text");i.hasClass(e)?(i.removeClass(e).addClass(n),a&&a.text(Translator.trans("收起"))):(i.removeClass(n).addClass(e),a&&a.text(Translator.trans("展开")))},i=function(t,e,n,i){var a=1<arguments.length&&void 0!==e?e:".js-task-chapter",s=2<arguments.length&&void 0!==n?n:"es-icon-remove",o=3<arguments.length&&void 0!==i?i:"es-icon-anonymous-iconfont";$(0<arguments.length&&void 0!==t?t:"body").on("click",a,function(t){var e=$(t.currentTarget);e.nextUntil(a).animate({height:"toggle",opacity:"toggle"},"normal"),r(e,s,o)})}},283:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n(0),a=n.n(i),s=n(1),o=n.n(s),r=n(26),l=n.n(r),u=(n(289),n(290),function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;a()(this,e),this.$element=null===t?$(".all-wrapper"):t,this.mask='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                    <div class="continue-studying">\n                        <button class="btn btn-primary js-continue-studying">'.concat(Translator.trans("course.task.out_focus_mask.continue_studying"),"</button>\n                    </div>\n                </div>\n            </div>"),this.mask1='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                </div>\n            </div>',this.initEvent()}return o()(e,[{key:"initEvent",value:function(){this._registerChannel()}},{key:"validateMask",value:function(){return 0<this.$element.find(".out-focus-mask").length}},{key:"initLearStopTips",value:function(){this.validateMask()||(this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.stop.tips")),this.popAfter())}},{key:"initAntiBrushTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"initBanTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask1),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"continueStudying",value:function(){this.destroyMask(),this._publishResponse("play")}},{key:"destroyMask",value:function(){this.$element.find(".out-focus-mask").remove()}},{key:"popAfter",value:function(){this._publishResponse("pause")}},{key:"_registerChannel",value:function(){return l.a.instanceId("task"),l.a.fedx.addFilter([{channel:"task-events",topic:"monitoringEvent",direction:"out"}]),this}},{key:"_publishResponse",value:function(t){l.a.publish({channel:"task-events",topic:"monitoringEvent",data:t})}}]),e}()),c=n(14),d=function(){function e(t){a()(this,e),this.maskElement=t.maskElement||null,this.OutFocusMask=new u(this.maskElement),this.activityTimer=null,this.ACTIVITY_TIME=1200,this.eventMaskElement=null,this.eventMaskTimer=null,this.EVENT_MASK_TIME=30,this.videoPlayRule=t.videoPlayRule,this.taskType=t.taskType,this.taskPipe=t.taskPipe,this.initEvent()}return o()(e,[{key:"initEvent",value:function(){var t=this;$("body").off("click",".js-continue-studying"),$("body").on("click",".js-continue-studying",function(){t.OutFocusMask.continueStudying(),t.taskPipe._flush({reActive:1}),t.taskPipe.absorbedChange(0)}),Object(c.f)()||"auto_pause"===this.videoPlayRule&&"video"===this.taskType&&(this.initMaskElement(),this.initVisibilitychange(),this.initActivity())}},{key:"initMaskElement",value:function(){$("body").append('\n      <div class="monitor-event-mask" style="position: fixed; left: 0; right: 0; top: 0; bottom: 0; opacity: 0; display: none;"></div>\n    '),this.eventMaskElement=$(".monitor-event-mask"),this.maskElementShow()}},{key:"ineffectiveEvent",value:function(){this.OutFocusMask.initLearStopTips(),this.taskPipe.absorbedChange(1),this.taskPipe._flush()}},{key:"triggerEvent",value:function(t){this.taskPipe.absorbedChange(1),"reject_current"!==t?"kick_previous"!==t||this.OutFocusMask.initAntiBrushTips():this.OutFocusMask.initBanTips()}},{key:"initVisibilitychange",value:function(){var t=this;document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&t.ineffectiveEvent()})}},{key:"initActivity",value:function(){this.afterActivity(),document.onmousedown=this.afterActivity.bind(this),document.onscroll=this.afterActivity.bind(this),document.onkeypress=this.afterActivity.bind(this),document.onmousemove=this.afterActivity.bind(this)}},{key:"afterActivity",value:function(){var t=this;this.maskElementHide(),clearTimeout(this.activityTimer),this.activityTimer=null,this.activityTimer=setTimeout(function(){t.ineffectiveEvent()},1e3*this.ACTIVITY_TIME)}},{key:"maskElementShow",value:function(){var t=this;clearTimeout(this.eventMaskTimer),this.eventMaskTimer=null,this.eventMaskTimer=setTimeout(function(){t.eventMaskElement.show()},1e3*this.EVENT_MASK_TIME)}},{key:"maskElementHide",value:function(){this.eventMaskElement.hide(),this.maskElementShow()}}]),e}()},57:function(t,e,n){"use strict";var i=n(10),s=n.n(i),a=n(0),o=n.n(a),r=n(1),l=n.n(r),u=(n(94),function(){function t(){o()(this,t)}return l()(t,null,[{key:"set",value:function(t,e,n){var i=store.get("durations",{});i&&i instanceof Array||(i=new Array);var a=t+"-"+e+":"+n;0<i.length&&-1<i.slice(i.length-1,i.length)[0].indexOf(t+"-"+e)&&i.splice(i.length-1,i.length),20<=i.length&&i.shift(),i.push(a),store.set("durations",i)}},{key:"get",value:function(t,e){var n=store.get("durations",{});if(n)for(var i=0;i<n.length;i++){if(-1<n[i].indexOf(t+"-"+e)){var a=n[i];return s()(a.split(":")[1])}}return 0}},{key:"del",value:function(t,e){var n=store.get("durations");if(n){for(var i=0;i<n.length;i++){-1<n[i].indexOf(t+"-"+e)&&n.splice(i,1)}store.set("durations",n)}}}]),t}());e.a=u},73:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var i=n(2),s=n.n(i),a=n(21),r=n.n(a),o=n(0),l=n.n(o),u=n(1),c=n.n(u),d=n(8),h=n.n(d),p=n(9),f=n.n(p),v=n(5),m=n.n(v),g=n(14),y=(n(166),n(100)),k=n(101);function w(i){var a=function(){if("undefined"==typeof Reflect||!s.a)return!1;if(s.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(s()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=m()(i);return e=a?(t=m()(this).constructor,s()(n,arguments,t)):n.apply(this,arguments),f()(this,e)}}var b=function(t){h()(i,t);var n=w(i);function i(t){var e;return l()(this,i),(e=n.call(this))._options=t,e._initConfig(),e.chapterAnimate(),e._displayAllImmediately?e._displayCurrentPageDataAndSwitchToNext():e._initUpLoading(),e}return c()(i,[{key:"toggleIcon",value:function(i,a,s){var o=this;return new r.a(function(t,e){var n=i.find(".js-remove-icon");i.find(".js-remove-text");n.hasClass(a)?(n.removeClass(a).addClass(s),0==$(".js-only-display-one-page").length&&o._displayCurrentPageDataAndSwitchToNext()):n.removeClass(s).addClass(a),t()})}},{key:"chapterAnimate",value:function(t,e,n,i){var a=1<arguments.length&&void 0!==e?e:".js-task-chapter",s=2<arguments.length&&void 0!==n?n:"es-icon-remove",o=3<arguments.length&&void 0!==i?i:"es-icon-anonymous-iconfont",r=this;$(0<arguments.length&&void 0!==t?t:"body").off("click",a).on("click",a,function(t){var e=$(t.currentTarget);r.toggleIcon(e,s,o).then(function(){e.nextUntil(a).animate({height:"toggle",opacity:"toggle"},"normal")})})}},{key:"_initUpLoading",value:function(){var e,n;0!=$(".js-down-loading-more").length&&(e=this,n=new Waypoint({element:$(".js-down-loading-more")[0],handler:function(t){"down"==t&&(e._isLastPage||e._canNotDisplayMore()?n.disable():(e._scrollToBottom(),n.disable(),e._displayCurrentPageDataAndSwitchToNext(),Waypoint.refreshAll(),n.enable()))},offset:"bottom-in-view"}))}},{key:"_initConfig",value:function(){this._currentPage=1,this._displayAllImmediately=!!this._options.displayAllImmediately,this._displayAllImmediately?this._pageSize=1e4:this._pageSize=this._options.pageSize?this._options.pageSize:25,25<this._pageSize&&0!=$(".js-only-display-one-page").length&&(this._pageSize=25),this._afterFirstLoad=this._options.afterFirstLoad?this._options.afterFirstLoad:null,this._isFirstLoad=!0,this._options.displayItem?(this._displayItemDisplayed=!1,this._displayItem=this._options.displayItem):(this._displayItemDisplayed=!0,this._displayItem=null),this._isLastPage=!1}},{key:"_displayCurrentPageDataAndSwitchToNext",value:function(){this._displayData(),this._isLastPage||this._currentPage++,this._isFirstLoad&&(this._displayItemDisplayed?(this._isFirstLoad=!1,this._afterFirstLoad&&this._afterFirstLoad()):this._displayCurrentPageDataAndSwitchToNext())}},{key:"_displayData",value:function(){if(!this._isLastPage)for(var t=this._getStartIndex(),e=0;e<this._pageSize;e++){var n,i,a=this._options.data[e+t];this._displayItemDisplayed||(n=this._displayItem.key,i=this._displayItem.value,a[n]==i&&(this._displayItemDisplayed=!0)),Object(g.d)(a)?this._isLastPage=!0:this._generateSingleCachedData(a)}}},{key:"_scrollToBottom",value:function(){var t,e,n,i,a=this,s=this,o=$(".js-sidebar-pane");o.length&&(t=o[0],e=o.height(),n=t.scrollHeight,i=t.scrollTop,s._afterFirstLoad&&t.addEventListener("scroll",Object(k.a)(function(){n<=i+e&&!a._isLastPage&&s._displayCurrentPageDataAndSwitchToNext()},500,!0)))}},{key:"_generateSingleCachedData",value:function(t){var e=this._options.dataTemplateNode,n=this._options.wrapDom?this._options.wrapDom.find(e).html():$(e).html(),i=t,a=this,s=(s=n.replace(/({\w+})/g,function(t){return a._replace(t,i,"{","}")})).replace(/(%7B\w+%7D)/g,function(t){return a._replace(t,i,"%7B","%7D")}),o=$("<div>").append(s);this._removeUnNeedNodes(o),(this._options.wrapDom?this._options.wrapDom.find(".infinite-container"):$(".infinite-container")).append(o.html())}},{key:"_getStartIndex",value:function(){return(this._currentPage-1)*this._pageSize}},{key:"_replace",value:function(t,e,n,i){var a=t.split(n)[1].split(i)[0],s=this._options.context;return"function"==typeof s[a]?s[a](e,s):void 0!==e[a]?e[a]:t}},{key:"_canNotDisplayMore",value:function(){return 1!=this._currentPage&&0!=$(".js-only-display-one-page").length}},{key:"_removeUnNeedNodes",value:function(t){t.find("[display-if=false]").remove(),t.find("[display-if=0]").remove(),t.find("[hide-if=1]").remove(),t.find("[hide-if=true]").remove(),t.find("tmp :first-child").each(function(){var t=$(this).parent();t.hasClass("js-ignore-remove")||"TMP"!=t[0].nodeName||$(this).unwrap()})}}]),i}(y.a)},816:function(t,e,n){"use strict";n.r(e);var i=n(2),s=n.n(i),a=n(0),o=n.n(a),r=n(1),l=n.n(r),u=n(8),c=n.n(u),d=n(9),h=n.n(d),p=n(5),f=n.n(p),v=n(43),m=n.n(v),g=n(262);function y(i){var a=function(){if("undefined"==typeof Reflect||!s.a)return!1;if(s.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(s()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=f()(i);return e=a?(t=f()(this).constructor,s()(n,arguments,t)):n.apply(this,arguments),h()(this,e)}}var k=function(t){c()(s,t);var a=y(s);function s(t){var e,n=t.element,i=t.url;return o()(this,s),(e=a.call(this)).url=i,e.isManualOperation=!0,e.element=$(n),e.init(),e}return l()(s,[{key:"init",value:function(){var e=this;this.fixIconInChrome(),this.fetchPlugins().then(function(t){e.plugins=t,e.renderToolbar(),e.renderPane(),e.element.hide().show(),e.bindEvent()}).fail(function(){})}},{key:"fetchPlugins",value:function(){return $.post(this.url)}},{key:"fixIconInChrome",value:function(){this.element.html('<i class="es-icon es-icon-chevronleft"></i>')}},{key:"renderToolbar",value:function(){var t='\n    <div class="dashboard-toolbar">\n      <ul class="dashboard-toolbar-nav" id="dashboard-toolbar-nav">\n        '.concat(this.plugins.reduce(function(t,e){return t+'<li data-plugin="'.concat(e.code,'" data-url="').concat(e.url,'"><a href="#"><div class="mbs es-icon ').concat(e.icon,'"></div>').concat(e.name,"</a></li>")},""),"\n      </ul>\n    </div>");this.element.html(t)}},{key:"renderPane",value:function(){var t=this.plugins.reduce(function(t,e){return t+'<div data-pane="'.concat(e.code,'" class=" ').concat(e.code,'-pane js-sidebar-pane" ><div class="').concat(e.code,'-pane-body js-sidebar-pane-body"></div></div>')},"");this.element.append(t)}},{key:"bindEvent",value:function(){var o=this;this.element.find("#dashboard-toolbar-nav").on("click","li",function(t){var e=$(t.currentTarget),n=e.data("plugin"),i=e.data("url"),a=o.element.find('[data-pane="'.concat(n,'"]')),s=a.find(".js-sidebar-pane-body");void 0!==n&&void 0!==i&&(o.isManualOperation&&o.operationContent(e),e.data("loaded")||$.get(i).then(function(t){s.html(t),a.perfectScrollbar(),e.data("loaded",!0),o.isManualOperation=!0,o.emit(e.data("plugin")+"-loaded",s)}))})}},{key:"operationContent",value:function(t){t.hasClass("active")?(this.foldContent(),t.removeClass("active"),$(".dashboard-sidebar").removeClass("spread")):(this.element.find("#dashboard-toolbar-nav li").removeClass("active"),t.addClass("active"),this.element.find("[data-pane]").hide(),this.element.find('[data-pane="'.concat(t.data("plugin"),'"]')).show(),this.popupContent(),$(".dashboard-sidebar").addClass("spread"))}},{key:"popupContent",value:function(t){var e=0<arguments.length&&void 0!==t?t:500,n=$("#dashboard-sidebar").width()+35+"px";this.emit("popup",n,e),this.element.animate({right:"0px"},e)}},{key:"foldContent",value:function(t){var e=0<arguments.length&&void 0!==t?t:500,n="-"+this.element.width()+"px";this.emit("fold","35px",e),this.element.animate({right:n},e)}},{key:"reload",value:function(){this.isManualOperation=!1;var t=this.element.find(".js-sidebar-pane:visible"),e=t.data("pane");t.undelegate(),this.element.find("#dashboard-toolbar-nav").children('[data-plugin="'.concat(e,'"]')).data("loaded",!1).click()}},{key:"listEvent",value:function(){$(".js-sidebar-pane:visible .task-list-pane-body").length&&Object(g.a)()}}]),s}(m.a),w=function(){function e(t){o()(this,e),this.element=$(t.element),this.learningPrompt=this.element.find(".js-learning-prompt"),this.learnedPrompt=this.element.find(".js-learned-prompt"),this.learnprompt=this.element.find(".js-learn-prompt"),this.btnLearn=this.element.find(".js-btn-learn")}return l()(e,[{key:"learnedWeakPrompt",value:function(){var t=this;this.learnprompt.removeClass("open"),this.learningPrompt.addClass("moveup"),window.setTimeout(function(){t.learningPrompt.removeClass("moveup"),t.learnedPrompt.addClass("moveup"),t.learnedPrompt.popover("show"),window.setTimeout(function(){t.learnedPrompt.popover("hide")},2e3)},2e3)}},{key:"learned",value:function(){this.btnLearn.addClass("active")}}]),e}(),b=n(12),_=n.n(b),T=n(6),S=n.n(T),x=n(26),I=n.n(x),C=(n(289),n(290),n(57)),P=n(283),j=n(31),A=n(14),E=function(){function e(t){if(o()(this,e),this.element=$(t),this.eventUrl=this.element.data("eventUrl"),this.videoPlayRule=this.element.data("videoPlayRule"),this.learnTimeSec=this.element.data("learnTimeSec"),this.taskType=this.element.data("taskType"),this.TASK_PIPE_INTERNAL=this.element.data("learnTimeSec"),this.userId=this.element.data("userId"),this.fileId=this.element.data("fileId"),this.taskId=this.element.data("taskId"),this.courseId=this.element.data("courseId"),this.isLogout=!1,this.taskPipeCounter=0,S()(this.element.data("lastLearnTime"))!=S()(C.a.get(this.userId,this.fileId))&&(C.a.del(this.userId,this.fileId),C.a.set(this.userId,this.fileId,this.element.data("lastLearnTime"))),this.lastLearnTime=C.a.get(this.userId,this.fileId),this.sign="",this.record={},this.pushing=!1,this.absorbed=0,void(this.lastTimestamp=0)===this.eventUrl)throw Error("task event url is undefined");this.eventDatas={},this.playerMsg={},this.intervalId=null,this.lastTime=this.element.data("lastTime"),this.eventMap={receives:{}},this._registerChannel(),1==this.element.data("eventEnable")&&this._initInterval(),this.MonitoringEvents=null,A.a.safari&&!Object(A.f)()&&this.safariVisibilitychange()}return l()(e,[{key:"_registerChannel",value:function(){var i=this;return I.a.instanceId("task"),I.a.fedx.addFilter([{channel:"activity-events",topic:"#",direction:"in"},{channel:"task-events",topic:"#",direction:"out"}]),I.a.subscribe({channel:"activity-events",topic:"#",callback:function(t){var e=t.event,n=t.data;i.eventDatas[e]=n,console.log(e,n),i._flush(n)}}),this}},{key:"_initInterval",value:function(){var t=this;this._flush(),window.onbeforeunload=function(){t._clearInterval(),t._flush(),0<t.sign.length&&localStorage.setItem("flowSign",t.sign)},this._clearInterval(),this.intervalId=setInterval(function(){return t._addPipeCounter()},1e3)}},{key:"_addPipeCounter",value:function(){this.taskPipeCounter++,this.taskPipeCounter>=this.TASK_PIPE_INTERNAL&&this._flush()}},{key:"_clearInterval",value:function(){clearInterval(this.intervalId)}},{key:"_flush",value:function(t){var e,n,i,a,s=this,o=0<arguments.length&&void 0!==t?t:{};this.pushing||this.isLogout||(e="pc",Object(A.f)()&&(e="wap"),""===this.sign?(n={},i=o.release||0,(a=localStorage.getItem("flowSign"))&&(this.lastSign=a,n.lastSign=a,localStorage.removeItem("flowSign")),j.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"start"},data:_()({release:i,client:e},n)}).then(function(t){if(1!==i)if(s.MonitoringEvents=new P.a({videoPlayRule:s.videoPlayRule,taskType:s.taskType,taskPipe:s}),t.learnControl.allowLearn||"kick_previous"!==t.learnControl.denyReason){if(!t.learnControl.allowLearn&&"reject_current"===t.learnControl.denyReason){if(Object(A.f)())return;return s.MonitoringEvents.triggerEvent("reject_current"),s._clearInterval(),void s.element.attr("src","")}s.sign=t.record.flowSign,s.record=t.record,s._doing(o)}else s.MonitoringEvents.triggerEvent("kick_previous");else s._clearInterval()})):this._doing(o))}},{key:"_doing",value:function(t){var e,n,i,a=this,s=0<arguments.length&&void 0!==t?t:{};0!==this.sign.length&&(e="pc",Object(A.f)()&&(e="wap"),i={client:e,sign:this.sign,duration:this.taskPipeCounter,status:this.absorbed,lastLearnTime:C.a.get(this.userId,this.fileId),events:this.eventDatas},console.log(s),s.watchTime&&(n={watchData:{duration:s.watchTime}},i=_()(i,n)),s.reActive&&(i.reActive=s.reActive),this.pushing=!0,j.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"doing"},data:i}).then(function(t){if(a.pushing=!1,a.record=t.record,a.taskPipeCounter=0,a.lastTimestamp=(new Date).getTime(),t.learnControl.allowLearn||"kick_previous"!==t.learnControl.denyReason?t.learnControl.allowLearn||"reject_current"!==t.learnControl.denyReason||a.MonitoringEvents.triggerEvent("reject_current"):a.MonitoringEvents.triggerEvent("kick_previous"),t&&t.taskResult&&t.taskResult.status){s.data&&(t.playerMsg=s.data.playerMsg);var e=a.eventMap.receives[t.taskResult.status];if(e)for(var n=e.length-1;0<=n;n--){(0,e[n])(t)}}}).catch(function(t){a.pushing=!1,a._clearInterval()}))}},{key:"_publishResponse",value:function(t){I.a.publish({channel:"task-events",topic:"#",data:{event:t.event,data:t.data}})}},{key:"addListener",value:function(t,e){this.eventMap.receives[t]=this.eventMap.receives[t]||[],this.eventMap.receives[t].push(e)}},{key:"absorbedChange",value:function(t){this.absorbed=t}},{key:"safariVisibilitychange",value:function(){var e=this;document.addEventListener("visibilitychange",function(){var t;["live"].includes(e.taskType)||("hidden"===(t=document.visibilityState)?e._clearInterval():"visible"===t&&(e.taskPipeCounter=Math.round(((new Date).getTime()-e.lastTimestamp)/1e3),e.intervalId=setInterval(function(){return e._addPipeCounter()},1e3)))})}}]),e}(),L=n(100),M=n(138);function O(i){var a=function(){if("undefined"==typeof Reflect||!s.a)return!1;if(s.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(s()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=f()(i);return e=a?(t=f()(this).constructor,s()(n,arguments,t)):n.apply(this,arguments),h()(this,e)}}var N,D=function(t){c()(s,t);var a=O(s);function s(t){var e,n=t.element,i=t.mode;return o()(this,s),(e=a.call(this)).element=$(n),e.mode=i,e.ui=new w({element:".js-task-dashboard-page"}),e.init(),e}return l()(s,[{key:"init",value:function(){this.initPlugin(),this.initSidebar(),"preview"!=this.mode&&(this.initTaskPipe(),this.initLearnBtn())}},{key:"initPlugin",value:function(){$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover({html:!0,trigger:"hover"})}},{key:"initLearnBtn",value:function(){var n=this;this.element.on("click","#learn-btn",function(){$.post($("#learn-btn").data("url"),function(t){$("#modal").modal("show"),$("#modal").html(t),$('input[name="task-result-status"]',$("#js-hidden-data")).val("finish");var e=$(".js-next-mobile-btn");e.data("url")&&e.removeClass("disabled").attr("href",e.data("url")),n.ui.learned()})})}},{key:"initTaskPipe",value:function(){var e=this;this.eventEmitter=new E(this.element.find("#task-content-iframe")),this.eventEmitter.addListener("finish",function(t){e._receiveFinish(t)})}},{key:"_receiveFinish",value:function(t){var n=this,e=this.element.find("#task-content-iframe").data("nextTaskUrl");"finish"!=$('input[name="task-result-status"]',$("#js-hidden-data")).val()&&$.get($(".js-learned-prompt").data("url"),function(t){$(".js-learned-prompt").attr("data-content",t),n.ui.learnedWeakPrompt(),n.ui.learned(),n.sidebar.reload();var e=$(".js-next-mobile-btn");e.data("url")&&e.removeClass("disabled").attr("href",e.data("url")),$('input[name="task-result-status"]',$("#js-hidden-data")).val("finish")}),e&&t.playerMsg&&"sequence"==t.playerMsg.mode&&(window.location.href=e)}},{key:"initSidebar",value:function(){var n=this;this.sidebar=new k({element:this.element.find("#dashboard-sidebar"),url:this.element.find('#js-hidden-data [name="plugins_url"]').val()}),this.sidebar.on("popup",function(t,e){n.element.find("#dashboard-content").animate({right:t},e)}).on("fold",function(t,e){n.element.find("#dashboard-content").animate({right:t},e)}).on("task-list-loaded",function(o){new M.a({afterFirstLoad:function(){var t=o.parent(),e=t.height(),n=o.height(),i=o.find(".task-item.active"),a=i.position().top,s=(e-i.height())/2;if(n-a<s)return console.log("位置靠近底部，top偏移",a-s),console.log(n-e),void t.scrollTop(n-e);s<a&&(console.log("位置大于标准位置时，top偏移",a-s),console.log(a,s),t.scrollTop(a-s))},displayItem:{key:"taskId",value:$(".js-hidden-current-task-id").html()}})})}}]),s}(L.a),R=n(68),z=n.n(R),F=$("#task-content-iframe");F.attr("src",F.data("url")),new D({element:$("body"),mode:$("body").find('#js-hidden-data [name="mode"]').val()}),(A.a.ie10||A.a.ie11||A.a.edge)&&((N=document.getElementById("task-content-iframe")).onload=function(){N.contentWindow.document.getElementsByTagName("html")[0].style.width="100%"});var W,q,U=$(".js-audio-convert-ad");0<U.length&&U.on("click",function(t){z.a.set(U.data("cookie"),"true",{expires:360,path:"/"}),U.parents(".js-audio-convert-box").remove(),$(".js-dashboard-footer").removeClass("dashboard-footer--audio")}),0<$(".js-wechat-qrcode-btn").length&&(void 0!==(W=$(".js-wechat-qrcode-btn")).data("url")?$.get(W.data("url"),function(t){W.data("img",t.img);var e=t.img;$(".js-wechat-qrcode-btn").popover({trigger:"click",placement:"bottom",html:"true",animation:!1,container:"body",content:'<img class="wechat-inform-task-qrcode" src="'.concat(e,'">')})}):(q=W.data("img"),$(".js-wechat-qrcode-btn").popover({trigger:"click",placement:"bottom",html:"true",animation:!1,container:"body",content:'<img class="wechat-inform-task-qrcode" src="'.concat(q,'">')})));function H(n,i,a){var t=$(".js-task-content-iframe"),s=$(".js-video-wrapper"),o=t.height(),e=t.width();n.on("show.bs.popover",function(){var t,e=o-i;a?s.css("height",e):n.hasClass("js-next-task")?(t=i+30,s.css("height",o-t)):s.css("height",o-i)}),n.on("shown.bs.popover",function(){$(".popover").css({minWidth:e,left:"15px"}).find(".arrow").hide()}),n.on("hidden.bs.popover",function(){s.css("height",o)})}var B,Q,V=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);Object(A.f)()&&!V&&(B=$(".js-learn-video-prompt"),Q=$(".js-learned-video-prompt"),H(B,50,!0),H(Q,115))}});
(window.webpackJsonp=window.webpackJsonp||[]).push([["homeworkResult"],{"7c97":function(t,e,r){"use strict";var i={props:{type:{type:String,default:""},isShow:{type:Boolean,default:!1},reportType:{type:String,default:""}},methods:{onKeepLearning:function(t){this.$emit("outFocusMask",t)}}},s=r("a6c2"),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShow?r("div",{staticClass:"out-focus-mask"},[r("div",{staticClass:"report-go-back",on:{click:function(e){return t.$router.go(-1)}}},[r("van-icon",{attrs:{name:"arrow-left",size:"25",color:"#43bc60"}})],1),"kick_previous"===t.type?[r("div",{staticClass:"content"},[t._m(0),r("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(e){return t.onKeepLearning("kick_previous")}}},[t._v("\n        继续学习\n      ")])],1)]:t._e(),"reject_current"===t.type?[t._m(1)]:t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])])}],!1,null,null,null);e.a=o.exports},c8a5:function(t,e,r){"use strict";var i=r("3ce7"),s=r("faa5");e.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0,isShowOutFocusMask:!1,outFocusMaskType:"",sign:"",record:{},absorbed:0}},beforeRouteLeave:function(t,e,r){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),r()},beforeDestroy:function(){this.clearReportIntervalTime(),window.removeEventListener("beforeunload",this.onbeforeunloadFlowSign),this.toggleReportMaskHidden("remove")},methods:{initReportData:function(t,e,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:t,taskId:e},this.reportType=r,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,i&&this.initReportEvent(),this.onbeforeunload()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(t,e){var r=this,s={courseId:t,taskId:e};return new Promise((function(t,e){i.a.getCourseData({query:s}).then((function(e){r.reportFinishCondition=e.activity.finishCondition,t(e)})).catch((function(t){e(t)}))}))},reprtData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eventName:"doing",ContinuousReport:!1,watchTime:null};if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||t.ContinuousReport))if(""===this.sign){var e={client:"h5"},r=localStorage.getItem("flowSign");r&&(e.lastSign=r,localStorage.removeItem("flowSign")),this.start(t,e)}else this.reportTaskEvent(t)},start:function(t,e){var r=this;i.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:"start"},data:e}).then((function(e){if(r.handleReportResult(e),e.learnControl.allowLearn)r.sign=e.record.flowSign,r.record=e.record,r.reportTaskEvent(t);else{var i=e.learnControl.denyReason;r.reportJudge(i)}}))},reportTaskEvent:function(t){var e=this;if(0!==this.sign.length){var r={client:"h5",sign:this.sign,duration:this.learnTime,status:this.absorbed};t.reActive&&(r.reActive=t.reActive),this.learnTime=0,i.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:t.eventName},data:r}).then((function(t){if(e.handleReportResult(t),e.record=t.record,e.absorbed=0,e.sign=t.record.flowSign,!t.learnControl.allowLearn){var r=t.learnControl.denyReason;e.reportJudge(r)}})).catch((function(t){e.clearReportIntervalTime()}))}},handleReportResult:function(t){this.reportResult=t,t.taskResult&&"finish"===t.taskResult.status?(this.isFinish=!0,this.$store.commit(s.y,"finish"),this.$store.commit("course/".concat(s.C),t.completionRate)):this.$store.commit(s.y,"start")},intervalReportLearnTime:function(){var t=this;this.reportLearnTime=setInterval((function(){t.checkoutTime(),t.learnTime++}),1e3)},intervalReportData:function(){var t=this,e=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){t.reprtData({eventName:"doing",ContinuousReport:!0})}),e)},checkoutTime:function(){this.reportFinishCondition&&"time"===this.reportFinishCondition.type&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData({eventName:"finish",ContinuousReport:!0})},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null},reportJudge:function(t){"kick_previous"===t?this.kickEachOther("kick_previous"):"reject_current"===t&&(this.clearReportIntervalTime(),this.kickEachOther("reject_current"))},outFocusMask:function(t){this.absorbed=1,this.isShowOutFocusMask=!1,!this.player||"video"!==this.reportType&&"audio"!==this.reportType||this.player.play(),this.toggleReportMaskHidden("remove"),this.reprtData({eventName:"doing",ContinuousReport:!0,reActive:1})},kickEachOther:function(t){if(this.absorbed=1,"testpaper"!==this.reportType&&"live"!==this.reportType&&"homework"!==this.reportType||"kick_previous"!==t){if(this.isShowOutFocusMask=!0,this.outFocusMaskType=t,"video"===this.reportType||"audio"===this.reportType){if(this.player&&this.player.destory&&"reject_current"===t)return void this.player.destory();this.player&&this.player.pause&&this.player.pause()}this.toggleReportMaskHidden("add")}},ineffectiveLearning:function(t){this.isShowOutFocusMask||(this.absorbed=0,this.isShowOutFocusMask=!0,this.outFocusMaskType=t,this.player&&"video"===this.reportType&&this.player.pause(),this.reprtData({eventName:"doing",ContinuousReport:!0}))},toggleReportMaskHidden:function(t){"video"!==this.reportType&&"audio"!==this.reportType&&("add"===t?document.getElementsByTagName("body")[0].classList.add("report-mask-hidden"):"remove"===t&&document.getElementsByTagName("body")[0].classList.remove("report-mask-hidden"))},initVisibilitychange:function(){document.addEventListener("visibilitychange",this.visibilityState)},visibilityState:function(){"video"===this.reportType&&("hidden"===document.visibilityState?this.ineffectiveLearning("ineffective_learning"):"visible"===document.visibilityState&&this.player.pause())},onbeforeunload:function(){window.addEventListener("beforeunload",this.onbeforeunloadFlowSign)},onbeforeunloadFlowSign:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign)}}}},cae6:function(t,e,r){"use strict";r.r(e),r("8e6e"),r("456d"),r("e7e5");var i=r("d399"),s=(r("a481"),r("ac6a"),r("bd86")),o=r("3ce7"),n=r("2f62"),a=r("faa5"),u=r("ea9a"),c=r("c8a5");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(s.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"HomeworkResult",components:{OutFocusMask:r("7c97").a},mixins:[u.a,c.a],data:function(){return{result:null,calHeight:null,items:null,title:null,color:{right:"green",none:"brown",wrong:"orange",partRight:"orange",noAnswer:"gray"}}},computed:h(h({},Object(n.e)({isLoading:function(t){return t.isLoading},user:function(t){return t.user}})),{},{usedTime:function(){var t=parseInt(this.result.usedTime)||0;return t<60?1:Math.round(t/60)},isReadOver:function(){return!(!this.result||"finished"!==this.result.status)}}),mounted:function(){this.initReport(),this.gethomeworkResult()},beforeRouteEnter:function(t,e,r){document.getElementById("app").style.background="#f6f6f6",r()},beforeRouteLeave:function(t,e,r){document.getElementById("app").style.background="",r()},methods:h(h({},Object(n.d)({setNavbarTitle:a.u})),{},{gethomeworkResult:function(){var t=this;o.a.homeworkResult({query:{homeworkId:this.$route.query.homeworkId,homeworkResultId:this.$route.query.homeworkResultId}}).then((function(e){t.result=e,t.setNavbarTitle(e.paperName),t.title=e.paperName,t.interruption(),t.formatData(e),t.calSubjectHeight()}))},initReport:function(){this.initReportData(this.$route.query.courseId,this.$route.query.taskId,"homework")},interruption:function(){var t=this;this.canDoing(this.result,this.user.id).then((function(){t.startHomework()})).catch((function(e){var r=e.answer;t.submitHomework(r)}))},formatData:function(t){var e=this,r=[];t.items.forEach((function(t){"material"!=t.type&&(t.status=e.getStatus(t),r.push(t)),"material"==t.type&&t.subs.forEach((function(t){t.status=e.getStatus(t),r.push(t)}))})),this.items=r},getStatus:function(t){return t.testResult&&t.testResult.status?t.testResult.status:"noAnswer"},startHomework:function(){this.$router.replace({name:"homeworkDo",query:{targetId:this.$route.query.taskId,homeworkId:this.$route.query.homeworkId,courseId:this.$route.query.courseId},params:{KeepDoing:!0}})},submitHomework:function(t){var e=this,r={answer:t,homeworkId:this.$route.query.homeworkId,userId:this.user.id,homeworkResultId:this.$route.query.homeworkResultId};this.handHomeworkdo(r).then((function(t){e.reprtData({eventName:"finish"}),e.$router.replace({name:"homeworkResult",query:{homeworkId:e.$route.query.homeworkId,homeworkResultId:e.$route.query.homeworkResultId,courseId:e.$route.query.courseId,taskId:e.$route.query.taskId}})})).catch((function(t){i.a.fail(t.message)}))},calSubjectHeight:function(){var t=this;this.$nextTick((function(){var e=t.$refs.data.offsetHeight+t.$refs.tag.offsetHeight+46,r=document.documentElement.clientHeight-e-(t.$refs.footer.offsetHeight||0);t.calHeight="".concat(r,"px")}))},viewAnalysis:function(){this.$router.push({name:"homeworkAnalysis",query:{homeworkId:this.$route.query.homeworkId,homeworkResultId:this.$route.query.homeworkResultId,title:this.title,targetId:this.$route.query.taskId,courseId:this.$route.query.courseId}})}})},p=r("a6c2"),m=Object(p.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"testResults"},[r("out-focus-mask",{attrs:{type:t.outFocusMaskType,isShow:t.isShowOutFocusMask,reportType:t.reportType},on:{outFocusMask:t.outFocusMask}}),t.isLoading?r("e-loading"):t._e(),t.result?r("div",{ref:"data",staticClass:"result-data"},[r("div",{staticClass:"result-data__item"},[t._v("\n      正确率\n      "),t.isReadOver?r("div",{staticClass:"result-data__bottom data-number-green data-medium"},[r("span",{staticClass:"data-number"},[t._v(t._s(t.result.rightRate))]),t._v("%\n      ")]):r("div",{staticClass:"result-data__bottom data-text-blue"},[t._v("待批阅")])]),r("div",{staticClass:"result-data__item"},[t._v("\n      做题用时\n      "),r("div",{staticClass:"result-data__bottom data-number-gray data-medium"},[r("span",{staticClass:" data-number"},[t._v(t._s(t.usedTime))]),t._v("分钟\n      ")])])]):t._e(),r("div",{ref:"tag",staticClass:"result-tag"},[t._m(0),t._m(1),t._m(2),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isReadOver,expression:"!isReadOver"}],staticClass:"result-tag-item clearfix"},[r("div",{staticClass:"result-tag-item__circle circle-brown"}),t._v("\n      待批阅\n    ")])]),r("div",{staticClass:"result-subject",style:{height:t.calHeight}},[r("div",{staticClass:"result-paner"},[r("ul",{staticClass:"result-list"},t._l(t.items,(function(e,i){return r("li",{key:i,class:["result-list__item homework-number","circle-"+t.color[e.status]]},[t._v("\n          "+t._s(e.seq)+"\n        ")])})),0)]),r("div",{ref:"footer",staticClass:"result-footer"},[r("van-button",{staticClass:"result-footer__btn",style:{marginRight:t.isReadOver?"2vw":0},attrs:{type:"primary"},on:{click:t.viewAnalysis}},[t._v("查看解析\n      ")]),t.isReadOver?r("van-button",{staticClass:"result-footer__btn",attrs:{type:"primary"},on:{click:function(e){return t.startHomework()}}},[t._v("再做一次\n      ")]):t._e()],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-green"}),this._v("\n      正确\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-orange"}),this._v("\n      错误\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-gray"}),this._v("\n      未作答\n    ")])}],!1,null,null,null);e.default=m.exports},ea9a:function(t,e,r){"use strict";r("e17f");var i=r("2241");r("456d"),r("ac6a"),e.a={methods:{canDoing:function(t,e){return new Promise((function(r,s){if(t&&"doing"===t.status){var o="homework-".concat(e,"-").concat(t.id),n=JSON.parse(localStorage.getItem(o));n=n?Object.keys(n).forEach((function(t){n[t]=n[t].filter((function(t){return""!==t}))})):{},i.a.confirm({title:"提示",cancelButtonText:"放弃做题",confirmButtonText:"继续做题",message:"您有未完成的作业，是否继续？"}).then((function(){r()})).catch((function(){s({answer:n})}))}}))}}}}}]);
!function(e){var t=function(){var e={},t={};return e.ajaxComplete=function(e){return e?4===e.readyState&&200===e.status?JSON.parse(e.responseText):!1:!1},e.newAjaxInstance=function(){return new XMLHttpRequest},t.getJSON=function(t){var n=e.newAjaxInstance();return n.open("GET",t,!1),n.send(null),e.ajaxComplete(n)},t}();e.Ajax=t}(window,document),function(e){var t=function(){var e={};return e.init=function(){console.log("ModelKlipim"),e.getJSONData()},e.getJSONData=function(){return console.log("getJSONData"),Ajax.getJSON("/public/json/stickers.json")},e.getStickerInfo=function(e){return JSON.parse(e.getAttribute("data-sticker-info").split("'").join('"'))},e}();e.ModelKlipim=t}(window,document),function(e,t){var n=function(){var n={},i={};return n.canvas=new fabric.Canvas("canvas"),n.modelKlipim=ModelKlipim,n.addStickerOnLoad=function(){var e=t.querySelector("#img-0"),o=n.modelKlipim.getStickerInfo(e);i.addStickerOnCanvas(e),i.addStickerInfo(o)},n.addStickersToView=function(){console.log("AddStickersToView");for(var e,i,o=t,c=n.modelKlipim.getJSONData(),r=o.querySelector("#stickers-list"),a=o.createDocumentFragment(),l=c.length;l--;)e=o.createElement("li"),e.classList.add("sticker-item","sticker-"+l),i=n.createNewSticker(c[l],l),e.appendChild(i),a.insertBefore(e,a.firstChild);r.appendChild(a)},n.createNewSticker=function(e,n){var i,o=t;return i=o.createElement("img"),i.classList.add("sticker-item-image"),i.id="img-"+n,i.src="/stickers/"+e.paths[0],i.setAttribute("data-sticker-info",JSON.stringify(e).split('"').join("'")),i},n.createStickersDownloadList=function(e){for(var n=t,i=(n.querySelector(".sticker-download-list"),n.createDocumentFragment(),e.length);i--;)console.log("Parei aqui...")},n.initEvents=function(){var i=t,o=i.querySelectorAll(".sticker-item"),c=i.querySelectorAll(".sticker-item-image");[].forEach.call(c,function(e){e.addEventListener("click",n.selectSticker,!1)}),[].forEach.call(o,function(e){e.addEventListener("click",n.selectSticker,!1)}),e.addEventListener("load",n.addStickerOnLoad,!1)},n.isStickerItem=function(e){return e.classList.contains("sticker-item")},n.selectSticker=function(e){e.preventDefault(),e.stopPropagation();var t=n.isStickerItem(this)?this.firstChild:this,o=n.modelKlipim.getStickerInfo(t);i.addStickerOnCanvas(t),i.addStickerInfo(o)},i.addStickerInfo=function(e){var i=t,o=i.querySelector(".sticker-title"),c=i.querySelector(".sticker-link");o.textContent=e.name,c.textContent=c.href=e.website,n.createStickersDownloadList(e.paths)},i.addStickerOnCanvas=function(e){var t=n.canvas,i=new fabric.Image(e,{left:t.width/1.5-e.width/2,top:t.height/1.5-e.height/2,scaleX:2,scaleY:2});i.lockUniScaling=!0,t.remove(t.item(0)),t.add(i),t.setActiveObject(t.item(0))},i.init=function(){console.log("Controller Klipim Init"),n.addStickersToView(),n.initEvents()},i}();e.ControllerKlipim=n}(window,document),function(e,t){"use strict";var n="klip.im"===e.location.hostname,i="?development"===e.location.search,o=n&&!i;o&&(e.console=console||{},console.assert=console.clear=console.constructor=console.count=console.debug=console.dir=console.dirxml=console.error=console.group=console.groupCollapsed=console.groupEnd=console.info=console.log=console.markTimeline=console.profile=console.profileEnd=console.table=console.time=console.timeEnd=console.timeStamp=console.timeline=console.timelineEnd=console.trace=console.warn=function(){return!1});var c=function(){var e={};return e.init=function(){console.log("Init"),ControllerKlipim.init()},e}();t.addEventListener("DOMContentLoaded",function(){c.init()})}(window,document);
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_youtube_player__ = __webpack_require__("../../../../ngx-youtube-player/modules/ngx-youtube-player.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inc_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/inc/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_public_charts_charts_component__ = __webpack_require__("../../../../../src/app/components/public/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_public_browse_browse_component__ = __webpack_require__("../../../../../src/app/components/public/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_public_public_component__ = __webpack_require__("../../../../../src/app/layouts/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_secure_secure_component__ = __webpack_require__("../../../../../src/app/layouts/secure/secure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_authenticate_authenticate_component__ = __webpack_require__("../../../../../src/app/layouts/authenticate/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_functions__ = __webpack_require__("../../../../../src/app/common/functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config_API_Main__ = __webpack_require__("../../../../../src/app/config/API_Main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_playlist_service__ = __webpack_require__("../../../../../src/app/shared/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_downloader_service__ = __webpack_require__("../../../../../src/app/shared/downloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_convert_number_pipe__ = __webpack_require__("../../../../../src/app/pipes/convert-number.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_safeHtml_pipe__ = __webpack_require__("../../../../../src/app/pipes/safeHtml.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__inc_footer_footer_component__ = __webpack_require__("../../../../../src/app/inc/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_public_track_detail_track_detail_component__ = __webpack_require__("../../../../../src/app/components/public/track-detail/track-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_public_search_search_component__ = __webpack_require__("../../../../../src/app/components/public/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_public_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/public/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_public_queue_queue_component__ = __webpack_require__("../../../../../src/app/components/public/queue/queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_public_embed_list_embed_list_component__ = __webpack_require__("../../../../../src/app/components/public/embed-list/embed-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__inc_dropdown_box_dropdown_box_component__ = __webpack_require__("../../../../../src/app/inc/dropdown-box/dropdown-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__confirm_directive__ = __webpack_require__("../../../../../src/app/confirm.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_public_hot_hot_component__ = __webpack_require__("../../../../../src/app/components/public/hot/hot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_public_discovery_discovery_component__ = __webpack_require__("../../../../../src/app/components/public/discovery/discovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_public_ads_ads_component__ = __webpack_require__("../../../../../src/app/components/public/ads/ads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_public_related_playlist_related_playlist_component__ = __webpack_require__("../../../../../src/app/components/public/related-playlist/related-playlist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__inc_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_public_charts_charts_component__["a" /* ChartsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_public_browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_11__layouts_public_public_component__["a" /* PublicComponent */],
            __WEBPACK_IMPORTED_MODULE_12__layouts_secure_secure_component__["a" /* SecureComponent */],
            __WEBPACK_IMPORTED_MODULE_13__layouts_authenticate_authenticate_component__["a" /* AuthenticateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_public_track_detail_track_detail_component__["a" /* TrackDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_public_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_23__inc_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_public_playlist_playlist_component__["a" /* PlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_public_queue_queue_component__["a" /* QueueComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_public_embed_list_embed_list_component__["a" /* EmbedListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__inc_dropdown_box_dropdown_box_component__["a" /* DropdownBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_30__confirm_directive__["a" /* ConfirmDirective */],
            __WEBPACK_IMPORTED_MODULE_31__components_public_hot_hot_component__["a" /* HotComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_public_discovery_discovery_component__["a" /* DiscoveryComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pipes_convert_number_pipe__["a" /* ConvertNumberPipe */],
            __WEBPACK_IMPORTED_MODULE_33__components_public_ads_ads_component__["a" /* AdsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_public_related_playlist_related_playlist_component__["a" /* RelatedPlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pipes_safeHtml_pipe__["a" /* safeHtmlPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_youtube_player__["a" /* YoutubePlayerModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__shared_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_15__common_helper__["a" /* Helper */], __WEBPACK_IMPORTED_MODULE_16__common_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_19__shared_playlist_service__["a" /* PlaylistService */], __WEBPACK_IMPORTED_MODULE_17__config_API_Main__["a" /* API_Main */], __WEBPACK_IMPORTED_MODULE_20__shared_downloader_service__["a" /* DownloaderService */], __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_public_public_component__ = __webpack_require__("../../../../../src/app/layouts/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_charts_charts_component__ = __webpack_require__("../../../../../src/app/components/public/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_public_browse_browse_component__ = __webpack_require__("../../../../../src/app/components/public/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_public_track_detail_track_detail_component__ = __webpack_require__("../../../../../src/app/components/public/track-detail/track-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_public_search_search_component__ = __webpack_require__("../../../../../src/app/components/public/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_public_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/public/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_public_queue_queue_component__ = __webpack_require__("../../../../../src/app/components/public/queue/queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_public_discovery_discovery_component__ = __webpack_require__("../../../../../src/app/components/public/discovery/discovery.component.ts");









var ROUTE = [
    {
        path: '',
        redirectTo: 'chart',
        pathMatch: 'full'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_public_public_component__["a" /* PublicComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_public_discovery_discovery_component__["a" /* DiscoveryComponent */] },
            { path: 'trending/:code', component: __WEBPACK_IMPORTED_MODULE_2__components_public_charts_charts_component__["a" /* ChartsComponent */] },
            { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_3__components_public_browse_browse_component__["a" /* BrowseComponent */] },
            { path: 'video/:code', component: __WEBPACK_IMPORTED_MODULE_4__components_public_track_detail_track_detail_component__["a" /* TrackDetailComponent */] },
            { path: 'playlist/:code', component: __WEBPACK_IMPORTED_MODULE_6__components_public_playlist_playlist_component__["a" /* PlaylistComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_5__components_public_search_search_component__["a" /* SearchComponent */] },
            { path: 'queue', component: __WEBPACK_IMPORTED_MODULE_7__components_public_queue_queue_component__["a" /* QueueComponent */] },
            { path: 'discovery', component: __WEBPACK_IMPORTED_MODULE_8__components_public_discovery_discovery_component__["a" /* DiscoveryComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(ROUTE, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/common/functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Functions = (function () {
    function Functions() {
    }
    Functions.prototype.testMethod = function () {
        console.log("This is test function.");
    };
    /*================================
   Get Token
   =================================*/
    Functions.prototype.getToken = function () {
        return localStorage.getItem('currentUser');
    };
    /*=================================
     AuthHeader
     ==================================*/
    Functions.prototype.AuthHeader = function () {
        var authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        authHeader.append('Authorization', 'Bearer ' + this.getToken());
        return authHeader;
    };
    Functions.prototype.AuthHeaderNoTK = function () {
        var authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        authHeader.append('Content-Type', 'application/x-www-form-urlencoded');
        return authHeader;
    };
    Functions.prototype.AuthHeaderPost = function () {
        var authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        authHeader.append('Content-Type', 'application/x-www-form-urlencoded');
        authHeader.append('Authorization', 'Bearer ' + this.getToken());
        return authHeader;
    };
    Functions.prototype.AuthHeaderPostJson = function () {
        var authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        authHeader.append('Content-Type', 'application/json');
        authHeader.append('Authorization', 'Bearer ' + this.getToken());
        return authHeader;
    };
    return Functions;
}());
Functions = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], Functions);

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ "../../../../../src/app/common/helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_playlist_service__ = __webpack_require__("../../../../../src/app/shared/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Helper = (function () {
    function Helper(_sanitizer, router, meta, title, http, sharedService, playlistService, videoService) {
        this._sanitizer = _sanitizer;
        this.router = router;
        this.meta = meta;
        this.title = title;
        this.http = http;
        this.sharedService = sharedService;
        this.playlistService = playlistService;
        this.videoService = videoService;
        this.listVideo = [];
    }
    Helper.prototype.changePlaylist = function (playListCode) {
        var _this = this;
        this.playlistService.fetchDetailPlaylistYoutube(playListCode)
            .subscribe(function (data) {
            _this.listVideo = [];
            data.items.map(function (item) {
                _this.listVideo.push(item.contentDetails.videoId);
            });
            _this.sharedService.changeListVideo(_this.listVideo);
        });
    };
    Helper.prototype.changeVideoList = function (videoId) {
        var _this = this;
        this.videoService.fetchRelateVideo(videoId)
            .subscribe(function (data) {
            _this.listVideo = [videoId];
            data.items.map(function (item) {
                _this.listVideo.push(item.id.videoId);
            });
            _this.sharedService.changeListVideo(_this.listVideo);
        });
    };
    Helper.prototype.changeVideoListPro = function (videos) {
        this.listVideo = [];
        this.sharedService.changeListVideo(videos);
    };
    Helper.prototype.makeUrlSafe = function (videoId) {
        return this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoId + "?autoplay=0");
    };
    Helper.prototype.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        this.yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - this.yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    };
    Helper.prototype.makeTitle = function (title) {
        if (title === void 0) { title = ''; }
        this.title.setTitle(title);
    };
    Helper.prototype.downloadFile = function (url) {
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* ResponseContentType */].Blob });
        return this.http.get(url, options)
            .map(function (res) { return res.blob(); });
    };
    Helper.prototype.makeMeta = function (title, des, img, url) {
        if (title === void 0) { title = ''; }
        if (des === void 0) { des = ''; }
        if (img === void 0) { img = ''; }
        if (url === void 0) { url = ''; }
        console.log(this.router.url);
        // Remove tag
        this.makeRemoveTag();
        var in_desc = des !== '' ? des.substring(0, 180) : 'TinyTube is a great youtube player (no advertisements, no ads), It\'s fun & easy to listen, watch and repeat videos from youtube with Tinytube. What if youtube was designed to be used as music player?';
        var in_title = title !== '' ? title + ' - TinyTube' : 'Tinytube - Ultimate Player for youtube play - Best way to listen, watch & repeat video from youtube';
        var in_url = url !== '' ? url : 'https://tinytube.github.io';
        var in_img = img !== '' ? img : 'https://tinytube.github.io/assets/images/fav.png';
        this.meta.addTags([
            {
                name: 'author', content: 'https://plus.google.com/+LongDo404'
            },
            {
                name: 'keywords', content: 'tinytube youtube repeat youtuberepeat listenonrepeat loop video music songs artist musicians music video artists tinytube angular2app angularapp'
            },
            {
                name: 'description', content: in_desc
            },
            {
                property: 'fb:app_id', content: '363561400755499'
            },
            {
                property: 'og:description', content: in_desc
            },
            {
                property: 'og:title', content: in_title
            },
            {
                property: 'og:image', content: in_img
            },
            {
                property: 'og:type', content: 'website'
            },
            {
                property: 'og:site_name', content: 'tinytube.github.io'
            },
            {
                property: 'og:url', content: 'https://tinytube.github.io/#' + this.router.url
            },
        ]);
        this.title.setTitle(in_title);
    };
    Helper.prototype.makeRemoveTag = function () {
        this.meta.removeTag("name='og:title'");
        this.meta.removeTag("name='og:site_name'");
        this.meta.removeTag("name='og:url'");
        this.meta.removeTag("name='og:description'");
        this.meta.removeTag("name='description'");
    };
    return Helper;
}());
Helper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_MySharedService__["a" /* MySharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_MySharedService__["a" /* MySharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_playlist_service__["a" /* PlaylistService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_video_service__["a" /* VideoService */]) === "function" && _h || Object])
], Helper);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/ads/ads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public/ads/ads.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding is_stuck\" style=\" \" data-ui-jp=\"stick_in_parent\">\r\n  <h6 class=\"text text-muted\">Find Us</h6>\r\n  <div class=\"fb-page\" data-href=\"https://www.facebook.com/facebook\" data-height=\"250\" data-small-header=\"false\"\r\n       data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\">\r\n    <blockquote cite=\"https://www.facebook.com/facebook\" class=\"fb-xfbml-parse-ignore\">\r\n      <a href=\"https://www.facebook.com/facebook\">Facebook</a>\r\n    </blockquote>\r\n  </div>\r\n  <div class=\"b-b m-y\"></div>\r\n  <h6 class=\"text text-muted\">Go mobile</h6>\r\n  <div class=\"btn-groups\">\r\n    <a href=\"\" class=\"btn btn-sm dark lt m-r-xs\" style=\"width: 135px\">\r\n      <span class=\"pull-left m-r-sm\"><i class=\"fa fa-apple fa-2x\"></i></span>\r\n      <span class=\"clear text-left l-h-1x\">\r\n        <span class=\"text-muted text-xxs\">Download on the</span>\r\n        <b class=\"block m-b-xs\">App Store</b></span></a>\r\n    <a href=\"\" class=\"btn btn-sm dark lt\" style=\"width: 133px\">\r\n      <span class=\"pull-left m-r-sm\"><i class=\"fa fa-play fa-2x\"></i></span>\r\n      <span class=\"clear text-left l-h-1x\">\r\n        <span class=\"text-muted text-xxs\">Get it on</span>\r\n        <b class=\"block m-b-xs m-r-xs\">Google Play</b></span>\r\n    </a>\r\n  </div>\r\n  <div class=\"b-b m-y\"></div>\r\n  <div class=\"nav text-sm _600\">\r\n    <a href=\"javascript:;\" class=\"nav-link text-muted m-r-xs\">About</a>\r\n    <a href=\"javascript:;\" class=\"nav-link text-muted m-r-xs\">Contact</a>\r\n    <a href=\"javascript:;\" class=\"nav-link text-muted m-r-xs\">Legal</a>\r\n    <a href=\"javascript:;\" class=\"nav-link text-muted m-r-xs\">Policy</a>\r\n  </div>\r\n  <p class=\"text-muted text-xs p-b-lg\">© Copyright 2016</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/public/ads/ads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdsComponent = (function () {
    function AdsComponent() {
    }
    AdsComponent.prototype.ngOnInit = function () {
    };
    return AdsComponent;
}());
AdsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ads',
        template: __webpack_require__("../../../../../src/app/components/public/ads/ads.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public/ads/ads.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdsComponent);

//# sourceMappingURL=ads.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding\">\r\n  <div class=\"page-title m-b\">\r\n    <form (keydown.enter)=\"$event.preventDefault()\" class=\"\">\r\n      <div class=\"input-group input-group-lg\">\r\n        <input type=\"text\" class=\"form-control\" id=\"searchForm\" value=\"{{query}}\" placeholder=\"Search ...\" autofocus (keyup)=\"search(textBox.value)\" #textBox>\r\n        <span class=\"input-group-btn\"><button class=\"btn b-a no-shadow white\" type=\"button\">Search</button></span>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"m-b\">\r\n    <button (click)=\"showTracks()\" class=\"md-btn md-raised m-b-sm w-xs pink\">Tracks</button>\r\n    <button (click)=\"showPlaylist()\" class=\"md-btn md-raised m-b-sm w-xs red\">Playlist</button>\r\n  </div>\r\n  <div id=\"playlist-area\" style=\"display: none;\" *ngIf='isLoadedPlaylist' data-ui-jp=\"jscroll\" class=\"jscroll-loading-center\" data-ui-options=\"{\r\n                                        autoTrigger: true,\r\n                                        loadingHtml: '<i class=\\'fa fa-refresh fa-spin text-md text-muted\\'></i>',\r\n                                        padding: 50,\r\n                                        nextSelector: 'a.jscroll-next:last'\r\n                                        }\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4 col-sm-4 col-md-3\" *ngFor = 'let item of playlists' >\r\n        <div class=\"item r\">\r\n          <div class=\"item-media\">\r\n            <a title=\"{{item?.name}}\" [routerLink]=\"['/playlist', item?.code]\"  class=\"item-media-content\" [style.background-image]=\"'url(' + item?.thumbnail + ')'\"></a>\r\n            <div class=\"item-overlay center\"><a title=\"{{item?.name}}\" [routerLink]=\"['/playlist', item?.code]\"  class=\"btn-playpause\">Play</a></div>\r\n          </div>\r\n          <div class=\"item-info\">\r\n            <div class=\"item-title text-ellipsis\"><a title=\"{{item?.name}}\" [routerLink]=\"['/playlist', item?.code]\">{{item?.name}}</a></div>\r\n            <div class=\"item-author text-sm text-ellipsis\"><a title=\"{{item?.owner}}\" href=\"javascript:;\" class=\"text-muted\">{{item?.owner}}</a></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"track-area\"  *ngIf='isLoadedTracks' class=\" item-list item-list-lg item-list-by m-b\">\r\n    <div class=\"col-xs-12\" *ngFor=\"let v of videoList\">\r\n      <div class=\"item r\">\r\n        <div class=\"item-media\">\r\n          <a title=\"{{v?.title}}\" [routerLink]=\"['/video', v.videoId]\" class=\"item-media-content\" [style.background-image]=\"'url(' + v.thumbnail + ')'\" ></a>\r\n          <div class=\"item-overlay center\"><a title=\"{{v?.title}}\" class=\"btn-playpause\" [routerLink]=\"['/video', v.videoId]\">Play</a></div>\r\n        </div>\r\n        <div class=\"item-info\">\r\n          <div class=\"bottom text-right\">\r\n            <dropdown-box [inputId]=\"v?.videoId\"></dropdown-box>\r\n          </div>\r\n          <div class=\"item-title text-ellipsis\"><a title=\"{{v?.title}}\" [routerLink]=\"['/video', v.videoId]\">{{ v.title }}</a></div>\r\n          <div class=\"item-meta text-sm text-muted\"><span class=\"item-meta-tag visible-list\"><a href=\"browse.html\"></a></span></div>\r\n          <div class=\"item-except visible-list text-sm text-muted h-2x m-t-sm\">{{ v.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__ = __webpack_require__("../../../../../src/app/shared/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_playlist__ = __webpack_require__("../../../../../src/app/models/playlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BrowseComponent = (function () {
    function BrowseComponent(playlistService, videoService, helper) {
        this.playlistService = playlistService;
        this.videoService = videoService;
        this.helper = helper;
        this.playlists = null;
        this.isLoadedPlaylist = false;
        this.isLoadedTracks = false;
        this.country = 'US';
        this.query = 'top 100';
        this.videoList = null;
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.query = localStorage.getItem('search');
        this.search(this.query);
        this.helper.makeMeta('Browse');
    };
    BrowseComponent.prototype.search = function (query) {
        var _this = this;
        this.getFromLocal(query);
        this.playlistService.fetchPlaylistYoutube(this.country, this.query)
            .subscribe(function (data) {
            _this.playlists = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_playlist__["a" /* Playlist */]('', item.id.playlistId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.channelTitle);
            });
            _this.isLoadedPlaylist = true;
        });
        this.videoService.fetchVideos(this.query)
            .toPromise()
            .then(function (data) {
            _this.videoList = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__models_video__["a" /* Video */](item.id.videoId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, '', '', item.snippet.channelTitle);
            });
            _this.isLoadedTracks = true;
        });
    };
    BrowseComponent.prototype.changePlaylist = function (playListCode) {
        this.helper.changePlaylist(playListCode);
    };
    BrowseComponent.prototype.showPlaylist = function () {
        $("#playlist-area").show();
        $("#track-area").hide();
    };
    BrowseComponent.prototype.showTracks = function () {
        $("#playlist-area").hide();
        $("#track-area").show();
    };
    BrowseComponent.prototype.getFromLocal = function (query) {
        if (localStorage.getItem("search") === null || query === '') {
            localStorage.setItem('search', '');
        }
        else {
            localStorage.setItem('search', query);
        }
        this.query = localStorage.getItem('search');
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/components/public/browse/browse.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_video_service__["a" /* VideoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */]) === "function" && _c || Object])
], BrowseComponent);

var _a, _b, _c;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding\">\r\n  <div class=\"page-title m-b\">\r\n    <h1 class=\"inline m-a-0\">Trending Up</h1>\r\n    <div class=\"dropdown inline\">\r\n      <button class=\"btn btn-sm no-bg h4 m-y-0 v-b dropdown-toggle text-primary\" data-toggle=\"dropdown\">{{country}}</button>\r\n      <div class=\"dropdown-menu\">\r\n        <a (click)=\"changeCountry('VN')\" class=\"dropdown-item active\">Việt Nam</a>\r\n        <a (click)=\"changeCountry('US')\" class=\"dropdown-item\">US</a>\r\n        <a (click)=\"changeCountry('KR')\" class=\"dropdown-item\">Korea</a>\r\n        <a (click)=\"changeCountry('JP')\" class=\"dropdown-item\">Japan</a>\r\n        <a (click)=\"changeCountry('CN')\" class=\"dropdown-item\">China</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row item-list item-list-md item-list-li m-b\" *ngIf=\"videoList\">\r\n    <div class=\"col-xs-12\" *ngFor=\"let video of videoList\">\r\n      <div class=\"item r\" data-id=\"item-8\">\r\n        <div class=\"item-media\">\r\n          <a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\" class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n          <div class=\"item-overlay center\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"btn-playpause\">Play</a></div>\r\n        </div>\r\n        <div class=\"item-info\">\r\n          <div class=\" bottom text-right\">\r\n            <dropdown-box [inputId]=\"video?.videoId\"></dropdown-box>\r\n          </div>\r\n          <div class=\"item-title text-ellipsis\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\">{{video?.title}}</a></div>\r\n          <div class=\"item-author text-sm text-ellipsis\"><a (click)=\"changeVideoList(video?.videoId)\" class=\"text-muted\">{{video?.description}}</a></div>\r\n          <div class=\"item-author text-sm\">\r\n            <i class=\"fa fa-play text-muted\"></i> {{video?.viewCount | convertNumber}}\r\n            <i class=\"fa fa-heart m-l-sm text-muted\"></i> {{video?.likeCount | convertNumber}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartsComponent = (function () {
    function ChartsComponent(videoService, activatedRoute, router, helper) {
        this.videoService = videoService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.helper = helper;
        this.countrySupported = ['VN', 'US', 'JP', 'KR', 'CN'];
        this.videoList = null;
        this.country = '';
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (_this.countrySupported.includes(params['code'])) {
                _this.country = params['code'];
                _this.callService();
            }
            else {
                //navigate 404
                _this.router.navigate(['/trending/US']);
            }
        });
    };
    ChartsComponent.prototype.callService = function () {
        var _this = this;
        this.videoService.fetchTrendingVideo(this.country)
            .subscribe(function (data) {
            _this.videoList = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.helper.makeMeta('Trending Up in ' + _this.country);
        });
    };
    ChartsComponent.prototype.changeCountry = function (country) {
        console.log(country);
        this.country = country;
        this.callService();
    };
    ChartsComponent.prototype.changeVideoList = function (videoId) {
        this.helper.changeVideoList(videoId);
    };
    return ChartsComponent;
}());
ChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-charts',
        template: __webpack_require__("../../../../../src/app/components/public/charts/charts.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_helper__["a" /* Helper */]) === "function" && _d || Object])
], ChartsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/discovery/discovery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding\">\r\n  <div id=\"discover\" *ngIf=\"loaded_playlist\">\r\n    <div class=\"page-title m-b\">\r\n      <h1 class=\"inline m-a-0\">Discover</h1>\r\n    </div>\r\n    <div class=\"row row-sm item-masonry item-info-overlay\">\r\n      <div *ngFor=\"let item of listPlaylist; let f = first\">\r\n        <div class=\"{{f ? 'col-sm-6 col-xs-12' : 'col-sm-3 col-xs-6'}} \">\r\n          <div class=\"item r\" data-id=\"item-1\">\r\n            <div class=\"item-media\">\r\n              <a [routerLink]=\"['/playlist', item?.code]\" title=\"{{item?.name}}\" class=\"item-media-content\" [style.background-image]=\"'url(' + item?.thumbnail + ')'\"></a>\r\n              <div class=\"item-overlay center\"><a [routerLink]=\"['/playlist', item?.code]\"  title=\"{{item?.name}}\" class=\"btn-playpause\">Play</a></div>\r\n            </div>\r\n            <div class=\"item-info\">\r\n              <div class=\"item-title text-ellipsis\"><a id=\"{{item?.code}}\" title=\"{{item?.name}}\" [routerLink]=\"['/playlist', item?.code]\" >{{item?.name}}</a></div>\r\n              <div class=\"item-author text-sm text-ellipsis\"><a title=\"{{item?.owner}}\" href=\"javascript:;\" class=\"text-muted\">{{item?.owner}}</a></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"new\" *ngIf=\"loaded_new_US\">\r\n    <h2 class=\"widget-title h4 m-b\">New</h2>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-4 col-sm-4 col-md-3\"  *ngFor=\"let video of videoListNewUS\">\r\n        <div class=\"item r\" data-id=\"item-3\">\r\n          <div class=\"item-media\">\r\n            <a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n            <div class=\"item-overlay center\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"btn-playpause\">Play</a></div>\r\n          </div>\r\n          <div class=\"item-info\">\r\n            <div class=\"item-title text-ellipsis\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\" >{{video?.title}}</a></div>\r\n            <div class=\"item-author text-sm text-ellipsis\">{{video?.channelTitle}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"bestUs\" *ngIf=\"loaded_US\">\r\n    <h2 class=\"widget-title h4 m-b\">America</h2>\r\n    <div class=\"row item-list item-list-md m-b\">\r\n      <div class=\"col-sm-6\" *ngFor=\"let video of videoListRecommendUS\">\r\n        <div class=\"item r\" data-id=\"item-3\">\r\n          <div class=\"item-media\">\r\n            <a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n            <div class=\"item-overlay center\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"btn-playpause\">Play</a></div>\r\n          </div>\r\n          <div class=\"item-info\">\r\n            <div class=\"item-title text-ellipsis\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\" >{{video?.title}}</a></div>\r\n            <div class=\"item-author text-sm text-ellipsis\">{{video?.channelTitle}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"bestVN\" *ngIf=\"loaded_VN\">\r\n    <h2 class=\"widget-title h4 m-b\">Asia</h2>\r\n    <div class=\"row item-list item-list-md m-b\">\r\n      <div class=\"col-sm-6\" *ngFor=\"let video of videoListRecommendVN\">\r\n        <div class=\"item r\" data-id=\"item-3\">\r\n          <div class=\"item-media\">\r\n            <a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\" class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n            <div class=\"item-overlay center\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"btn-playpause\">Play</a></div>\r\n          </div>\r\n          <div class=\"item-info\">\r\n            <div class=\"item-title text-ellipsis\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\" >{{video?.title}}</a></div>\r\n            <div class=\"item-author text-sm text-ellipsis\">{{video?.channelTitle}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"bestKR\" *ngIf=\"loaded_KR\">\r\n    <h2 class=\"widget-title h4 m-b\">Japan</h2>\r\n    <div class=\"row item-list item-list-md m-b\">\r\n      <div class=\"col-sm-6\" *ngFor=\"let video of videoListRecommendKR\">\r\n        <div class=\"item r\" data-id=\"item-3\">\r\n          <div class=\"item-media\">\r\n            <a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n            <div class=\"item-overlay center\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\"  class=\"btn-playpause\">Play</a></div>\r\n          </div>\r\n          <div class=\"item-info\">\r\n            <div class=\"item-title text-ellipsis\"><a title=\"{{video?.title}}\" [routerLink]=\"['/video', video?.videoId]\" >{{video?.title}}</a></div>\r\n            <div class=\"item-author text-sm text-ellipsis\">{{video?.channelTitle}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/discovery/discovery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_playlist_service__ = __webpack_require__("../../../../../src/app/shared/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_playlist__ = __webpack_require__("../../../../../src/app/models/playlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DiscoveryComponent = (function () {
    function DiscoveryComponent(videoService, playlistService, helper, sharedService) {
        this.videoService = videoService;
        this.playlistService = playlistService;
        this.helper = helper;
        this.sharedService = sharedService;
        this.loaded_US = false;
        this.videoListRecommendUS = null;
        this.loaded_VN = false;
        this.videoListRecommendVN = null;
        this.loaded_KR = false;
        this.videoListRecommendKR = null;
        this.loaded_new_US = false;
        this.videoListNewUS = null;
        this.loaded_playlist = false;
        this.listPlaylist = null;
        this.playListCode = '';
    }
    DiscoveryComponent.prototype.ngOnInit = function () {
        this.getRecommendUS();
        this.getRecommendKR();
        this.getRecommendVN();
        this.getNewUS();
        this.getHotPlaylist();
        this.helper.makeMeta();
    };
    DiscoveryComponent.prototype.changePlaylist = function (playListCode) {
        this.helper.changePlaylist(playListCode);
    };
    DiscoveryComponent.prototype.changeVideoList = function (videoId) {
        this.helper.changeVideoList(videoId);
    };
    DiscoveryComponent.prototype.getHotPlaylist = function () {
        var _this = this;
        var tmp1 = ['vevo', 'top 10', 'today hit'];
        var code = tmp1[Math.floor(Math.random() * tmp1.length)];
        this.playlistService.fetchPlaylistYoutube('US', code, 5)
            .subscribe(function (data) {
            _this.listPlaylist = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__models_playlist__["a" /* Playlist */]('', item.id.playlistId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.channelTitle);
            });
            _this.loaded_playlist = true;
        });
    };
    DiscoveryComponent.prototype.getNewUS = function () {
        var _this = this;
        this.videoService.fetchHotVideo('US', 10, 8)
            .subscribe(function (data) {
            _this.videoListNewUS = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.loaded_new_US = true;
        });
    };
    DiscoveryComponent.prototype.getRecommendUS = function () {
        var _this = this;
        this.videoService.fetchHotVideo('US', 10, 10)
            .subscribe(function (data) {
            _this.videoListRecommendUS = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.loaded_US = true;
        });
    };
    DiscoveryComponent.prototype.getRecommendVN = function () {
        var _this = this;
        this.videoService.fetchHotVideo('VN', 10, 10)
            .subscribe(function (data) {
            _this.videoListRecommendVN = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.loaded_VN = true;
        });
    };
    DiscoveryComponent.prototype.getRecommendKR = function () {
        var _this = this;
        this.videoService.fetchHotVideo('JP', 10, 10)
            .subscribe(function (data) {
            _this.videoListRecommendKR = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.loaded_KR = true;
        });
    };
    return DiscoveryComponent;
}());
DiscoveryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-discovery',
        template: __webpack_require__("../../../../../src/app/components/public/discovery/discovery.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_playlist_service__["a" /* PlaylistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */]) === "function" && _d || Object])
], DiscoveryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=discovery.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/embed-list/embed-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\" id=\"view\">\r\n  <div class=\"pos-rlt\">\r\n    <div class=\"page-bg\" data-stellar-ratio=\"2\" style=\"background-image: url('assets/images/b0.jpg')\"></div>\r\n  </div>\r\n  <div class=\"page-content\">\r\n    <div class=\"padding b-b\">\r\n      <div class=\"row-col\">\r\n        <div class=\"col-sm w w-auto-xs m-b\">\r\n          <div class=\"item w r\">\r\n            <div class=\"item-media\">\r\n              <div class=\"item-media-content\" [style.background-image]=\"'url(' + activeVideo?.thumbnail + ')'\" ></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <div class=\"p-l-md no-padding-xs\">\r\n            <div class=\"page-title\">\r\n              <h1 class=\"inline\">{{activeVideo?.title}}</h1>\r\n            </div>\r\n            <p class=\"item-desc text-ellipsis text-muted\" data-ui-toggle-class=\"text-ellipsis\">{{activeVideo?.description}}</p>\r\n            <div class=\"item-action m-b\">\r\n              <button title=\"\" id=\"btn_play\" class=\"btn-playpause text-primary m-r-sm\" (click)=\"playList()\"  ></button>\r\n              <span class=\"text-muted\">{{activeVideo?.viewCount | convertNumber}}</span>\r\n              <i class=\"material-icons md-24 text-danger m-v-sm inline\">favorite</i>\r\n              <span class=\"text-muted\">{{activeVideo?.likeCount | convertNumber}}</span>\r\n            </div>\r\n            <div class=\"item-meta\">\r\n              <a href=\"javascript:;\" class=\"btn btn-sm btn-outline rounded b-accent\">{{activeVideo?.channelTitle}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row-col\">\r\n\r\n      <div class=\"col-lg-9 b-r\">\r\n        <div class=\"padding\" style=\"\" data-ui-jp=\"stick_in_parent\">\r\n          <div class=\"row item-list item-list-sm m-b\" *ngIf=\"videoList\">\r\n            <div class=\"col-xs-12\" *ngFor=\"let video of videoList\">\r\n              <div id=\"{{video?.videoId}}\" class=\"item r {{activeVideo?.videoId == video?.videoId ? 'item_active' : ''}}\">\r\n                <div class=\"item-media\">\r\n                  <a (click)=\"reloadVideo(video?.videoId)\" class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n                  <div class=\"item-overlay center\"><button (click)=\"reloadVideo(video?.videoId)\" class=\"btn-playpause\">Play</button></div>\r\n                </div>\r\n                <div class=\"item-info\">\r\n\r\n                  <div class=\"bottom text-right\" *ngIf=\"currentRoute == 'queue'\">\r\n                    <div class=\"dropdown inline dropup\">\r\n                      <a class=\"btn btn-icon rounded btn-more\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n                      <div class=\"dropdown-menu pull-right black lt\">\r\n                        <a class=\"dropdown-item\" (click)=\"remove_item_queue(video?.videoId)\" >Remove</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"item-title text-ellipsis\"><a (click)=\"reloadVideo(video?.videoId)\">{{video?.title}}</a></div>\r\n                  <div class=\"item-author text-sm text-ellipsis\">\r\n                    <a href=\"javascript:;\" class=\"text-muted\">{{video?.channelTitle}}</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-3 no-border-md\">\r\n        <app-ads></app-ads>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/embed-list/embed-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbedListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmbedListComponent = (function () {
    function EmbedListComponent(videoService, route, helper, sharedService) {
        this.videoService = videoService;
        this.route = route;
        this.helper = helper;
        this.sharedService = sharedService;
        this.videoId = '';
        this.videoList = [];
        this.arrList = [];
        this.index = 0;
        this.pause = false;
        this.is_repeat = false;
        this.currentRoute = '';
        this.deletedVideoId = '';
        this.query = '';
        this.searchVideoList = null;
        this.objTemp = {};
    }
    EmbedListComponent.prototype.ngOnInit = function () {
        this.initVideoList();
        this.currentRoute = this.route.snapshot.url[0].path;
        this.query = localStorage.getItem('search');
        this.search(this.query);
    };
    EmbedListComponent.prototype.playList = function () {
        if (this.currentRoute === 'playlist') {
            console.log(this.route.snapshot.url);
            var code = this.route.snapshot.url[1].path;
            this.helper.changePlaylist(code);
        }
    };
    EmbedListComponent.prototype.pauseAndPlay = function () {
        if (this.player.getPlayerState() == 1) {
            this.pause = true;
            this.pauseVideo();
        }
        else if (this.player.getPlayerState() == 2) {
            this.playVideo();
            this.pause = false;
        }
    };
    EmbedListComponent.prototype.initVideoList = function () {
        var _this = this;
        this.arrList = this.inputList;
        this.videoId = this.arrList[0];
        this.fireVideo(this.videoId);
        var _loop_1 = function (i) {
            this_1.videoService.detailVideo(this_1.arrList[i])
                .subscribe(function (data) {
                var arrTmp = data.items.map(function (item) {
                    return new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
                });
                _this.videoList[i] = arrTmp[0];
                _this.activeVideo = _this.videoList[_this.index];
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.arrList.length; i++) {
            _loop_1(i);
        }
    };
    EmbedListComponent.prototype.onStateChange = function (event) {
        // video ended
        if (event.data === 0) {
            //Repeat case
            if (this.is_repeat) {
                this.reloadVideo(this.activeVideo.videoId);
                return false;
            }
            if (this.index === (this.videoList.length - 1)) {
                this.index = 0;
            }
            else {
                this.index = this.index + 1;
            }
            this.activeVideo = this.videoList[this.index];
            this.reloadVideo(this.activeVideo.videoId, 'no_index');
        }
        this.ytEvent = event.data;
    };
    EmbedListComponent.prototype.savePlayer = function (player) {
        this.player = player;
        this.player.playVideo();
    };
    EmbedListComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    EmbedListComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    EmbedListComponent.prototype.fireVideo = function (videoId) {
        var _this = this;
        // this.safeURL = this.helper.makeUrlSafe(videoId);
        this.videoService.detailVideo(videoId)
            .subscribe(function (data) {
            var arrTmp = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.activeVideo = arrTmp[0];
        });
    };
    EmbedListComponent.prototype.reloadVideo = function (videoId, flag) {
        if (flag === void 0) { flag = ''; }
        if (flag === '') {
            for (var i = 0; i < this.videoList.length; i++) {
                if (videoId === this.videoList[i].videoId) {
                    this.index = i;
                }
            }
        }
        this.fireVideo(videoId);
        this.player.loadVideoById(videoId);
    };
    EmbedListComponent.prototype.remove_item_queue = function (videoId) {
        var data = [];
        var list = [];
        this.listLocal = JSON.parse(localStorage.getItem('queue'));
        for (var k in this.listLocal) {
            if (this.listLocal[k].id == videoId) {
                delete (this.listLocal[k]);
            }
            else {
                data.push(this.listLocal[k]);
            }
        }
        for (var j in this.videoList) {
            if (this.videoList[j].videoId == videoId) {
                // Delete first element
                if (j == "0") {
                    this.index = -1;
                }
                else if (j == (this.videoList.length - 1).toString()) {
                    this.index = 0;
                }
                delete (this.videoList[j]);
            }
            else {
                list.push(this.videoList[j]);
            }
        }
        $("#" + videoId).hide();
        this.videoList = list;
        localStorage.setItem('queue', JSON.stringify(data));
        this.sharedService.changeData(JSON.parse(localStorage.getItem('queue')).length);
        $.toast({
            heading: 'Success',
            text: 'Your queue has been updated.',
            showHideTransition: 'slide',
            icon: 'success',
            position: 'top-right'
        });
    };
    EmbedListComponent.prototype.add2queue = function (videoId) {
        var _this = this;
        var data = [];
        var items = JSON.parse(localStorage.getItem('queue'));
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === videoId) {
                $.toast({
                    heading: 'Warning',
                    text: 'This video is already queued.',
                    showHideTransition: 'slide',
                    icon: 'warning',
                    position: 'top-right'
                });
                return false;
            }
            data.push(items[i]);
        }
        this.objTemp.id = videoId;
        data.push(this.objTemp);
        localStorage.setItem('queue', JSON.stringify(data));
        //Add to current list
        this.videoService.detailVideo(videoId)
            .subscribe(function (data) {
            var arrTmp = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.videoList.push(arrTmp[0]);
            console.log(arrTmp[0]);
        });
        $.toast({
            heading: 'Success',
            text: 'Add to queue sucessfully.',
            showHideTransition: 'slide',
            icon: 'success',
            position: 'top-right'
        });
    };
    EmbedListComponent.prototype.search = function (query) {
        var _this = this;
        this.getFromLocal(query);
        this.videoService.fetchVideos(this.query)
            .toPromise()
            .then(function (data) {
            _this.searchVideoList = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */](item.id.videoId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, '', '', item.snippet.channelTitle);
            });
        });
    };
    EmbedListComponent.prototype.getFromLocal = function (query) {
        if (localStorage.getItem("search") === null || query === '') {
            localStorage.setItem('search', '');
        }
        else {
            localStorage.setItem('search', query);
        }
        this.query = localStorage.getItem('search');
    };
    return EmbedListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], EmbedListComponent.prototype, "inputList", void 0);
EmbedListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'embed-list-video',
        template: __webpack_require__("../../../../../src/app/components/public/embed-list/embed-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_video_service__["a" /* VideoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */]) === "function" && _d || Object])
], EmbedListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=embed-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/hot/hot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public/hot/hot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding\" style=\"\" data-ui-jp=\"stick_in_parent\">\r\n\r\n  <div class=\"row-col\">\r\n    <div class=\"col-sm w w-auto-xs m-b\">\r\n      <div class=\"item w r\">\r\n        <div class=\"item-media\">\r\n          <div class=\"item-media-content\" [style.background-image]=\"'url(' + activeVideo?.thumbnail + ')'\" ></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row-col\">\r\n    <div class=\"col-sm\">\r\n      <div class=\"p-l-md no-padding-xs\">\r\n        <div class=\"page-title\">\r\n          <h4 class=\"inline text-center\">{{activeVideo?.title}}</h4>\r\n        </div>\r\n        <p class=\"item-desc text-ellipsis text-muted\" data-ui-toggle-class=\"text-ellipsis\">{{activeVideo?.description}}</p>\r\n        <div class=\"item-action m-b\">\r\n          <button title=\"{{pause ? 'Play' : 'Pause'}}\" class=\"btn-playpause text-primary m-r-sm {{pause ? 'active' : ''}}\" (click)=\"pauseAndPlay()\"></button>\r\n          <span class=\"text-muted\">{{activeVideo?.viewCount | convertNumber}}</span>\r\n          <i class=\"material-icons md-24 text-danger m-v-sm inline\">favorite</i>\r\n          <span class=\"text-muted\">{{activeVideo?.likeCount | convertNumber}}</span>\r\n          <button title=\"Repeat this song\"  class=\"btn btn-icon rounded btn-favorite {{is_repeat ? 'text-danger active' : ''}}\" (click)=\"repeatOneSong()\"><i class=\"material-icons md-24\">repeat_one</i></button>\r\n          <a href=\"javascript:;\" class=\"btn btn-sm btn-outline rounded b-accent\">{{activeVideo?.channelTitle}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"nav-active-border b-primary bottom m-b-md m-t\">\r\n    <ul class=\"nav l-h-2x\" data-ui-jp=\"taburl\">\r\n      <li class=\"nav-item m-r inline\"><a class=\"nav-link active\" href=\"#\" data-toggle=\"tab\" data-target=\"#track\">Tracks</a></li>\r\n      <li class=\"nav-item m-r inline\"><a class=\"nav-link \" href=\"#\" data-toggle=\"tab\" data-target=\"#playing\">Player</a></li>\r\n      <li class=\"nav-item m-r inline\"><a class=\"nav-link\" href=\"#\" data-toggle=\"tab\" data-target=\"#playlist\">Playlist</a></li>\r\n      <li class=\"nav-item m-r inline\"><a class=\"nav-link\" href=\"#\" data-toggle=\"tab\" data-target=\"#lyric\">Lyric</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"tab-content\">\r\n    <div class=\"tab-pane \" id=\"playing\">\r\n      <div class=\"row item-list item-list-sm m-b\">\r\n        <div class=\"embed-responsive embed-responsive-16by9\">\r\n          <youtube-player\r\n                  [videoId]=\"videoId\"\r\n                  (ready)=\"savePlayer($event)\"\r\n                  (change)=\"onStateChange($event)\"\r\n                  autoplay = 1\r\n          >\r\n          </youtube-player>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tab-pane active\" id=\"track\">\r\n      <div class=\"row item-list item-list-sm m-b\" *ngIf=\"videoList\">\r\n        <div class=\"col-xs-12\" *ngFor=\"let video of videoList\">\r\n          <div id=\"{{video?.videoId}}\" class=\"item r {{activeVideo?.videoId == video?.videoId ? 'item_active' : ''}}\">\r\n            <div class=\"item-media\">\r\n              <a (click)=\"reloadVideo(video?.videoId)\" class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n              <div class=\"item-overlay center\"><button (click)=\"reloadVideo(video?.videoId)\" class=\"btn-playpause\">Play</button></div>\r\n            </div>\r\n            <div class=\"item-info\">\r\n              <div class=\"item-overlay bottom text-right\">\r\n                <dropdown-box [inputId]=\"video?.videoId\"></dropdown-box>\r\n              </div>\r\n              <div class=\"item-title text-ellipsis\"><a (click)=\"reloadVideo(video?.videoId)\">{{video?.title}}</a></div>\r\n              <div class=\"item-author text-sm text-ellipsis\">\r\n                    <span *ngIf=\"activeVideo?.videoId == video?.videoId\">\r\n                      <img src=\"/assets/images/icon_status.gif\" style=\"vertical-align: baseline !important;\">\r\n                    </span>\r\n                <a href=\"javascript:;\" class=\"text-muted\">{{video?.channelTitle}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-pane\" id=\"playlist\">\r\n      <app-related-playlist [inputTitle]=\"activeVideo?.title\"></app-related-playlist>\r\n    </div>\r\n    <div class=\"tab-pane\" id=\"lyric\">\r\n      <p class=\"alert alert-info\">Lyric does not available.</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/hot/hot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HotComponent = (function () {
    function HotComponent(videoService, route, helper, sharedService) {
        this.videoService = videoService;
        this.route = route;
        this.helper = helper;
        this.sharedService = sharedService;
        this.videoId = '';
        this.videoList = [];
        this.arrList = [];
        this.index = 0;
        this.pause = false;
        this.is_repeat = false;
        this.currentRoute = '';
        this.deletedVideoId = '';
        this.query = '';
        this.searchVideoList = null;
        this.objTemp = {};
        this.inputList = [];
    }
    HotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.changeListVideo([]);
        this.sharedService.currentListVideo
            .subscribe(function (data) {
            _this.inputList = data;
            _this.initVideoList();
            _this.currentRoute = _this.route.snapshot.url.length > 0 ? _this.route.snapshot.url[0].path : '';
        });
    };
    HotComponent.prototype.initVideoList = function () {
        var _this = this;
        this.arrList = this.inputList;
        if (this.arrList.length == 0)
            return;
        console.log(this.arrList);
        this.videoId = this.arrList[0];
        this.fireVideo(this.videoId);
        var _loop_1 = function (i) {
            this_1.videoService.detailVideo(this_1.arrList[i])
                .subscribe(function (data) {
                var arrTmp = data.items.map(function (item) {
                    return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
                });
                _this.videoList[i] = arrTmp[0];
                _this.activeVideo = _this.videoList[0];
                _this.player.loadVideoById(_this.activeVideo.videoId);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.arrList.length; i++) {
            _loop_1(i);
        }
    };
    HotComponent.prototype.pauseAndPlay = function () {
        if (this.player.getPlayerState() == 1) {
            this.pause = true;
            this.pauseVideo();
        }
        else if (this.player.getPlayerState() == 2) {
            this.playVideo();
            this.pause = false;
        }
    };
    HotComponent.prototype.repeatOneSong = function () {
        this.is_repeat = this.is_repeat ? false : true;
    };
    HotComponent.prototype.onStateChange = function (event) {
        // video ended
        if (event.data === 0) {
            //Repeat case
            if (this.is_repeat) {
                this.reloadVideo(this.activeVideo.videoId);
                return false;
            }
            if (this.index === (this.videoList.length - 1)) {
                this.index = 0;
            }
            else {
                this.index = this.index + 1;
            }
            this.activeVideo = this.videoList[this.index];
            this.reloadVideo(this.activeVideo.videoId, 'no_index');
        }
        this.ytEvent = event.data;
    };
    HotComponent.prototype.savePlayer = function (player) {
        this.player = player;
        this.player.playVideo();
    };
    HotComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    HotComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    HotComponent.prototype.fireVideo = function (videoId) {
        var _this = this;
        // this.safeURL = this.helper.makeUrlSafe(videoId);
        this.videoService.detailVideo(videoId)
            .subscribe(function (data) {
            var arrTmp = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.activeVideo = arrTmp[0];
        });
    };
    HotComponent.prototype.reloadVideo = function (videoId, flag) {
        if (flag === void 0) { flag = ''; }
        if (flag === '') {
            for (var i = 0; i < this.videoList.length; i++) {
                if (videoId === this.videoList[i].videoId) {
                    this.index = i;
                }
            }
        }
        this.fireVideo(videoId);
        this.player.loadVideoById(videoId);
    };
    return HotComponent;
}());
HotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hot',
        template: __webpack_require__("../../../../../src/app/components/public/hot/hot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public/hot/hot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */]) === "function" && _d || Object])
], HotComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hot.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<embed-list-video [inputList]=\"inputList\" *ngIf=\"is_loaded\"></embed-list-video>"

/***/ }),

/***/ "../../../../../src/app/components/public/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__ = __webpack_require__("../../../../../src/app/shared/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaylistComponent = (function () {
    function PlaylistComponent(playlistService, route, helper) {
        this.playlistService = playlistService;
        this.route = route;
        this.helper = helper;
        this.inputList = [];
        this.is_loaded = false;
        this.code = '';
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.code = params['code'];
            _this.loadListItem(_this.code);
            _this.loadDetailPlaylist(_this.code);
        });
    };
    PlaylistComponent.prototype.playList = function () {
        this.helper.changePlaylist(this.code);
    };
    PlaylistComponent.prototype.loadListItem = function (code) {
        var _this = this;
        if (code === void 0) { code = ''; }
        this.playlistService.fetchDetailPlaylistYoutube(code)
            .subscribe(function (data) {
            data.items.map(function (item) {
                _this.inputList.push(item.contentDetails.videoId);
            });
            _this.is_loaded = true;
        });
    };
    PlaylistComponent.prototype.loadDetailPlaylist = function (code) {
        var _this = this;
        if (code === void 0) { code = ''; }
        this.playlistService.fetchPlaylistInfoYoutube(code)
            .subscribe(function (data) {
            data.items.map(function (item) {
                _this.helper.makeMeta(item.snippet.title, item.snippet.description, item.snippet.thumbnails.high.url);
            });
        });
    };
    return PlaylistComponent;
}());
PlaylistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-track-detail',
        template: __webpack_require__("../../../../../src/app/components/public/playlist/playlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_helper__["a" /* Helper */]) === "function" && _c || Object])
], PlaylistComponent);

var _a, _b, _c;
//# sourceMappingURL=playlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/queue/queue.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"inputList.length > 0; else empty_content\">\r\n  <embed-list-video [inputList]=\"inputList\" ></embed-list-video>\r\n</div>\r\n\r\n<ng-template #empty_content>\r\n  <div class=\"app-body\" id=\"view\">\r\n    <div class=\"padding\">\r\n      <div class=\"alert alert-info\">\r\n        <p>No video for play</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/queue/queue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueueComponent = (function () {
    function QueueComponent(helper) {
        this.helper = helper;
        this.inputList = [];
    }
    QueueComponent.prototype.ngOnInit = function () {
        this.helper.makeMeta('Queue');
        if (localStorage.getItem('queue') === null) {
            this.inputList = [];
        }
        else {
            var items = JSON.parse(localStorage.getItem('queue'));
            for (var i = 0; i < items.length; i++) {
                this.inputList.push(items[i].id);
            }
        }
    };
    return QueueComponent;
}());
QueueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-queue',
        template: __webpack_require__("../../../../../src/app/components/public/queue/queue.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_helper__["a" /* Helper */]) === "function" && _a || Object])
], QueueComponent);

var _a;
//# sourceMappingURL=queue.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/related-playlist/related-playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public/related-playlist/related-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-b\" *ngIf=\"playListRelateisLoaded\">\r\n  <div class=\"col-xs-4 col-sm-4 col-md-3\"  *ngFor=\"let item of playlists\">\r\n    <div class=\"item r\" data-id=\"item-8\">\r\n      <div class=\"item-media\">\r\n        <a [routerLink]=\"['/playlist', item?.code]\" title=\"{{item?.name}}\" class=\"item-media-content\"\r\n           [style.background-image]=\"'url(' + item?.thumbnail + ')'\"></a>\r\n        <div class=\"item-overlay center\"><a [routerLink]=\"['/playlist', item?.code]\" title=\"{{item?.name}}\" class=\"btn-playpause\">Play</a></div>\r\n      </div>\r\n      <div class=\"item-info\">\r\n        <div class=\"item-title text-ellipsis\"><a title=\"{{item?.name}}\" [routerLink]=\"['/playlist', item?.code]\">{{item?.name}}</a></div>\r\n        <div class=\"item-author text-sm text-ellipsis\"><a title=\"{{item?.owner}}\" href=\"javascript:;\" class=\"text-muted\">{{item?.owner}}</a></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/public/related-playlist/related-playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatedPlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__ = __webpack_require__("../../../../../src/app/shared/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_playlist__ = __webpack_require__("../../../../../src/app/models/playlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RelatedPlaylistComponent = (function () {
    function RelatedPlaylistComponent(playlistService, helper) {
        this.playlistService = playlistService;
        this.helper = helper;
        this.video_title = '';
        this.playListRelateisLoaded = false;
    }
    RelatedPlaylistComponent.prototype.ngOnInit = function () {
        this.getRelatedPlaylist();
    };
    RelatedPlaylistComponent.prototype.getRelatedPlaylist = function () {
        var _this = this;
        this.video_title = this.inputTitle;
        this.playlistService.fetchRelatedPlaylistInfoYoutube(this.video_title)
            .subscribe(function (data) {
            _this.playlists = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_playlist__["a" /* Playlist */]('', item.id.playlistId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.channelTitle);
            });
            console.log(_this.playlists);
            _this.playListRelateisLoaded = true;
        });
    };
    return RelatedPlaylistComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], RelatedPlaylistComponent.prototype, "inputTitle", void 0);
RelatedPlaylistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-related-playlist',
        template: __webpack_require__("../../../../../src/app/components/public/related-playlist/related-playlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public/related-playlist/related-playlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_helper__["a" /* Helper */]) === "function" && _b || Object])
], RelatedPlaylistComponent);

var _a, _b;
//# sourceMappingURL=related-playlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding\">\r\n  <form (keydown.enter)=\"$event.preventDefault()\" class=\"\">\r\n    <div class=\"input-group input-group-lg\">\r\n      <input type=\"text\" class=\"form-control\" id=\"searchForm\" value=\"{{query}}\" placeholder=\"Search ...\" autofocus (keyup)=\"search(textBox.value)\" #textBox>\r\n      <span class=\"input-group-btn\"><button class=\"btn b-a no-shadow white\" type=\"button\">Search</button></span>\r\n    </div>\r\n  </form>\r\n\r\n    <div class=\" item-list item-list-lg item-list-by m-b\">\r\n      <p class=\"m-b-md\"><strong>25</strong> results for: <strong>{{query}}</strong></p>\r\n      <div class=\"col-xs-12\" *ngFor=\"let v of videoList\">\r\n        <div class=\"item r\">\r\n          <div class=\"item-media\">\r\n            <a title=\"{{v?.title}}\" [routerLink]=\"['/video', v.videoId]\" class=\"item-media-content\" [style.background-image]=\"'url(' + v.thumbnail + ')'\" ></a>\r\n            <div class=\"item-overlay center\"><a title=\"{{v?.title}}\" class=\"btn-playpause\" [routerLink]=\"['/video', v.videoId]\">Play</a></div>\r\n          </div>\r\n          <div class=\"item-info\">\r\n            <div class=\"bottom text-right\">\r\n              <dropdown-box [inputId]=\"v?.videoId\"></dropdown-box>\r\n            </div>\r\n            <div class=\"item-title text-ellipsis\"><a title=\"{{v?.title}}\" [routerLink]=\"['/video', v.videoId]\">{{ v.title }}</a></div>\r\n            <div class=\"item-meta text-sm text-muted\"><span class=\"item-meta-tag visible-list\"><a href=\"browse.html\"></a></span></div>\r\n            <div class=\"item-except visible-list text-sm text-muted h-2x m-t-sm\">{{ v.description }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(videoService, helper) {
        this.videoService = videoService;
        this.helper = helper;
        this.videoList = null;
        this.query = '';
        this.activeVideoId = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.query = localStorage.getItem('search');
        this.search(this.query);
        this.helper.makeMeta('Search');
    };
    SearchComponent.prototype.search = function (query) {
        var _this = this;
        this.getFromLocal(query);
        this.videoService.fetchVideos(this.query)
            .toPromise()
            .then(function (data) {
            _this.videoList = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id.videoId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, '', '', item.snippet.channelTitle);
            });
        });
    };
    SearchComponent.prototype.getFromLocal = function (query) {
        if (localStorage.getItem("search") === null || query === '') {
            localStorage.setItem('search', '');
        }
        else {
            localStorage.setItem('search', query);
        }
        this.query = localStorage.getItem('search');
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/public/search/search.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_helper__["a" /* Helper */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public/track-detail/track-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"app-body\" id=\"view\">\r\n  <div class=\"pos-rlt\">\r\n    <div class=\"page-bg\" data-stellar-ratio=\"2\" style=\"background-image: url('assets/images/b0.jpg')\"></div>\r\n  </div>\r\n  <div class=\"page-content\">\r\n    <div class=\"padding b-b\">\r\n      <div class=\"row-col\">\r\n        <div class=\"col-sm w w-auto-xs m-b\">\r\n          <div class=\"item w r\">\r\n            <div class=\"item-media\">\r\n              <div class=\"item-media-content\" [style.background-image]=\"'url(' + activeVideo?.thumbnail + ')'\" ></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <div class=\"p-l-md no-padding-xs\">\r\n            <div class=\"page-title\">\r\n              <h1 class=\"inline\">{{activeVideo?.title}}</h1>\r\n            </div>\r\n            <p class=\"item-desc text-ellipsis text-muted\" data-ui-toggle-class=\"text-ellipsis\">{{activeVideo?.description}}</p>\r\n            <div class=\"item-action m-b\">\r\n              <button (click)=\"playList()\"  class=\"btn-playpause text-primary m-r-sm\"></button>\r\n              <span class=\"text-muted\">{{activeVideo?.viewCount | convertNumber}}</span>\r\n              <i class=\"material-icons md-24 text-danger m-v-sm inline\">favorite</i>\r\n              <span class=\"text-muted\">{{activeVideo?.likeCount | convertNumber}}</span>\r\n              <dropdown-box [inputId]=\"activeVideo?.videoId\" *ngIf=\"is_loaded\"></dropdown-box>\r\n            </div>\r\n            <div class=\"item-meta\">\r\n              <a href=\"javascript:;\" class=\"btn btn-sm btn-outline rounded b-accent\">{{activeVideo?.channelTitle}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row-col\">\r\n\r\n      <div class=\"col-lg-9 b-r\">\r\n        <div class=\"padding\" style=\"\" data-ui-jp=\"stick_in_parent\">\r\n          <div class=\"row item-list item-list-sm m-b\" *ngIf=\"videoList\">\r\n            <div class=\"col-xs-12\" *ngFor=\"let video of videoList\">\r\n              <div class=\"item r {{activeVideo.videoId == video.videoId ? 'item_active' : ''}}\">\r\n                <div class=\"item-media\">\r\n                  <a (click)=\"changeVideoList(video?.videoId)\" class=\"item-media-content\" [style.background-image]=\"'url(' + video?.thumbnail + ')'\"></a>\r\n                  <div class=\"item-overlay center\"><button (click)=\"changeVideoList(video?.videoId)\" class=\"btn-playpause\">Play</button></div>\r\n                </div>\r\n                <div class=\"item-info\">\r\n                  <div class=\"item-overlay bottom text-right\">\r\n                    <dropdown-box [inputId]=\"video?.videoId\"></dropdown-box>\r\n                  </div>\r\n                  <div class=\"item-title text-ellipsis\"><a (click)=\"changeVideoList(video?.videoId)\">{{video?.title}}</a></div>\r\n                  <div class=\"item-author text-sm text-ellipsis\">\r\n\r\n                    <a href=\"javascript:;\" class=\"text-muted\">{{video?.channelTitle}}</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public/track-detail/track-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_downloader_service__ = __webpack_require__("../../../../../src/app/shared/downloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrackDetailComponent = (function () {
    function TrackDetailComponent(videoService, downloader, activatedRoute, router, helper) {
        var _this = this;
        this.videoService = videoService;
        this.downloader = downloader;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.helper = helper;
        this.videoId = '';
        this.videoList = [];
        this.arrList = [];
        this.index = -1;
        this.pause = false;
        this.is_repeat = false;
        this.is_loaded = false;
        this.is_loaded_download = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.videoId = params['code'];
            _this.fireVideo(_this.videoId);
            _this.initVideoList(_this.videoId);
        });
    }
    TrackDetailComponent.prototype.ngOnInit = function () {
    };
    TrackDetailComponent.prototype.repeatOneSong = function () {
        this.is_repeat = this.is_repeat ? false : true;
    };
    TrackDetailComponent.prototype.initVideoList = function (videoId) {
        var _this = this;
        this.videoService.fetchRelateVideo(videoId)
            .subscribe(function (data) {
            _this.videoList = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */](item.id.videoId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, '', '', item.snippet.channelTitle);
            });
            if (_this.is_loaded) {
                _this.videoList.push(_this.activeVideo);
                console.log(_this.videoList);
            }
        });
    };
    TrackDetailComponent.prototype.playList = function () {
        this.helper.changeVideoList(this.activeVideo.videoId);
    };
    TrackDetailComponent.prototype.fireVideo = function (videoId) {
        var _this = this;
        // this.safeURL = this.helper.makeUrlSafe(videoId);
        this.videoService.detailVideo(videoId)
            .subscribe(function (data) {
            var arrTmp = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.activeVideo = arrTmp[0];
            _this.is_loaded = true;
            _this.helper.makeMeta(_this.activeVideo.title, _this.activeVideo.description, _this.activeVideo.thumbnail);
        });
    };
    TrackDetailComponent.prototype.changeVideoList = function (videoId) {
        this.helper.changeVideoList(videoId);
    };
    return TrackDetailComponent;
}());
TrackDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-track-detail',
        template: __webpack_require__("../../../../../src/app/components/public/track-detail/track-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_video_service__["a" /* VideoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__shared_downloader_service__["a" /* DownloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_downloader_service__["a" /* DownloaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */]) === "function" && _e || Object])
], TrackDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=track-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/API_Main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*=================================
 LIST API CONFIG
 ===================================*/

var API_Main = (function () {
    function API_Main() {
        /*API ROOT */
        this.API_URL_ROOT = 'http://laravel-passport.local/service/api';
        // Playlist
        this.API_URL_PLAYLIST = this.API_URL_ROOT + '/playlist';
        // Downloader
        this.API_URL_DOWNLOAD_YOUTUBE = 'https://guarded-wildwood-60121.herokuapp.com/api/downloader';
    }
    return API_Main;
}());
API_Main = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], API_Main);

//# sourceMappingURL=API_Main.js.map

/***/ }),

/***/ "../../../../../src/app/confirm.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmDirective = (function () {
    function ConfirmDirective() {
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ConfirmDirective.prototype.clicked = function (e) {
        var _this = this;
        $.confirm({
            buttons: {
                confirm: function () { return _this.click.emit(); },
                cancel: function () { }
            }
        });
    };
    return ConfirmDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])('confirm-click'),
    __metadata("design:type", Object)
], ConfirmDirective.prototype, "click", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfirmDirective.prototype, "clicked", null);
ConfirmDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[confirm]'
    }),
    __metadata("design:paramtypes", [])
], ConfirmDirective);

//# sourceMappingURL=confirm.directive.js.map

/***/ }),

/***/ "../../../../../src/app/inc/dropdown-box/dropdown-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown inline\">\n  <a class=\"btn btn-icon rounded btn-more\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-h\"></i></a>\n  <div class=\"dropdown-menu black lt pull-right\">\n    <a class=\"dropdown-item\" (click)=\"add2queue(videoId)\" >Add to Queue</a>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" (click)=\"add2playlist(videoId)\">Add to playlist</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/inc/dropdown-box/dropdown-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownBoxComponent = (function () {
    function DropdownBoxComponent(route, sharedService) {
        this.route = route;
        this.sharedService = sharedService;
        this.objTemp = {};
        this.items = {};
        this.currentRoute = '';
        this.inputList = [];
    }
    DropdownBoxComponent.prototype.ngOnInit = function () {
        this.videoId = this.inputId;
        this.currentRoute = this.route.snapshot.url.length > 0 ? this.route.snapshot.url[0].path : '';
    };
    DropdownBoxComponent.prototype.add2queue = function (videoId) {
        // Create new object
        this.objTemp.id = videoId;
        this.objTemp.is_playing = 0;
        var data = [];
        if (localStorage.getItem('queue') === null) {
            data.push(this.objTemp);
            localStorage.setItem('queue', JSON.stringify(data));
        }
        else {
            var items = JSON.parse(localStorage.getItem('queue'));
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === this.videoId) {
                    $.toast({
                        heading: 'Warning',
                        text: 'This video is already queued.',
                        showHideTransition: 'slide',
                        icon: 'warning',
                        position: 'top-right'
                    });
                    return false;
                }
                data.push(items[i]);
            }
            data.push(this.objTemp);
            localStorage.setItem('queue', JSON.stringify(data));
        }
        this.sharedService.changeData(JSON.parse(localStorage.getItem('queue')).length);
        $.toast({
            heading: 'Success',
            text: 'Add to queue sucessfully.',
            showHideTransition: 'slide',
            icon: 'success',
            position: 'top-right'
        });
    };
    DropdownBoxComponent.prototype.add2playlist = function (videoId) {
        console.log(videoId);
    };
    DropdownBoxComponent.prototype.editqueue = function () {
    };
    return DropdownBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DropdownBoxComponent.prototype, "inputId", void 0);
DropdownBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dropdown-box',
        template: __webpack_require__("../../../../../src/app/inc/dropdown-box/dropdown-box.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_MySharedService__["a" /* MySharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_MySharedService__["a" /* MySharedService */]) === "function" && _b || Object])
], DropdownBoxComponent);

var _a, _b;
//# sourceMappingURL=dropdown-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/inc/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono);", ""]);

// module
exports.push([module.i, "body {\r\n    background: #121212;\r\n    color: #fff;\r\n    font-family: 'Ubuntu Mono', monospace;\r\n    font-size: 1.6rem;\r\n    font-weight: regular;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nwrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 15rem;\r\n}\r\n\r\n.rangeslider {\r\n    background-color: #fff;\r\n    border-radius: 0;\r\n    height: 0.2rem;\r\n}\r\n\r\n.rangeslider__fill {\r\n    background-color: #F01F14;\r\n    border-radius: 0;\r\n}\r\n\r\n.rangeslider__handle {\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    position: absolute;\r\n    transition: -webkit-transform 0.3s ease-in-out;\r\n    transition: transform 0.3s ease-in-out;\r\n    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\r\n    -moz-transition: transform 0.3s ease-in-out;\r\n    -webkit-transition: transform 0.3s ease-in-out;\r\n}\r\n.rangeslider__handle::after {\r\n    display: none;\r\n}\r\n.rangeslider__handle:hover, .rangeslider__handle:active {\r\n    /* IE 9 */\r\n    -webkit-transform: scale(1.2, 1.2);\r\n    /* Safari */\r\n    transform: scale(1.2, 1.2);\r\n    transition: -webkit-transform 0.1s ease-in-out;\r\n    transition: transform 0.1s ease-in-out;\r\n    transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\r\n    -moz-transition: transform 0.1s ease-in-out;\r\n    -webkit-transition: transform 0.1s ease-in-out;\r\n}\r\n\r\n.rangeslider__value-bubble {\r\n    position: absolute;\r\n    top: auto;\r\n    left: 50%;\r\n    bottom: 2.5rem;\r\n    transform: translate(-50%, 0);\r\n    -webkit-transform: translate(-50%, 0);\r\n    -ms-transform: translate(-50%, 0);\r\n    text-align: center;\r\n    background-color: #F01F14;\r\n    padding: 1rem;\r\n    color: #fff;\r\n    width: auto;\r\n    margin: 0;\r\n    white-space: nowrap;\r\n}\r\n.rangeslider__value-bubble::before {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 1rem solid transparent;\r\n    border-right: 1rem solid transparent;\r\n    border-top: 1rem solid #F01F14;\r\n    position: absolute;\r\n    top: auto;\r\n    left: 50%;\r\n    bottom: -1rem;\r\n    transform: translate(-50%, -45%);\r\n    -webkit-transform: translate(-50%, -45%);\r\n    -ms-transform: translate(-50%, -45%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inc/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .mejs-controls .mejs-button button {\r\n    background: url(controls.svg) no-repeat;\r\n  }\r\n</style>\r\n<div class=\"app-footer app-player grey bg\" *ngIf=\"activeVideo\">\r\n  <div class=\"playlist mep-tracks-count-3 has-artwork is-tracklist-closed\" style=\"width:100%\">\r\n    <span class=\"mejs-offscreen\">Audio Player</span>\r\n    <div id=\"mep_0\" class=\"mejs-container mejs-audio\" tabindex=\"0\" role=\"application\" aria-label=\"Audio Player\" style=\"width: 100%; height: 40px;\">\r\n      <div class=\"mejs-inner\">\r\n        <div class=\"mejs-layers\">\r\n          <div class=\"mejs-poster mejs-layer\" style=\"display: none; width: 100%; height: 40px;\"></div>\r\n          <div class=\"mejs-track-actions\"><button data-toggle=\"modal\" data-target=\"#m-a-a\" data-ui-toggle-class=\"fade-right-big\" data-ui-target=\"#animate\" class=\"mejs-like-button btn btn-sm no-bg btn-icon is-like text-danger\" track-id=\"item-1\"></button></div>\r\n          <a class=\"mejs-track-artwork\" [routerLink]=\"['/video', activeVideo.videoId]\" [style.background-image]=\"'url(' + activeVideo?.thumbnail + ')'\"></a>\r\n          <div class=\"mejs-track-details\">\r\n            <span class=\"mejs-track-title\">\r\n              <a [routerLink]=\"['/video', activeVideo.videoId]\">{{activeVideo?.title}}</a>\r\n            </span>\r\n            <span class=\"mejs-track-author\">\r\n              <a [routerLink]=\"['/video', activeVideo.videoId]\">{{activeVideo?.channelTitle}}</a>\r\n            </span>\r\n          </div>\r\n          <div class=\"mejs-track-source\"><i></i></div>\r\n        </div>\r\n        <div class=\"mejs-controls\">\r\n          <div class=\"mejs-button mejs-previous-button mejs-previous\">\r\n            <button (click)=\"previous()\" type=\"button\" aria-controls=\"mep_0\" title=\"Previous Track\"></button>\r\n          </div>\r\n          <div class=\"mejs-button mejs-playpause-button {{pause ? 'mejs-play' : 'mejs-pause'}}\">\r\n            <button (click)=\"pauseAndPlay()\" style=\"background-color: #02b875;\" type=\"button\" aria-controls=\"mep_0\" title=\"{{pause ? 'Play' : 'Pause'}}\"></button>\r\n          </div>\r\n          <div class=\"mejs-button mejs-next-button mejs-next\">\r\n            <button (click)=\"next()\" type=\"button\" aria-controls=\"mep_0\" title=\"Next Track\"></button>\r\n          </div>\r\n          <div class=\"mejs-time-rail\" style=\"width: 100%;\">\r\n            <span class=\"mejs-time-total mejs-time-slider\" style=\"width: 1850px;\" aria-label=\"Time Slider\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"30\" aria-valuetext=\"00:50\" role=\"slider\" tabindex=\"0\">\r\n              <span class=\"mejs-time-buffering\" style=\"display: block;\"></span>\r\n              <span class=\"mejs-time-loaded\"></span>\r\n              <span class=\"mejs-time-current\"></span>\r\n              <span class=\"mejs-time-handle\"></span>\r\n              <span class=\"mejs-time-float\" style=\"display: block;\">\r\n                <span class=\"mejs-time-float-current\">{{currentTime}}</span>\r\n                <span class=\"mejs-time-float-corner\"></span>\r\n              </span>\r\n            </span>\r\n          </div>\r\n          <div class=\"mejs-time\" role=\"timer\" aria-live=\"off\">\r\n            <span class=\"mejs-currenttime\">{{currentTime}}</span>\r\n            <span class=\"mejs-time-separator\"> / </span>\r\n            <span class=\"mejs-duration\">{{durationTime}}</span>\r\n          </div>\r\n          <div class=\"mejs-button mejs-repeat-button mejs-repeat {{is_repeat ? 'text-success is-repeat' : ''}}\">\r\n            <button (click)=\"repeatOneSong()\" type=\"button\" aria-controls=\"mep_0\" title=\"Repeat\"></button>\r\n          </div>\r\n          <div class=\"mejs-button mejs-shuffle-button mejs-repeat is-shuffle\">\r\n            <button type=\"button\" aria-controls=\"mep_0\" title=\"Shuffle\"></button>\r\n          </div>\r\n          <div class=\"mejs-button mejs-toggle-playlist-button mejs-toggle-playlist is-closed\">\r\n            <button type=\"button\" (click)=\"displayListItem()\" aria-controls=\"mep_0\" title=\"Toggle Playlist\"></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"mejs-clear\"></div>\r\n      </div>\r\n    </div>\r\n    <ol class=\"tracks\" id=\"listItem\" style=\"display: block;\" *ngIf=\"videoList\">\r\n      <li class=\"track\" *ngFor=\"let video of videoList\">\r\n        <div class=\"track-action\"><a class=\"track-remove\">×</a></div>\r\n        <div class=\"track-info\">\r\n          <span class=\"track-title\">\r\n            <span *ngIf=\"activeVideo?.videoId == video?.videoId\">\r\n              <img src=\"/assets/images/icon_status.gif\" style=\"vertical-align: baseline !important;\">\r\n            </span>\r\n            <a (click)=\"reloadVideo(video?.videoId)\">{{video?.title}}</a>\r\n          </span>\r\n          <span class=\"track-author\">{{video?.channelTitle}}</span>\r\n        </div>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"m-a-a\" class=\"modal fade animate\" data-backdrop=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" id=\"animate\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">{{activeVideo?.title}}</h5>\r\n      </div>\r\n      <div class=\"modal-body text-center p-lg\">\r\n        <div class=\"row item-list item-list-sm m-b\">\r\n          <p *ngIf=\"lyric\" [innerHTML]=\"lyric\"></p>\r\n          <div class=\"embed-responsive embed-responsive-16by9\">\r\n\r\n              <youtube-player\r\n                    [videoId]=\"videoId\"\r\n                    (ready)=\"savePlayer($event)\"\r\n                    (change)=\"onStateChange($event)\"\r\n                    autoplay = 1\r\n              >\r\n              </youtube-player>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn danger p-x-md\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/inc/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_video_service__ = __webpack_require__("../../../../../src/app/shared/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_helper__ = __webpack_require__("../../../../../src/app/common/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FooterComponent = (function () {
    function FooterComponent(videoService, route, helper, sharedService) {
        this.videoService = videoService;
        this.route = route;
        this.helper = helper;
        this.sharedService = sharedService;
        this.videoId = '';
        this.videoList = [];
        this.arrList = [];
        this.index = 0;
        this.pause = false;
        this.is_repeat = false;
        this.currentRoute = '';
        this.deletedVideoId = '';
        this.query = '';
        this.searchVideoList = null;
        this.objTemp = {};
        this.inputList = [];
        this.showListItem = true;
        this.lyric = '';
    }
    FooterComponent.prototype.toHHMMSS = function (timeString) {
        var seconds = timeString;
        var duration = moment.duration(seconds, 'seconds');
        var formatted = duration.format("hh:mm:ss");
        if (formatted < 61) {
            formatted = '00:' + formatted;
        }
        return formatted;
    };
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.changeListVideo([]);
        this.sharedService.currentListVideo
            .subscribe(function (data) {
            _this.inputList = data;
            _this.initVideoList();
            _this.currentRoute = _this.route.snapshot.url.length > 0 ? _this.route.snapshot.url[0].path : '';
        });
    };
    FooterComponent.prototype.initVideoList = function () {
        var _this = this;
        this.arrList = this.inputList;
        if (this.arrList.length == 0)
            return;
        console.log(this.arrList);
        this.videoId = this.arrList[0];
        this.fireVideo(this.videoId);
        var _loop_1 = function (i) {
            this_1.videoService.detailVideo(this_1.arrList[i])
                .subscribe(function (data) {
                var arrTmp = data.items.map(function (item) {
                    return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
                });
                _this.videoList[i] = arrTmp[0];
                _this.activeVideo = _this.videoList[0];
                _this.player.loadVideoById(_this.activeVideo.videoId);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.arrList.length; i++) {
            _loop_1(i);
        }
    };
    FooterComponent.prototype.pauseAndPlay = function () {
        if (this.player.getPlayerState() == 1) {
            this.pause = true;
            this.pauseVideo();
        }
        else if (this.player.getPlayerState() == 2) {
            this.playVideo();
            this.pause = false;
        }
    };
    FooterComponent.prototype.repeatOneSong = function () {
        this.is_repeat = this.is_repeat ? false : true;
    };
    FooterComponent.prototype.onStateChange = function (event) {
        // video ended
        if (event.data === 0) {
            //Repeat case
            if (this.is_repeat) {
                this.reloadVideo(this.activeVideo.videoId);
                return false;
            }
            if (this.index === (this.videoList.length - 1)) {
                this.index = 0;
            }
            else {
                this.index = this.index + 1;
            }
            this.activeVideo = this.videoList[this.index];
            this.reloadVideo(this.activeVideo.videoId, 'no_index');
        }
        this.ytEvent = event.data;
    };
    FooterComponent.prototype.next = function () {
        if (this.index === (this.videoList.length - 1)) {
            this.index = 0;
        }
        else {
            this.index = this.index + 1;
        }
        this.activeVideo = this.videoList[this.index];
        this.reloadVideo(this.activeVideo.videoId, 'no_index');
    };
    FooterComponent.prototype.previous = function () {
        if (this.index === 0) {
            this.index = this.videoList.length - 1;
        }
        else {
            this.index = this.index - 1;
        }
        this.activeVideo = this.videoList[this.index];
        this.reloadVideo(this.activeVideo.videoId, 'no_index');
    };
    FooterComponent.prototype.savePlayer = function (player) {
        var _this = this;
        this.player = player;
        this.player.playVideo();
        setInterval(function () {
            _this.currentTime = _this.toHHMMSS(parseInt(_this.player.getCurrentTime(), 10));
            _this.durationTime = _this.toHHMMSS(parseInt(_this.player.getDuration(), 10));
            // this.currentTime = parseInt(this.player.getCurrentTime(), 10);
            // console.log(this.currentTime );
        }, 1000);
        // this.durationTime = parseInt(this.player.getDuration(), 10);
    };
    FooterComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    FooterComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    FooterComponent.prototype.displayListItem = function () {
        this.showListItem = !this.showListItem;
        this.showListItem ? $("#listItem").css("display", "block") : $("#listItem").css("display", "none");
    };
    FooterComponent.prototype.fireVideo = function (videoId) {
        var _this = this;
        // this.safeURL = this.helper.makeUrlSafe(videoId);
        this.videoService.detailVideo(videoId)
            .subscribe(function (data) {
            var arrTmp = data.items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */](item.id, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.description, item.statistics.likeCount, item.statistics.viewCount, item.snippet.channelTitle);
            });
            _this.activeVideo = arrTmp[0];
            var proxyurl = "https://cors-anywhere.herokuapp.com/";
            var url = "https://lyric-api.herokuapp.com/api/find/Charlie%20Puth/How%20Long"; // site that doesn’t send Access-Control-*
            return fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
                .then(function (response) { return response.json(); })
                .then(function (contents) { _this.lyric = contents.lyric.replace(/\n/g, '<br>'); });
        });
    };
    FooterComponent.prototype.reloadVideo = function (videoId, flag) {
        if (flag === void 0) { flag = ''; }
        if (flag === '') {
            for (var i = 0; i < this.videoList.length; i++) {
                if (videoId === this.videoList[i].videoId) {
                    this.index = i;
                }
            }
        }
        this.fireVideo(videoId);
        this.player.loadVideoById(videoId);
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/inc/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inc/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_video_service__["a" /* VideoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_helper__["a" /* Helper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_MySharedService__["a" /* MySharedService */]) === "function" && _d || Object])
], FooterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/inc/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"navbar no-radius\">\r\n    <a [routerLink]=\"['/']\" class=\"navbar-brand md\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" width=\"32\" height=\"32\">\r\n        <circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"rgba(255,255,255,0.2)\"/>\r\n        <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#1c202b\" class=\"brand-color\"/>\r\n        <circle cx=\"24\" cy=\"24\" r=\"10\" fill=\"#ffffff\"/>\r\n        <circle cx=\"13\" cy=\"13\" r=\"2\" fill=\"#ffffff\" class=\"brand-animate\"/>\r\n        <path d=\"M 14 24 L 24 24 L 14 44 Z\" fill=\"#FFFFFF\"/>\r\n        <circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"#000000\"/>\r\n      </svg>\r\n      <img src=\"assets/images/fav.png\" alt=\".\" class=\"hide\"> <span class=\"hidden-folded inline\">tinytube</span>\r\n    </a>\r\n  </div>\r\n  <div data-flex class=\"hide-scroll\">\r\n    <nav class=\"scroll nav-stacked nav-active-primary\">\r\n      <ul class=\"nav\" data-ui-nav>\r\n        <li class=\"nav-header hidden-folded\"><span class=\"text-xs text-muted\">Main</span></li>\r\n        <li><a [routerLink]=\"['/discovery']\"><span class=\"nav-icon\"><i class=\"material-icons\">play_circle_outline</i></span> <span class=\"nav-text\">Discovery</span></a></li>\r\n        <li><a [routerLink]=\"['/browse']\"><span class=\"nav-icon\"><i class=\"material-icons\">sort</i></span> <span class=\"nav-text\">Browse</span></a></li>\r\n        <li><a [routerLink]=\"['/trending/US']\"><span class=\"nav-icon\"><i class=\"material-icons\">trending_up</i></span> <span class=\"nav-text\">Trending Up</span></a></li>\r\n        <li class=\"nav-header hidden-folded m-t\"><span class=\"text-xs text-muted\">Your collection</span></li>\r\n        <li><a (click)=\"playQueue()\" >Queue<span class=\"nav-label\">\r\n          <b class=\"label\">{{numbertrack}}</b></span>\r\n          <span class=\"nav-icon\"><i class=\"material-icons\">list</i></span>\r\n          <span class=\"nav-text\"></span>\r\n        </a></li>\r\n        <li><a href=\"javascript:;\">\r\n          <span class=\"nav-icon\"><i class=\"material-icons\">queue_music</i></span>\r\n          <span class=\"nav-text\">Playlists</span>\r\n        </a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <div data-flex-no-shrink>\r\n    <div class=\"nav-fold dropup\">\r\n      <a data-toggle=\"dropdown\">\r\n        <span class=\"pull-left\"><img src=\"assets/images/fav.png\" alt=\"...\" class=\"w-32 img-circle\"></span>\r\n        <span class=\"clear hidden-folded p-x p-y-xs\"><span class=\"block _500 text-ellipsis\">Anonymous</span></span>\r\n      </a>\r\n      <div class=\"dropdown-menu w dropdown-menu-scale\">\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Account Info</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Videos</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Playlists</span>\r\n        </a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">Need help?</a> <a class=\"dropdown-item\" href=\"javascript:;\">Sign Out</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/inc/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_MySharedService__ = __webpack_require__("../../../../../src/app/shared/MySharedService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(sharedService) {
        this.sharedService = sharedService;
        this.numbertrack = 0;
        this.inputList = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('queue') !== null) {
            this.sharedService.changeData(JSON.parse(localStorage.getItem('queue')).length);
            this.sharedService.currentData.subscribe(function (data) { return _this.numbertrack = data; });
        }
    };
    SidebarComponent.prototype.playQueue = function () {
        this.inputList = [];
        var items = JSON.parse(localStorage.getItem('queue'));
        for (var i = 0; i < items.length; i++) {
            this.inputList.push(items[i].id);
        }
        this.sharedService.changeListVideo(this.inputList);
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/inc/sidebar/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_MySharedService__["a" /* MySharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_MySharedService__["a" /* MySharedService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/authenticate/authenticate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/authenticate/authenticate.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  authenticate works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/authenticate/authenticate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticateComponent = (function () {
    function AuthenticateComponent() {
    }
    AuthenticateComponent.prototype.ngOnInit = function () {
    };
    return AuthenticateComponent;
}());
AuthenticateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-authenticate',
        template: __webpack_require__("../../../../../src/app/layouts/authenticate/authenticate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/authenticate/authenticate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthenticateComponent);

//# sourceMappingURL=authenticate.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app dk\" id=\"app\">\r\n  <div id=\"aside\" class=\"app-aside modal fade nav-dropdown\">\r\n    <div class=\"left navside grey dk\" data-layout=\"column\">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n  </div>\r\n  <div id=\"content\" class=\"app-content white bg box-shadow-z2\" role=\"main\">\r\n    <div class=\"app-header hidden-lg-up white lt box-shadow-z1\">\r\n      <div class=\"navbar\">\r\n        <a [routerLink]=\"['/']\" class=\"navbar-brand md\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" width=\"32\" height=\"32\">\r\n            <circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"rgba(255,255,255,0.2)\"/>\r\n            <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#1c202b\" class=\"brand-color\"/>\r\n            <circle cx=\"24\" cy=\"24\" r=\"10\" fill=\"#ffffff\"/>\r\n            <circle cx=\"13\" cy=\"13\" r=\"2\" fill=\"#ffffff\" class=\"brand-animate\"/>\r\n            <path d=\"M 14 24 L 24 24 L 14 44 Z\" fill=\"#FFFFFF\"/>\r\n            <circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"#000000\"/>\r\n          </svg>\r\n          <img src=\"assets/images/fav.png\" alt=\".\" class=\"hide\"> <span class=\"hidden-folded inline\">tinytube</span>\r\n        </a>\r\n        <ul class=\"nav navbar-nav pull-right\">\r\n          <li class=\"nav-item\"><a data-toggle=\"modal\" data-target=\"#aside\" class=\"nav-link\"><i class=\"material-icons\">menu</i></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <app-footer></app-footer>\r\n\r\n\r\n    <div class=\"app-body\" id=\"view\" style=\"padding-bottom: 60px;\">\r\n      <div class=\"page-content\">\r\n        <div class=\"row-col\">\r\n          <div class=\"col-lg-12 b-r no-border-md\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layouts/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicComponent = (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    return PublicComponent;
}());
PublicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public',
        template: __webpack_require__("../../../../../src/app/layouts/public/public.component.html")
    }),
    __metadata("design:paramtypes", [])
], PublicComponent);

//# sourceMappingURL=public.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/secure/secure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/secure/secure.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  secure works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/secure/secure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecureComponent = (function () {
    function SecureComponent() {
    }
    SecureComponent.prototype.ngOnInit = function () {
    };
    return SecureComponent;
}());
SecureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-secure',
        template: __webpack_require__("../../../../../src/app/layouts/secure/secure.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/secure/secure.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SecureComponent);

//# sourceMappingURL=secure.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/playlist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
var Playlist = (function () {
    function Playlist(id, code, name, thumbnail, owner, videoIds, created_by, created_at) {
        if (id === void 0) { id = ''; }
        if (videoIds === void 0) { videoIds = ''; }
        if (created_by === void 0) { created_by = ''; }
        if (created_at === void 0) { created_at = ''; }
        this.id = id;
        this.code = code;
        this.name = name;
        this.thumbnail = thumbnail;
        this.owner = owner;
        this.videoIds = videoIds;
        this.created_by = created_by;
        this.created_at = created_at;
        this.id = id;
        this.code = code;
        this.name = name;
        this.thumbnail = thumbnail;
        this.owner = owner;
        this.videoIds = videoIds;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    ;
    return Playlist;
}());

//# sourceMappingURL=playlist.js.map

/***/ }),

/***/ "../../../../../src/app/models/video.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = (function () {
    function Video(videoId, title, thumbnail, description, likeCount, viewCount, channelTitle) {
        if (likeCount === void 0) { likeCount = ''; }
        if (viewCount === void 0) { viewCount = ''; }
        if (channelTitle === void 0) { channelTitle = ''; }
        this.videoId = videoId;
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.likeCount = likeCount;
        this.viewCount = viewCount;
        this.channelTitle = channelTitle;
        this.videoId = videoId;
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.likeCount = likeCount;
        this.viewCount = viewCount;
        this.channelTitle = channelTitle;
    }
    return Video;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/convert-number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertNumberPipe = (function () {
    function ConvertNumberPipe() {
    }
    ConvertNumberPipe.prototype.transform = function (value, args) {
        // Nine Zeroes for Billions
        return Math.abs(Number(value)) >= 1.0e+9
            ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"
            : Math.abs(Number(value)) >= 1.0e+6
                ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"
                : Math.abs(Number(value)) >= 1.0e+3
                    ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"
                    : (Math.abs(Number(value))).toFixed(2);
    };
    return ConvertNumberPipe;
}());
ConvertNumberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'convertNumber'
    })
], ConvertNumberPipe);

//# sourceMappingURL=convert-number.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safeHtml.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var safeHtmlPipe = (function () {
    function safeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    safeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    return safeHtmlPipe;
}());
safeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safeHtml', pure: false }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], safeHtmlPipe);

var _a;
//# sourceMappingURL=safeHtml.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/MySharedService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MySharedService = (function () {
    function MySharedService() {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.listVideoSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.currentData = this.dataSource.asObservable();
        this.currentListVideo = this.listVideoSource.asObservable();
    }
    MySharedService.prototype.changeData = function (data) {
        this.dataSource.next(data);
    };
    MySharedService.prototype.changeListVideo = function (listVideo) {
        this.listVideoSource.next(listVideo);
    };
    return MySharedService;
}());
MySharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MySharedService);

//# sourceMappingURL=MySharedService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/downloader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_functions__ = __webpack_require__("../../../../../src/app/common/functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_API_Main__ = __webpack_require__("../../../../../src/app/config/API_Main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DownloaderService = (function () {
    function DownloaderService(_http, _func, apiMain) {
        this._http = _http;
        this._func = _func;
        this.apiMain = apiMain;
        this.apiUrl = '';
        this.apiUrl = this.apiMain.API_URL_DOWNLOAD_YOUTUBE;
    }
    DownloaderService.prototype.getLink = function (id) {
        var url = this.apiUrl + "/" + id;
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    return DownloaderService;
}());
DownloaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_functions__["a" /* Functions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_functions__["a" /* Functions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__config_API_Main__["a" /* API_Main */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_API_Main__["a" /* API_Main */]) === "function" && _c || Object])
], DownloaderService);

var _a, _b, _c;
//# sourceMappingURL=downloader.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/playlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_functions__ = __webpack_require__("../../../../../src/app/common/functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_API_Main__ = __webpack_require__("../../../../../src/app/config/API_Main.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaylistService = (function () {
    function PlaylistService(_http, _func, apiMain) {
        this._http = _http;
        this._func = _func;
        this.apiMain = apiMain;
        this.apiUrl = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.headerGet = this._func.AuthHeader();
        this.headerPostJson = this._func.AuthHeaderPostJson();
        this.api_key = 'AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM';
        this.apiUrl = this.apiMain.API_URL_PLAYLIST;
    }
    PlaylistService.prototype.getData = function (page) {
        var url = this.apiUrl + "?page=" + page;
        return this._http.get(url, { headers: this.headerGet })
            .map(function (res) { return res.json(); });
    };
    PlaylistService.prototype.showData = function (id) {
        var url = this.apiUrl + "/" + id;
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    PlaylistService.prototype.addData = function (playlist) {
        console.log(JSON.stringify(playlist));
        return this._http.post(this.apiUrl, JSON.stringify(playlist), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PlaylistService.prototype.updateData = function (playlist) {
        console.log(playlist);
        var url = this.apiUrl + "/" + playlist.id;
        return this._http.put(url, JSON.stringify(playlist), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    PlaylistService.prototype.deleteData = function (id) {
        var url = this.apiUrl + "/" + id;
        return this._http.delete(url).toPromise();
    };
    PlaylistService.prototype.fetchPlaylistYoutube = function (country, keyword, limit) {
        if (limit === void 0) { limit = 40; }
        return this._http
            .get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&type=playlist&q=" + keyword +
            '&maxResults=' + limit +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    PlaylistService.prototype.fetchDetailPlaylistYoutube = function (playlist_id) {
        return this._http
            .get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=" + playlist_id +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    PlaylistService.prototype.fetchPlaylistInfoYoutube = function (playlist_id) {
        return this._http
            .get("https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=1&id=" + playlist_id +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    PlaylistService.prototype.fetchRelatedPlaylistInfoYoutube = function (video_title) {
        return this._http
            .get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=playlist&maxResults=8&q=" + video_title +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    return PlaylistService;
}());
PlaylistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_functions__["a" /* Functions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_functions__["a" /* Functions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__config_API_Main__["a" /* API_Main */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__config_API_Main__["a" /* API_Main */]) === "function" && _c || Object])
], PlaylistService);

var _a, _b, _c;
//# sourceMappingURL=playlist.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
        this.lyric = '';
        this.api_key = 'AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM';
    }
    VideoService.prototype.fetchVideos = function (query) {
        return this.http
            .get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query +
            '&maxResults=25' +
            '&type=video' +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.detailVideo = function (videoId) {
        return this.http
            .get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + videoId +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.fetchRelateVideo = function (query) {
        return this.http
            .get("https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=" + query +
            '&maxResults=10' +
            '&type=video' +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.fetchTrendingVideo = function (country) {
        return this.http
            .get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=" + country +
            '&maxResults=50' +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.fetchHotVideo = function (country, categoryId, limit) {
        if (limit === void 0) { limit = 20; }
        return this.http
            .get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=" + country +
            '&videoCategoryId=' + categoryId +
            '&maxResults=' + limit +
            '&key=' + this.api_key)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.fetchLyric = function (artist, song) {
        var _this = this;
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var url = "https://lyric-api.herokuapp.com/api/find/Charlie%20Puth/How%20Long"; // site that doesn’t send Access-Control-*
        return fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(function (response) { return response.text(); })
            .then(function (contents) { return _this.lyric = contents; });
    };
    return VideoService;
}());
VideoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
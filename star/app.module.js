(function(app) {
  app.StarModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.StarComponent ],
      bootstrap: [ app.StarComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

(function(app) {
  app.StarComponent =
    ng.core.Component({
      selector: 'star',
      template: '<h1>star</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

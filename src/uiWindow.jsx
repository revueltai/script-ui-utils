var UIWindow = (function() {
  function UIWindow(options) {
    this.data     = options.data;
    this.children = {};
    this.window   = new Window(options.type, options.name, options.bounds);
    this.addProperties(this.window, options.properties);
    this.children['window'] = this.window;
  }

  UIWindow.prototype = {
    draw: function() {
      var element = null;
      for (var id in this.data) {
        var parameters  = this.data[id];
        var destination = (parameters.parent === undefined) ? this.window : this.children[parameters.parent];
        element = destination.add(parameters.type, parameters.bounds || undefined, parameters.title || '');
        this.addProperties(element, parameters.properties);
        this.children[id] = element;
        if (parameters.type === 'button' && parameters.hasOwnProperty('event')) {
          this.find(id).addEventListener(parameters.event.type, parameters.event.callback);
        }
      }
    },

    addProperties: function(element, properties) {
      for (var property in properties || {}) {
        if (properties.hasOwnProperty(property)) {
          element[property] = properties[property];
        }
      }
    },

    open: function() {
      this.draw();
      this.window.show();
    },

    close: function() {
      this.window.close();
    },

    find: function(property) {
      return this.children[property];
    }
  }

  return UIWindow;

})();

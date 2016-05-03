var express = require('express');
var httpProxy = require('http-proxy');
var livereload = require('connect-livereload');

var ExpressServer = {

  server: null,

  apiForwardingUrl: 'http://192.168.2.3:8150',

  init : function (options) {
    this.server = express();
    this.server.set('port', options.port || 3000);
    this.server.use(express.static(options.serveDirectory || __dirname + '/app'));
  },

  initProxy: function (path) {
    var apiProxy = httpProxy.createProxyServer();
    path = path || '/api/*';
    var self = this;
    // Grab all requests to the server with "/space/".
    this.server.all(path, function(req, res) {
      console.log("Request made to /api/ --> " + self.apiForwardingUrl + req.originalUrl);
      apiProxy.web(req, res, {target: self.apiForwardingUrl});
    });
  },

  setLiveReloadPort: function(port) {
    this.server.use(livereload({
      port: port
    }));
  },

  start: function (options) {
    this.init(options);
    this.initProxy(options.apiPath);
    this.setLiveReloadPort(options.liveReloadPort);

    this.server.listen(this.server.get('port'), function() {
      console.log('Express server listening on port ' + options.port);
    });
  }
};

module.exports = ExpressServer;

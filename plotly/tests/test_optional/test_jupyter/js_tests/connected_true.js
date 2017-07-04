'use strict';

var test = require('../lib/tape-wrapper');

test('should load plotly.js', function(t) {
    t.plan(1);

    window.require(['plotly'], function(Plotly) {
        t.equal(typeof Plotly, 'object');
    });
});

test('should have one plotly.js graph', function(t) {
    t.plan(1);

    var nodes = document.querySelectorAll('.js-plotly-plot');
    t.equal(nodes.length, 1);
});

test('should link to plotly.js CDN', function(t) {
    t.plan(1);

    var nodes = document.querySelectorAll('script');
    nodes = Array.prototype.slice.call(nodes, 0);

    var results = nodes.filter(function(node) {
        return node.src === 'https://cdn.plot.ly/plotly-latest.min.js';
    });

    t.equal(results.length, 1);
});

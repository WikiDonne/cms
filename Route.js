const {Router} = require('express');
const {symbols} = require('origami-core-lib');

const s = symbols([
    // Props
    'positions',
    'activeRouter',
    'position',

    // Methods
    'route'
]);


module.exports = class Route {
    constructor(url = null, parent) {
        this._url = url;
        this.parent = parent;

        // Different positions to run route at
        this[s.positions] = [
            'init',

            'pre-store',
            'store',
            'post-store',

            'pre-render',
            'render',
            'post-render',

            'pre-send'
        ];

        // A different array of MW for each position
        this.routers = {};
        this[s.positions].forEach(p => this.routers[p] = []);


        // Default position is 'render'
        this.position('pre-render');


        this.nested = [];
    }


    // If the position is changed, update the activeRouter
    set [s.position](v) {
        if (this[s.positions].includes(v)) this[s.activeRouter] = this.routers[v];
        else throw new Error(`Origami.Route: No position ${v}`);
        this._position = v;
    }
    get [s.position]() {
        return this._position;
    }

    get url() {
        if (this._url instanceof RegExp) return this._url;
        else return `${this.parent ? this.parent.url : ''}${this._url || ''}`;
    }


    // Route methods
    get(...handlers) { return this[s.route]('get', ...handlers); }
    post(...handlers) { return this[s.route]('post', ...handlers); }
    put(...handlers) { return this[s.route]('put', ...handlers); }
    delete(...handlers) { return this[s.route]('delete', ...handlers); }
    all(...handlers) { return this[s.route]('use', ...handlers); }
    use(...handlers) { return this[s.route]('use', ...handlers); }

    // Change the position (active router)
    position(position) {
        this[s.position] = position;

        return this;
    }


    // Nest a Router under itself for recursive paths
    route(path) {
        const r = new Route(path, this);
        r.position(this[s.position]);
        this.nested.push(r);

        return r;
    }

    nest(route) {
        // if (!(route instanceof Route)) throw new Error('Origami.Router: Invalid route. Must be of type Route');
        route.parent = this;
        this.nested.push(route);

        return this;
    }


    // Registers the activeRouter (set by position()) to handle on the url
    [s.route](method, handlers) {
        this[s.activeRouter].push({path: this.url, handlers, method});

        return this;
    }
};
/**
 * * Class controls a class object.
 * @export
 * @class Class
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Class {
    /**
     * * Creates an instance of Class.
     * @param {object} [props] Class properties.
     * @param {object} [states] Class states
     * @memberof Class
     */
    constructor (props, states) {
        this.setProps(props);
        this.setStates(states);
    }

    /**
     * * Set the Class properties.
     * @param {object|string} props Class properties.
     * @param {*} [value=null] Class property value.
     * @memberof Class
     */
    setProps (props, value = null) {
        if (!this.hasOwnProperty('props')) {
            this.props = {};
        }
        if (typeof props === 'string') {
            this.props[props] = value;
        } else if (Object.entries(props)) {
            for (const key in props) {
                if (Object.hasOwnProperty.call(props, key)) {
                    const value = props[key];
                    this.props[key] = value;
                }
            }
        } else {
            console.warn('You are not setting any prop');
        }
    }

    /**
     * * Check if there is a prop in the Class.
     * @param {string} name Class property name.
     * @throws {string}
     * @returns {boolean}
     * @memberof Class
     */
    hasProp (name) {
        if (name !== undefined) {
            if (typeof name === 'string') {
                if (this.props.hasOwnProperty(name)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.error('Prop name must be a string');
                throw 'Prop name must be a string';
            }
        } else {
            console.error('Prop name is required');
            throw 'Prop name is required';
        }
    }

    /**
     * * Set the Class states.
     * @param {object|string} props Class states.
     * @param {*} [value=null] Class state value.
     * @memberof Class
     */
    setStates (states, value = null) {
        if (!this.hasOwnProperty('states')) {
            this.states = {};
        }
        if (typeof states === 'string') {
            this.states[states] = value;
        } else if (Object.entries(states)) {
            for (const key in states) {
                if (Object.hasOwnProperty.call(states, key)) {
                    const value = states[key];
                    this.states[key] = value;
                }
            }
        } else {
            console.warn('You are not setting any state');
        }
    }

    /**
     * * Check if there is a state in the Class.
     * @param {string} name Class state name.
     * @throws {string}
     * @returns {boolean}
     * @memberof Class
     */
    hasState(name){
        if (name !== undefined) {
            if (typeof name === 'string') {
                if (this.states.hasOwnProperty(name)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.error('State name must be a string');
                throw 'State name must be a string';
            }
        } else {
            console.error('State name is required');
            throw 'State name is required';
        }
    }

    /**
     * * Set the Class HTML Element.
     * @memberof Class
     */
    setHTML (query) {
        if (typeof query === 'string') {
            if (document.querySelector(query)) {
                this.html = document.querySelector(query);
            } else {
                console.warn(`HTML query: ${ query } did not find matches`);
            }
        } else if (typeof query === 'object') {
            this.html = query;
        } else {
            console.error('Class HTML Element is required');
            throw 'Class HTML Element is required';
        }
    }

    /**
     * * Set the Class callbacks.
     * @param {object} [callbacks] Class success & error callbacks.
     * @memberof Class
     */
    setCallbacks (callbacks = {
        default: {
            function: (params) => { console.log(params); },
            params: {},
    }}) {
        if (!this.callbacks) {
            this.callbacks = {};
        }
        for (const name in callbacks) {
            if (Object.hasOwnProperty.call(callbacks, name)) {
                const callback = callbacks[name];
                this.callbacks[name] = {
                    function: (callback.hasOwnProperty('function') ? callback.function : (params) => { console.log(params); }),
                    params: (callback.hasOwnProperty('params') ? callback.params : {}),
                };
            }
        }
    }

    /**
     * * Executes a Class callback.
     * @param {string} name Class callback name.
     * @param {object} [params={}] Class callback optional params.
     * @memberof Class
     */
    execute (name, params = {}) {
        if (typeof name === 'string') {
            if (this.callbacks.hasOwnProperty(name)) {
                if (Object.entries(params)) {
                    params = {
                        ...this.callbacks[name].params,
                        ...params,
                    };
                } else {
                    params = {
                        ...this.callbacks[name].params,
                    };
                }
                this.callbacks[name].function(params);
            } else {
                console.error('Class callback was not found');
                throw 'Class callback was not found';
            }
        } else {
            console.error('Class callback name is required');
            throw 'Class callback name is required';
        }
    }

    /**
     * * Check if there is a callback in the Class.
     * @param {string} name Class callback name.
     * @throws {string}
     * @returns {boolean}
     * @memberof Class
     */
    hasCallback (name) {
        if (name !== undefined) {
            if (typeof name === 'string') {
                if (this.callback.hasOwnProperty(name)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.error('Callback name must be a string');
                throw 'Callback name must be a string';
            }
        } else {
            console.error('Callback name is required');
            throw 'Callback name is required';
        }
    }
}

// ? Default export
export default Class;
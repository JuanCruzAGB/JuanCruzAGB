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
     * @param {object} [state] Class state
     * @memberof Class
     */
    constructor (props = {}, state = {}) {
        this.setProps(props);
        this.setState(state);
    }

    /**
     * * Set the Class properties.
     * @param {object|string} props Class properties.
     * @param {*} [value=null] Class property value.
     * @memberof Class
     */
    setProps (props = {}, value = null) {
        if (!this.hasOwnProperty("props")) {
            this.props = {};
        }
        if (typeof props === "string") {
            this.props[props] = value;
        } else if (Object.entries(props)) {
            for (const key in props) {
                if (Object.hasOwnProperty.call(props, key)) {
                    const value = props[key];
                    this.props[key] = value;
                }
            }
        } else {
            console.warn("You are not setting any prop");
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
            if (typeof name === "string") {
                if (this.props.hasOwnProperty(name)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.error("Prop name must be a string");
                throw new Error("Prop name must be a string");
            }
        } else {
            console.error("Prop name is required");
            throw new Error("Prop name is required");
        }
    }

    /**
     * * Set the Class state.
     * @param {object|string} props Class state.
     * @param {*} [value=null] Class state value.
     * @memberof Class
     */
    setState (state = {}, value = null) {
        if (!this.hasOwnProperty("state")) {
            this.state = {};
        }
        if (typeof state === "string") {
            this.state[state] = value;
        } else if (Object.entries(state)) {
            for (const key in state) {
                if (Object.hasOwnProperty.call(state, key)) {
                    const value = state[key];
                    this.state[key] = value;
                }
            }
        } else {
            console.warn("You are not setting any state");
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
            if (typeof name === "string") {
                if (this.state.hasOwnProperty(name)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.error("State name must be a string");
                throw new Error("State name must be a string");
            }
        } else {
            console.error("State name is required");
            throw new Error("State name is required");
        }
    }

    /**
     * * Set the Class HTML Element.
     * @memberof Class
     */
    setHTML (query) {
        if (typeof query === "string") {
            if (document.querySelector(query)) {
                this.html = document.querySelector(query);
            } else {
                console.warn(`${ query } did not find matches`);
            }
        } else if (typeof query === "object") {
            this.html = query;
        } else {
            console.error("Class HTML Element is required");
            throw new Error("Class HTML Element is required");
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
                    function: (callback.hasOwnProperty("function") ? callback.function : (params) => { console.log(params); }),
                    params: (callback.hasOwnProperty("params") ? callback.params : {}),
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
        if (typeof name === "string") {
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
                console.error("Class callback was not found");
                throw new Error("Class callback was not found");
            }
        } else {
            console.error("Class callback name is required");
            throw new Error("Class callback name is required");
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
            if (typeof name === "string") {
                if (this.callbacks.hasOwnProperty(name)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.error("Callback name must be a string");
                throw new Error("Callback name must be a string");
            }
        } else {
            console.error("Callback name is required");
            throw new Error("Callback name is required");
        }
    }
}

// ? Default export
export default Class;
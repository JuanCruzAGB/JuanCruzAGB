// ? JuanCruzAGB repository
import Class from "./Class.js";

/**
 * * Html controls a class object.
 * @export
 * @class Html
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
 export class Html extends Class {
    /**
     * * Creates an instance of Html.
     * @param {object} [props] Html properties.
     * @param {object} [state] Html state
     * @param {object} [callbacks] Html callbacks
     * @memberof Html
     */
    constructor (props = {}, state = {}, callbacks = {}) {
        super({ ...props }, { ...state });
        this.setCallbacks({ ...callbacks });
    }

    /**
     * * Set a HTML Element attribute.
     * @param {string|array} name Attribute name
     * @param {string|boolean} value Attribute value
     * @memberof Html
     */
    setAttribute (name, value) {
        if (name !== undefined && value !== undefined) {
            switch (typeof name) {
                case 'object':
                    for (const attribute of name) {
                        if (typeof attribute.value !== 'boolean') {
                            this.html.setAttribute(attribute.name, attribute.value);
                        }
                        if (typeof attribute.value === 'boolean' && value) {
                            this.html.setAttribute(name, '');
                        }
                    }
                    break;
                default:
                    if (typeof value !== 'boolean') {
                        this.html.setAttribute(name, value);
                    }
                    if (typeof value === 'boolean' && value) {
                        this.html.setAttribute(name, '');
                    }
                    break;
            }
        }
        if (name === undefined) {
            console.error("HTML Element attribute name is required");
        }
        if (value === undefined) {
            console.error("HTML Element attribute value is required");
        }
    }

    /**
     * * Creates the HTML Element.
     * @param {string} [nodeName='div'] HTML Element node name.
     * @param {HTMLElement} [innerHTML=false] HTML Element inner HTML.
     * @memberof Html
     */
    createHTML (nodeName = 'div', innerHTML = false) {
        this.setHTML(document.createElement(nodeName.toUpperCase()));
        if (this.hasProp('id') && (this.hasState('id') && this.state.id)) {
            this.html.id = this.props.id;
        }
        if (innerHTML) {
            this.html.appendChild(innerHTML);
        }
        if (this.hasProp('classes')) {
            for (const className of this.props.classes) {
                this.html.classList.add(className);
            }
        }
    }

    /**
     * * Removes the HTML Element.
     * @memberof Html
     */
    removeHTML () {
        const parentNode = this.html.parentNode;
        parentNode.removeChild(this.html);
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} HTML New child.
     * @memberof Html
     */
    appendChild (HTML = false) {
        if (typeof HTML === 'object') {
            this.html.appendChild(HTML);
        }
        if (typeof HTML === 'string') {
            this.html.innerHTML = HTML;
        }
        if (typeof HTML === 'boolean') {
            console.error("HTML Element child is required");
        }
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Html
     */
    insertBefore(newHTML = false, oldHTML = false) {
        if (newHTML && oldHTML) {
            this.html.insertBefore(newHTML, oldHTML);
        }
        if (!newHTML) {
            console.error("HTML Element old child is required");
        }
        if (!oldHTML) {
            console.error("HTML Element new child is required");
        }
    }

    /**
     * * Removes an HTML Element.
     * @param {HTMLElement} HTML Child.
     * @memberof Html
     */
    removeChild (HTML = false) {
        if (HTML) {
            this.html.removeChild(HTML);
        }
        if (!HTML) {
            console.error("HTML Element child is required");
        }
    }

    /**
     * * Switch a state.
     * @param {string} name State name
     * @memberof Html
     */
    switch (name = false) {
        if (name) {
            if (this.hasState(name)) {
                this.setState(name, !name);
            }
            if (this.html.hasAttribute(name)) {
                this.html.setAttribute(name, !this.html.getAttribute(name));
            }
        }
        if (!name) {
            console.error("State name is required");
        }
    }

    /**
     * * Html change callback.
     * @param {*} [params={}] Change callback function optional params
     * @memberof Html
     */
    change (params = {}) {
        this.execute('change', {
            element: this,
            ...(Object.keys(params).length ? { ...this.callbacks.change.params, ...params } : { ...this.callbacks.change.params }),
        });
    }

    /**
     * * Html click callback.
     * @param {*} [params={}] Click callback function optional params
     * @memberof Html
     */
    click (params = {}) {
        this.execute('click', {
            element: this,
            ...(Object.keys(params).length ? { ...this.callbacks.click.params, ...params } : { ...this.callbacks.click.params }),
        });
    }

    /**
     * * Html focus out callback.
     * @param {*} [params={}] Foucout callback function optional params
     * @memberof Html
     */
    focusout (params = {}) {
        this.execute('focusout', {
            element: this,
            ...(Object.keys(params).length ? { ...this.callbacks.focusout.params, ...params } : { ...this.callbacks.focusout.params })
        });
    }

    /**
     * * Html submit callback.
     * @param {*} [params={}] Submit callback function optional params
     * @memberof Html
     */
    submit (params = {}) {
        this.execute('default', {
            element: this,
            ...(Object.keys(params).length ? { ...this.callbacks.submit.params, ...params } : { ...this.callbacks.submit.params })
        });
    }
}

// ? Default export
export default Html;
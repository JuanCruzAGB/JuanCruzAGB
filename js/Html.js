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
     * @memberof Html
     */
    constructor (props = {}, state = {}) {
        super({ ...props }, { ...state });
    }

    /**
     * * Set a HTML Element attribute.
     * @param {string|array} name Attribute name
     * @param {boolean} value Attribute value
     * @memberof Html
     */
    setAttribute (name = false, value = false) {
        if (name && value) {
            switch (typeof name) {
                case 'object':
                    for (const attribute of name) {
                        this.html.setAttribute(attribute.name, attribute.value);
                    }
                    break;
                default:
                    this.html.setAttribute(name, value);
                    break;
            }
        }
        if (!name) {
            console.error("HTML Element attribute name is required");
        }
        if (!value) {
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
        if (this.hasProp('id')) {
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
        if (HTML) {
            this.html.appendChild(HTML);
        }
        if (!HTML) {
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
}

// ? Default export
export default Html;
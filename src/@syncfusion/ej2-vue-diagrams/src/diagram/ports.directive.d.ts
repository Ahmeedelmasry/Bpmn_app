export declare let PortsDirective: any;
export declare const PortsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-port` directive represent a port of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
export declare let PortDirective: any;
export declare const PortPlugin: {
    name: string;
    install(Vue: any): void;
};

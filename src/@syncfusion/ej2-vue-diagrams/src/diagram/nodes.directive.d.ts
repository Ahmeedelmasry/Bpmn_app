export declare let NodesDirective: any;
export declare const NodesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-node` directive represent a nodes of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
export declare let NodeDirective: any;
export declare const NodePlugin: {
    name: string;
    install(Vue: any): void;
};

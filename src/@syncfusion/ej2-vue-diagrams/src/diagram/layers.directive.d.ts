export declare let LayersDirective: any;
export declare const LayersPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-layers` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-layers>
 * <e-layer>
 * </e-layers>
 * </e-layers>
</ejs-diagram>
 * ```
 */
export declare let LayerDirective: any;
export declare const LayerPlugin: {
    name: string;
    install(Vue: any): void;
};

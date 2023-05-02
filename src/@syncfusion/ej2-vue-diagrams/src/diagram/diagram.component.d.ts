export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any, watch: any, emitProbs: any;
/**
 * Represents vue Diagram Component
 * ```html
 * <ejs-diagram></ejs-diagram>
 * ```
 */
export declare let DiagramComponent: any;
export declare type DiagramComponent = InstanceType<typeof DiagramComponent>;
export declare const DiagramPlugin: {
    name: string;
    install(Vue: any): void;
};

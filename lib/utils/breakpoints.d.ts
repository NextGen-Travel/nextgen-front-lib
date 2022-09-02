declare const breakpoints: {
    readonly xs: {
        readonly min: 0;
        readonly max: 767;
    };
    readonly sm: {
        readonly min: 768;
        readonly max: 991;
    };
    readonly md: {
        readonly min: 992;
        readonly max: 1199;
    };
    readonly lg: {
        readonly min: 1200;
        readonly max: number;
    };
};
export declare const isBreakpoint: (breakpoint: `${keyof typeof breakpoints}-${'only' | 'and-up' | 'and-down'}`, el?: HTMLElement | Window) => boolean;
export {};

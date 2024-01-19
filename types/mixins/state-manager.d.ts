export declare const genStateManager: () => {
    reset: () => void;
    create: <T extends Record<string, any>>(cb: () => T) => T;
};
export type StateManager = ReturnType<typeof genStateManager>;

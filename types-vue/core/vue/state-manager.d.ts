export declare const createStateManager: () => {
    reset: () => void;
    create: <T extends Record<string, any>>(cb: () => T) => T;
};
export type StateManager = ReturnType<typeof createStateManager>;

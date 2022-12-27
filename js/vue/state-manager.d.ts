export declare const createStateManager: () => {
    reset: () => void;
    create: <T extends Record<string, unknown>>(cb: () => T) => T;
};
export type StateManager = ReturnType<typeof createStateManager>;

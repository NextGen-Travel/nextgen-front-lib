import { Interaction } from 'power-helper';
export declare class NextInteraction extends Interaction {
    constructor();
    use(stepName?: string): Pick<import("power-helper/dist/modules/interaction").Interaction, "step" | "wrong" | "notify" | "fail" | "checkout">;
}

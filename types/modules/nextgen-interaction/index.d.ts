import { Interaction } from 'power-helper';
export declare class NextgenInteraction extends Interaction {
    constructor();
    use(stepName?: string): Pick<import("power-helper/dist/modules/interaction").Interaction, "notify" | "fail" | "step" | "wrong" | "checkout">;
}

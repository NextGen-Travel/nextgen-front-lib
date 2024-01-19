import { PropType } from 'vue';
export type Modes = 'bounce' | 'flash' | 'pulse' | 'rubberBand' | 'shakeX' | 'shakeY' | 'headShake' | 'swing' | 'tada' | 'wobble' | 'jello' | 'heartBeat' | 'backInDown' | 'backInLeft' | 'backInRight' | 'backInUp' | 'backOutDown' | 'backOutLeft' | 'backOutRight' | 'backOutUp' | 'bounceIn' | 'bounceInDown' | 'bounceInLeft' | 'bounceInRight' | 'bounceInUp' | 'bounceOut' | 'bounceOutDown' | 'bounceOutLeft' | 'bounceOutRight' | 'bounceOutUp' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeInUp' | 'fadeInUpBig' | 'fadeInTopLeft' | 'fadeInTopRight' | 'fadeInBottomLeft' | 'fadeInBottomRight' | 'fadeOut' | 'fadeOutDown' | 'fadeOutDownBig' | 'fadeOutLeft' | 'fadeOutLeftBig' | 'fadeOutRight' | 'fadeOutRightBig' | 'fadeOutUp' | 'fadeOutUpBig' | 'fadeOutTopLeft' | 'fadeOutTopRight' | 'fadeOutBottomRight' | 'fadeOutBottomLeft' | 'flip' | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY' | 'lightSpeedInRight' | 'lightSpeedInLeft' | 'lightSpeedOutRight' | 'lightSpeedOutLeft' | 'rotateIn' | 'rotateInDownLeft' | 'rotateInDownRight' | 'rotateInUpLeft' | 'rotateInUpRight' | 'rotateOut' | 'rotateOutDownLeft' | 'rotateOutDownRight' | 'rotateOutUpLeft' | 'rotateOutUpRight' | 'hinge' | 'jackInTheBox' | 'rollIn' | 'rollOut' | 'zoomIn' | 'zoomInDown' | 'zoomInLeft' | 'zoomInRight' | 'zoomInUp' | 'zoomOut' | 'zoomOutDown' | 'zoomOutLeft' | 'zoomOutRight' | 'zoomOutUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideOutDown' | 'slideOutLeft' | 'slideOutRight' | 'slideOutUp';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    mode: {
        type: PropType<Modes>;
        required: true;
    };
    delay: {
        type: PropType<"1s" | "2s" | "3s" | "4s" | "5s" | ".5s" | ".25s" | ".75s">;
        required: false;
        default: () => undefined;
    };
    duration: {
        type: PropType<"slow" | "slower" | "fast" | "faster" | "super-faster">;
        required: false;
        default: () => undefined;
    };
    repeat: {
        type: PropType<"1" | "2" | "3" | "infinite">;
        required: false;
        default: () => undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<Modes>;
        required: true;
    };
    delay: {
        type: PropType<"1s" | "2s" | "3s" | "4s" | "5s" | ".5s" | ".25s" | ".75s">;
        required: false;
        default: () => undefined;
    };
    duration: {
        type: PropType<"slow" | "slower" | "fast" | "faster" | "super-faster">;
        required: false;
        default: () => undefined;
    };
    repeat: {
        type: PropType<"1" | "2" | "3" | "infinite">;
        required: false;
        default: () => undefined;
    };
}>>, {
    delay: "1s" | "2s" | "3s" | "4s" | "5s" | ".5s" | ".25s" | ".75s";
    duration: "slow" | "slower" | "fast" | "faster" | "super-faster";
    repeat: "1" | "2" | "3" | "infinite";
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

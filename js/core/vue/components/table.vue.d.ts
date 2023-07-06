declare const _default: <T>(__VLS_props: {
    height?: string | undefined;
    loading?: boolean | undefined;
    elevation?: number | undefined;
    sorts?: Record<string, any> | undefined;
    sortUpValue?: any;
    sortDownValue?: any;
    fixedHeader?: boolean | undefined;
    headerColor?: string | undefined;
    textNowrap?: "body" | "head" | "all" | "none" | undefined;
    rowStyle?: ((_item: any, _index: number) => string) | undefined;
    filterMemory?: string | undefined;
    filterShow?: boolean | undefined;
    filterTitle?: string | undefined;
    style?: unknown;
    class?: unknown;
    key?: string | number | symbol | undefined;
    ref?: import("vue").VNodeRef | undefined;
    ref_for?: boolean | undefined;
    ref_key?: string | undefined;
    onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    readonly items: T[];
    "onClick-item"?: ((_item: any) => any) | undefined;
    "onClick-sort"?: ((_key: string, _value: any) => any) | undefined;
    "onUpdate:sorts"?: ((_status: Record<string, any>) => any) | undefined;
    readonly fields: {
        key: string;
        label: () => string;
        style: (_value: any, _key: string, _item: any, _index: number) => string;
        sortBtn: boolean;
        textAlign: 'start' | 'center' | 'end';
        formatter: (..._args: any[]) => any;
        optionShow: boolean;
    }[];
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: {
        height?: string | undefined;
        loading?: boolean | undefined;
        elevation?: number | undefined;
        sorts?: Record<string, any> | undefined;
        sortUpValue?: any;
        sortDownValue?: any;
        fixedHeader?: boolean | undefined;
        headerColor?: string | undefined;
        textNowrap?: "body" | "head" | "all" | "none" | undefined;
        rowStyle?: ((_item: any, _index: number) => string) | undefined;
        filterMemory?: string | undefined;
        filterShow?: boolean | undefined;
        filterTitle?: string | undefined;
        style?: unknown;
        class?: unknown;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        readonly items: T[];
        "onClick-item"?: ((_item: any) => any) | undefined;
        "onClick-sort"?: ((_key: string, _value: any) => any) | undefined;
        "onUpdate:sorts"?: ((_status: Record<string, any>) => any) | undefined;
        readonly fields: {
            key: string;
            label: () => string;
            style: (_value: any, _key: string, _item: any, _index: number) => string;
            sortBtn: boolean;
            textAlign: 'start' | 'center' | 'end';
            formatter: (..._args: any[]) => any;
            optionShow: boolean;
        }[];
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: Partial<Record<string, (_: {
        item: {
            key: string;
            label: () => string;
            style: (_value: any, _key: string, _item: any, _index: number) => string;
            sortBtn: boolean;
            textAlign: 'start' | 'center' | 'end';
            formatter: (..._args: any[]) => any;
            optionShow: boolean;
        };
        value: string;
    }) => any>> & Partial<Record<string, (_: {
        item: T;
        value: any;
    }) => any>> & {
        details?(_: {
            class: string;
            item: T;
        }): any;
        end?(_: {}): any;
        "no-data"?(_: {}): any;
    };
    emit: ((event: "click-item", _item: any) => void) & ((event: "click-sort", _key: string, _value: any) => void) & ((event: "update:sorts", _status: Record<string, any>) => void);
}, "slots" | "attrs" | "emit"> | undefined, __VLS_setup?: {
    props: {
        height?: string | undefined;
        loading?: boolean | undefined;
        elevation?: number | undefined;
        sorts?: Record<string, any> | undefined;
        sortUpValue?: any;
        sortDownValue?: any;
        fixedHeader?: boolean | undefined;
        headerColor?: string | undefined;
        textNowrap?: "body" | "head" | "all" | "none" | undefined;
        rowStyle?: ((_item: any, _index: number) => string) | undefined;
        filterMemory?: string | undefined;
        filterShow?: boolean | undefined;
        filterTitle?: string | undefined;
        style?: unknown;
        class?: unknown;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        readonly items: T[];
        "onClick-item"?: ((_item: any) => any) | undefined;
        "onClick-sort"?: ((_key: string, _value: any) => any) | undefined;
        "onUpdate:sorts"?: ((_status: Record<string, any>) => any) | undefined;
        readonly fields: {
            key: string;
            label: () => string;
            style: (_value: any, _key: string, _item: any, _index: number) => string;
            sortBtn: boolean;
            textAlign: 'start' | 'center' | 'end';
            formatter: (..._args: any[]) => any;
            optionShow: boolean;
        }[];
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: Partial<Record<string, (_: {
        item: {
            key: string;
            label: () => string;
            style: (_value: any, _key: string, _item: any, _index: number) => string;
            sortBtn: boolean;
            textAlign: 'start' | 'center' | 'end';
            formatter: (..._args: any[]) => any;
            optionShow: boolean;
        };
        value: string;
    }) => any>> & Partial<Record<string, (_: {
        item: T;
        value: any;
    }) => any>> & {
        details?(_: {
            class: string;
            item: T;
        }): any;
        end?(_: {}): any;
        "no-data"?(_: {}): any;
    };
    emit: ((event: "click-item", _item: any) => void) & ((event: "click-sort", _key: string, _value: any) => void) & ((event: "update:sorts", _status: Record<string, any>) => void);
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            height?: string | undefined;
            loading?: boolean | undefined;
            elevation?: number | undefined;
            sorts?: Record<string, any> | undefined;
            sortUpValue?: any;
            sortDownValue?: any;
            fixedHeader?: boolean | undefined;
            headerColor?: string | undefined;
            textNowrap?: "body" | "head" | "all" | "none" | undefined;
            rowStyle?: ((_item: any, _index: number) => string) | undefined;
            filterMemory?: string | undefined;
            filterShow?: boolean | undefined;
            filterTitle?: string | undefined;
            style?: unknown;
            class?: unknown;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            readonly items: T[];
            "onClick-item"?: ((_item: any) => any) | undefined;
            "onClick-sort"?: ((_key: string, _value: any) => any) | undefined;
            "onUpdate:sorts"?: ((_status: Record<string, any>) => any) | undefined;
            readonly fields: {
                key: string;
                label: () => string;
                style: (_value: any, _key: string, _item: any, _index: number) => string;
                sortBtn: boolean;
                textAlign: 'start' | 'center' | 'end';
                formatter: (..._args: any[]) => any;
                optionShow: boolean;
            }[];
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: Partial<Record<string, (_: {
            item: {
                key: string;
                label: () => string;
                style: (_value: any, _key: string, _item: any, _index: number) => string;
                sortBtn: boolean;
                textAlign: 'start' | 'center' | 'end';
                formatter: (..._args: any[]) => any;
                optionShow: boolean;
            };
            value: string;
        }) => any>> & Partial<Record<string, (_: {
            item: T;
            value: any;
        }) => any>> & {
            details?(_: {
                class: string;
                item: T;
            }): any;
            end?(_: {}): any;
            "no-data"?(_: {}): any;
        };
        emit: ((event: "click-item", _item: any) => void) & ((event: "click-sort", _key: string, _value: any) => void) & ((event: "update:sorts", _status: Record<string, any>) => void);
    } | undefined;
};
export default _default;

import { GlobalComponents } from 'vue';
import { NgComponents } from '../../types/index';
type AllCompoents = GlobalComponents & NgComponents;
export declare const refComponents: <K extends "RouterView" | "RouterLink" | "NgApp" | "NgMap" | "NgDialog" | "NgFixedBar" | "NgForm" | "NgImg" | "NgLoaders" | "NgOutlineText" | "NgPagination" | "NgTable" | "NgToolbar" | "NgUpload" | "NgSearch" | "NgSkeleton" | "NgDatePicker" | "NgOverlayLoading" | "NgVisibleLoad" | "NgDateRangePicker" | "NgPieChart" | "NgDoughnutChart" | "NgSkeletonGroup" | "NgAni", N = AllCompoents[K] extends abstract new (..._args: any) => any ? InstanceType<AllCompoents[K]> : unknown>(_key: K) => import("vue").Ref<N | undefined>;
export {};

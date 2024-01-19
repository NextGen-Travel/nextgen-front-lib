<template>
    <div
        ref="main"
        :style="{
            height: height
        }"
    >
    </div>
</template>

<script lang="ts" setup>
import { LatLng } from '../libraries/maps/types'
import { NgAMap } from '../libraries/maps/amap'
import { GoogleMap } from '../libraries/maps/google'
import { MapMarker } from '../libraries/maps/common/marker'
import { MarkerAttr, RouteAttr } from '../libraries/maps/types'
import { PropType, watch, ref, onMounted, onUnmounted } from 'vue'

// =================
//
// defined
//

const props = defineProps({
    height: {
        type: String,
        required: false,
        default: '400px'
    },
    /** 可以指定使用哪個地圖，如果不指定系統會從環境判定 */
    mode: {
        type: String as PropType<'google' | 'amap'>,
        required: false,
        default: () => GoogleMap.isInstalled() ? 'google' : 'amap'
    },
    zoom: {
        type: Number,
        required: false,
        default: 8
    },
    center: {
        type: Object as PropType<LatLng>,
        required: true
    },
    markers: {
        type: Array as PropType<MarkerAttr[]>,
        required: false,
        default: () => []
    },
    routes: {
        type: Array as PropType<RouteAttr[]>,
        required: false,
        default: () => []
    }
})

const emit = defineEmits({
    move: (_latlng: LatLng) => true,
    click: (_latlng: LatLng) => true,
    clickMarker: (_marker: MapMarker) => true
})

defineExpose({
    fitView: () => map.fitView()
})

// =================
//
// map
//

const map = props.mode === 'google' ? new GoogleMap() : new NgAMap()

// =================
//
// refs
//

const main = ref<HTMLDivElement>()

// =================
//
// mounted
//

onMounted(() => {
    if (map && main.value) {
        map.start(main.value, {
            zoom: props.zoom,
            center: props.center
        })
        map.reloadRoutes(props.routes)
        map.reloadMarkers(props.markers)
        map.on('move', (latlng) => emit('move', latlng))
        map.on('click', (latlng) => emit('click', latlng))
        map.on('clickMarker', (marker) => emit('clickMarker', marker))
    }
})

onUnmounted(() => {
    if (map) {
        map.close()
    }
})

// =================
//
// watch
//

watch(() => props.zoom, () => map?.zoomTo(props.zoom))

watch(() => props.center, () => map?.moveTo(props.center), {
    deep: true
})

watch(() => props.routes, () => map?.reloadRoutes(props.routes), {
    deep: true
})

watch(() => props.markers, () => map?.reloadMarkers(props.markers), {
    deep: true
})

</script>

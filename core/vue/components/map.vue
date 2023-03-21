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
import { LatLng } from '../../libraries/maps/types'
import { GoogleMap } from '../../libraries/maps/google'
import { MapMarker } from '../../libraries/maps/common/marker'
import { MarkerAttr } from '../../libraries/maps/types'
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
    position: {
        type: Object as PropType<LatLng>,
        required: true
    },
    markers: {
        type: Array as PropType<MarkerAttr[]>,
        required: false,
        default: () => []
    }
})

const emit = defineEmits({
    click: (_latlng: LatLng) => true,
    clickMarker: (_marker: MapMarker) => true
})

// =================
//
// map
//

// TODO: 這裡要確認如果沒有安裝 google 地圖應該採用高德地圖
const map = props.mode === 'google' ? new GoogleMap() : null

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
        map.start(main.value)
        map.zoomTo(props.zoom)
        map.moveTo(props.position)
        map.reloadMarkers(props.markers)
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

watch(() => props.markers, () => map?.reloadMarkers(props.markers), {
    deep: true
})

watch(() => props.position, () => map?.moveTo(props.position), {
    deep: true
})

</script>

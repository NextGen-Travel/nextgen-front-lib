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
import { MarkerParams } from '../../libraries/maps/common/marker'
import { PropType, watch, ref, onMounted, onUnmounted } from 'vue'

// TODO: 這裡要確認如果沒有安裝 google 地圖應該採用高德地圖
const map = GoogleMap.isInstalled() ? new GoogleMap() : null

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
        type: Array as PropType<MarkerParams[]>,
        required: false,
        default: () => []
    }
})

const emit = defineEmits({
    click: (_latlng: LatLng) => true
})

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
    console.log(map)
    if (map && main.value) {
        map.start(main.value)
        map.on('click', (latlng) => emit('click', latlng))
        map.zoomTo(props.zoom)
        map.moveTo(props.position)
        map.loadMarkers(props.markers)
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

watch(() => props.position, () => map?.moveTo(props.position), {
    deep: true
})

watch(() => props.markers, () => map?.loadMarkers(props.markers), {
    deep: true
})

</script>

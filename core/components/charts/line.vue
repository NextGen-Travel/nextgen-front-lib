<template>
    <LineChart
      :chart-options="chartOptions"
      :chart-data="chartData"
      :width="width"
      :height="height"
    />
</template>

<script setup lang="ts">
import { LineChart } from 'vue-chart-3'
import { reactive, PropType } from 'vue'
import { ChartData, ChartOptions } from 'chart.js'

export type LineChartItem = {
    label: () => string
    color?: string
    values: number[]
}

const props = defineProps({
    labels: {
        required: true,
        type: Array as PropType<string[]>
    },
    items: {
        required: true,
        type: Array as PropType<LineChartItem[]>
    },
    width: {
        type: Number,
        default: 600
    },
    height: {
        type: Number,
        default: 300
    }
})

// =================
//
// state
//

const chartData = reactive<ChartData<'line'>>({
    labels: props.labels,
    datasets: props.items.map(e => {
        return {
            label: e.label(),
            backgroundColor: e.color || undefined,
            borderColor: e.color || undefined,
            data: e.values
        }
    })
})

const chartOptions = reactive<ChartOptions>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
            enabled: false
        },
        legend: {
            position: 'right',
            labels: {
                padding: 20
            }
        }
    }
})

</script>

<template>
    <PieChart
      :chart-options="chartOptions"
      :chart-data="chartData"
      :width="width"
      :height="height"
    />
</template>

<script setup lang="ts">
import { PieChart } from 'vue-chart-3'
import { reactive, PropType } from 'vue'
import { ChartData, ChartOptions } from 'chart.js'

export type PieChartItem = {
    value: number
    label: () => string
}

const props = defineProps({
    items: {
        required: true,
        type: Array as PropType<PieChartItem[]>
    },
    colors: {
        required: false,
        type: Array as PropType<string[]>,
        default: null
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

const chartData = reactive<ChartData<'pie'>>({
    labels: props.items.map(e => e.label()),
    datasets: [
        {
            backgroundColor: props.colors ? props.colors :[
                '#FF595E',
                '#36949D',
                '#FF924C',
                '#1982C4',
                '#FFCA3A',
                '#4267AC',
                '#C5CA30',
                '#565AA0',
                '#8AC926',
                '#6A4C93',
                '#001219',
                '#EE9B00',
                '#CA6702',
                '#0A9396',
                '#BB3E03',
                '#94D2BD',
                '#AE2012',
                '#E9D8A6',
                '#9B2226'
            ],
            data: props.items.map(e => e.value)
        }
    ]
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

import { Component, Mixins, Prop } from 'vue-property-decorator';
import { Line, Pie, Bar, mixins } from 'vue-chartjs';
import { ChartOptions } from 'chart.js';
const { reactiveProp } = mixins;

@Component({
  extends: Pie,
})
export default class PieChart extends Mixins(reactiveProp, Pie) {
  @Prop({ default: [] }) readonly labels!: Array<string>;
  @Prop({ default: [] }) readonly colors!: Array<string>;
  @Prop({ default: [] }) readonly data!: Array<number>;
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: '',
          backgroundColor: this.colors,
          data: this.data
        }
      ]
    },
    {
      // title: {
      //   display: true,
      //   text: 'Tiêu đề'
      // },
      responsive: true,
      maintainAspectRatio: false
    }
    );
  }
}

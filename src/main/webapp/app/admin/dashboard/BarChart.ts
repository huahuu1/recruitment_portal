import { Component, Mixins, Prop } from 'vue-property-decorator';
import { Line, Pie, Bar, mixins } from 'vue-chartjs';
import { ChartOptions } from 'chart.js';
const { reactiveProp } = mixins;

@Component({
  extends: Bar,
})
export default class BarChart extends Mixins(reactiveProp, Bar) {
  @Prop({ default: [] }) readonly labels!: Array<string>;
  @Prop({ default: [] }) readonly colors!: Array<string>;
  @Prop({ default: [] }) readonly data!: Array<number>;
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Number of applicants',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          data: this.data,
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
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

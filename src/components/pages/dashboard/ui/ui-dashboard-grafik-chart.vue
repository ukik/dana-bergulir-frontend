<script>
import { Bar, Doughnut, Line } from "vue-chartjs";
import Chart from "chart.js";

export default {
  extends: Line,
  props: {
    _newLabel: {
      default: () => ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    },
    _newDatasets: {
      default: () => [
				{
					label: "Proposal Masuk",
					data: [1,1,1,1,1,1,2,2,3,3,5,5,5],
				},
				{
					label: "Proposal Diterima",
					data: [5,2,3,3,5,7,3,8,10,8,2,12],
				},
			]
    },
    _fieldInspection: {
      default: "XXX"
    }
  },
  data() {
    return {
      chartdata: {
        labels: this._newLabel,
        datasets: [
          {
            label: this._newDatasets[0].label, //this._newDatasets.label,
            data: this._newDatasets[0].data, //this._newDatasets.data,
            backgroundColor: [
              "rgba(0, 4, 255, 0.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
							"rgba(0, 4, 255, 1.0)",
            ],
            borderColor: [
              "rgba(0, 4, 255, 1.0)",
              // "rgba(54, 162, 235, 1.0)",
              // "rgba(255, 206, 86, 1.0)",
              // "rgba(75, 192, 192, 1.0)",
              // "rgba(153, 102, 255, 1.0)",
              // "rgba(255, 159, 64, 1.0)",
							// "rgba(0, 98, 255, 1.0)",
              // "rgba(54, 162, 235, 1.0)",
              // "rgba(255, 206, 86, 0.0)",
              // "rgba(75, 192, 192, 0.0)",
              // "rgba(153, 102, 255, 0.0)",
              // "rgba(255, 159, 64, 0.0)",
            ],
            borderWidth: 1
          },

					{
						label: this._newDatasets[1].label, //this._newDatasets.label,
            data: this._newDatasets[1].data, //this._newDatasets.data,
						backgroundColor: [
              "rgba(255, 64, 0, 0.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
							"rgba(255, 64, 0, 1.0)",
            ],
            borderColor: [
              "rgba(255, 64, 0, 1.0)",
              // "rgba(54, 162, 235, 1.0)",
              // "rgba(255, 206, 86, 1.0)",
              // "rgba(75, 192, 192, 1.0)",
              // "rgba(153, 102, 255, 1.0)",
              // "rgba(255, 159, 64, 1.0)",
							// "rgba(0, 98, 255, 1.0)",
              // "rgba(54, 162, 235, 1.0)",
              // "rgba(255, 206, 86, 0.0)",
              // "rgba(75, 192, 192, 0.0)",
              // "rgba(153, 102, 255, 0.0)",
              // "rgba(255, 159, 64, 0.0)",
            ],
						borderWidth: 1
					}
        ]
      },
      options: null
    };
  },

  mounted() {
    const vm = this;
    let { datasets } = this.chartdata;

    this.options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        // legend only
        // onClick: newLegendClickHandler,
        labels: {
          generateLabels: function(chart) {
            const labels = Chart.defaults.global.legend.labels.generateLabels(
              chart
            );
            labels[0].fillStyle = "rgb(0, 4, 255)";
            labels[1].fillStyle = 'rgb(255, 64, 0)';

            return labels; // untuk menghilangkan tombol legenda
          }
        }
      },
      // global chartjs
      onClick: function(event, array) {
        // if (array[0] != null && vm.$attrs.data != "") {
        //   vm.popup(array[0]._index);
        //   // console.log(array[0]._index)
        // }
        // console.log(array);
      },
      tooltips: {
        bodyFontColor: "#000000",
        bodyFontSize: 12,
        bodyFontStyle: "normal",
        bodyFontColor: "#FFFFFF",
        bodyFontFamily: "'Helvetica', 'Arial', sans-serif",
        footerFontSize: 14,
        callbacks: {
          label: function(tooltipItem, data) {
            if (data.labels[0] == "No Data") {
              // console.log(data, data.labels[0])
              return "No Data";
            } else {
              let mylabel = data.labels[tooltipItem.index];
							return mydata = data.datasets[0].data[tooltipItem.index] + " Proposal";

							let mydata = "";
              switch (vm._fieldInspection) {
                case "condition":
                  mydata =
                    " (Mean) " +
                    getCondition(data.datasets[0].data[tooltipItem.index]);
                  break;
                case "weather":
                  mydata =
                    " (Mean) " +
                    getWeather(data.datasets[0].data[tooltipItem.index]);
                  break;
                default:
                  mydata =
                    " (Mean) " + data.datasets[0].data[tooltipItem.index];
                  break;
              }

              // console.log(tooltipItem.index)
              return mydata;
            }
            tooltipItem.yLabel;
          }
        }
      }
    };

    this.renderChart(this.chartdata, this.options);
  }
};

var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
var newLegendClickHandler = function(e, legendItem) {
  var index = legendItem.datasetIndex;

  return;
};

function getCondition(value) {
  switch (Number(value)) {
    case 1:
      return "Noise";
    case 2:
      return "Dusty";
    case 3:
      return "Vibration";
  }
}

function getWeather(value) {
  switch (Number(value)) {
    case 1:
      return "Cerah";
    case 2:
      return "Mendung";
    case 3:
      return "Hujan";
    case 4:
      return "Kabut";
    case 5:
      return "Angin";
    case 6:
      return "Lainnya";
  }
}
</script>

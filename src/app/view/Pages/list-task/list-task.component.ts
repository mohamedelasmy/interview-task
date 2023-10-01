import { Component, ViewChild } from '@angular/core';
import { GenericService } from '../../../core/services/generic.service';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexXAxis, ApexYAxis, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexFill, ApexLegend, ChartComponent } from 'ng-apexcharts';

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {
  show = 5; // Use this value to control how many items will be appear per Selecton Criteria and Operations
  items: any[] = [];
  page: number = 1;
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions!: Partial<BarChartOptions> | any;

  constructor(
    private genericService: GenericService
  ) {}
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.genericService.getMethod('assets/Data/tasks.json').subscribe((data:any) => {
      // console.log(data); // JSON data will be logged here
      this.items = data.body.Tasks;

      // Make For Each to set chart data per item
      this.items.forEach(element => {
        element.chartOptions = {
          series: [
            {
              data: [element.Chart[0], 0 , 0]
            },
            {
              data: [0, element.Chart[1] , 0]
            },
            {
              data: [0, 0 , element.Chart[2]]
            }
          ],
          chart: {
            foreColor: '#000',
            type: "bar",
            height: 150,
            width: 300,
            stacked: true,
            toolbar: {
              show: false,
            }
          },
          colors: ['#12bb12', '#0090ff', '#f57277'],
          plotOptions: {
            bar: {
              distributed: false,
              horizontal: true,
              colors: {
                ranges: [{
                  from: 0,
                  to: 0,
                  color: undefined
                }],
                backgroundBarColors: [],
                backgroundBarOpacity: 0,
                backgroundBarRadius: 0,
              },
              dataLabels: {
                position: 'center',
                total: {
                  enabled: false,
                  style: {
                    color: '#363240',
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    fontWeight: 600
                  }
                }
              },
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 300 / 500,
              colors: ['rgba(0,0,0,0.7)']
            },
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          xaxis: {
            labels: {
              formatter: function (val:any) {
                return val.toFixed(0 + '%');
              }
            },
          },
          yaxis: {
            show: false,
            title: {
              text: undefined
            }
          },
          tooltip: {
            y: {
              formatter: function (val: any) {
                return val + '%';
              }
            },
          },
          fill: {
            opacity: 1
          },
          legend: {
            show: false,
            position: "top",
            horizontalAlign: "left",
            offsetX: 40
          }
        };
      })
    });
  }
}

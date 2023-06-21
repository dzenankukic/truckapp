import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { WorkOrderManageComponent } from '../work-order-manage/work-order-manage.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  setHeight(){
    var heightRatio = 0.5;

    if(this.screenheight < 1600) {
      heightRatio = 0.7
    }
    if(this.screenheight < 1400) {
      heightRatio = 0.9
    }
    console.log(this.screenheight)

this.canvas.height = this.canvas.width * heightRatio;
  }

  openDialog() {
    const dialogRef = this.dialog.open(WorkOrderManageComponent,{
      height: '729px',
      width: '604px',
      position: {top: '55px', right:'0px'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  cardData = {
    icon: 'bi bi-person',
    title: 'Shop',
    number: 3,
    withNmb: 3,
    noDrive: 0,
    dailyAvg: 23,
    price: 11.511,
    cpm: 0.04,
    time: '00:15:13'
  };

  shopData = {
    icon: 'bi bi-person',
    title: 'Shop',
    number: 3,
    withNmb: 3,
    noDrive: 0,
    dailyAvg: 23,
    price: 11.511,
    cpm: 0.04,
    time: '00:15:13',

  };

  dealerShipData = {
    icon: 'bi bi-wrench',
    title: 'Dealership',
    number: 5,
    withNmb: 4,
    noDrive: 1,
    dailyAvg: 19,
    price: 335.000,
    cpm: 0.07,
    time: '05:09:52',
    checked: true
  };

  roadData = {
    icon: 'bi bi-triangle-half',
    title: 'Road Service',
    number: 11,
    withNmb: 7,
    noDrive: 4,
    dailyAvg: 19,
    price: 49.561,
    cpm: 0.07,
    time: '00:02:13'
  };

  yardData = {
    icon: 'bi bi-buildings',
    title: 'Yard',
    number: 7,
    withNmb: 5,
    noDrive: 2,
    dailyAvg: 19,
    price: 49.561,
    cpm: 0.07,
    time: '03:15:13'
  };

  recData = {
    icon: 'bi bi-arrow-90deg-left',
    title: 'Recovery',
    number: 18,
    withNmb: 11,
    noDrive: 7,
    dailyAvg: 19,
    price: 49.561,
    cpm: 0.07,
    time: '03:15:13'
  };

  abdData = {
    icon: 'bi bi-exclamation-circle-fill',
    title: 'Abandoned',
    number: 7,
    withNmb: 11,
    noDrive: 7,
    dailyAvg: 19,
    price: 49.561,
    cpm: 0.07,
    time: '03:15:13'
  };


  canvas: any;
  ctx: any;
  screenheight: any;
  @ViewChild('myChart') mychart: any;
  ngAfterViewInit() {

    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    //var canvas = document.getElementById('responsive-canvas');
    this.screenheight = window.innerWidth;
    var heightRatio = 0.15;
    console.log(this.screenheight)

    this.canvas.height = this.canvas.width * heightRatio;
    const DATA_COUNT = 8;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 40};
    //const labels = Utils.months({count: 7});

    const subLabels = {
      id: 'subLabels',
      afterDatasetsDraw(chart: any, args: any, pluginOptions: any) {
          const {ctx, chartArea: {left, right, bottom, width, height}} = chart;
          ctx.save();
          subLabelText('Total number of trucks', width / 4 * 1);
          subLabelText('Assigned trucks', width / 4 * 2);
          subLabelText('Loaded trucks', width / 4 * 3);

          function subLabelText(text: any, x: any) {
            ctx.font = 'bolder 12px sans-serif',
            ctx.fillStyle = 'green',
            ctx.textAlign = 'center';
            ctx.fillText(text, x + left, bottom +40);
          }

      }
    }
    new Chart(this.ctx, {
        type: 'line',
        options: {
          layout: {
            padding: {
              bottom: 20
            },
          },
          scales: {
            y: {
              ticks: {
                display:true,
                stepSize: 10,
                callback: function(value, index, values) {
                  if (value === 10 || value === 20 || value === 30 || value === 40) {
                    return value.toString();
                  }
                  return '';
                }
              },
            },
            x: {
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        },
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Avg'],
          datasets: [{
            label: "Assigned trucks",
            data: [26, 27, 26, 27, 30, 26, 25, 23],
            fill: false,
            borderColor: 'blue',
            tension: 0.1
          },
          {
            label: 'Loaded trucks',
            data: [20, 21, 20, 23, 25, 20 ,19, 18],
            fill: false,
            borderColor: 'orange',
            //tension: 0.1
          },
        ]
        },
       // plugins: [subLabels]

    });

   // var legendContainer = document.getElementById('myLegend');
  //  if(legendContainer != null)
   //  legendContainer.innerHTML = myChart.generateLegend();
  }

}

import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'graph';

  lineChart=new Chart({

    chart: {
      type: 'line'
    },
    title: {
      text: 'Overview'
    },

    yAxis:{
      tickInterval: 200,
      gridLineColor: 'transparent',
      

    },

    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
      
     
    },
    colors:['#7E66D2','#C4C4C4' ],

  
    

    credits: {
      enabled: false
    },
    series: [
      {   marker: {
        enabled: false
    },
        type: 'line', 
        data: [0, 600, 400, 1000,800,800,1200],
        
        
        
      },
      {
        marker: {
          enabled: false
      },
        type: 'line', 
        data: [600, 400, 500, 200,200,350,0,]
      }
    ]
  
    
  })
}

setChartTitle('Plant Monitoring system for Green house management');
var lig = new boltGraph();
lig.setChartType("lineGraph");
lig.setAxisName('Time','Light_Intensity');
lig.plotChart('time_stamp','light');

var tem = new boltGraph();
tem.setChartType("lineGraph");
tem.setAxisName('Time','Temperature');
tem.scaleData(1,0.4885);
tem.plotChart('time_stamp','temp');

var soi = new boltGraph();
soi.setChartType("lineGraph");
soi.setAxisName('Time','Soil_moisture');
soi.plotChart('time_stamp','soil');

var hum = new boltGraph();
hum.setChartType("lineGraph");
hum.setAxisName('Time','Relative_Humidity');
//hum.setNumberFormatter('percentage');
hum.plotChart('time_stamp','humidity');




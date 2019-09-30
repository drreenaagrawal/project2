/* data route */
var url = "/average";


function buildPlot() {
  d3.json(url).then((data) => {
    const Price = data.map(entry => entry.Price);
    const sample = data.map(entry => entry.sample);
    const MSRP = data.map(entry => entry.MSRP);
    
    trace1 = {
      "x": sample,
      "y": Price,
      "name": "Used Car Asking Price",
      "mode": "markers",
      marker: {
        size: 20
      }
    }
    trace2 = {
      "x": sample,
      "y": MSRP,
      "name": "MSRP",
      "mode": "markers",
      marker: {
        size: 20
      }
    }
    var data = [trace1, trace2];
    var layout = {   
    margin: { t: 30, b: 100 },
    hovermode: "closest",
     };
    // Build a Bubble Chart



    Plotly.plot("bar", data, layout);

});
}
buildPlot();

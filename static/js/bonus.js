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
      "type": "bar"
    }
    trace2 = {
      "x": sample,
      "y": MSRP,
      "type": "bar"
    }
    var data = [trace1, trace2];
    var layout = { margin: { t: 30, b: 100 } };
    // Build a Bubble Chart



    Plotly.plot("bar", data, layout);

});
}
buildPlot();

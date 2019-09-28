
function buildCharts(sample) {
  d3.json(`/samples/${sample}`).then((data) => {
    console.log(data);
    const Price = data.Price;
    const Year = data.Year;
    const Latitude = data.Latitude;
    const Longitude = data.Longitude;


    // Build a Bubble Chart
    var bubbleLayout = {
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "Year" }
    };
    var bubbleData = [
      {
        x: Year,
        y: Price,
        text: Year,
        mode: "markers",
        marker: {
          size: 20,
          color: Year,
          colorscale: "Viridis"
        }
      }
    ];

    Plotly.newPlot("pie", bubbleData, bubbleLayout);



    var geodata = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: Latitude,
        lon: Longitude,
        marker: {
            size: 20,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var geolayout = {
        title: 'Used cars for sale',
        showlegend: false,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            // showland: true,
            // landcolor: 'rgb(217, 217, 217)',
            // subunitwidth: 1,
            // countrywidth: 1,
            // subunitcolor: 'rgb(255,255,255)',
            // countrycolor: 'rgb(255,255,255)'
        },
    };

    Plotly.newPlot("bubble", geodata, geolayout, {showLink: false});

  });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
  });
}


function updatePlotlybub(newdata) {
  Plotly.restyle("bubble", "lat", [newdata.lat]);
  Plotly.restyle("bubble", "lon", [newdata.lon]);
}


function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  updatePlotlybub(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();

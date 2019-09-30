/* data route */
var url = "/chart";


function buildPlot() {
  d3.json(url).then((data) => {
    
    console.log(data.Price);
    console.log(data.Mileage);

    var chart = c3.generate({
      bindto: '#scatter',
        data: {
          x: "Price",
            columns: [
              data.Price,
              data.Mileage,
            ],
            type: 'scatter',
            colors: {
              Mileage: '#363FBC'
            },
          },

        axis: {
            x: {
                label: 'Price',
                tick: {
                  fit: false
              }
                },
            y: {
              label: 'Mileage'
            }
        },
    });


});

}

buildPlot();








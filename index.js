let dataset = [80, 100, 50, 120, 180, 30, 40, 120, 160];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);

let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
    
let barChart = svg.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('y', (d) => {
                    return svgHeight - d;
                })
                .attr('height', (d) => {
                    return d;
                })
                .attr('width', barWidth - barPadding)
                .attr('transform', (d, i) => {
                    let translate = barWidth * i;
                    return "translate("+ translate + ")";
                });
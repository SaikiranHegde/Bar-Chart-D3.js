let dataset = [80, 100, 50, 120, 180, 30, 40, 120, 160];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);

let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

let yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, svgHeight]);
    
let barChart = svg.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('y', (d) => {
                    return svgHeight - yScale(d) + 20;
                })
                .attr('height', (d) => {
                    return yScale(d) - 20;
                })
                .attr('width', barWidth - barPadding)
                .attr('transform', (d, i) => {
                    let translate = barWidth * i;
                    return "translate("+ translate + ")";
                });

let text = svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .attr('y', (d) => {
                return svgHeight - yScale(d) + 15;
            })
            .attr('x', (d, i) => {
                return (barWidth * i) + 15;
            })
            .text((d) => d)
            .attr('fill', '#A64C38');
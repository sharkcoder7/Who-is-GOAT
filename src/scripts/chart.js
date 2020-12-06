import * as d3 from 'd3';





class Chart {
  constructor(dataset1, dataset2, chartHeightMax) {
    this.width = 1300;
    this.height = 600;
    this.margin = { top: 20, bottom: 20, right: 20, left: 35 }
    this.svg = 
    d3.select('#d3-container')
    .append('svg')
    .attr('height', this.height - this.margin.top - this.margin.bottom)
    .attr('width', this.width - this.margin.left - this.margin.right)
    .attr('viewBox', [0, 0, this.width, this.height ])
    
    

    this.x = d3.scaleBand()
      .domain(d3.range(dataset1.length))
      .range([this.margin.left, this.width - this.margin.right])
      .padding(0.1)


    this.y = d3
      .scaleLinear()
      .domain([0, chartHeightMax])
      .range([this.height - this.margin.bottom, this.margin.top]);
    
    
    

    this.svg
      .append("g")
      .attr("fill", "purple")
      .attr("class", "lebron")
      .selectAll("lebron rect")
      .data(dataset1)
      .join("rect")
      .attr("x", (d, i) => this.x(i))
      .attr("y", (d) => this.y(d))
      .attr("height", (d, i) => this.y(0) - this.y(d))
      .attr("width", this.x.bandwidth(2))
      
      
      
    this.svg
      .selectAll("g", "lebron")
      .data(dataset1)
      .enter()
      .append("text")
      .attr("class", "tooltiptext")
      .attr("x", (d, i) => this.x(i))
      .attr("y", (d) => this.y(d))
      .text(function (d) {
        return d;
      })
      .attr("text-anchor", "middle")
      
      
      

    // this.texts.attr("class", "value")
    //   .attr("class", "tooltiptext")
    //   .attr("x", (d, i) => this.x(i))
    //   .attr("y", (d) => this.y(d))
    //   .text(function (d) { return d  })
    //   .attr("text-anchor", "middle")
      
      

      

        
    this.svg
      .append("g")
      .attr("fill", "red")
      .selectAll("mj rect")
      .data(dataset2)
      .join("rect")
      .attr("x", (d, i) => this.x(i))
      .attr("y", (d) => this.y(d))
      .attr("height", (d, i) => this.y(0) - this.y(d))
      .attr("width", this.x.bandwidth())
      .attr("class", "rect")
      
      
      
      

    this.texts2 =
      this.svg.selectAll("texts2")
        .data(dataset2)
        .enter()
        .append("text");
        

    this.texts2.attr("class", "value")
      .attr("class", "tooltiptext")
      .attr("x", (d, i) => this.x(i))
      .attr("y", (d) => this.y(d))
      .text(function (d) { return d })
      .attr("text-anchor", "middle")
      
      
      
      
    

        
    this.xAxis = (g) => {
      g.attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
        .call(d3.axisBottom(this.x).tickFormat(i => `season ${[i + 1]}`))
        .attr('font-size','12px')
      }
  
        
        
    this.yAxis = (g) => {
      g.attr("transform", `translate(${this.margin.left}, 0)`)
      .call(d3.axisLeft(this.y).ticks(null, dataset1.format))
      .attr("font-size", "12px");
    };


    


    

    // this.svg
    //   .on('mouseenter', function (actual, i) {
    //     d3.select(this).attr('opacity', 0.5)
    //   })
    //   .on('mouseleave', function (actual, i) {
    //     d3.select(this).attr('opacity', 1)
    //   })

   

    this.svg.append('g').call(this.xAxis)
    this.svg.append('g').call(this.yAxis)
    this.svg.node()
  }

  
 






    
  
}


export default Chart;


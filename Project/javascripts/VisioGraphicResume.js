
//SVG WIDTH & HEIGHT
		var w = 600;
		var h = 450;
		var padding = 30;
		
		//Variables for setting circle colors according to radius
		var c1 ="#3498DB";
		var c2 ="#E25942";
		var c3 ="#13A89E";
		var c4 ="#3F4953";
		var c5 ="#F6CB51";
		var c6 ="#F6CB51";
		var c7 ="#F6CB51";
		var c8 ="#F6CB51";
		var c9 ="#F6CB51";
		
        var dataset = [
			{ "id": 1, "years": 3, "midpoint": 2012.5, "start" : 2011, "end" : 2014, "name":"P.Obul Reddy Public School" },
			{ "id": 2, "years": 2, "midpoint": 2010, "start" : 2009, "end" : 2011, "name":"Treveni Talent School" },
			{ "id": 3, "years": 1, "midpoint": 2009.5, "start" : 2009, "end" : 2010, "name":"Trinity Public School" },
			{ "id": 4, "years": 4, "midpoint": 2008, "start" : 2006, "end" : 2010, "name":"Dav Public School" },
			{ "id": 5, "years": 1, "midpoint": 2006.5, "start" : 2006, "end" : 2007, "name":"Sri Chaitanya Junior Kalasala" },
			{ "id": 6, "years": 3, "midpoint": 2007.5, "start" : 2006, "end" : 2009, "name":"KG Reddy College Of Engineering & Technology" },
			{ "id": 7, "years": 5, "midpoint": 2012.5, "start" : 2010, "end" : 2015, "name":"Univeristy Of Massachusetts Dartmouth" }
			
		];	dataset.sort(function(a, b){
			 return b.years-a.years
			})
           
			var circle_para_group = d3.select("#circleDetailsModal")
			.selectAll("div")
			.data(dataset)
			.enter()
			.append("div")
			.attr("class","circleParaGroup");


			var circle_details = circle_para_group
			.append("div")
			.attr("class","circleDetails")
			.style("background-color",function(d){ 
				if(d.years==1){
					return c1;} else if(d.years==2){
					return c2;} else if(d.years==3){
					return c3;} else if(d.years==4){
					return c4;} else{ return c5;  }
			});
		
		var circle_details_para = circle_para_group
			.append("p")
			.attr("class","circleDetailsPara")
			.text(function(d){ return d.name; });

		
//	var dataset = [ [3,2012.5,2011,2014], [2,2010,2009,2011] , [1,2009.5,2009,2010], [4,2008,2006,2010], [1,2006.5,2006,2007], [3,2007.5,2006,2009], [5,2012.5,2010,2015], []
//					  ];

            
//      var dataset = [ [5,1993.5,1991,1996], [2,1993,1992,1994] , [4,2001,1999,2003], [3,1996.5,1995,1998], [1,1994.5,1994,1995], [1,2001.5,2001,2002], [2,1998,1997,1999], [3,1994.5,1993,1996]
//                    ];
            
		//Xscale
		var Xscale = d3.scale.linear()
						.domain([0, d3.max(dataset,function(d){ return d.years; })])
						.range([padding,w-padding*3]);



		//Yscale
		var Yscale = d3.scale.linear()
						.domain([d3.min(dataset,function(d){ return d.start; })-1, d3.max(dataset,function(d){ return (d.end+1); })])
						.range([h-padding,padding]);


		//Xaxis
		var Xaxis = d3.svg.axis()
						.scale(Xscale)
						.orient("bottom")
						.ticks(4);


		//Yaxis
		var Yaxis = d3.svg.axis()
						.scale(Yscale)
						.orient("left");

		var svg = d3.select("body")
					.select("#mainGraph")
					.append("svg")
					.attr("width",w)
					.attr("height",h)
					.attr("id","svg1");

            
            
            
            
            
          var topLine = svg.selectAll("#tl line") //Top Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","tls") //Top Line Selector
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.end); })
                    .attr("stroke","teal");
            
            svg.selectAll("#tcl line") //Top Cross Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","tcls") //Top Cross Line Selector
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("#bl line") //Bottom Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","bls") //Bottom Line Selector
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.start); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("#bcl line") //Bottom Cross Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","bcls") //Bottom Cross Line Selector
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
            
            
            
            
            
            
            var circles = svg.selectAll("circle")
                            .data(dataset)
                            .enter()
                            .append("circle")
							.on("mouseover", function(d){
									window.x = d.id;
									window.a = d.years;
									window.b = d.midpoint;
									window.c = d.start;
									window.d = d.end;
									window.e = d.name;
								
								d3.select(this)
								.attr("fill",function(d){ 
								if(d.years==1){	
									return c1;} else if(d.years==2){
									return c2;} else if(d.years==3){
									return c3;} else if(d.years==4){
									return c4;} else{ return c5;  }
                            	})
								.attr("fill","#E53542")
								.attr("stroke","#E53542")
								.attr("stroke-width",4)
								.attr("cursor","pointer");
								
								circle_details.style("background-color",function(d){
									if(d.id==window.x){
										return "#E53542";
									}
										if(d.years==1){
										return c1;} else if(d.years==2){
										return c2;} else if(d.years==3){
										return c3;} else if(d.years==4){
										return c4;} else{ return c5;  }
								});
//								.style("border-radius",function(d){
//									if(d.id==window.x){
//										return 50+"%";
//									}
//								});
//								.style("width",function(d){
//									if(d.id==window.x){
//										return 23 + "px";
//									}
//								})
//								.style("height",function(d){
//									if(d.id==window.x){
//										return 23 + "px";
//									}
//								});
								
								circle_details_para
								.style("color",function(d){
									if(d.id==window.x){
										return "#E53542";}
								});
								
								
								svg.append("line") //Top Line Selector
								.attr("class","remove")
								.attr("x1",Xscale(0.05))
								.attr("y1",function(d){ return Yscale(window.d); })
								.attr("x2",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y2",function(d){ return Yscale(window.d); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
								svg.append("line") //Top Cross Line Selector
								.attr("class","remove")
								.attr("x1",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y1",function(d){ return Yscale(window.d); })
								.attr("x2",function(d){ return Xscale(window.a); })
								.attr("y2",function(d){ return Yscale(window.b); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
								svg.append("line") //Bottom Line Selector
								.attr("class","remove")
								.attr("x1",Xscale(0.05))
								.attr("y1",function(d){ return Yscale(window.c); })
								.attr("x2",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y2",function(d){ return Yscale(window.c); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
								svg.append("line") //Bottom Cross Line Selector
								.attr("class","remove")
								.attr("x1",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y1",function(d){ return Yscale(window.c); })
								.attr("x2",function(d){ return Xscale(window.a); })
								.attr("y2",function(d){ return Yscale(window.b); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
							})
								
							.on("mouseout", function(){
								d3.select(this)
								.transition()
								.duration(250)
								.attr("fill",function(d){ 
								if(d.years==1){	
                                return c1;} else if(d.years==2){
                                return c2;} else if(d.years==3){
                                return c3;} else if(d.years==4){
                                return c4;} else{ return c5;  }
                            	})
								.attr("stroke","grey")
								.attr("stroke-width",1);
								
								circle_details
								.transition()
								.duration(250)
								.style("background-color",function(d){
									if(d.years==1){
										return c1;} else if(d.years==2){
										return c2;} else if(d.years==3){
										return c3;} else if(d.years==4){
										return c4;} else{ return c5;  }
								});
//								.style("border-radius","none");
//								.style("width",function(d){ return 20 + "px";})
//								.style("height",function(d){ return 20 + "px";});
								
								circle_details_para
								.transition()
								.duration(250)
								.style("color",function(d) { return "grey"; });
								
								svg.selectAll("line.remove") //Top Line Selector
//								.transition()
//								.duration(250)
								.attr("x1",0)
								.attr("y1",0)
								.attr("x2",0)
								.attr("y2",0)
								.attr("stroke",none)
								.attr("stroke-width",0);
							})
							.on("click",function(d){
								
								window.id = d.id;
								window.years = d.years;
								window.midpoint = d.midpoint;
								window.start = d.start;
								window.end = d.end;
								window.name = d.name;
								
								d3.select("#educationNameRect")
								.transition()
								.duration(250)
								.each("start",function(){
									d3.select(this)
									.style("width",0+"px")
									.select("p")
									.text("")
								})
								.style("width",300+"px")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.name;
								})
								
								d3.select("#educationFirstYear")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.start;
								})
								
								d3.select("#educationSecondYear")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.end;
								})
								
								d3.select("#eCountry")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.end;
								})
								
								d3.select("#eState")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.end;
								})
								
								d3.select("#eCity")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.end;
								})
							})
			
			
			//Starts the original circle Attributes
                            .attr("cx", function(d){ return Xscale(d.years); })
                            .attr("cy", function(d){ return Yscale(d.midpoint); })
                            .attr("r", function(d){
								return (d.years*10);
                            })
                            .attr("fill",function(d){ 
                            if(d.years==1){
                                return c1;} else if(d.years==2){
                                return c2;} else if(d.years==3){
                                return c3;} else if(d.years==4){
                                return c4;} else{ return c5;  }
                            })
                            .attr("stroke","grey")
                            .attr("stroke-width",1);
							
                                
            
            
            
            
            
            
            svg.append("g")
                .attr("class","xaxis x axis")
                .attr("transform","translate(10," + (h-padding) + ")")
				.call(Xaxis);
            
            svg.append("g")
                .attr("class","yaxis y axis")
                .attr("transform", "translate(" + (padding+10) + ",0)")
				.call(Yaxis);
        
            //Not able to move the gap between the ticks *****IMPORTANT*******
//             svg.selectAll(".yaxis text")  // select all the text elements for the xaxis
//          .attr("transform", function(d) {
//             return "translate(" + this.getBBox().h*-2 + "," + this.getBBox().h + ")";
//         });
            
            
            
            
            
            
            
            
            
            
            
            //On click, update with new data			
			d3.select("p#work")
				.on("click", function() {
                    
                 var dataset = [ [5,1993.5,1991,1996], [2,1993,1992,1994] , [4,2001,1999,2003], [3,1996.5,1995,1998], [1,1994.5,1994,1995], [1,2001.5,2001,2002], [2,1998,1997,1999], [3,1994.5,1993,1996]
                          ];
                    
                     //Update scale domains
                     Xscale.domain([0, d3.max(dataset,function(d){ return d[0]; })]);
                     Yscale.domain([d3.min(dataset,function(d){ return d[2]; })-1, d3.max(dataset,function(d){ return (d[3]+1); })])
                    
   
					//Update all circles
					svg.selectAll("circle")
					   .data(dataset)
					   .transition()
					   .duration(1000)
						//.ease("elastic")
					   .each("start", function() {
						   d3.select(this)
						     //.attr("fill", "magenta")
                             //.attr("stroke", "grey")
						     .attr("r", 8);
					   })
  					   
                    .attr("cx", function(d){ return Xscale(d[0]); })
                            .attr("cy", function(d){ return Yscale(d[1]); })
                    
                    .transition()
					   .duration(1000)
						//.ease("leniar")
                    
                    
//                        .attr("cx", function(d){ return Xscale(d[0]); })
//                            .attr("cy", function(d){ return Yscale(d[1]); })
                            .attr("r", function(d){ 
                            if(d[0]==1){
                                return (d[0]*10);} else if(d[0]==2){
                                return (d[0]*10);} else if(d[0]==3){
                                return (d[0]*10);} else if(d[0]==4){
                                return (d[0]*10);} else if(d[0]==5){
                                return (d[0]*10);} else if(d[0]==6){
                                return (d[0]*10);} else if(d[0]==7){
                                return (d[0]*10);} else if(d[0]==8){
                                return (d[0]*10);} else if(d[0]==9){
                                return (d[0]*10);}
                            })
                            .attr("fill",function(d){ 
                            if(d[0]==1){
                                return c1;} else if(d[0]==2){
                                return c2;} else if(d[0]==3){
                                return c3;} else if(d[0]==4){
                                return c4;} else{ return c5;  }
                            })
                            .attr("stroke","grey")
                            .attr("stroke-width",1);
                    
                    
                    
                    
                    
            svg.selectAll("line#tls")//Top Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
						//.ease("circle")
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[3]+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[3]+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d[3]); })
                    .attr("x2",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y2",function(d){ return Yscale(d[3]); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#tcls")//Top Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
						//.ease("circle")
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[3]+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[1]+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y1",function(d){ return Yscale(d[3]); })
                    .attr("x2",function(d){ return Xscale(d[0]); })
                    .attr("y2",function(d){ return Yscale(d[1]); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bls")//Bottom Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
			.ease("cubic-in-out")
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[2]); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[2]); })
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d[2]); })
                    .attr("x2",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y2",function(d){ return Yscale(d[2]); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bcls")//Bottom Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
			.ease("cubic-in-out")
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[2]); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[1]); })
					   })
                    .attr("x1",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y1",function(d){ return Yscale(d[2]); })
                    .attr("x2",function(d){ return Xscale(d[0]); })
                    .attr("y2",function(d){ return Yscale(d[1]); })
                    .attr("stroke","teal");
            
					//Update X axis
					svg.select(".x.axis")
				    	.transition()
				    	.duration(1000)
						.call(Xaxis);
					
					//Update Y axis
					svg.select(".y.axis")
				    	.transition()
				    	.duration(1000)
						.call(Yaxis);

				});
			  
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            //On click, update with new data			
			d3.select("p#education")
				.on("click", function() {
                    
                 var dataset = [ [3,2012.5,2011,2014], [2,2010,2009,2011] , [1,2009.5,2009,2010], [4,2008,2006,2010], [1,2006.5,2006,2007], [3,2007.5,2006,2009], [5,2012.5,2010,2015], []
                          ];
                    
                     //Update scale domains
                     Xscale.domain([0, d3.max(dataset,function(d){ return d[0]; })]);
                     Yscale.domain([d3.min(dataset,function(d){ return d[2]; })-1, d3.max(dataset,function(d){ return (d[3]+1); })])
                    
   
					//Update all circles
					svg.selectAll("circle")
					   .data(dataset)
					   .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     //.attr("fill", "magenta")
                             //.attr("stroke", "grey")
						     .attr("r", 8);
					   })
  					   
                    .attr("cx", function(d){ return Xscale(d[0]); })
                            .attr("cy", function(d){ return Yscale(d[1]); })
                    
                    .transition()
					   .duration(1000)
                    
                    
//                        .attr("cx", function(d){ return Xscale(d[0]); })
//                            .attr("cy", function(d){ return Yscale(d[1]); })
                            .attr("r", function(d){ 
                            if(d[0]==1){
                                return (d[0]*10);} else if(d[0]==2){
                                return (d[0]*10);} else if(d[0]==3){
                                return (d[0]*10);} else if(d[0]==4){
                                return (d[0]*10);} else if(d[0]==5){
                                return (d[0]*10);} else if(d[0]==6){
                                return (d[0]*10);} else if(d[0]==7){
                                return (d[0]*10);} else if(d[0]==8){
                                return (d[0]*10);} else if(d[0]==9){
                                return (d[0]*10);}
                            })
                            .attr("fill",function(d){ 
                            if(d[0]==1){
                                return c1;} else if(d[0]==2){
                                return c2;} else if(d[0]==3){
                                return c3;} else if(d[0]==4){
                                return c4;} else{ return c5;  }
                            })
                            .attr("stroke","grey")
                            .attr("stroke-width",1);
                    
                    
                    
                    
                    
            svg.selectAll("line#tls")//Top Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[3]+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[3]+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d[3]); })
                    .attr("x2",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y2",function(d){ return Yscale(d[3]); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#tcls")//Top Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[3]+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[1]+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y1",function(d){ return Yscale(d[3]); })
                    .attr("x2",function(d){ return Xscale(d[0]); })
                    .attr("y2",function(d){ return Yscale(d[1]); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bls")//Bottom Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[2]); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[2]); })
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d[2]); })
                    .attr("x2",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y2",function(d){ return Yscale(d[2]); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bcls")//Bottom Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d[2]); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d[1]); })
					   })
                    .attr("x1",function(d){ return Xscale(d[0]-(d[0]/8)); })
                    .attr("y1",function(d){ return Yscale(d[2]); })
                    .attr("x2",function(d){ return Xscale(d[0]); })
                    .attr("y2",function(d){ return Yscale(d[1]); })
                    .attr("stroke","teal");
            
					//Update X axis
					svg.select(".x.axis")
				    	.transition()
				    	.duration(1000)
						.call(Xaxis);
					
					//Update Y axis
					svg.select(".y.axis")
				    	.transition()
				    	.duration(1000)
						.call(Yaxis);

				});
            
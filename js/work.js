var baseURL = 'http://localhost:7474/db/data';

var width = 800, height = 800;
// force layout setup
var force = d3.layout.force()
        .charge(-200).linkDistance(30).size([width, height]);

// setup svg div
var svg = d3.select("#graph").append("svg")
        .attr("width", width).attr("height", height)
        .attr("pointer-events", "all");


var url = baseURL+'/cypher';
url = baseURL+'/transaction/commit';

var postData = {
	query: "MATCH m RETURN *"//"MATCH (n:Reaction) RETURN n LIMIT 25"
	/*, params: {
		
		}*/
	};
	
postData = JSON.parse('{"statements":[{"statement":"MATCH a -[r]- b WHERE id(a) IN[576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652]\
AND id(b) IN[576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652]\
RETURN r;", "resultDataContents":["row", "graph"]}]}');

// load graph (nodes,links) json from /graph endpoint
/*d3.json(url, function(error, graph) {
    if (error) return;

    renderGraph(graph);
})
.header("Content-Type","application/json")
.send("POST", JSON.stringify(postData))
;*/

d3.xhr(url) //text
	.header("Accept", "application/json; charset=UTF-8")
    .header("Content-Type", "application/json")
    .post(
        JSON.stringify(postData),
        function(err, rawData){
            var data = JSON.parse(rawData.response);
            console.log("got response", data);
            var res  = { "results": [
				data
			  ], "errors": []
			};
			var viz = parseD3(data);
            renderGraph(viz);
        }
    );

function idIndex(a,id) {
  for (var i=0;i<a.length;i++) {
    if (a[i].id == id) return i;}
  return null;
}
function parseD3(res){
	var nodes=[], links=[];
	res.results[0].data.forEach(function (row) {
	   row.graph.nodes.forEach(function (n) {//console.dir(n);
		 if (idIndex(nodes,n.id) == null)
		   nodes.push({id:n.id,label:n.labels[0],title:n.properties.name});
	   });
	});
	
	res.results[0].data.forEach(function (row) {
	   links = links.concat( row.graph.relationships.map(function(r) {//console.dir(r);
		   var sourceindex = 10;//(typeof(r.startNode) !== 'undefined')?r.startNode:0;
		   var targetindex = 20;//(typeof(r.endNode) !== 'undefined')?r.endNode:0;
		   r.source = {index: sourceindex, weight: 5};
		   r.target = {index: targetindex, weight: 5};
		 return {start:idIndex(nodes,r.startNode),end:idIndex(nodes,r.endNode),type:r.type, source: r.source, target: r.target};
	   }));
	});
	viz = {nodes:nodes, links:links};
	return viz;
}
var getCircleFill =  function(d){
	if(d.label == 'RDF')
		return '#00cc00';
	else if(d.label == 'Reaction')
		return '#cc0000';
	else if(d.label == 'Compartment')
		return '#0000cc';
	else if(d.label == 'Species')
		return '#eecc00';
};

var renderGraph =  function(graph){
	//console.dir(graph);
	force.nodes(graph.nodes).links(graph.links).start();

    // render relationships as lines
    var link = svg.selectAll(".link")
            .data(graph.links).enter()
            .append("line").attr("class", "link")
            .attr('stroke', '#333333')
            .attr('fill', '#222222')
            ;

    // render nodes as circles, css-class from label
    var node = svg.selectAll(".node")
            .data(graph.nodes).enter()
            .append("circle")
            .attr("class", function (d) { return "node " + d.label })
            .attr("r", 10)
            .attr('stroke', '#006600')
            .attr('fill', getCircleFill)
            .call(force.drag);

    // html title attribute for title node-attribute
    node.append("title")
            .text(function (d) { return d.title; })

    // force feed algo ticks for coordinate computation
    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
    });
};


var style = '<style type="text/css" > <![CDATA[\
  line.link{\
	  stroke: #333;\
	  fill: #333;\
  }\
  circle.node{\
	  \
  }\
  circle.node.RDF{\
		stroke: green;\
		fill: green;\
  }\
  circle.node.Reaction{\
		stroke: red;\
		fill: red;\
  }\
  circle.node.Species{\
		stroke: blue;\
		fill: blue;\
  }\
\
      ]]> </style>';
      
jQuery('#graph svg').append(style);

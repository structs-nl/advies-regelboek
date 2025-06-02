import {instance} from "../_npm/@viz-js/viz@3.12.0/0830eea0.js";
const viz = await instance();

export {depDiagram};

function depDiagram() {

    const dls = document.querySelectorAll("dl");

    const edges = []
    const nodes = []
    const links = [];
    
    for (const dl of dls) {
	let ntxt = "";
	
	for (const d of dl.childNodes){
	    const txt = d.textContent;
	    
	    if (txt == "Naam") {
		const n = d.nextElementSibling;
		ntxt = n.textContent.toLowerCase();
		const linktxt = "#" + ntxt.replaceAll(" ", "-");
		nodes.push({name: ntxt, attributes: {URL: linktxt}});

	    }

	    if (txt.toLowerCase() == "definitie"
		||
		txt.toLowerCase() == "voorwaarde"	
		||
		txt.toLowerCase() == "standaardwaarde"
	       ) {
		const n = d.nextElementSibling;
		const as = n.querySelectorAll("a");

		for (const a of as){
		    const atxt = a.textContent.toLowerCase();
		    const edgestr = ntxt + "|" +atxt;
		    
		    if (! links.includes(edgestr)) {
			links.push(edgestr)
			edges.push({tail: ntxt, head: atxt})
		    }
		}
	    }
	}
    }

   
    const diagram = {
	forcelabels: false,
	nodeAttributes: {
	    shape: "box",
	    fontsize: 10,
	    fontname: "helvetica"
	},
	nodes: nodes,
	edges: edges
    };

    const graph = viz.renderSVGElement(diagram);
    graph.setAttribute("id", "graph");
    return graph;
}




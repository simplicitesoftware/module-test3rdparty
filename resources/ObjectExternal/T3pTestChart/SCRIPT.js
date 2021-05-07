var T3pTestChart = (function() {
	function chart(name, color) {
		cytoscape({
			container: $("#T3pTestChart"),
			elements: [
				{ data: { id: "a", label: name + "-a" } },
				{ data: { id: "b", label: name + "-b" } },
				{ data: { id: "c", label: name + "-c" } },
				{ data: { id: "ab", source: "a", target: "b" } },
				{ data: { id: "bc", source: "b", target: "c" } },
				{ data: { id: "ca", source: "a", target: "c" } }
			],
			style: [
				{ selector: "node", style: { "background-color": color || "#ccc", "label": "data(label)" } },
				{ selector: "edge", style: { "width": 3, "line-color": "#ccc", "target-arrow-color": "#ccc", "target-arrow-shape": "triangle" } }
			],
			layout: { name: "grid", rows: 1 }
		});
	}

	return {
		render: function(params) {
			var p = params.parameters;
			if (p.object && p.row_id) {
				console.log("Called from " + p.object + " (row ID " + p.row_id + ")");
				$ui.getUIObject(p.object, function(obj) {
					chart(obj.item.t3pTstName, obj.item.t3pTstColor);
				});
			} else {
				chart("item")
			}
		}
	};
})();
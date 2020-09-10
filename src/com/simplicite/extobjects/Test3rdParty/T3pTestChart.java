package com.simplicite.extobjects.Test3rdParty;

import com.simplicite.util.tools.Parameters;
import com.simplicite.util.tools.HTMLTool;

public class T3pTestChart extends com.simplicite.util.ExternalObject {
	private static final long serialVersionUID = 1L;

	@Override
	public Object display(Parameters params) {
		appendJSInclude(HTMLTool.getResourceJSURL(getGrant(), "CYTOSCAPE"));
		return javascript(getName() + ".render(" + params.toJSON() + ")");
	}
}
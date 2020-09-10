package com.simplicite.extobjects.Test3rdParty;

import com.simplicite.util.tools.Parameters;
import com.simplicite.util.tools.HTMLTool;

public class T3pTestTable extends com.simplicite.util.ExternalObject {
	private static final long serialVersionUID = 1L;

	@Override
	public Object display(Parameters params) {
		appendCSSInclude(HTMLTool.getResourceCSSURL(getGrant(), "BOOTSTRAP-TABLE-CSS"));
		appendJSInclude(HTMLTool.getResourceJSURL(getGrant(), "BOOTSTRAP-TABLE-JS"));
		return javascript(getName() + ".render(" + params.toJSON() + ")");
	}
}
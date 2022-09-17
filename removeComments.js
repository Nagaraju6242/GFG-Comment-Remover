function getCodeValueWithoutComments(e) {
	var t = "",
		i = jQuery(e).closest(".code-block");
	if (i.find(".code-editor-container").is(":visible")) {
		t = i.find(".CodeMirror")[0].CodeMirror.getValue();
	} else {
		for (
			var a = i
					.find(".syntaxhighlighter .code")[0]
					.getElementsByClassName("line"),
				r = ((t = ""), 0);
			r < a.length;
			r++
		) {
			newElement = $(a[r]).clone();
			newElement.find(".comments").remove();
			if (newElement.text().trim() != "") {
				t += newElement.text() + "\r\n";
			}
		}
		t = (t = t.replace(/\u00A0\u00A0\u00A0\u00A0/g, "\t")).replace(
			/\u00A0/g,
			""
		);
	}
	return t;
}

var naga = "HEllo";

startRemoveComments();

function startRemoveComments() {
	console.log("Working on Removing Comments");
	$(".code-block .editor-buttons-div").each((index, node) => {
		node = $(node);
		copy_code = node.find("#copy-code-button").clone();
		// copy_code.removeClass("gfg-icon_copy").addClass("gfg-icon_code");
		copy_code.attr("title", "Copy Code without Comments");
		copy_code.attr("id", "copy-code-without-comments-button");
		copy_code.on("click", function () {
			var e = getCodeValueWithoutComments(this),
				t = document.createElement("textarea");
			document.body.appendChild(t),
				t.setAttribute("id", "dummy_id"),
				(document.getElementById("dummy_id").value = e),
				t.select(),
				document.execCommand("copy"),
				document.body.removeChild(t),
				showToast("Code Copied Without Comments"),
				clickingAction.addClickingActivities("copy_code");
		});
		node.append(copy_code);
	});
}

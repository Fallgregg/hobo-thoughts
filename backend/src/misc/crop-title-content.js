function cropTitle(title) {
	let excerptTitle = title; 
	excerptTitle = excerptTitle.replace(/^(.{14}[^\s]*).*/, "$1");
	excerptTitle += "..";
	return excerptTitle;
}
function cropContent(text) {
	let excerptText = text;
	excerptText = excerptText.replace(/^(.{60}[^\s]*).*/, "$1");
	excerptText += "..";
	return excerptText;
}

module.exports.title = cropTitle;
module.exports.content = cropContent;
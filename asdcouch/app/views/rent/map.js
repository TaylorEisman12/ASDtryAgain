function(doc) {
	if (doc.category.substr(0,3) === "ren"){
		emit(doc.category);
	}
};
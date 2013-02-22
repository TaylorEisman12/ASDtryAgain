function(doc) {
	if (doc.category.substr(0,3) === "car"){
		emit(doc.category);
	}
};
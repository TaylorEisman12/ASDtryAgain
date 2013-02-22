function(doc) {
	if (doc.category.substr(0,2) === "ce"){
		emit(doc.category);
	}
};
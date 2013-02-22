function(doc) {
	if (doc.category.substr(0,4) === "cabl"){
		emit(doc.category);
	}
};
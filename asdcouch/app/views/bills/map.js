function(doc) {
	if (doc._id.substr(0, 4) === "1682"){
		emit(doc._id);
	}
};
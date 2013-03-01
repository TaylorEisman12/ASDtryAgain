function(doc) {
	if (doc._id.substr(0, 4) === "1682"){
		emit(doc._id, {
			"compName": doc.compName,
			"compWeb": doc.compWeb,
			"category": doc.category,
			"compEmail": doc.compEmail,
			"pastDue": doc.pastDue,
			"payBy": doc.payBy,
			"budgetPercent": doc.budgetPercent,
			"notes": doc.notes,
			"date": doc.date
		});
	}
};
function(doc) {
	if (doc.category.substr(0,3) === "ren"){
		emit(doc.category, {
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
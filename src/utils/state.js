import { db } from "./db.js";

export async function getCoffeeShops() {
	return new Promise((resolve, reject) => {
		db.collection("coffeeShops").orderBy("title").get()
			.then(query => {
				const docs = query.docs.map(doc => doc.data());
				resolve(docs);
			})
			.catch(reject);
	});
}

export const state = {
	getFilteredShops: function (filters, shops) {
		console.log(filters);
		return shops.filter(shop => {
			let result = true;
			if (filters.milkSelected && filters.milkSelected != shop.nonDairy) result = result && false;
			if (filters.decafSelected && filters.decafSelected != shop.deCaf) result = result && false;
			if (filters.foodSelected && filters.foodSelected != shop.hotFood) result = result && false;
			if (filters.barrierSelected && filters.barrierSelected != shop.barrierFree) result = result && false;
			if (filters.freelanceSelected && filters.freelanceSelected != shop.freelance) result = result && false;
			if (filters.familySelected && filters.familySelected != shop.baby) result = result && false;
			if (filters.petSelected && filters.petSelected != shop.pet) result = result && false;
			if (filters.outdoorSelected && filters.outdoorSelected != shop.terrace) result = result && false;

			return result;
		});
	},
	filters: {
		milkSelected: false,
		decafSelected: false,
		foodSelected: false,
		barrierSelected: false,
		freelanceSelected: false,
		familySelected: false,
		petSelected: false,
		outdoorSelected: false,
	},
	coffeeShops: getCoffeeShops(),
	// TODO

};
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
			if (filters.milkSelected) return shop.nonDairy;
			if (filters.decafSelected) return shop.deCaf;
			if (filters.foodSelected) return shop.hotFood;
			if (filters.barrierSelected) return shop.barrierFree;
			if (filters.freelanceSelected) return shop.freelance;
			if (filters.familySelected) return shop.baby;
			if (filters.petSelected) return shop.pet;
			if (filters.outdoorSelected) return shop.terrace;

			return true;
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
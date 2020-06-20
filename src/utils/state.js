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
			let fits = true;
			if (filters.milkSelected) fits = shop.nonDairy && fits;
			if (filters.decafSelected) fits = fits && shop.deCaf;
			if (filters.foodSelected) fits = fits && shop.hotFood;
			if (filters.barrierSelected) fits = fits && shop.barrierFree;
			if (filters.freelanceSelected) fits = fits && shop.freelance;
			if (filters.familySelected) fits = fits && shop.baby;
			if (filters.petSelected) fits = fits && shop.pet;
			if (filters.outdoorSelected) fits = fits && shop.terrace;

			return fits;
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
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
};

export const state = {
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
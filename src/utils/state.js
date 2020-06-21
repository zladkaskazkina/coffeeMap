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
	getFilteredShops: function (filters, shops, searchValue = "") {

		return shops.filter(shop => {
			let fits = true;
			if (filters.milkSelected) fits = shop.nonDairy && fits;
			if (filters.decafSelected) fits = fits && shop.deCaf;
			if (filters.foodSelected) fits = fits && shop.hotFood;
			if (filters.barrierSelected) fits = fits && shop.barrierFree;
			if (filters.freelanceSelected) fits = fits && shop.freelance;
			if (filters.familySelected) fits = fits && shop.baby;
			if (filters.petSelected) fits = fits && shop.pets;
			if (filters.outdoorSelected) fits = fits && shop.terrace;
			if (!shop.title.toLowerCase().match(searchValue.toLowerCase())) fits = fits && false;

			return fits;
		});
	},
	clearFilters: function (filters) {

		for (const property in filters) {
			filters[property] = false;
		}
	},
	filterLabels: [
		{
			icon: "milk",
			label: "Alternative milk",
			key: "milkSelected",
		},
		{
			icon: "decaf",
			label: "Decaf coffee",
			key: "decafSelected",
		},
		{
			icon: "soup",
			label: "Hot food",
			key: "foodSelected",
		},
		{
			icon: "disabled",
			label: "Barrier-free",
			key: "barrierSelected",
		},
		{
			icon: "laptop",
			label: "Freelance friendly",
			key: "freelanceSelected",
		},
		{
			icon: "baby",
			label: "Family friendly",
			key: "familySelected",
		},
		{
			icon: "pawprint",
			label: "Pet friendly",
			key: "petSelected",
		},
		{
			icon: "outdoors",
			label: "Outside seating",
			key: "outdoorSelected",
		},
	],
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
	searchValue: "",
	coffeeShops: getCoffeeShops(),
	mapCards: [],
	// TODO

};
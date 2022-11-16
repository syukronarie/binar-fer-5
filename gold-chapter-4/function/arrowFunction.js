const cars = [
	{
		dataType: "string",
		description:
			"<p>This field stores any other battery information that does not belong to any of the other battery related fields.</p>",
		groupName: "Mechanical / Battery",
		id: 1,
		name: "Other Battery Info",
	},
	{
		dataType: "lookup",
		description:
			"<p>Battery type field stores the battery chemistry type for anode, cathode.</p>",
		groupName: "Mechanical / Battery",
		id: 2,
		name: "Battery Type",
	},
	{
		dataType: "lookup",
		description:
			"<p>Bed type is the type of bed (the open back) used for pickup trucks. The common values are standard, short, long, extended.</p>",
		groupName: "Exterior / Truck",
		id: 3,
		name: "Bed Type",
	},
];

const getCarByGroupName = (groupName) => {
	return cars.filter((val) => val.groupName === groupName);
};

const mechanicalCars = getCarByGroupName("Mechanical / Battery");
// console.log(mechanicalCars);

const getCarNameByGroupNames = (groupName, callback) => {
	const carGroups = callback(groupName);
	if (carGroups.length > 0) {
		carGroups.map((val) => {
			delete val.dataType;
			delete val.description;
			delete val.groupName;
			delete val.id;
			return val;
		});
		return carGroups;
	}
};

const results = getCarNameByGroupNames(
	"Mechanical / Battery",
	getCarByGroupName
);
console.log(results);

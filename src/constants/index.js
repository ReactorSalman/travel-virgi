const locationOptions = [
    {label: "new-york", value: "new-york"},
    {label: "orlando", value: "orlando"}, 
    {label: "barbados", value: "barbados"}, 
    {label: "toronto", value: "toronto"},
];

const boardingOptions = [{label: "hotel", value: "hotel"},];

const adultsOptions = [
    {label: "1", value: "1"}, 
    {label: "2", value: "2"}, 
    {label: "3", value: "3"},
];

const infantsOptions = [
    {label: "0", value: "0"}, 
    {label: "1", value: "1"}, 
    {label: "2", value: "2"},
];

const ratings = [
    {label: "1 star", value: "1", isChecked: false, name:"star1"},
    {label: "2 stars", value: "2", isChecked: false, name:"star2"}, 
    {label: "3 stars", value: "3", isChecked: false, name:"star3"}, 
    {label: "4 stars", value: "4", isChecked: false, name:"star4"},
    {label: "5 stars", value: "5", isChecked: false, name:"star5"},
];

const pricePerPersonData = [
    {label: "Less than $300", value: "1", isChecked: false, name:"price1", min:0, max:300},
    {label: "$300 to $600", value: "2", isChecked: false, name:"price2", min:300, max:600}, 
    {label: "$600 to $900", value: "3", isChecked: false, name:"price3", min:600, max:900}, 
    {label: "Greater than $900", value: "4", isChecked: false, name:"price4", min:900, max: 100000},
];

const facilitiesData = [
    {label: "Bar", value: "1", isChecked: false, name:"facility1"},
    {label: "Restaurant", value: "2", isChecked: false, name:"facility2"}, 
    {label: "Free parking", value: "3", isChecked: false, name:"facility3"}, 
    {label: "Swimming pool", value: "4", isChecked: false, name:"facility4"},
    {label: "Safety Deposit Box", value: "5", isChecked: false, name:"facility5"},
    {label: "Fitness Centre/Gym", value: "6", isChecked: false, name:"facility6"},
    {label: "Laundry Service", value: "7", isChecked: false, name:"facility7"}, 
    {label: "Games Room", value: "8", isChecked: false, name:"facility8"}, 
    {label: "Internet Access", value: "9", isChecked: false, name:"facility9"},
    {label: "Whirlpool", value: "10", isChecked: false, name:"facility10"},
];

export {locationOptions, boardingOptions, adultsOptions, infantsOptions, ratings, pricePerPersonData, facilitiesData};
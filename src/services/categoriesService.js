const categories = [
    {title: "Education", spent: 100, budgetLimit: 1000, indicatorColor: 'blue', value: 'education'},
    {title: "Cloths & Fashion", spent: 200, budgetLimit: 1500, indicatorColor: 'red', value: 'clothes&fashion'},
    {title: "Food", spent: 300, budgetLimit: 2000, indicatorColor: 'yellow', value: 'food'},
    {title: "Transport", spent: 400, budgetLimit: 1000, indicatorColor: 'green', value: 'transport'}
]

export function getCategories() {
    return categories;
}


export function addCategory(category) {
    categories.push(category);
}

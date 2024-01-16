
async function AddToDB(cityName)
{
    const promise = await fetch(`http://localhost:5056/FavoriteCities/AddCity/${cityName}`);
    const data = await promise.json();
}

async function DeleteFav(cityName)
{
    const promise = await fetch(`http://localhost:5056/FavoriteCities/DeleteCity/${cityName}`);
    const data = await promise.json();
}

export { AddToDB, DeleteFav }

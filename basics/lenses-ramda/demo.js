import R from "ramda";

export function demo() {

    let client = { name: "Jim", age: 25 };

    {
        //using  R.lensProp
        var nameLens = R.lensProp(`name`);

        console.log(R.view(nameLens, client)); //getter

        let updatedClient = R.set(nameLens, `Jim doe`, client); //setter
        console.log(R.view(nameLens, updatedClient)); //getter
    }

    {
        //constructing explicitly the equivalent of  R.lensProp
        var nameLens = R.lens(R.prop("name"), R.assoc("name")); //same as R.lensProp(`name`)

        console.log(R.view(nameLens, client)); //getter

        let updatedClient = R.set(nameLens, `Jim doe`, client); //setter
        console.log(R.view(nameLens, updatedClient)); //getter
    }

}

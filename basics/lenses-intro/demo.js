
export function demo() { 
    {
        //Mutable
        //ad-hoc lens - specificly creafted for the name property
        const nameLens = {
            get: client => client.name,
            set: (client, newName) => {
                client.name = newName; //we mutate the object and return void
            } //copy object with updated name value
        };

        let client = { name: "Jim", age: 25 };

        console.log(nameLens.get(client)); //getter

        nameLens.set(client, `Jim doe`); //setter  - update object with value
        console.log(nameLens.get(client)); //getter on the updatedClient
    }

    {
        //Immutable
        //ad-hoc lens - specificly creafted for the name property
        const nameLens = {
            get: client => client.name,
            set: (client, newName) => ({ ...client, [`name`]: newName }) //copy object with updated name value
        };

        let client = { name: "Jim", age: 25 };

        console.log(nameLens.get(client)); //getter

        let updatedClient = nameLens.set(client, `Jim doe`); //setter  - update object with value
        console.log(nameLens.get(updatedClient)); //getter on the updatedClient
    }

    {
        //generic lens
        const lens = key => ({
            get: obj => obj[key],
            set: (obj, value) => ({ ...obj, [key]: value })
        });

        var nameLens = lens(`name`);

        let client = { name: "Jim", age: 25 };

        console.log(nameLens.get(client)); //getter

        let updatedClient = nameLens.set(client, `Jim doe`); //setter  - update object with value
        console.log(nameLens.get(updatedClient)); //getter on the updatedClient
    }


}

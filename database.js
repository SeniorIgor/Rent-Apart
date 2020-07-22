
class Filter {
    category;
    minPrice;
    maxPrice;
    city;
    repairs;
    parking;
    elevator;
    rentalPeriod;
    withKids;
    withAnimals;
    emailAddress;
    minArea;
    maxArea;
    undeground;
}

class Database {

    db;
    isFull;
    filter;
    filters;
    count = 0;

    constructor() {

    }

    create() {

        this.db = openDatabase("Rent-Apart", "1.0", "description", 2 * 1024 * 1024);

        if(this.checkConnect()) {
            this.db.transaction(function(tx) {
                tx.executeSql(`CREATE TABLE if not exists filters(id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    category TEXT, repairs TEXT, minPrice INTEGER, maxPrice INTEGER, 
                    city TEXT, undeground TEXT, parking TEXT, elevator TEXT, rentalPeriod TEXT, 
                    withKids TEXT, withAnimals TEXT, minArea INTEGER, maxArea INTEGER, emailAddress TEXT)`, [], null, null);
                });
        }

        // this.filter = new Filter();
        this.filters = [];

        // this.filter.category = "Квартира";
        // this.filter.minPrice = 30000;
        // this.filter.maxPrice = 1000000
        // this.filter.city = "Москва"
        // this.filter.repairs = "Евроремонт";
        // this.filter.parking = "Закрытая";
        // this.filter.elevator = "Есть грузовой";
        // this.filter.rentalPeriod = undefined;
        // this.filter.withKids = false;
        // this.filter.withAnimals = true;
        // this.filter.emailAddress = "isdfidsf@yande.ru";
        // this.filter.minArea = 20;
        // this.filter.maxArea = 200;
        // this.filter.undeground = null;
        
    }
    
    checkConnect() {
        if(!this.db){
            alert("Failed to connect to database.");
            return false;
        }

        return true;
    }

    // insertRow() {
    //     this.insert(this.filter);
    // }

    insert(filter) {
        this.db.transaction(function(tx) {
            tx.executeSql(`INSERT INTO filters(category, repairs, minPrice, maxPrice, city, 
                undeground, parking, elevator, rentalPeriod, withKids, withAnimals, minArea, maxArea, emailAddress) 
                   VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [filter.category, filter.repairs, filter.minPrice, filter.maxPrice, filter.city, 
                                                                    filter.undeground, filter.parking, filter.elevator, filter.rentalPeriod, filter.withKids, 
                                                                       filter.withAnimals, filter.minArea, filter.maxArea, filter.emailAddress], null, null);
        });    
    }

    fillResult(tx, result) {
        for(var i = 0; i < result.rows.length; i++) {
            let filter = new Filter();
            filter.category = result.rows.item(i)['category'];
            filter.minPrice = result.rows.item(i)['minPrice'];
            filter.maxPrice = result.rows.item(i)['maxPrice'];
            filter.city = result.rows.item(i)['city'];
            filter.repairs = result.rows.item(i)['repairs'];
            filter.parking = result.rows.item(i)['parking'];
            filter.elevator = result.rows.item(i)['elevator'];
            filter.rentalPeriod = result.rows.item(i)['rentalPeriod'];
            filter.withKids = (result.rows.item(i)['withKids']) == (undefined || "false") ? false : true;
            filter.withAnimals = (result.rows.item(i)['withAnimals'])  == (undefined || "false") ? false : true;
            filter.emailAddress = result.rows.item(i)['emailAddress'];
            filter.minArea = result.rows.item(i)['minArea'];
            filter.maxArea = result.rows.item(i)['maxArea'];
            filter.undeground = result.rows.item(i)['undeground'];
            this.filters.push(filter);
        }

        this.count = 0;
        this.isFull = true;
    }

    output() {
        this.count++;
        if(!this.isFull && this.count <= 3) {
            setTimeout(() => (
                this.output()
            ), count * 1000)
        } else if(!this.isFull && this.count > 3) {

            alert("Запросите данные еще раз");
        } else {

            return this.filters;
        }
    }

    select() {
        this.isFull = false;
        this.db.transaction((tx) => (tx.executeSql("SELECT * FROM filters", [], this.fillResult.bind(this), null)));
    }    
}

// let database = new Database();

// function create() {
//     database.create();
// }

// function insert() {
//     database.insertRow();
// }

// function select() {
//     database.select();
//     database.output();
// }
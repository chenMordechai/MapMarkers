
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'carDB'
const PAGE_SIZE = 3

export const carService = {
    query,
    getById,
    save,
    remove,
    getEmptyCar,
    getDefaultFilter,
    getLabels,
    getDefaultSort
}


function query(filterBy = {}, sortBy = {}) {

    return storageService.query(STORAGE_KEY)

        .then(cars => {
            //     const carsData ={
            //         allCarsCount : cars.length,
            //         doneCarsCount : cars.filter(t=>t.isDone).length,
            //         carsToDisplay:[],
            //         pageCount:0
            //     }
            let carsToDisplay = cars.slice()
            // if (filterBy.name) {
            //     const regExp = new RegExp(filterBy.name, 'i')
            //     carsToDisplay = carsToDisplay.filter(t => regExp.test(t.name))
            // }

            // if (filterBy.price) {
            //     carsToDisplay = carsToDisplay.filter(t => t.price <= filterBy.price)
            // }

            // if (filterBy.inStock !== 'all') {
            //     carsToDisplay = carsToDisplay.filter(t => t.inStock && filterBy.inStock === 'inStock'
            //         || !t.inStock && filterBy.inStock === 'notInStock')
            // }

            // if (filterBy.labels.length !== 0) {
            //     carsToDisplay = carsToDisplay.filter(t => {
            //         return filterBy.labels.every(l => {
            //             return t.labels.includes(l)
            //         })
            //     })
            // }

            // if (sortBy.type) {
            //     if (sortBy.type === 'name') {
            //         carsToDisplay.sort(((t1, t2) => t1.name.localeCompare(t2.name) * sortBy.desc))
            //     } else {
            //         carsToDisplay.sort(((t1, t2) => (t1[sortBy.type] - t2[sortBy.type]) * sortBy.desc))
            //     }
            // }
            //     const pageCount = Math.ceil(carsToDisplay.length / PAGE_SIZE)
            //     if (filterBy.pageIdx !== undefined) {
            //         let start = filterBy.pageIdx * PAGE_SIZE // 0 , 3 , 6 , 9
            //         carsToDisplay = carsToDisplay.slice(start, start + PAGE_SIZE)
            //     }
            //     carsData.pageCount = pageCount
            //     carsData.carsToDisplay = carsToDisplay
            return carsToDisplay
        })
}
function getById(carId) {
    return storageService.get(STORAGE_KEY, carId)
}
function remove(carId) {
    return storageService.remove(STORAGE_KEY, carId)

}
function save(car) {
    if (car._id) {
        return storageService.put(STORAGE_KEY, car)
            .then((savedCar) => {
                return savedCar
            })
    } else {
        return storageService.post(STORAGE_KEY, car)
            .then((savedCar) => {
                return savedCar
            })
    }
}

function getEmptyCar() {
    return {
        name: '',
        inStock: true,
        price: 0,
        labels: []

    }
}

function getDefaultFilter() {
    return { name: '', inStock: 'all', labels: [], price: '' }
}
function getDefaultSort() {
    return { type: '', desc: 1 }
}

function getLabels() {
    return ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
        'Outdoor', 'Battery Powered']
}

// function getFromApi(){
//     const search = 'a'
//     const api = `https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%2520${search}`

//     return axios.get(api)
//         .then(res => res.data)
//         .then(data => data.items)
        
//     // return fetch(api)
//     //     .then(res => res.json())
//     //     .then(data => data.items)
// }



import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'positionDB'

export const mapService = {
    query,
    getById,
    save,
    remove,
}


function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(positionId) {
    return storageService.get(STORAGE_KEY, positionId)
}

function remove(positionId) {
    return storageService.remove(STORAGE_KEY, positionId)

}

function save(position) {
    if (position._id) {
        return storageService.put(STORAGE_KEY, position)
            .then((savedPosition) => {
                return savedPosition
            })
    } else {
        return storageService.post(STORAGE_KEY, position)
            .then((savedPosition) => {
                return savedPosition
            })
    }
}


// ( async function () {
//         const  positions= [ {lat:31.771959 , lng:35.217018},{lat:31.771958 , lng:35.247018},{lat:31.871959 , lng:35.212018}] 
//         for(var i = 0 ; i < positions.length ; i++){
//             await save(positions[i])
//         }
// }())

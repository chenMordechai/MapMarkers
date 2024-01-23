import { useState } from 'react'
import { CarList } from '../cmps/CarList.jsx'
import { CarFilter } from '../cmps/CarFilter.jsx'
import { carService } from "../services/car.service-local.js"

export function CarIndex() {

    const [car, setCar] = useState([1, 2, 3])
    const [filterBy, setFilterBy] = useState(carService.getDefaultFilter())
    const [sortBy, setSortBy] = useState(carService.getDefaultSort())
    const [carToAdd, setCarToAdd] = useState(carService.getCarToAdd())


    useEffect(() => {
        carService.query(filterBy)
            .then((data => {
                setComments(data)
                return car
            }))

    }, [filterBy])

    function onSubmitForm(ev) {
        ev.preventDefault()
        carService.save(carToAdd)
            .then(newCar => {
                setComments(prevCars => [...prevCars, newCar])
            })
    }

    function onSetChangeCar(ev) {
        let { name, value } = ev.target
        setCommentToAdd(prevCar => ({ ...prevCar, [name]: value }))
    }


    function onSetFilterBy(ev) {
        let { name, value, type, checked } = ev.target
        // console.log('name, value, type, checked:', name, value, type, checked)
        if (type === 'number') value = +value
        else if (type === 'checkbox') value = checked
        setFilterBy(prevFilter => ({ ...prevFilter, [name]: value }))
    }


    return (
        <section className="car-index">
            <h1>Car Index</h1>
            <CarFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
            <CarList car={car} />
        </section>
    )
}
import { CarPreview } from './CarPreview.jsx'

export function CarList({ cars }) {
    return (
        <section className="cars-list">
            <h1>Car List</h1>
            <ul>
                {cars.map((car, i) => <li key={i}>
                    <CarPreview car={car} />
                </li>)}
            </ul>
        </section>
    )
}
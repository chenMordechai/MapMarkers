import { carService } from "../services/car.service-local"
// import { Label } from './Label.jsx'

export function CarFilter({ filterBy, onSetFilterBy }) {

    return (
        <section className="car-filter">
            <h1>Car Filter</h1>
            <form >
                <input
                    onChange={onSetFilterBy}
                    // value={filterBy.name} 
                    type="text"
                    id="name"
                    name="name" />
                <input
                    onChange={onSetFilterBy}
                    // value={filterBy.price} 
                    type="number"
                    id="price"
                    name="price" />
                <select
                    onChange={onSetFilterBy}
                    // value={filterBy.inStock}
                    name="inStock"
                    id="inStock" >
                    <option value="all">All</option>
                    <option value="inStock">In Stock</option>
                    <option value="notInStock">Not In Stock</option>
                </select>
                {/* <ul className="labels">
                        {labelsToShow.map((label, idx) =>
                            <Label key={idx} labels={filterBy.labels} label={label} idx={idx} handleLabelChange={handleLabelChange} />)}
                    </ul> */}

                {/* <Link className="btn dark" to="/car/edit">Add New Car</Link> */}

            </form>


        </section>
    )
}
import React from "react";

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>

        <div className="mt-4 mb-4 d-flex justify-content-end">
            <div className="col-md-10">
                <input
                    id="search"
                    type="text"
                    placeholder="Buscar"
                    value={filterText}
                    onChange={onFilter}
                    className="form-control"
                />
            </div>
            <div className="col-md-2">
                <button className="btn btn-danger" onClick={onClear}>X</button>
            </div>
        </div>

    </>
);

export default FilterComponent;

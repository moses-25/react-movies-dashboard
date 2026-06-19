export default function SearchBar(
    {
        searchTerm,
        setSearchTerm,
        handleSearch
    }
) {
    return (
        <div className="row nb-5 ">
            <div className="col-md-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search...."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                
            </div>

            <div className="col-md-2">
                <button
                    className="btn btn-primary w-180"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
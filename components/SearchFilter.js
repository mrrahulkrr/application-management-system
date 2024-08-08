const SearchFilter = () => {
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by candidate name or job title"
          className="border p-2 rounded w-full mb-2"
        />
        <select className="border p-2 rounded w-full mb-2">
          <option value="">Filter by status</option>
          <option value="new">New</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
        </select>
        <input
          type="date"
          className="border p-2 rounded w-full mb-2"
        />
      </div>
    );
  };
  
  export default SearchFilter;
  
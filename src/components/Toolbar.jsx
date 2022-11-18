const Toolbar = ({ filters, currentFilter, onSelectFilter }) => {

  return (
    <div className="toolbar">
      {filters.map((filter) => {
        return <button 
                  className={`filter ${filter === currentFilter ? 'active' : ''}`} 
                  key={filter.toString()}
                  onClick={() => onSelectFilter(filter)}>{filter}</button>
      })}
    </div>
  )
}


export default Toolbar;
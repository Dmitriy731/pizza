function Categories ({categories, onClickItem, activeCategories}) {

  return (
    <div className="categories">
      <ul>
        {
          categories &&
            categories.map((item, i) => {
              return (
                <li className={activeCategories === i ? 'active' : null} onClick={() => onClickItem(i)} key={`${item}_${i}`}>
                  {item}
                </li>
              )
            })
        }
      </ul>
    </div>
  )
};

export default Categories
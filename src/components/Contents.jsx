import { useState } from 'react';
import {PizzaBlock, Categories, Sort} from './';

function Contents({categories, sort, pizzas}) {

  const [activeCategories, setActiveCategories] = useState(0);

    return(
      <div className="container">
        <div className="content__top">
          <Categories activeCategories={activeCategories} onClickItem={(item) => setActiveCategories(item)} categories={categories}/>
          <Sort sort={sort}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            pizzas &&
              pizzas.map((item, i) => {
                return <PizzaBlock key={item.id} pizzas={item} />
              })
          }
        </div>
      </div>
    )
}

export default Contents;
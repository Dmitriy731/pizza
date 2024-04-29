import classNames from "classnames";
import { useState } from "react";

function PizzaBlock (props) {

    const {imageUrl, name, types, sizes, price} = props.pizzas

    const typeNames = ['тонкое','традиционное'];
    const sizesNames = [26, 30, 40];
    const [toggleSize, setToggleSize] = useState(sizes[0]);
    const [toggleTypes, setToggleTypes] = useState(types[0]);

    console.log(types[0])

    return(
        <div className="pizza-block">
            {
                imageUrl &&
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />
            }
            {
                name &&
                    <h4 className="pizza-block__title">{name}</h4>
            }
            <div className="pizza-block__selector">
                {
                    typeNames &&
                        <ul>
                            {
                                typeNames.map((item, i) => {
                                    console.log(i, types[i])
                                    return (
                                        <li className={classNames({
                                            active : toggleTypes === i,
                                            disabled : !types.includes(i)
                                        })} key={`${item}_${i}`} onClick={() => setToggleTypes(i)}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                }
                {
                    sizesNames &&
                        <ul>
                            {
                                sizesNames.map((item, i) => {
                                    return (
                                        <li key={`${item}_${i}`} className={classNames({
                                            active: toggleSize === i
                                        })} onClick={() => setToggleSize(i)}>
                                            {item} см.
                                        </li>
                                    )
                                })
                            }
                        </ul>
                }
            </div>
            {
                price &&
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">от {price} ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
            }
            </div>
    )
}

export default PizzaBlock;
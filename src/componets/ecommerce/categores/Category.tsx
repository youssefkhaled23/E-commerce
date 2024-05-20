import { Link } from "react-router-dom"
import style from "./Category.module.css"
const {category , categoryImg ,categoryTitle}  = style 

interface IProps {
  title :string ,
  img : string , 
  prefix : string
}

const Category = ({title , img , prefix} : IProps) => {

  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
      <div className={categoryImg}>
        <img src={img} alt={title} />
      </div>
      <div>
        <h4 className={categoryTitle}>{title}</h4>
      </div>
      </Link>
    </div>
  )
}

export default Category

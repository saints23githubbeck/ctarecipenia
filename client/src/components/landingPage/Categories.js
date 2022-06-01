import { iconData } from "../admin/data"

const Categories = () => {

  return (
    <div className='categories'>
      <h3>Categories</h3>
      <div className='categories_wrapper'>
        {
          iconData.map((category, index)=> (
            <div key={index} className="category d-flex">
              <p className="img">{category.icon}</p>
              <span>{category.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories
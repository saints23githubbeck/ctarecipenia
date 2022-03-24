
import author1 from "../../assets/images/author1.png"
import author2 from "../../assets/images/author2.png"
import author3 from "../../assets/images/author3.png"


const PopularAuthor = () => {

  const popularAuthor = [
    {
      authorImage : author1,
      name: "Mike John"
    },
    {
      authorImage : author2,
      name: "Emmanel Emma"
    },
    {
      authorImage : author3,
      name: "Sarah John"
    }
  ]
  return (
    <div className='wrapper popularAuthor'>
      <h2>Popular
          <span className='text_primary'>Authors</span>
      </h2>
      <div className='d-flex justify-content-between'>
        {
            popularAuthor.map((author, index) => (
              <div key={index} className='author'>
                <div>
                  <img src={author.authorImage} alt="authorImage" />
                </div>
                <p>{author.name}</p>
                <div className='rating' style={{ textAlign: "right" }}>
                  <span className='rated'>&#9733;</span>
                  <span className='rated'>&#9733;</span>
                  <span className='rated'>&#9733;</span>
                  <span >&#9733;</span>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default PopularAuthor
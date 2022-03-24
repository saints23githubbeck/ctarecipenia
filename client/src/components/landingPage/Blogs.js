
const Blogs = () => {

  const blogs = [
    { title: "Make your own bread" },
    { title: "How to decorate cookies" },
    { title: "How to decorate cookies" },
    { title: "How to make sushi" },
    { title: "How to decorate cookies" },
    { title: "How to decorate cookies" },
    { title: "Make a party" },
    { title: "How to be healthy" },
    { title: "How to make cup cake" },
  ]
  return (
    <div className='blogs'>
      <h3>Blogs</h3>
      <div>
        {
          blogs.map((blog, index) => (
            <p>{blog.title}</p>
          ))
        }
      </div>
    </div>
  )
}

export default Blogs
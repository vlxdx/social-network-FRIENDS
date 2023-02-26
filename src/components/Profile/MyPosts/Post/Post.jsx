import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://images.unsplash.com/photo-1522098635833-216c03d81fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
      { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;
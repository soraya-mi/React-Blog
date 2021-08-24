import React from 'react'
import axios from 'axios'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import Post from '../../components/Post/Post'
import './Blog.css'
class Blog extends React.Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const posts = response.data.slice(0, 5)
        const updatedPosts = posts.map((item) => {
          return {
            ...item,
            author: 'Soraya',
          }
        })
        this.setState({ posts: updatedPosts })
      })
      .catch((err) => {
        this.setState({ error: true })
      })
  }
  selectPostHandler = (id) => {
    this.setState({ selectedPostId: id })
  }
  render() {
    let posts = <p style={{ textAlign: 'center' }}>Fetching data failed!</p>
    if (!this.state.error) {
      posts = this.state.posts.map((item) => {
        return (
          <Post
            key={item.id}
            title={item.title}
            author={item.author}
            click={() => this.selectPostHandler(item.id)}/>
        )
      })
    }
    return (
      <div>
        <section>
          <NewPost />
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section className="posts">{posts}</section>
      </div>
    )
  }
}
export default Blog
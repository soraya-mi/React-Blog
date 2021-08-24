import React from 'react'
import axios from 'axios'
import './NewPost.css'
class NewPost extends React.Component {
  state = {
    title: '',
    content: '',
    author: 'Soraya',
  }
  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    }
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log(response)
      })
  }
  render() {
    return (
      <div className="new-post">
        <h2>پست جدید اضافه کنید</h2>
        <span>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })} />
          <label htmlFor="title">عنوان</label>
        </span>
        <label>متن</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })} />
        <span>

          <select
            id="author"
            value={this.state.author}
            onChange={(event) => this.setState({ author: event.target.value })}>
            <option value="Soraya">Soraya</option>
          </select>
          <label htmlFor="author">نویسنده</label>
        </span>
        <button onClick={this.postDataHandler}>  ثبت  </button>
      </div>
    )
  }
}
export default NewPost
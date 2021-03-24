import "./AddNewPostForm.css";
import closeIcon from "../../../../assets/images/close.svg";
import React from "react";

export class AddNewPostForm extends React.Component {
  state = {
    postTitle: "",
    postDesc: "",
  };

  handlePostTitleChange = (e) => {
    this.setState({
      postTitle: e.target.value,
    });
  };

  handlePostDescChange = (e) => {
    this.setState({
      postDesc: e.target.value,
    });
  };

  handlePostAdd = (e) => {
    const obj = {
      id: this.props.blogArr.length + 1,
      title: this.state.postTitle,
      description: this.state.postDesc,
      likeCount: 0,
    };

    const postTitleRegExp = /^[а-яa-z\d\s!?]+$/gi;
    const checkPostTitle = postTitleRegExp.test(this.state.postTitle);
    const checkPostDesc = this.state.postDesc.length !== 0;

    if (checkPostTitle && checkPostDesc) {
      this.props.createBlogPost(obj);
    } else {
      e.preventDefault();
      alert("Введите данные верно");
    }
  };

  render() {
    return (
      <form action="" className="addForm">
        <img src={closeIcon} alt="Close" onClick={this.props.handleFormClose} />
        <h2>Добавление нового поста</h2>
        <div>
          <input
            onChange={this.handlePostTitleChange}
            type="text"
            name="title"
            placeholder="Заголовок"
          />
        </div>
        <div>
          <textarea
            onChange={this.handlePostDescChange}
            type="text"
            name="description"
            placeholder="Введите описание"
          />
        </div>
        <div>
          <button
            onClick={this.handlePostAdd}
            className="blackBtn"
            type="button"
          >
            Добавить
          </button>
        </div>
      </form>
    );
  }
}

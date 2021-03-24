import React from "react";
import "./BlogPage.css";

import { BlogCard } from "./components/BlogCard/BlogCard";
import { AddNewPostForm } from "./components/AddNewPostForm/AddNewPostForm";
import { blogPosts } from "../../shared/projectData";

export class BlogPage extends React.Component {
  state = {
    blogArr: JSON.parse(localStorage.getItem("blogPosts")) || [...blogPosts],
    isFormVisible: false,
  };

  handleLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    updatedBlogList[pos].likeCount++;

    this.setState({
      blogArr: updatedBlogList,
    });

    localStorage.setItem("blogPosts", JSON.stringify(updatedBlogList));
  };

  handleBlogCardsShow = () => {
    this.setState((state, props) => ({
      blogCardsVisible: !state.blogCardsVisible,
    }));
  };

  handleFormShow = () => {
    this.setState({
      isFormVisible: true,
    });
  };

  handleFormClose = () => {
    this.setState({
      isFormVisible: false,
    });
  };

  handleFormCloseOnEscape = (e) => {
    if (this.state.isFormVisible && e.key === "Escape") {
      this.handleFormClose();
    }
  };

  createBlogPost = (obj) => {
    const updatedBlogList = this.state.blogArr;
    updatedBlogList.push(obj);

    this.setState({
      blogArr: updatedBlogList,
    });

    localStorage.setItem("blogPosts", JSON.stringify(updatedBlogList));
    this.handleFormClose();
  };

  componentDidMount() {
    window.addEventListener("keyup", this.handleFormCloseOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleFormCloseOnEscape);
  }

  render() {
    const blogCards = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          description={item.description}
          likeCount={item.likeCount}
          onlikeBtnClick={() => this.handleLikeBtnClick(pos)}
        />
      );
    });

    return (
      <>
        <h1>Simple Blog</h1>

        <div className="addPostBlock">
          <button onClick={this.handleFormShow} className="blackBtn">
            Добавить новый пост
          </button>
        </div>

        <div className="posts">{blogCards}</div>

        {this.state.isFormVisible ? (
          <>
            <AddNewPostForm
              handleFormClose={this.handleFormClose}
              createBlogPost={this.createBlogPost}
              blogArr={this.state.blogArr}
            />
            <div onClick={this.handleFormClose} className="overlay"></div>
          </>
        ) : null}
      </>
    );
  }
}

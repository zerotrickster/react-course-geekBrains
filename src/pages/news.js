import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { Post } from "../components/Post";
import { fetchPosts } from "../redux/posts/actions";

export const NewsPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Header />
      {state.loading && <Loader />}
      <div className="container">
        {state.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

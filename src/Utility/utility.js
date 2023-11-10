import Swal from "sweetalert2";

const getStoredPost = () => {
  const getPost = localStorage.getItem("posts");
  if (getPost) {
    return JSON.parse(getPost);
  }
  return [];
};

const savePost = (id) => {
  const storePost = getStoredPost();
  const exist = storePost.find((post) => post === id);
  if (!exist) {
    storePost.push(id);
    localStorage.setItem("posts", JSON.stringify(storePost));
    Swal.fire({
      icon: "success",
      title: "Thank You",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Already Donated",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export { getStoredPost, savePost };

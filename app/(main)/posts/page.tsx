import BackButton from "@/components/BackButton"
import PostsPagination from "@/components/Post/PostsPagination"
import PostsTable from "@/components/Post/PostsTable"

const PostsPage = () => {
  return (
    <section>
        <BackButton link="/" text="Go Back"/>
        <PostsTable title="posts"/>
        <PostsPagination />
    </section>
  )
}

export default PostsPage
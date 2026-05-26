<template>
  <Layout
    id="list-of-posts"
    title="Posts - Olusegun's Blog"
    description="Articles on data engineering, cloud platforms, and tech for social good by Olusegun Omotunde"
  >
    <PageHeader title="shelf" noDot />
    <!-- List posts -->
    <ol class="posts" aria-label="Posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </ol>
  </Layout>
</template>

<page-query>
{
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        date
        description
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard'

export default {
  components: { PostCard },
  metaInfo: {
    title: 'Posts',
  },
}
</script>

<template>
  <Layout>
    <div class="my-40 ml-40">
      <h2 class="text-4xl font-semibold text-red-900 uppercase">Grade 10</h2>
      <ul v-for="edge in $page.lifescience.edges" :key="edge.node.id">
        <li>
          <g-link :to="edge.node.path"> {{ edge.node.title }}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  lifescience: allContentfulLifeScience {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script></script>

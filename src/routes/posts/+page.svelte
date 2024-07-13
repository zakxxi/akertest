<script>
	export let data;
	const posts = data.posts;
</script>

<div class="blog_cont">
	<h2>Posts</h2>
	<div class="blog_grid">
		{#each posts as post}
			<a href={`/posts/${post.id}`} class="blog_card">
				<h3>{post.title}</h3>
				<p>
					{post.body}
				</p>
			</a>
		{/each}
	</div>
</div>

<style>
</style>

import app '../../app'
const { Form, Input } = app.forms

app.page(({ posts, subscribe }) => {
  <div>
    <main>
      <h1>Welcome</h1>

      <div>
        <h2>Blog posts</h2>
        {posts.map(({ title }) => <div>{title}</div>)}
      </div>
    </main>

    <Form action={subscribe}>
      <h2>Subscribe to blog</h2>

      <div>
        <label htmlFor='email'>Email</label>
        <Input type='email' name='email' id='email' />
      </div>

      <div>
        <button>Subscribe</button>
      </div>
    </Form>
  </div>
})

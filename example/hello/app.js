import Upcoming, { route } from 'upcoming'
import blog from './lib/blog'

export default new Upcoming(
  route.page('/', 'blog#index', [async () => await blog.FetchPosts({ limit: 10 })]),
  route.POST('/newsletter', 'blog#subscribe', [async (subscription) => await blog.Subscribe({ subscription })])
)

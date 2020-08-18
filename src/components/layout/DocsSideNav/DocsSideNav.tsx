/** @jsx jsx */
import { jsx } from 'theme-ui'
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links'

interface NavItem {
  title: string
  to: string
  variant: string
}

const navItems: NavItem[] = [
  {
    title: 'Introduction',
    to: '/docs#introduction',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'Info',
    to: '/docs#info',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Pagination',
    to: '/docs#pagination',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Users',
    to: '/docs#users',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'Schema',
    to: '/docs#users-schema',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Get all users',
    to: '/docs#get-all-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Get a single user',
    to: '/docs#get-single-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Create a user',
    to: '/docs#create-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Delete a user',
    to: '/docs#delete-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Update a user',
    to: '/docs#update-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Replace a user',
    to: '/docs#replace-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Filter users',
    to: '/docs#filter-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Todos',
    to: '/docs#todos',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'Schema',
    to: '/docs#todos-schema',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Get all todos',
    to: '/docs#get-all-todos',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Get a single todo',
    to: '/docs#get-single-todo',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Create a todo',
    to: '/docs#create-todo',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Delete a todo',
    to: '/docs#delete-todo',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Update a todo',
    to: '/docs#update-todo',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Replace a todo',
    to: '/docs#replace-todo',
    variant: 'layout.docsSideNavBody',
  },

  {
    title: 'Filter todos',
    to: '/docs#filter-todos',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Posts',
    to: '/docs#posts',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'Schema',
    to: '/docs#posts-schema',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Get all posts',
    to: '/docs#get-all-posts',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Get a single post',
    to: '/docs#get-single-post',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Create a post',
    to: '/docs#create-post',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Delete a post',
    to: '/docs#delete-post',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Update a post',
    to: '/docs#update-post',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Replace a post',
    to: '/docs#replace-post',
    variant: 'layout.docsSideNavBody',
  },

  {
    title: 'Filter posts',
    to: '/docs#filter-posts',
    variant: 'layout.docsSideNavBody',
  },
]

export default function DocsSideNav() {
  return (
    <aside sx={{ variant: 'layout.docsSideNav' }}>
      <div sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>
        {navItems.map((item: NavItem, index: number) => (
          <Link key={index} to={item.to} sx={{ variant: item.variant }}>
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  )
}

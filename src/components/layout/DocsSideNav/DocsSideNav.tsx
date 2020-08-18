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
    title: 'info',
    to: '/docs#info',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'pagination',
    to: '/docs#pagination',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Users',
    to: '/docs#users',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'get all users',
    to: '/docs#get-all-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'get a single user',
    to: '/docs#get-single-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'create a user',
    to: '/docs#create-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'delete a user',
    to: '/docs#delete-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'update a user',
    to: '/docs#update-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'replace a user',
    to: '/docs#replace-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'filter users',
    to: '/docs#filter-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Todos',
    to: '/docs#todos',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'get all todos',
    to: '/docs#get-all-todos',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'get a single todo',
    to: '/docs#get-single-todo',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'update a todo',
    to: '/docs#update-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'replace a todo',
    to: '/docs#replace-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'create a todo',
    to: '/docs#create-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'delete a todo',
    to: '/docs#delete-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'filter todos',
    to: '/docs#filter-todos',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Posts',
    to: '/docs#posts',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'get all posts',
    to: '/docs#get-all-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'get a single post',
    to: '/docs#get-single-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'update a user',
    to: '/docs#update-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'replace a post',
    to: '/docs#replace-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'create a post',
    to: '/docs#create-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'delete a post',
    to: '/docs#delete-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'filter posts',
    to: '/docs#filter-users',
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

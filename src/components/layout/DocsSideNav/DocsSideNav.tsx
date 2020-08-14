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
    to: '/#introduction',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'info',
    to: '/#info',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'pagination',
    to: '/#pagination',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Users',
    to: '/#users',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'get all users',
    to: '/#get-all-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'get a single user',
    to: '/#get-single-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'filter users',
    to: '/#filter-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Todos',
    to: '/#todos',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'get all todos',
    to: '/#get-all-todos',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'get a single todo',
    to: '/#get-single-todo',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'filter todos',
    to: '/#filter-todos',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'Posts',
    to: '/#posts',
    variant: 'layout.docsSideNavHeading',
  },
  {
    title: 'get all posts',
    to: '/#get-all-users',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'get a single post',
    to: '/#get-single-user',
    variant: 'layout.docsSideNavBody',
  },
  {
    title: 'filter posts',
    to: '/#filter-users',
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

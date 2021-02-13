export interface ButtonProps {
  label: string
  path: string
  onClick?: () => void
}
export interface ButtonDropDownMenuProps {
  label: string
  onClickMenuOpen?: () => void
  isMenuOpen?: boolean
}
export interface TitleProps {
  label: string
}
export interface SubtitleProps {
  label: string
  boldStyle?: boolean
  color?: string
}
export interface BadgeProps {
  label: string
  colour: string
}
export interface IPost {
  id: number
  title: string
  postImg: string
  textContent: string
  authorImg: string
  authorName: string
  date: string
  badgeColor: string
  category: string
}
export interface CardListProps {
  posts: IPost[]
}

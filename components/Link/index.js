import LinkNext from "next/link"

export default function Link({ children, to }) {
  return (
    <LinkNext href={to}>
      <a>{children}</a>
    </LinkNext>
  )
}

import React, { FC } from 'react'
import { connect } from "react-redux";
import { Panel, Badge } from './styled'
import { RootState } from '../../store';

type HeaderProps = {
  count: number
}

const Header: FC<HeaderProps> = ({ count }) => (
  <Panel>
    Following <Badge>{count}</Badge> people
  </Panel>
)
const mapState = (state: RootState) => ({
  count: state.users.filter(user=>user.isFollowing).length
})

export default connect(mapState)(Header)

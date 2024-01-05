import type { Activity } from '../types'
import styled from 'styled-components'

const List = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px 20px;
    padding-left: 0;
`

const Item = styled.li`
    padding:0.5em;
    border-radius: 8px;
    border: 2px solid #61dafb;
    list-style: none;

    &:hover {
        background-color:  rgba(97, 218, 251, 0.2);
    }
`

export type ActivityListProps = {
    activities: Activity[]
}

export function ActivityList({ activities }: ActivityListProps) {
    return (<List>
        {activities.map(act => <Item>{act.name}</Item>)}
    </List>)
}
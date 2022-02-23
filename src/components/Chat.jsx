import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Noprofile from '../assets/img/no--profile.png'
import Torahack from '../assets/img/torahack.png'


const Chat = (props) => {
    const isQuestion = ( props.type === 'question' )
    const clasees = isQuestion? 'p-chat__row' : 'p-chat__reverse'

    return (
        <ListItem className = { clasees }>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="Icon" src={ Torahack } />
                ) : (
                    <Avatar alt="Icon" src={ Noprofile } />
                )}
            </ListItemAvatar>
            <div className = "p-chat__bubble">{ props.text }</div>
        </ListItem>
    )
}

export default Chat 
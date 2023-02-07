import * as S from './style'

function Button(props) {
    return (
        <S.Button
           {...props}
            onClick={e => props.handleClick(e)} >
            {props.text}
        </S.Button>
    )
}
export default Button

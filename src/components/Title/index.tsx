import { FC } from 'react'
interface TitleProps{
    value: string;
}
const Title: FC<TitleProps> = (props : TitleProps) => <h1>{props.value}</h1>
export default Title